import { Router } from "express";
import { z } from "zod";
import prisma from "../../db.js";
import { parseUuid } from "../../lib/validation.js";
import { protectNullableText, revealNullableText } from "../../security/crypto.js";

const router = Router();

const createTenantSchema = z.object({
  name: z.string().min(1),
  slug: z.string().optional(),
  contactName: z.string().optional(),
  contactEmail: z.string().email().optional(),
  contactPhone: z.string().optional(),
  trialDays: z.number().int().min(0).max(90).optional(),
});

const updateTenantStatusSchema = z.object({
  status: z.enum(["active", "suspended"]),
});

const slugify = (value: string) =>
  value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");

const revealTenant = <
  T extends {
    contactName: string | null;
    contactEmail: string | null;
    contactPhone: string | null;
  },
>(
  tenant: T,
): T => ({
  ...tenant,
  contactName: revealNullableText(tenant.contactName),
  contactEmail: revealNullableText(tenant.contactEmail),
  contactPhone: revealNullableText(tenant.contactPhone),
});

router.get("/", async (_req, res) => {
  const rows = await prisma.tenant.findMany({
    orderBy: { createdAt: "desc" },
    include: {
      subscriptions: {
        orderBy: { createdAt: "desc" },
        take: 1,
        include: { plan: true },
      },
    },
  });
  const data = rows.map((row) => ({
    ...revealTenant(row),
    subscriptions: row.subscriptions,
  }));

  res.json({ data });
});

router.post("/", async (req, res) => {
  const parsed = createTenantSchema.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: "invalid request body" });
    return;
  }

  const input = parsed.data;
  const slug = slugify(input.slug ?? "") || slugify(input.name);
  if (!slug) {
    res.status(400).json({ error: "slug could not be generated" });
    return;
  }

  const trialEndsAt =
    typeof input.trialDays === "number"
      ? new Date(Date.now() + input.trialDays * 24 * 60 * 60 * 1000)
      : null;

  const data = await prisma.tenant.create({
    data: {
      name: input.name.trim(),
      slug,
      contactName: protectNullableText(input.contactName),
      contactEmail: protectNullableText(input.contactEmail),
      contactPhone: protectNullableText(input.contactPhone),
      trialEndsAt,
    },
  });

  res.status(201).json({ data: revealTenant(data) });
});

router.patch("/:id/status", async (req, res) => {
  const tenantId = parseUuid(req.params.id);
  if (!tenantId) {
    res.status(400).json({ error: "tenant id must be a valid UUID" });
    return;
  }

  const parsed = updateTenantStatusSchema.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: "invalid request body" });
    return;
  }

  const tenant = await prisma.tenant.findUnique({ where: { id: tenantId } });
  if (!tenant) {
    res.status(404).json({ error: "tenant not found" });
    return;
  }

  const isSuspended = parsed.data.status === "suspended";
  const data = await prisma.tenant.update({
    where: { id: tenantId },
    data: {
      status: parsed.data.status,
      suspendedAt: isSuspended ? new Date() : null,
    },
  });

  res.json({ data: revealTenant(data) });
});

export default router;
