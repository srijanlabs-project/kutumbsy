import { Router } from "express";
import familyWorkspacesRouter from "./family-workspaces.js";
import peopleRouter from "./people.js";
import relationshipsRouter from "./relationships.js";
import memberLoginsRouter from "./member-logins.js";
import joinRequestsRouter from "./join-requests.js";
import auditLogsRouter from "./audit-logs.js";

const router = Router();

router.use(familyWorkspacesRouter);
router.use(peopleRouter);
router.use(relationshipsRouter);
router.use(memberLoginsRouter);
router.use(joinRequestsRouter);
router.use(auditLogsRouter);

export default router;
