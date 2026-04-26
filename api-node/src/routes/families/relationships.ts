import { Router } from "express";
import prisma from "../../db.js";
import { parseUuid } from "../../lib/validation.js";
import { revealNullableText } from "../../security/crypto.js";
import { getWorkspaceMembership } from "../../modules/families/access.js";
import { writeFamilyAuditLog } from "../../modules/families/audit.js";
import { createRelationshipSchema } from "../../modules/families/schemas.js";
import { asJson, getPersonOr404, parseOptionalDate } from "../../modules/families/utils.js";

const router = Router();

router.get("/families/:id/relationships", async (req, res) => {
  const familyId = parseUuid(req.params.id);
  if (!familyId) {
    res.status(400).json({ error: "family id must be a valid UUID" });
    return;
  }

  const access = await getWorkspaceMembership(familyId, req);
  if (access.status === "unauthorized") {
    res.status(401).json({ error: "unauthorized" });
    return;
  }

  if (access.status === "forbidden") {
    res.status(403).json({ error: "workspace access denied" });
    return;
  }

  const rows = await prisma.relationship.findMany({
    where: { familyId },
    include: {
      personOne: true,
      personTwo: true,
    },
    orderBy: { createdAt: "desc" },
  });

  res.json({
    data: rows.map((row) => ({
      id: row.id,
      relationshipType: row.relationshipType,
      status: row.status,
      startDate: row.startDate,
      endDate: row.endDate,
      notes: row.notes,
      metadata: row.metadata,
      createdAt: row.createdAt,
      personOne: {
        id: row.personOne.id,
        fullName: revealNullableText(row.personOne.fullName) ?? "",
      },
      personTwo: {
        id: row.personTwo.id,
        fullName: revealNullableText(row.personTwo.fullName) ?? "",
      },
    })),
  });
});

router.post("/families/:id/relationships", async (req, res) => {
  const familyId = parseUuid(req.params.id);
  if (!familyId) {
    res.status(400).json({ error: "family id must be a valid UUID" });
    return;
  }

  const access = await getWorkspaceMembership(familyId, req);
  if (access.status === "unauthorized") {
    res.status(401).json({ error: "unauthorized" });
    return;
  }

  if (access.status === "forbidden") {
    res.status(403).json({ error: "workspace access denied" });
    return;
  }

  const parsed = createRelationshipSchema.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: "invalid request body" });
    return;
  }

  const input = parsed.data;
  if (input.person1Id === input.person2Id) {
    res.status(400).json({ error: "relationship requires two different people" });
    return;
  }

  const [personOne, personTwo] = await Promise.all([
    prisma.person.findFirst({ where: { id: input.person1Id, familyId } }),
    prisma.person.findFirst({ where: { id: input.person2Id, familyId } }),
  ]);

  if (!personOne || !personTwo) {
    res.status(404).json({ error: "both people must belong to the selected family workspace" });
    return;
  }

  const existing = await prisma.relationship.findFirst({
    where: {
      familyId,
      person1Id: input.person1Id,
      person2Id: input.person2Id,
      relationshipType: input.relationshipType,
    },
  });

  if (existing) {
    res.status(409).json({ error: "this relationship already exists" });
    return;
  }

  const startDate = parseOptionalDate(input.startDate);
  const endDate = parseOptionalDate(input.endDate);
  if ((input.startDate && startDate === undefined) || (input.endDate && endDate === undefined)) {
    res.status(400).json({ error: "relationship dates must be ISO format" });
    return;
  }

  const relationship = await prisma.relationship.create({
    data: {
      familyId,
      person1Id: input.person1Id,
      person2Id: input.person2Id,
      relationshipType: input.relationshipType,
      status: input.status,
      startDate,
      endDate,
      notes: input.notes?.trim() || null,
      metadata: asJson(input.metadata ?? {}),
    },
  });

  await writeFamilyAuditLog(req, {
    familyId,
    action: "relationship.created",
    entityType: "relationship",
    entityId: relationship.id,
    metadata: {
      relationshipType: relationship.relationshipType,
      person1Id: relationship.person1Id,
      person2Id: relationship.person2Id,
    },
  });

  res.status(201).json({ data: relationship });
});

router.patch("/families/:id/relationships/:relationshipId", async (req, res) => {
  const familyId = parseUuid(req.params.id);
  const relationshipId = parseUuid(req.params.relationshipId);
  if (!familyId || !relationshipId) {
    res.status(400).json({ error: "family id and relationship id must be valid UUIDs" });
    return;
  }

  const access = await getWorkspaceMembership(familyId, req);
  if (access.status === "unauthorized") {
    res.status(401).json({ error: "unauthorized" });
    return;
  }

  if (access.status === "forbidden") {
    res.status(403).json({ error: "workspace access denied" });
    return;
  }

  const parsed = createRelationshipSchema.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: "invalid request body" });
    return;
  }

  const input = parsed.data;
  if (input.person1Id === input.person2Id) {
    res.status(400).json({ error: "relationship requires two different people" });
    return;
  }

  const existingRelationship = await prisma.relationship.findFirst({
    where: { id: relationshipId, familyId },
  });
  if (!existingRelationship) {
    res.status(404).json({ error: "relationship not found in this family workspace" });
    return;
  }

  const [personOne, personTwo] = await Promise.all([
    prisma.person.findFirst({ where: { id: input.person1Id, familyId } }),
    prisma.person.findFirst({ where: { id: input.person2Id, familyId } }),
  ]);

  if (!personOne || !personTwo) {
    res.status(404).json({ error: "both people must belong to the selected family workspace" });
    return;
  }

  const duplicate = await prisma.relationship.findFirst({
    where: {
      familyId,
      person1Id: input.person1Id,
      person2Id: input.person2Id,
      relationshipType: input.relationshipType,
      NOT: { id: relationshipId },
    },
  });
  if (duplicate) {
    res.status(409).json({ error: "this relationship already exists" });
    return;
  }

  const startDate = parseOptionalDate(input.startDate);
  const endDate = parseOptionalDate(input.endDate);
  if ((input.startDate && startDate === undefined) || (input.endDate && endDate === undefined)) {
    res.status(400).json({ error: "relationship dates must be ISO format" });
    return;
  }

  const updatedRelationship = await prisma.relationship.update({
    where: { id: relationshipId },
    data: {
      person1Id: input.person1Id,
      person2Id: input.person2Id,
      relationshipType: input.relationshipType,
      status: input.status,
      startDate,
      endDate,
      notes: input.notes?.trim() || null,
      metadata: asJson(input.metadata ?? {}),
    },
  });

  await writeFamilyAuditLog(req, {
    familyId,
    action: "relationship.updated",
    entityType: "relationship",
    entityId: updatedRelationship.id,
    metadata: {
      relationshipType: updatedRelationship.relationshipType,
      person1Id: updatedRelationship.person1Id,
      person2Id: updatedRelationship.person2Id,
    },
  });

  res.json({ data: updatedRelationship });
});

export default router;
