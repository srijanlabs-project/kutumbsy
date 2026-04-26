import { Prisma } from "@prisma/client";
import { Request } from "express";
import prisma from "../../db.js";

type FamilyAuditInput = {
  familyId: string;
  action: string;
  entityType: string;
  entityId: string;
  metadata?: Prisma.InputJsonValue;
};

export const writeFamilyAuditLog = async (req: Request, input: FamilyAuditInput) => {
  await prisma.familyAuditLog.create({
    data: {
      familyId: input.familyId,
      actorUserId: req.authContext?.kind === "session" ? req.authContext.userId ?? null : null,
      action: input.action,
      entityType: input.entityType,
      entityId: input.entityId,
      metadata: input.metadata ?? {},
    },
  });
};
