import { Router } from "express";
import { z } from "zod";
import { Prisma } from "@prisma/client";
import prisma from "../../db.js";
import { parseUuid } from "../../lib/validation.js";
import { revealNullableText } from "../../security/crypto.js";

const router = Router();

const createPlanSchema = z.object({
  code: z.string().min(1),
  name: z.string().min(1),
  description: z.string().optional(),
  priceInr: z.number().int().min(0),
  billingCycle: z.enum(["monthly", "yearly", "custom"]),
  trialDays: z.number().int().min(0).max(120).optional(),
  isActive: z.boolean().optional(),
  features: z.record(z.unknown()).optional(),
});

const createSubscriptionSchema = z.object({
  tenantId: z.string().uuid(),
  planId: z.string().uuid(),
  status: z.enum(["trialing", "active", "past_due", "cancelled"]).optional(),
  seats: z.number().int().min(1).max(100000).optional(),
  autoRenew: z.boolean().optional(),
  endAt: z.string().datetime().optional(),
  metadata: z.record(z.unknown()).optional(),
});

const updateSubscriptionSchema = z.object({
  planId: z.string().uuid().optional(),
  status: z.enum(["trialing", "active", "past_due", "cancelled"]).optional(),
  seats: z.number().int().min(1).max(100000).optional(),
  autoRenew: z.boolean().optional(),
  endAt: z.string().datetime().nullable().optional(),
  metadata: z.record(z.unknown()).optional(),
});

const revealSubscription = <
  T extends {
    tenant: {
      contactName: string | null;
      contactEmail: string | null;
      contactPhone: string | null;
    };
  },
>(
  row: T,
): T => ({
  ...row,
  tenant: {
    ...row.tenant,
    contactName: revealNullableText(row.tenant.contactName),
    contactEmail: revealNullableText(row.tenant.contactEmail),
    contactPhone: revealNullableText(row.tenant.contactPhone),
  },
});

router.get("/", async (_req, res) => {
  const data = await prisma.plan.findMany({ orderBy: [{ isActive: "desc" }, { priceInr: "asc" }] });
  res.json({ data });
});

router.post("/", async (req, res) => {
  const parsed = createPlanSchema.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: "invalid request body" });
    return;
  }

  const input = parsed.data;
  const data = await prisma.plan.create({
    data: {
      code: input.code.trim().toLowerCase(),
      name: input.name.trim(),
      description: input.description?.trim() || null,
      priceInr: input.priceInr,
      billingCycle: input.billingCycle,
      trialDays: input.trialDays ?? 14,
      isActive: input.isActive ?? true,
      features: (input.features ?? {}) as Prisma.InputJsonValue,
    },
  });

  res.status(201).json({ data });
});

router.get("/subscriptions", async (_req, res) => {
  const rows = await prisma.tenantSubscription.findMany({
    orderBy: { createdAt: "desc" },
    include: {
      tenant: true,
      plan: true,
    },
  });
  const data = rows.map(revealSubscription);

  res.json({ data });
});

router.post("/subscriptions", async (req, res) => {
  const parsed = createSubscriptionSchema.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: "invalid request body" });
    return;
  }

  const input = parsed.data;
  const tenant = await prisma.tenant.findUnique({ where: { id: input.tenantId } });
  if (!tenant) {
    res.status(404).json({ error: "tenant not found" });
    return;
  }

  const plan = await prisma.plan.findUnique({ where: { id: input.planId } });
  if (!plan) {
    res.status(404).json({ error: "plan not found" });
    return;
  }

  const created = await prisma.tenantSubscription.create({
    data: {
      tenantId: input.tenantId,
      planId: input.planId,
      status: input.status ?? "trialing",
      seats: input.seats ?? 5,
      autoRenew: input.autoRenew ?? true,
      endAt: input.endAt ? new Date(input.endAt) : null,
      metadata: (input.metadata ?? {}) as Prisma.InputJsonValue,
    },
    include: { tenant: true, plan: true },
  });
  const data = revealSubscription(created);

  res.status(201).json({ data });
});

router.patch("/subscriptions/:id", async (req, res) => {
  const subscriptionId = parseUuid(req.params.id);
  if (!subscriptionId) {
    res.status(400).json({ error: "subscription id must be a valid UUID" });
    return;
  }

  const parsed = updateSubscriptionSchema.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: "invalid request body" });
    return;
  }

  const existing = await prisma.tenantSubscription.findUnique({ where: { id: subscriptionId } });
  if (!existing) {
    res.status(404).json({ error: "subscription not found" });
    return;
  }

  const input = parsed.data;
  const updated = await prisma.tenantSubscription.update({
    where: { id: subscriptionId },
    data: {
      planId: input.planId,
      status: input.status,
      seats: input.seats,
      autoRenew: input.autoRenew,
      endAt: input.endAt === undefined ? undefined : input.endAt === null ? null : new Date(input.endAt),
      metadata: input.metadata === undefined ? undefined : (input.metadata as Prisma.InputJsonValue),
    },
    include: { tenant: true, plan: true },
  });
  const data = revealSubscription(updated);

  res.json({ data });
});

export default router;
