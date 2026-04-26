import { Prisma } from "@prisma/client";
import { Response } from "express";
import prisma from "../../db.js";

const FAMILY_CODE_LENGTH = 7;
const FAMILY_CODE_CHARSET = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";

export const slugify = (value: string) =>
  value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");

export const sanitizeMobile = (value: string): string => value.replace(/\D/g, "");

export const parseOptionalDate = (value?: string | null) => {
  if (!value) {
    return null;
  }

  const date = new Date(value);
  if (Number.isNaN(date.getTime())) {
    return undefined;
  }

  return date;
};

export const asRecord = (value: unknown): Record<string, unknown> =>
  value && typeof value === "object" && !Array.isArray(value) ? (value as Record<string, unknown>) : {};

export const normalizeFamilyCode = (value: string): string => value.replace(/[^a-zA-Z0-9]/g, "").toUpperCase();

const randomFamilyCode = (): string => {
  let code = "";
  for (let i = 0; i < FAMILY_CODE_LENGTH; i += 1) {
    code += FAMILY_CODE_CHARSET[Math.floor(Math.random() * FAMILY_CODE_CHARSET.length)];
  }
  return code;
};

export const generateUniqueFamilyCode = async (tx: Prisma.TransactionClient): Promise<string> => {
  for (let attempt = 0; attempt < 20; attempt += 1) {
    const familyCode = randomFamilyCode();
    const existingFamily = await tx.family.findUnique({
      where: { familyCode },
      select: { id: true },
    });
    if (!existingFamily) {
      return familyCode;
    }
  }

  throw new Error("unable to allocate unique family code");
};

export const getFamilyOr404 = async (familyId: string, res: Response) => {
  const family = await prisma.family.findUnique({ where: { id: familyId } });
  if (!family) {
    res.status(404).json({ error: "family not found" });
    return null;
  }

  return family;
};

export const getPersonOr404 = async (familyId: string, personId: string, res: Response) => {
  const person = await prisma.person.findFirst({
    where: { id: personId, familyId },
  });

  if (!person) {
    res.status(404).json({ error: "family member not found in this workspace" });
    return null;
  }

  return person;
};

export const serializeMembership = <
  T extends {
    id: string;
    role: string;
    status: string;
    createdAt: Date;
    user: { id: string; fullName: string; mobileNumber: string; status: string };
  },
>(
  membership: T,
  person?: { id: string; fullName: string } | null,
) => ({
  id: membership.id,
  role: membership.role,
  status: membership.status,
  createdAt: membership.createdAt,
  user: {
    id: membership.user.id,
    fullName: membership.user.fullName,
    mobileNumber: membership.user.mobileNumber,
    status: membership.user.status,
  },
  person: person
    ? {
        id: person.id,
        fullName: person.fullName,
      }
    : null,
});

export const asJson = (value: Prisma.InputJsonValue | Record<string, unknown>) => value as Prisma.InputJsonValue;
