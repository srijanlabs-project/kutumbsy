import { Router } from "express";
import prisma from "../../db.js";
import { parseUuid } from "../../lib/validation.js";
import { requireWorkspaceAdmin } from "../../modules/families/access.js";

const router = Router();

router.get("/families/:id/audit-logs", async (req, res) => {
  const familyId = parseUuid(req.params.id);
  if (!familyId) {
    res.status(400).json({ error: "family id must be a valid UUID" });
    return;
  }

  const access = await requireWorkspaceAdmin(familyId, req);
  if (access === "unauthorized") {
    res.status(401).json({ error: "unauthorized" });
    return;
  }

  if (access === "forbidden") {
    res.status(403).json({ error: "admin role required" });
    return;
  }

  const rows = await prisma.familyAuditLog.findMany({
    where: { familyId },
    include: {
      actorUser: true,
    },
    orderBy: { createdAt: "desc" },
    take: 50,
  });

  res.json({
    data: rows.map((row) => ({
      id: row.id,
      action: row.action,
      entityType: row.entityType,
      entityId: row.entityId,
      metadata: row.metadata,
      createdAt: row.createdAt,
      actorUser: row.actorUser
        ? {
            id: row.actorUser.id,
            fullName: row.actorUser.fullName,
            mobileNumber: row.actorUser.mobileNumber,
          }
        : null,
    })),
  });
});

export default router;
