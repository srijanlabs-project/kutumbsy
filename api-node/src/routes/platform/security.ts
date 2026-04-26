import { Router } from "express";
import { env } from "../../config/env.js";

type SecurityStatus = "implemented" | "partial" | "pending";

type SecurityControl = {
  id: string;
  status: SecurityStatus;
  evidence: string;
};

const router = Router();

router.get("/checklist", async (_req, res) => {
  const controls: SecurityControl[] = [
    {
      id: "secure-sdlc-policy",
      status: "partial",
      evidence: "Security baseline and checklist docs are present but CI security gates are not fully automated yet.",
    },
    {
      id: "api-auth-enforced",
      status: "implemented",
      evidence: "All /api/v1 routes are protected by bearer auth middleware.",
    },
    {
      id: "uuid-validation",
      status: "implemented",
      evidence: "UUID validation is applied on sensitive ID-based route parameters.",
    },
    {
      id: "strict-schema-validation",
      status: "implemented",
      evidence: "Zod request body validation is enforced across key APIs.",
    },
    {
      id: "strict-cors-allowlist",
      status: "implemented",
      evidence: `CORS allowlist is active via CORS_ALLOWED_ORIGINS (${env.corsAllowedOrigins.length} origin(s)).`,
    },
    {
      id: "security-headers",
      status: "partial",
      evidence: "nosniff, frame deny, referrer and permissions policy are enforced; HSTS/CSP still pending.",
    },
    {
      id: "rate-limit-bot-controls",
      status: "partial",
      evidence: "Per-IP per-path rate limiting is active; dedicated bot defense and advanced brute-force controls are pending.",
    },
    {
      id: "sensitive-data-encryption",
      status: "implemented",
      evidence: "AES-256-GCM field-level encryption is active for sensitive family/person/tenant/lead fields.",
    },
    {
      id: "pii-masking-logs",
      status: "partial",
      evidence: "API does not intentionally log payload PII, but centralized redaction policy/tooling is still pending.",
    },
    {
      id: "audit-trails",
      status: "pending",
      evidence: "Dedicated immutable audit trail tables and actor-action logs are not yet implemented.",
    },
    {
      id: "sast-ci",
      status: "pending",
      evidence: "No enforced SAST gate in CI pipeline yet.",
    },
    {
      id: "sca-ci",
      status: "pending",
      evidence: "No enforced dependency scanning gate in CI pipeline yet.",
    },
    {
      id: "secret-scan-ci",
      status: "pending",
      evidence: "No repo-wide secret scanning gate in CI or pre-commit hooks yet.",
    },
    {
      id: "mandatory-authz-tests",
      status: "pending",
      evidence: "Automated authz and tenant-isolation regression suites are pending.",
    },
    {
      id: "vapt-cadence",
      status: "pending",
      evidence: "VAPT program has not been scheduled and executed yet.",
    },
  ];

  res.json({
    data: {
      generatedAt: new Date().toISOString(),
      controls,
    },
  });
});

export default router;
