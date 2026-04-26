import { Router } from "express";
import { Prisma } from "@prisma/client";
import prisma from "../../db.js";
import { parseUuid } from "../../lib/validation.js";
import { requireWorkspaceAdmin } from "../../modules/families/access.js";
import { writeFamilyAuditLog } from "../../modules/families/audit.js";
import { createJoinRequestSchema, reviewJoinRequestSchema } from "../../modules/families/schemas.js";
import { asJson, getPersonOr404, normalizeFamilyCode, slugify } from "../../modules/families/utils.js";
import { protectNullableText, revealNullableText } from "../../security/crypto.js";

const router = Router();

type AnyRecord = Record<string, unknown>;

const asRecord = (value: unknown): AnyRecord =>
  value && typeof value === "object" && !Array.isArray(value) ? (value as AnyRecord) : {};

const getPersonalSection = (value: unknown): AnyRecord => asRecord(asRecord(value).personal);

const readPersonContactMobile = (metadata: unknown): string | null => {
  const personal = getPersonalSection(metadata);
  const mobile = typeof personal.mobileNumber === "string" ? personal.mobileNumber.trim() : "";
  return mobile || null;
};

const relationDedupKey = (relationship: {
  relationshipType: string;
  person1Id: string;
  person2Id: string;
}) => {
  if (relationship.relationshipType === "spouse_of") {
    const [a, b] = [relationship.person1Id, relationship.person2Id].sort();
    return `${relationship.relationshipType}:${a}:${b}`;
  }

  return `${relationship.relationshipType}:${relationship.person1Id}:${relationship.person2Id}`;
};

const ensureRequesterPersonProfile = async (
  tx: Prisma.TransactionClient,
  familyId: string,
  requestingUserId: string,
  requestingUser: { fullName: string; mobileNumber: string },
  joinRequestId: string,
) => {
  const existingLink = await tx.userPersonLink.findUnique({
    where: {
      familyId_userId: {
        familyId,
        userId: requestingUserId,
      },
    },
    include: {
      person: true,
    },
  });

  if (existingLink?.person) {
    return existingLink.person;
  }

  const requesterPerson = await tx.person.create({
    data: {
      familyId,
      fullName: protectNullableText(requestingUser.fullName) ?? requestingUser.fullName,
      metadata: asJson({
        personal: {
          mobileNumber: requestingUser.mobileNumber,
        },
        joinRequest: {
          autoCreatedOnApproval: true,
          sourceJoinRequestId: joinRequestId,
        },
      }),
    },
  });

  await tx.userPersonLink.upsert({
    where: {
      familyId_userId: {
        familyId,
        userId: requestingUserId,
      },
    },
    update: {
      personId: requesterPerson.id,
    },
    create: {
      familyId,
      userId: requestingUserId,
      personId: requesterPerson.id,
    },
  });

  return requesterPerson;
};

const ensureRelationship = async (
  tx: Prisma.TransactionClient,
  familyId: string,
  person1Id: string,
  person2Id: string,
  relationshipType: "parent_of" | "spouse_of",
) => {
  const existing = await tx.relationship.findFirst({
    where: {
      familyId,
      person1Id,
      person2Id,
      relationshipType,
    },
  });

  if (existing) {
    return existing;
  }

  return tx.relationship.create({
    data: {
      familyId,
      person1Id,
      person2Id,
      relationshipType,
      status: "active",
      metadata: asJson({ source: "join_request_review" }),
    },
  });
};

