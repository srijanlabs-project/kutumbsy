import { Router } from "express";
import { z } from "zod";
import { Prisma } from "@prisma/client";
import prisma from "../../db.js";
import { parseUuid } from "../../lib/validation.js";

const router = Router();

const roleTemplateSchema = z.object({
  key: z.string().min(1),
  name: z.string().min(1),
  description: z.string().optional(),
  isSystem: z.boolean().optional(),
  permissions: z.record(z.unknown()),
});

const roleTemplateUpdateSchema = roleTemplateSchema.partial();

router.get("/templates", async (_req, res) => {
  const data = await prisma.platformRoleTemplate.findMany({
    orderBy: [{ isSystem: "desc" }, { key: "asc" }],
  });
  res.json({ data });
});

router.post("/templates", async (req, res) => {
  const parsed = roleTemplateSchema.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: "invalid request body" });
    return;
  }

  const input = parsed.data;
  const data = await prisma.platformRoleTemplate.create({
    data: {
      key: input.key.trim().toLowerCase(),
      name: input.name.trim(),
      description: input.description?.trim() || null,
      isSystem: input.isSystem ?? false,
      permissions: input.permissions as Prisma.InputJsonValue,
    },
  });

  res.status(201).json({ data });
});

router.patch("/templates/:id", async (req, res) => {
  const templateId = parseUuid(req.params.id);
  if (!templateId) {
    res.status(400).json({ error: "template id must be a valid UUID" });
    return;
  }

  const parsed = roleTemplateUpdateSchema.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: "invalid request body" });
    return;
  }

  const existing = await prisma.platformRoleTemplate.findUnique({ where: { id: templateId } });
  if (!existing) {
    res.status(404).json({ error: "template not found" });
    return;
  }

  const input = parsed.data;
  const data = await prisma.platformRoleTemplate.update({
    where: { id: templateId },
    data: {
      key: input.key?.trim().toLowerCase(),
      name: input.name?.trim(),
      description: input.description?.trim(),
      isSystem: input.isSystem,
      permissions: input.permissions === undefined ? undefined : (input.permissions as Prisma.InputJsonValue),
    },
  });

  res.json({ data });
});

export default router;
