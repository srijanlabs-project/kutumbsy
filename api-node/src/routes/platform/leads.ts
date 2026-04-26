import { Router } from "express";
import { z } from "zod";
import prisma from "../../db.js";
import { parseUuid } from "../../lib/validation.js";
import { encryptText, protectNullableText, revealNullableText } from "../../security/crypto.js";

const router = Router();

const createLeadSchema = z.object({
  source: z.string().optional(),
  companyName: z.string().optional(),
  contactName: z.string().min(1),
  contactEmail: z.string().email().optional(),
  contactPhone: z.string().optional(),
  city: z.string().optional(),
  status: z.enum(["new", "contacted", "qualified", "won", "lost"]).optional(),
  pipelineStage: z
    .enum(["demo_request", "discovery", "proposal", "trial", "onboarding", "closed"])
    .optional(),
  assignedTo: z.string().optional(),
  notes: z.string().optional(),
});

const updateLeadSchema = createLeadSchema.partial().extend({
  lastContactedAt: z.string().datetime().optional(),
});

const revealLead = <
  T extends {
    companyName: string | null;
    contactName: string;
    contactEmail: string | null;
    contactPhone: string | null;
    city: string | null;
    assignedTo: string | null;
    notes: string | null;
  },
>(
  lead: T,
): T => ({
  ...lead,
  companyName: revealNullableText(lead.companyName),
  contactName: revealNullableText(lead.contactName) ?? "",
  contactEmail: revealNullableText(lead.contactEmail),
  contactPhone: revealNullableText(lead.contactPhone),
  city: revealNullableText(lead.city),
  assignedTo: revealNullableText(lead.assignedTo),
  notes: revealNullableText(lead.notes),
});

router.get("/", async (req, res) => {
  const status = typeof req.query.status === "string" ? req.query.status : undefined;
  const stage = typeof req.query.stage === "string" ? req.query.stage : undefined;

  const rows = await prisma.lead.findMany({
    where: {
      ...(status ? { status } : {}),
      ...(stage ? { pipelineStage: stage } : {}),
    },
    orderBy: [{ createdAt: "desc" }],
  });
  const data = rows.map(revealLead);

  res.json({ data });
});

router.post("/", async (req, res) => {
  const parsed = createLeadSchema.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: "invalid request body" });
    return;
  }

  const input = parsed.data;
  const data = await prisma.lead.create({
    data: {
      source: input.source?.trim() || null,
      companyName: protectNullableText(input.companyName),
      contactName: encryptText(input.contactName.trim()),
      contactEmail: protectNullableText(input.contactEmail),
      contactPhone: protectNullableText(input.contactPhone),
      city: protectNullableText(input.city),
      status: input.status ?? "new",
      pipelineStage: input.pipelineStage ?? "demo_request",
      assignedTo: protectNullableText(input.assignedTo),
      notes: protectNullableText(input.notes),
    },
  });

  res.status(201).json({ data: revealLead(data) });
});

router.patch("/:id", async (req, res) => {
  const leadId = parseUuid(req.params.id);
  if (!leadId) {
    res.status(400).json({ error: "lead id must be a valid UUID" });
    return;
  }

  const parsed = updateLeadSchema.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: "invalid request body" });
    return;
  }

  const existing = await prisma.lead.findUnique({ where: { id: leadId } });
  if (!existing) {
    res.status(404).json({ error: "lead not found" });
    return;
  }

  const input = parsed.data;
  const data = await prisma.lead.update({
    where: { id: leadId },
    data: {
      source: input.source?.trim(),
      companyName: input.companyName === undefined ? undefined : protectNullableText(input.companyName),
      contactName: input.contactName === undefined ? undefined : encryptText(input.contactName.trim()),
      contactEmail: input.contactEmail === undefined ? undefined : protectNullableText(input.contactEmail),
      contactPhone: input.contactPhone === undefined ? undefined : protectNullableText(input.contactPhone),
      city: input.city === undefined ? undefined : protectNullableText(input.city),
      status: input.status,
      pipelineStage: input.pipelineStage,
      assignedTo: input.assignedTo === undefined ? undefined : protectNullableText(input.assignedTo),
      notes: input.notes === undefined ? undefined : protectNullableText(input.notes),
      lastContactedAt: input.lastContactedAt ? new Date(input.lastContactedAt) : undefined,
    },
  });

  res.json({ data: revealLead(data) });
});

export default router;