router.post("/join-requests", async (req, res) => {
  if (req.authContext?.kind !== "session" || !req.authContext.userId) {
    res.status(401).json({ error: "login required" });
    return;
  }

  const parsed = createJoinRequestSchema.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: "invalid request body" });
    return;
  }

  const identifier = parsed.data.workspaceIdentifier.trim();
  const normalizedFamilyCode = normalizeFamilyCode(identifier);
  const family =
    (parseUuid(identifier)
      ? await prisma.family.findUnique({ where: { id: identifier } })
      : null) ??
    (normalizedFamilyCode.length === 7
      ? await prisma.family.findUnique({ where: { familyCode: normalizedFamilyCode } })
      : null) ??
    (await prisma.family.findUnique({ where: { slug: slugify(identifier) || identifier } }));

  if (!family) {
    res.status(404).json({ error: "target workspace not found" });
    return;
  }

  const existingMembership = await prisma.familyMembership.findFirst({
    where: {
      familyId: family.id,
      userId: req.authContext.userId,
      status: "active",
    },
  });

  if (existingMembership) {
    res.status(409).json({ error: "you already have access to this workspace" });
    return;
  }

  const existingRequest = await prisma.workspaceJoinRequest.findFirst({
    where: {
      familyId: family.id,
      requestingUserId: req.authContext.userId,
      status: "pending",
    },
  });

  if (existingRequest) {
    res.status(409).json({ error: "a pending join request already exists for this workspace" });
    return;
  }

  const joinRequest = await prisma.workspaceJoinRequest.create({
    data: {
      familyId: family.id,
      requestingUserId: req.authContext.userId,
      requestedRole: parsed.data.requestedRole,
      message: parsed.data.message?.trim() || null,
    },
    include: {
      family: true,
    },
  });

  await writeFamilyAuditLog(req, {
    familyId: family.id,
    action: "join_request.created",
    entityType: "workspace_join_request",
    entityId: joinRequest.id,
    metadata: {
      requestedRole: joinRequest.requestedRole,
    },
  });

  res.status(201).json({
    data: {
      id: joinRequest.id,
      familyId: joinRequest.familyId,
      familyName: joinRequest.family.name,
      familySlug: joinRequest.family.slug,
      familyCode: joinRequest.family.familyCode,
      requestedRole: joinRequest.requestedRole,
      status: joinRequest.status,
      createdAt: joinRequest.createdAt,
    },
  });
});

router.get("/families/:id/join-requests", async (req, res) => {
  const familyId = parseUuid(req.params.id);
  if (!familyId) {
    res.status(400).json({ error: "family id must be a valid UUID" });
    return;
  }

  const access = await requireWorkspaceAdmin(familyId, req);
  if (access === "unauthorized") {
    res.status(401).json({ error: "unauthorized" });
    return;
  }

  if (access === "forbidden") {
    res.status(403).json({ error: "admin role required" });
    return;
  }

  const rows = await prisma.workspaceJoinRequest.findMany({
    where: { familyId },
    include: {
      requestingUser: true,
      reviewedByUser: true,
      targetPerson: true,
    },
    orderBy: { createdAt: "desc" },
  });
  const reviewAuditLogs = await prisma.familyAuditLog.findMany({
    where: {
      familyId,
      action: "join_request.reviewed",
      entityId: { in: rows.map((row) => row.id) },
    },
    orderBy: { createdAt: "desc" },
  });
  const mergeAuditLogByJoinRequestId = new Map<string, string>();
  for (const row of reviewAuditLogs) {
    if (mergeAuditLogByJoinRequestId.has(row.entityId)) {
      continue;
    }
    const mergeAuditLogId = asRecord(row.metadata).mergeAuditLogId;
    if (typeof mergeAuditLogId === "string" && mergeAuditLogId) {
      mergeAuditLogByJoinRequestId.set(row.entityId, mergeAuditLogId);
    }
  }

  res.json({
    data: rows.map((row) => ({
      id: row.id,
      requestedRole: row.requestedRole,
      status: row.status,
      message: row.message,
      mergeAuditLogId: mergeAuditLogByJoinRequestId.get(row.id) ?? null,
      createdAt: row.createdAt,
      reviewedAt: row.reviewedAt,
      requestingUser: {
        id: row.requestingUser.id,
        fullName: row.requestingUser.fullName,
        mobileNumber: row.requestingUser.mobileNumber,
      },
      reviewedByUser: row.reviewedByUser
        ? {
            id: row.reviewedByUser.id,
            fullName: row.reviewedByUser.fullName,
          }
        : null,
      targetPerson: row.targetPerson
        ? {
            id: row.targetPerson.id,
            fullName: revealNullableText(row.targetPerson.fullName) ?? "",
          }
        : null,
    })),
  });
});

