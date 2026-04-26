import { Router } from "express";
import prisma from "../../db.js";
import { parseUuid } from "../../lib/validation.js";
import { revealNullableText } from "../../security/crypto.js";
import { hashPassword } from "../../security/passwords.js";
import { requireWorkspaceAdmin } from "../../modules/families/access.js";
import { writeFamilyAuditLog } from "../../modules/families/audit.js";
import { createMemberLoginSchema, updateMemberLoginSchema } from "../../modules/families/schemas.js";
import { getPersonOr404, sanitizeMobile, serializeMembership } from "../../modules/families/utils.js";

const router = Router();

router.get("/families/:id/member-logins", async (req, res) => {
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

  const memberships = await prisma.familyMembership.findMany({
    where: { familyId },
    include: { user: true },
    orderBy: { createdAt: "desc" },
  });

  const links = await prisma.userPersonLink.findMany({
    where: { familyId },
    include: { person: true },
  });
  const linksByUserId = new Map(
    links.map((link) => [
      link.userId,
      {
        id: link.person.id,
        fullName: revealNullableText(link.person.fullName) ?? "",
      },
    ]),
  );

  res.json({
    data: memberships.map((membership) =>
      serializeMembership(membership, linksByUserId.get(membership.userId) ?? null),
    ),
  });
});

router.post("/families/:id/member-logins", async (req, res) => {
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
    res.status(403).json({ error: "admin role required for member login creation" });
    return;
  }

  const parsed = createMemberLoginSchema.safeParse(req.body);
  if (!parsed.success) {
    const detail = parsed.error.issues[0]?.message;
    res.status(400).json({ error: detail ?? "invalid request body" });
    return;
  }

  const { personId, role } = parsed.data;
  const mobileNumber = sanitizeMobile(parsed.data.mobileNumber);
  const person = await getPersonOr404(familyId, personId, res);
  if (!person) {
    return;
  }

  const existingUser = await prisma.user.findUnique({
    where: { mobileNumber },
    include: {
      memberships: { where: { familyId } },
    },
  });

  if (existingUser?.memberships.length) {
    res.status(409).json({ error: "user already has access to this workspace" });
    return;
  }

  const fullName = revealNullableText(person.fullName) ?? "Family Member";

  const result = await prisma.$transaction(async (tx) => {
    const user =
      existingUser ??
      (await tx.user.create({
        data: {
          fullName,
          mobileNumber,
          passwordHash: null,
        },
      }));

    const membership = await tx.familyMembership.create({
      data: {
        familyId,
        userId: user.id,
        role,
      },
    });

    const personLink = await tx.userPersonLink.upsert({
      where: {
        familyId_userId: {
          familyId,
          userId: user.id,
        },
      },
      update: {
        personId: person.id,
      },
      create: {
        familyId,
        userId: user.id,
        personId: person.id,
      },
    });

    return { user, membership, personLink };
  });

  await writeFamilyAuditLog(req, {
    familyId,
    action: "member_login.created",
    entityType: "family_membership",
    entityId: result.membership.id,
    metadata: {
      userId: result.user.id,
      personId: person.id,
      role: result.membership.role,
      reusedExistingUser: Boolean(existingUser),
    },
  });

  res.status(201).json({
    data: {
      user: {
        id: result.user.id,
        fullName: result.user.fullName,
        mobileNumber: result.user.mobileNumber,
      },
      membership: {
        id: result.membership.id,
        role: result.membership.role,
        status: result.membership.status,
      },
      personLink: {
        id: result.personLink.id,
        personId: result.personLink.personId,
      },
      reusedExistingUser: Boolean(existingUser),
    },
  });
});

router.patch("/families/:id/member-logins/:membershipId", async (req, res) => {
  const familyId = parseUuid(req.params.id);
  const membershipId = parseUuid(req.params.membershipId);
  if (!familyId || !membershipId) {
    res.status(400).json({ error: "family id and membership id must be valid UUIDs" });
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

  const parsed = updateMemberLoginSchema.safeParse(req.body);
  if (!parsed.success) {
    const detail = parsed.error.issues[0]?.message;
    res.status(400).json({ error: detail ?? "invalid request body" });
    return;
  }

  const membership = await prisma.familyMembership.findFirst({
    where: { id: membershipId, familyId },
    include: { user: true },
  });

  if (!membership) {
    res.status(404).json({ error: "workspace membership not found" });
    return;
  }

  if (parsed.data.personId) {
    const person = await getPersonOr404(familyId, parsed.data.personId, res);
    if (!person) {
      return;
    }
  }

  const updatedMembership = await prisma.$transaction(async (tx) => {
    if (parsed.data.password) {
      await tx.user.update({
        where: { id: membership.userId },
        data: {
          passwordHash: await hashPassword(parsed.data.password),
        },
      });
    }

    if (parsed.data.personId) {
      await tx.userPersonLink.upsert({
        where: {
          familyId_userId: {
            familyId,
            userId: membership.userId,
          },
        },
        update: {
          personId: parsed.data.personId,
        },
        create: {
          familyId,
          userId: membership.userId,
          personId: parsed.data.personId,
        },
      });
    }

    return tx.familyMembership.update({
      where: { id: membership.id },
      data: {
        role: parsed.data.role,
        status: parsed.data.status,
      },
      include: { user: true },
    });
  });

  const personLink = await prisma.userPersonLink.findFirst({
    where: {
      familyId,
      userId: updatedMembership.userId,
    },
    include: {
      person: true,
    },
  });

  await writeFamilyAuditLog(req, {
    familyId,
    action: "member_login.updated",
    entityType: "family_membership",
    entityId: membership.id,
    metadata: {
      updatedFields: Object.keys(parsed.data),
      userId: membership.userId,
    },
  });

  res.json({
    data: serializeMembership(
      updatedMembership,
      personLink
        ? {
            id: personLink.person.id,
            fullName: revealNullableText(personLink.person.fullName) ?? "",
          }
        : null,
    ),
  });
});

export default router;
