import { Router } from "express";
import { z } from "zod";
import { Prisma } from "@prisma/client";
import prisma from "../../db.js";

const router = Router();

const upsertSettingSchema = z.object({
  key: z.string().min(1),
  value: z.record(z.unknown()),
  description: z.string().optional(),
});

router.get("/", async (_req, res) => {
  const data = await prisma.systemSetting.findMany({
    orderBy: { key: "asc" },
  });
  res.json({ data });
});

router.put("/", async (req, res) => {
  const parsed = upsertSettingSchema.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: "invalid request body" });
    return;
  }

  const input = parsed.data;
  const data = await prisma.systemSetting.upsert({
    where: { key: input.key },
    create: {
      key: input.key.trim(),
      value: input.value as Prisma.InputJsonValue,
      description: input.description?.trim() || null,
    },
    update: {
      value: input.value as Prisma.InputJsonValue,
      description: input.description?.trim() || null,
    },
  });

  res.json({ data });
});

export default router;