router.post("/families/:id/join-requests/:requestId/review", async (req, res) => {
  const familyId = parseUuid(req.params.id);
  const requestId = parseUuid(req.params.requestId);
  if (!familyId || !requestId) {
    res.status(400).json({ error: "family id and request id must be valid UUIDs" });
    return;
  }

  const access = await requireWorkspaceAdmin(familyId, req);
  if (access === "unauthorized") {
    res.status(401).json({ error: "unauthorized" });
    return;
  }

  if (access === "forbidden") {
    res.status(403).json({ error: "admin role required" });
    return;
  }

  const parsed = reviewJoinRequestSchema.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: "invalid request body" });
    return;
  }

  const joinRequest = await prisma.workspaceJoinRequest.findFirst({
    where: {
      id: requestId,
      familyId,
    },
    include: {
      requestingUser: true,
    },
  });

  if (!joinRequest) {
    res.status(404).json({ error: "join request not found" });
    return;
  }

  if (joinRequest.status !== "pending") {
    res.status(409).json({ error: "join request has already been reviewed" });
    return;
  }

  if (parsed.data.decision === "approved" && !parsed.data.personId) {
    res.status(400).json({ error: "person mapping is required when approving a join request" });
    return;
  }

  if (parsed.data.decision === "approved" && !parsed.data.mappingMode) {
    res.status(400).json({ error: "mapping mode is required when approving a join request" });
    return;
  }

  if (parsed.data.mappingMode === "relation" && !parsed.data.relationType) {
    res.status(400).json({ error: "relation type is required for relation mapping" });
    return;
  }

  let selectedMappedPerson: Awaited<ReturnType<typeof prisma.person.findFirst>> | null = null;
  if (parsed.data.personId) {
    selectedMappedPerson = await getPersonOr404(familyId, parsed.data.personId, res);
    if (!selectedMappedPerson) {
      return;
    }
  }

  let mergeAuditLogId: string | null = null;
  const reviewed = await prisma.$transaction(async (tx) => {
    if (parsed.data.decision === "approved") {
      const mappedPerson = selectedMappedPerson!;

      await tx.familyMembership.upsert({
        where: {
          familyId_userId: {
            familyId,
            userId: joinRequest.requestingUserId,
          },
        },
        update: {
          role: parsed.data.role ?? joinRequest.requestedRole,
          status: "active",
        },
        create: {
          familyId,
          userId: joinRequest.requestingUserId,
          role: parsed.data.role ?? joinRequest.requestedRole,
          status: "active",
        },
      });

      const requesterPerson = await ensureRequesterPersonProfile(
        tx,
        familyId,
        joinRequest.requestingUserId,
        {
          fullName: joinRequest.requestingUser.fullName,
          mobileNumber: joinRequest.requestingUser.mobileNumber,
        },
        joinRequest.id,
      );

      if (parsed.data.mappingMode === "same_person") {
        if (requesterPerson.id !== mappedPerson.id) {
          const sourceRelationships = await tx.relationship.findMany({
            where: {
              familyId,
              OR: [{ person1Id: requesterPerson.id }, { person2Id: requesterPerson.id }],
            },
            orderBy: { createdAt: "asc" },
          });

          const movedRelationshipMappings = sourceRelationships.map((relationship) => ({
            id: relationship.id,
            sourceField: relationship.person1Id === requesterPerson.id ? "person1Id" : "person2Id",
          }));

          if (sourceRelationships.some((relationship) => relationship.person1Id === requesterPerson.id)) {
            await tx.relationship.updateMany({
              where: { familyId, person1Id: requesterPerson.id },
              data: { person1Id: mappedPerson.id },
            });
          }

          if (sourceRelationships.some((relationship) => relationship.person2Id === requesterPerson.id)) {
            await tx.relationship.updateMany({
              where: { familyId, person2Id: requesterPerson.id },
              data: { person2Id: mappedPerson.id },
            });
          }

          const affectedRelationships = await tx.relationship.findMany({
            where: {
              familyId,
              OR: [{ person1Id: mappedPerson.id }, { person2Id: mappedPerson.id }],
            },
            orderBy: { createdAt: "asc" },
          });

          const seen = new Set<string>();
          const duplicateRelationships = affectedRelationships.filter((relationship) => {
            const key = relationDedupKey(relationship);
            if (seen.has(key)) {
              return true;
            }
            seen.add(key);
            return false;
          });

          if (duplicateRelationships.length) {
            await tx.relationship.deleteMany({
              where: { id: { in: duplicateRelationships.map((item) => item.id) } },
            });
          }

          const targetMetadataBefore = asRecord(mappedPerson.metadata);
          const targetPersonalBefore = getPersonalSection(mappedPerson.metadata);
          const requesterMobile = joinRequest.requestingUser.mobileNumber;
          const approvedMobile = readPersonContactMobile(mappedPerson.metadata);
          const primaryContactSource = parsed.data.primaryContactSource === "approved" && approvedMobile ? "approved" : "requester";
          const primaryContactNumber = primaryContactSource === "approved" && approvedMobile ? approvedMobile : requesterMobile;
          const secondaryContactNumber =
            primaryContactNumber === requesterMobile ? approvedMobile : requesterMobile;

          const targetMetadataAfter = {
            ...targetMetadataBefore,
            personal: {
              ...targetPersonalBefore,
              mobileNumber: primaryContactNumber,
              secondaryMobileNumber: secondaryContactNumber ?? null,
            },
            merge: {
              ...(asRecord(targetMetadataBefore.merge)),
              mergedFromPersonId: requesterPerson.id,
              mergedByJoinRequestId: joinRequest.id,
              mergedAt: new Date().toISOString(),
            },
          };

          await tx.person.update({
            where: { id: mappedPerson.id },
            data: {
              metadata: asJson(targetMetadataAfter),
            },
          });

          await tx.userPersonLink.upsert({
            where: {
              familyId_userId: {
                familyId,
                userId: joinRequest.requestingUserId,
              },
            },
            update: {
              personId: mappedPerson.id,
            },
            create: {
              familyId,
              userId: joinRequest.requestingUserId,
              personId: mappedPerson.id,
            },
          });

          await tx.person.delete({
            where: { id: requesterPerson.id },
          });

          const mergeAudit = await tx.familyAuditLog.create({
            data: {
              familyId,
              actorUserId: req.authContext?.kind === "session" ? req.authContext.userId ?? null : null,
              action: "person.merge",
              entityType: "person",
              entityId: mappedPerson.id,
              metadata: asJson({
                joinRequestId: joinRequest.id,
                requestingUserId: joinRequest.requestingUserId,
                sourcePersonSnapshot: requesterPerson,
                targetPersonId: mappedPerson.id,
                targetMetadataBefore,
                targetMetadataAfter,
                movedRelationshipMappings,
                deletedDuplicateRelationships: duplicateRelationships,
                requesterMobile,
                approvedMobile,
                primaryContactSource,
                primaryContactNumber,
                secondaryContactNumber: secondaryContactNumber ?? null,
              }),
            },
          });
          mergeAuditLogId = mergeAudit.id;
        } else {
          await tx.userPersonLink.upsert({
            where: {
              familyId_userId: {
                familyId,
                userId: joinRequest.requestingUserId,
              },
            },
            update: {
              personId: mappedPerson.id,
            },
            create: {
              familyId,
              userId: joinRequest.requestingUserId,
              personId: mappedPerson.id,
            },
          });
        }
      } else if (parsed.data.mappingMode === "relation") {
        await tx.userPersonLink.upsert({
          where: {
            familyId_userId: {
              familyId,
              userId: joinRequest.requestingUserId,
            },
          },
          update: {
            personId: requesterPerson.id,
          },
          create: {
            familyId,
            userId: joinRequest.requestingUserId,
            personId: requesterPerson.id,
          },
        });

        if (parsed.data.relationType === "spouse") {
          await ensureRelationship(tx, familyId, requesterPerson.id, mappedPerson.id, "spouse_of");
          await ensureRelationship(tx, familyId, mappedPerson.id, requesterPerson.id, "spouse_of");
        } else if (parsed.data.relationType === "child") {
          await ensureRelationship(tx, familyId, mappedPerson.id, requesterPerson.id, "parent_of");
        } else if (parsed.data.relationType === "parent") {
          await ensureRelationship(tx, familyId, requesterPerson.id, mappedPerson.id, "parent_of");
        }
      }
    }

    return tx.workspaceJoinRequest.update({
      where: { id: joinRequest.id },
      data: {
        status: parsed.data.decision,
        reviewedAt: new Date(),
        reviewedByUserId: req.authContext?.kind === "session" ? req.authContext.userId ?? null : null,
        targetPersonId: parsed.data.personId ?? null,
      },
      include: {
        targetPerson: true,
      },
    });
  });

  await writeFamilyAuditLog(req, {
    familyId,
    action: "join_request.reviewed",
    entityType: "workspace_join_request",
    entityId: reviewed.id,
    metadata: {
      decision: parsed.data.decision,
      role: parsed.data.role ?? joinRequest.requestedRole,
      mappingMode: parsed.data.mappingMode ?? null,
      relationType: parsed.data.relationType ?? null,
      targetPersonId: parsed.data.personId ?? null,
      mergeAuditLogId,
    },
  });

  res.json({
    data: {
      id: reviewed.id,
      status: reviewed.status,
      reviewedAt: reviewed.reviewedAt,
      mergeAuditLogId,
      targetPerson: reviewed.targetPerson
        ? {
            id: reviewed.targetPerson.id,
            fullName: revealNullableText(reviewed.targetPerson.fullName) ?? "",
          }
        : null,
    },
  });
});

