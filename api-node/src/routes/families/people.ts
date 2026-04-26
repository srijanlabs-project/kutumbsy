import { Prisma } from "@prisma/client";
import { Router } from "express";
import prisma from "../../db.js";
import { parseUuid } from "../../lib/validation.js";
import { protectNullableText } from "../../security/crypto.js";
import { getWorkspaceMembership } from "../../modules/families/access.js";
import { writeFamilyAuditLog } from "../../modules/families/audit.js";
import { revealPerson } from "../../modules/families/serializers.js";
import { createPersonSchema, updatePersonSchema } from "../../modules/families/schemas.js";
import { asJson, asRecord, getFamilyOr404, getPersonOr404, parseOptionalDate } from "../../modules/families/utils.js";

const router = Router();

router.get("/families/:id/people", async (req, res) => {
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

  const rows = await prisma.person.findMany({
    where: { familyId },
    orderBy: { createdAt: "desc" },
  });

  const data = rows.map(revealPerson).filter((person) => {
    const query = typeof req.query.q === "string" ? req.query.q.trim().toLowerCase() : "";
    const relation = typeof req.query.relation === "string" ? req.query.relation.trim().toLowerCase() : "";
    const generation = typeof req.query.generation === "string" ? req.query.generation.trim().toLowerCase() : "";
    const livingStatus = typeof req.query.livingStatus === "string" ? req.query.livingStatus.trim().toLowerCase() : "";
    const metadata = asRecord(person.metadata);
    const familyContext = asRecord(metadata.familyContext);

    if (query) {
      const haystacks = [
        person.fullName,
        person.occupation ?? "",
        person.nativeVillage ?? "",
        String(familyContext.relationToAnchor ?? ""),
        String(familyContext.generationLevel ?? ""),
      ]
        .join(" ")
        .toLowerCase();

      if (!haystacks.includes(query)) {
        return false;
      }
    }

    if (relation) {
      const value = String(familyContext.relationToAnchor ?? "").toLowerCase();
      if (!value.includes(relation)) {
        return false;
      }
    }

    if (generation) {
      const value = String(familyContext.generationLevel ?? "").toLowerCase();
      if (!value.includes(generation)) {
        return false;
      }
    }

    if (livingStatus === "living" && person.isDeceased) {
      return false;
    }

    if (livingStatus === "deceased" && !person.isDeceased) {
      return false;
    }

    return true;
  });

  res.json({ data });
});

router.post("/families/:id/people", async (req, res) => {
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

  const parsed = createPersonSchema.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: "invalid request body" });
    return;
  }

  const family = await getFamilyOr404(familyId, res);
  if (!family) {
    return;
  }

  const input = parsed.data;
  const date = parseOptionalDate(input.dateOfBirth);
  if (input.dateOfBirth && date === undefined) {
    res.status(400).json({ error: "dateOfBirth must be ISO format" });
    return;
  }

  const person = await prisma.person.create({
    data: {
      familyId,
      fullName: protectNullableText(input.fullName) ?? "",
      gender: input.gender?.trim() || null,
      dateOfBirth: date,
      isDeceased: input.isDeceased ?? false,
      photoUrl: protectNullableText(input.photoUrl),
      nativeVillage: protectNullableText(input.nativeVillage),
      gotra: protectNullableText(input.gotra),
      kuldevta: protectNullableText(input.kuldevta),
      community: protectNullableText(input.community),
      education: protectNullableText(input.education),
      occupation: protectNullableText(input.occupation),
      notes: protectNullableText(input.notes),
      metadata: asJson(input.metadata ?? {}),
    },
  });

  await writeFamilyAuditLog(req, {
    familyId,
    action: "person.created",
    entityType: "person",
    entityId: person.id,
    metadata: {
      fullName: person.fullName,
      familyName: family.name,
    },
  });

  res.status(201).json({ data: revealPerson(person) });
});

router.patch("/families/:id/people/:personId", async (req, res) => {
  const familyId = parseUuid(req.params.id);
  const personId = parseUuid(req.params.personId);
  if (!familyId || !personId) {
    res.status(400).json({ error: "family id and person id must be valid UUIDs" });
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

  const parsed = updatePersonSchema.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: "invalid request body" });
    return;
  }

  const person = await getPersonOr404(familyId, personId, res);
  if (!person) {
    return;
  }

  const input = parsed.data;
  const date = input.dateOfBirth !== undefined ? parseOptionalDate(input.dateOfBirth) : person.dateOfBirth;
  if (input.dateOfBirth !== undefined && date === undefined) {
    res.status(400).json({ error: "dateOfBirth must be ISO format" });
    return;
  }

  const updated = await prisma.person.update({
    where: { id: personId },
    data: {
      fullName: input.fullName !== undefined ? protectNullableText(input.fullName) ?? "" : undefined,
      gender: input.gender !== undefined ? input.gender?.trim() || null : undefined,
      dateOfBirth: input.dateOfBirth !== undefined ? date : undefined,
      isDeceased: input.isDeceased,
      photoUrl: input.photoUrl !== undefined ? protectNullableText(input.photoUrl) : undefined,
      nativeVillage: input.nativeVillage !== undefined ? protectNullableText(input.nativeVillage) : undefined,
      gotra: input.gotra !== undefined ? protectNullableText(input.gotra) : undefined,
      kuldevta: input.kuldevta !== undefined ? protectNullableText(input.kuldevta) : undefined,
      community: input.community !== undefined ? protectNullableText(input.community) : undefined,
      education: input.education !== undefined ? protectNullableText(input.education) : undefined,
      occupation: input.occupation !== undefined ? protectNullableText(input.occupation) : undefined,
      notes: input.notes !== undefined ? protectNullableText(input.notes) : undefined,
      metadata: input.metadata !== undefined ? (input.metadata as Prisma.InputJsonValue) : undefined,
    },
  });

  await writeFamilyAuditLog(req, {
    familyId,
    action: "person.updated",
    entityType: "person",
    entityId: updated.id,
    metadata: {
      updatedFields: Object.keys(input),
    },
  });

  res.json({ data: revealPerson(updated) });
});

export default router;
