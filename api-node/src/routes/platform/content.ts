import { Router } from "express";
import { z } from "zod";
import prisma from "../../db.js";
import { parseUuid } from "../../lib/validation.js";

const router = Router();

const faqSchema = z.object({
  category: z.string().min(1),
  question: z.string().min(1),
  answer: z.string().min(1),
  published: z.boolean().optional(),
  sortOrder: z.number().int().min(0).optional(),
});

const faqUpdateSchema = faqSchema.partial();

router.get("/faqs", async (req, res) => {
  const category = typeof req.query.category === "string" ? req.query.category : undefined;
  const publishedParam = typeof req.query.published === "string" ? req.query.published : undefined;
  const published =
    publishedParam === undefined ? undefined : publishedParam.toLowerCase() === "true";

  const data = await prisma.faqArticle.findMany({
    where: {
      ...(category ? { category } : {}),
      ...(publishedParam !== undefined ? { published } : {}),
    },
    orderBy: [{ sortOrder: "asc" }, { createdAt: "desc" }],
  });

  res.json({ data });
});

router.post("/faqs", async (req, res) => {
  const parsed = faqSchema.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: "invalid request body" });
    return;
  }

  const input = parsed.data;
  const data = await prisma.faqArticle.create({
    data: {
      category: input.category.trim(),
      question: input.question.trim(),
      answer: input.answer.trim(),
      published: input.published ?? true,
      sortOrder: input.sortOrder ?? 0,
    },
  });

  res.status(201).json({ data });
});

router.patch("/faqs/:id", async (req, res) => {
  const faqId = parseUuid(req.params.id);
  if (!faqId) {
    res.status(400).json({ error: "faq id must be a valid UUID" });
    return;
  }

  const parsed = faqUpdateSchema.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: "invalid request body" });
    return;
  }

  const existing = await prisma.faqArticle.findUnique({ where: { id: faqId } });
  if (!existing) {
    res.status(404).json({ error: "faq not found" });
    return;
  }

  const input = parsed.data;
  const data = await prisma.faqArticle.update({
    where: { id: faqId },
    data: {
      category: input.category?.trim(),
      question: input.question?.trim(),
      answer: input.answer?.trim(),
      published: input.published,
      sortOrder: input.sortOrder,
    },
  });

  res.json({ data });
});

export default router;