router.post("/families/:id/person-merges/:auditLogId/undo", async (req, res) => {
  const familyId = parseUuid(req.params.id);
  const auditLogId = parseUuid(req.params.auditLogId);
  if (!familyId || !auditLogId) {
    res.status(400).json({ error: "family id and audit log id must be valid UUIDs" });
    return;
  }

  const access = await requireWorkspaceAdmin(familyId, req);
  if (access === "unauthorized") {
    res.status(401).json({ error: "unauthorized" });
    return;
  }

  if (access === "forbidden") {
    res.status(403).json({ error: "admin role required" });
    return;
  }

  const mergeAudit = await prisma.familyAuditLog.findFirst({
    where: {
      id: auditLogId,
      familyId,
      action: "person.merge",
    },
  });

  if (!mergeAudit) {
    res.status(404).json({ error: "merge history not found" });
    return;
  }

  const metadata = asRecord(mergeAudit.metadata);
  if (asRecord(metadata.undo).undoneAt) {
    res.status(409).json({ error: "this merge has already been undone" });
    return;
  }

  const sourcePersonSnapshot = asRecord(metadata.sourcePersonSnapshot);
  const targetPersonId = typeof metadata.targetPersonId === "string" ? metadata.targetPersonId : "";
  const requestingUserId = typeof metadata.requestingUserId === "string" ? metadata.requestingUserId : "";
  const targetMetadataBefore = asRecord(metadata.targetMetadataBefore);
  const movedRelationshipMappings = Array.isArray(metadata.movedRelationshipMappings)
    ? metadata.movedRelationshipMappings.map((item) => asRecord(item))
    : [];
  const deletedDuplicateRelationships = Array.isArray(metadata.deletedDuplicateRelationships)
    ? metadata.deletedDuplicateRelationships.map((item) => asRecord(item))
    : [];

  const sourcePersonId = typeof sourcePersonSnapshot.id === "string" ? sourcePersonSnapshot.id : "";
  if (!sourcePersonId || !targetPersonId || !requestingUserId) {
    res.status(400).json({ error: "merge history is incomplete and cannot be undone" });
    return;
  }

  await prisma.$transaction(async (tx) => {
    const sourcePerson = await tx.person.findUnique({ where: { id: sourcePersonId } });
    if (!sourcePerson) {
      await tx.person.create({
        data: {
          id: sourcePersonId,
          familyId,
          fullName: typeof sourcePersonSnapshot.fullName === "string" ? sourcePersonSnapshot.fullName : "",
          gender: typeof sourcePersonSnapshot.gender === "string" ? sourcePersonSnapshot.gender : null,
          dateOfBirth: sourcePersonSnapshot.dateOfBirth ? new Date(String(sourcePersonSnapshot.dateOfBirth)) : null,
          isDeceased: Boolean(sourcePersonSnapshot.isDeceased),
          photoUrl: typeof sourcePersonSnapshot.photoUrl === "string" ? sourcePersonSnapshot.photoUrl : null,
          nativeVillage: typeof sourcePersonSnapshot.nativeVillage === "string" ? sourcePersonSnapshot.nativeVillage : null,
          gotra: typeof sourcePersonSnapshot.gotra === "string" ? sourcePersonSnapshot.gotra : null,
          kuldevta: typeof sourcePersonSnapshot.kuldevta === "string" ? sourcePersonSnapshot.kuldevta : null,
          community: typeof sourcePersonSnapshot.community === "string" ? sourcePersonSnapshot.community : null,
          education: typeof sourcePersonSnapshot.education === "string" ? sourcePersonSnapshot.education : null,
          occupation: typeof sourcePersonSnapshot.occupation === "string" ? sourcePersonSnapshot.occupation : null,
          notes: typeof sourcePersonSnapshot.notes === "string" ? sourcePersonSnapshot.notes : null,
          metadata: asJson(asRecord(sourcePersonSnapshot.metadata)),
        },
      });
    }

    await tx.person.update({
      where: { id: targetPersonId },
      data: {
        metadata: asJson(targetMetadataBefore),
      },
    });

    for (const mapping of movedRelationshipMappings) {
      const relationshipId = typeof mapping.id === "string" ? mapping.id : "";
      const sourceField = mapping.sourceField === "person2Id" ? "person2Id" : "person1Id";
      if (!relationshipId) {
        continue;
      }

      if (sourceField === "person1Id") {
        await tx.relationship.updateMany({
          where: { id: relationshipId, person1Id: targetPersonId },
          data: { person1Id: sourcePersonId },
        });
      } else {
        await tx.relationship.updateMany({
          where: { id: relationshipId, person2Id: targetPersonId },
          data: { person2Id: sourcePersonId },
        });
      }
    }

    for (const relationshipSnapshot of deletedDuplicateRelationships) {
      const relationshipId = typeof relationshipSnapshot.id === "string" ? relationshipSnapshot.id : "";
      if (!relationshipId) {
        continue;
      }

      const existing = await tx.relationship.findUnique({ where: { id: relationshipId } });
      if (existing) {
        continue;
      }

      await tx.relationship.create({
        data: {
          id: relationshipId,
          familyId,
          person1Id: String(relationshipSnapshot.person1Id),
          person2Id: String(relationshipSnapshot.person2Id),
          relationshipType: String(relationshipSnapshot.relationshipType),
          status: String(relationshipSnapshot.status ?? "active"),
          startDate: relationshipSnapshot.startDate ? new Date(String(relationshipSnapshot.startDate)) : null,
          endDate: relationshipSnapshot.endDate ? new Date(String(relationshipSnapshot.endDate)) : null,
          notes: typeof relationshipSnapshot.notes === "string" ? relationshipSnapshot.notes : null,
          metadata: asJson(asRecord(relationshipSnapshot.metadata)),
        },
      });
    }

    await tx.userPersonLink.upsert({
      where: {
        familyId_userId: {
          familyId,
          userId: requestingUserId,
        },
      },
      update: {
        personId: sourcePersonId,
      },
      create: {
        familyId,
        userId: requestingUserId,
        personId: sourcePersonId,
      },
    });

    await tx.familyAuditLog.update({
      where: { id: mergeAudit.id },
      data: {
        metadata: asJson({
          ...metadata,
          undo: {
            undoneAt: new Date().toISOString(),
            undoneByUserId: req.authContext?.kind === "session" ? req.authContext.userId ?? null : null,
          },
        }),
      },
    });
  });

  await writeFamilyAuditLog(req, {
    familyId,
    action: "person.merge.undone",
    entityType: "person",
    entityId: sourcePersonId,
    metadata: {
      mergeAuditLogId: mergeAudit.id,
    },
  });

  res.json({
    data: {
      mergeAuditLogId: mergeAudit.id,
      undone: true,
    },
  });
});

export default router;
