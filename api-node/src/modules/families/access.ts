import { Request } from "express";
import prisma from "../../db.js";

export const getWorkspaceMembership = async (familyId: string, req: Request) => {
  const auth = req.authContext;
  if (!auth) {
    return { status: "unauthorized" as const, membership: null };
  }

  if (auth.kind === "api") {
    return { status: "ok" as const, membership: null };
  }

  if (!auth.userId) {
    return { status: "unauthorized" as const, membership: null };
  }

  const membership = await prisma.familyMembership.findFirst({
    where: {
      familyId,
      userId: auth.userId,
      status: "active",
    },
  });

  if (!membership) {
    return { status: "forbidden" as const, membership: null };
  }

  return { status: "ok" as const, membership };
};

export const requireWorkspaceAdmin = async (
  familyId: string,
  req: Request,
): Promise<"ok" | "unauthorized" | "forbidden"> => {
  const result = await getWorkspaceMembership(familyId, req);
  if (result.status !== "ok") {
    return result.status;
  }

  if (!result.membership) {
    return "ok";
  }

  return result.membership.role === "admin" ? "ok" : "forbidden";
};
