import { Router } from "express";
import tenantsRouter from "./tenants.js";
import plansRouter from "./plans.js";
import leadsRouter from "./leads.js";
import rbacRouter from "./rbac.js";
import contentRouter from "./content.js";
import settingsRouter from "./settings.js";
import securityRouter from "./security.js";

const router = Router();

router.use("/tenants", tenantsRouter);
router.use("/plans", plansRouter);
router.use("/leads", leadsRouter);
router.use("/rbac", rbacRouter);
router.use("/content", contentRouter);
router.use("/settings", settingsRouter);
router.use("/security", securityRouter);

export default router;
