import { PostLoginShell } from "../../../../components/PostLoginShell";
import styles from "./security.module.css";

const DATE_TIME_FORMATTER = new Intl.DateTimeFormat("en-IN", {
  day: "2-digit",
  month: "short",
  year: "numeric",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hour12: true,
  timeZone: "Asia/Kolkata",
});

type ControlStatus = "implemented" | "partial" | "pending";

type SecurityControl = {
  id: string;
  status: ControlStatus;
  evidence: string;
};

type ChecklistItem = {
  id: string;
  label: string;
};

type ChecklistGroup = {
  title: string;
  items: ChecklistItem[];
};

const checklist: ChecklistGroup[] = [
  {
    title: "Governance & Privacy",
    items: [
      { id: "data-classification-policy", label: "Data classification policy defined and approved" },
      { id: "field-classification-map", label: "API/data-field classification map complete (PII/SPI/non-sensitive)" },
      { id: "lawful-purpose-minimization", label: "Lawful purpose + data minimization documented per field" },
      { id: "retention-deletion-policy", label: "Retention/deletion policy per data type" },
      { id: "consent-model-history", label: "Consent model + consent history storage" },
      { id: "incident-response-plan", label: "Incident response plan with roles/escalation" },
      { id: "secure-sdlc-policy", label: "Secure SDLC policy with release security gates" },
      { id: "stride-threat-model", label: "STRIDE threat model for core domains" },
      { id: "trust-boundary-diagram", label: "Trust-boundary architecture diagram maintained each release" },
    ],
  },
  {
    title: "Identity, AuthN, AuthZ",
    items: [
      { id: "mfa-admin", label: "MFA mandatory for admin roles" },
      { id: "strong-password-lockout", label: "Strong password + lockout controls" },
      { id: "jwt-expiry-rotation-revocation", label: "JWT/session expiry, refresh rotation, revocation" },
      { id: "api-auth-enforced", label: "API auth enforced on all protected routes" },
      { id: "rbac-tenant-isolation", label: "RBAC + tenant isolation + no client-trust for permissions" },
      { id: "uuid-validation", label: "UUID/public ID validation for sensitive external identifiers" },
      { id: "idor-prevention", label: "IDOR prevention with ownership checks" },
      { id: "account-recovery-hardening", label: "Account recovery anti-takeover hardening" },
    ],
  },
  {
    title: "API & App Security",
    items: [
      { id: "strict-schema-validation", label: "Strict schema validation (reject unknown fields where possible)" },
      { id: "strict-cors-allowlist", label: "Strict CORS allowlist (no wildcard in prod)" },
      { id: "security-headers", label: "Security headers: HSTS, CSP, XFO, nosniff, Referrer, Permissions-Policy" },
      { id: "rate-limit-bot-controls", label: "Rate limits + brute-force + bot controls" },
      { id: "anti-csrf", label: "Anti-CSRF strategy where cookie auth is used" },
      { id: "replay-idempotency", label: "Replay/idempotency protections on critical endpoints" },
      { id: "secure-file-upload", label: "Secure file upload controls (MIME/size/malware/signed URL)" },
      { id: "data-export-controls", label: "Data export controls with auth + audit" },
    ],
  },
  {
    title: "Data & Database Security",
    items: [
      { id: "db-least-privilege", label: "Least-privilege DB user (no app superuser creds)" },
      { id: "db-tls-enforced", label: "TLS enforced for DB connections" },
      { id: "db-hardening-network", label: "DB hardening + private network/IP restrictions" },
      { id: "db-constraints-orphan", label: "FK/unique constraints and orphan prevention" },
      { id: "sensitive-data-encryption", label: "Sensitive data encryption at rest (field-level where needed)" },
      { id: "encrypted-backups-restore", label: "Encrypted backups + restore validation" },
      { id: "migration-security-review", label: "Migration security impact review before apply" },
    ],
  },
  {
    title: "Secrets, Infra & Environments",
    items: [
      { id: "secrets-vault-kms", label: "Secrets via vault/KMS, none in code/logs/images" },
      { id: "container-hardening-scan", label: "Container/image hardening + scanning" },
      { id: "iac-scanning", label: "IaC scanning (if Terraform/K8s/cloud templates)" },
      { id: "env-segregation", label: "Environment segregation (dev/stage/prod secrets + DBs)" },
      { id: "secure-defaults", label: "Secure defaults for new tenants/plans/settings" },
    ],
  },
  {
    title: "Logging, Audit & Monitoring",
    items: [
      { id: "pii-masking-logs", label: "PII masking/redaction in logs/traces/errors/analytics" },
      { id: "audit-trails", label: "Audit trails for admin actions + sensitive data access" },
      { id: "immutable-security-logs", label: "Immutable security logs + retention policy" },
      { id: "suspicious-alerts", label: "Alerts for suspicious login/read/auth-failure spikes" },
      { id: "db-monitoring", label: "DB slow query and failed write monitoring" },
      { id: "vulnerability-register", label: "Vulnerability register + remediation dashboard" },
      { id: "audit-evidence-pack", label: "Audit evidence pack maintained (reports/logs/approvals)" },
    ],
  },
  {
    title: "Security Testing & VAPT",
    items: [
      { id: "sast-ci", label: "SAST in CI with fail thresholds" },
      { id: "sca-ci", label: "SCA/dependency scanning with fail thresholds" },
      { id: "secret-scan-ci", label: "Secret scanning in CI + pre-commit" },
      { id: "mandatory-authz-tests", label: "Mandatory authZ + tenant-isolation tests per release" },
      { id: "vapt-scope-frozen", label: "VAPT scope frozen (web/API/mobile/infra/admin/storage/auth)" },
      { id: "staging-prod-parity", label: "Staging matches production security posture" },
      { id: "owasp-coverage", label: "OWASP Top 10 + OWASP API Top 10 coverage" },
      { id: "business-logic-abuse-testing", label: "Business logic abuse testing" },
      {
        id: "manual-security-tests",
        label: "Manual tests: IDOR/auth bypass/priv-esc/injection/SSRF/deserialization",
      },
      { id: "crypto-key-review", label: "Crypto/key-management review" },
      { id: "findings-cvss-sla", label: "Findings tracked with CVSS + PoC + SLA" },
      { id: "retest-closure-certificate", label: "Re-test + closure certificate" },
      { id: "vapt-cadence", label: "Recurring cadence (major release + at least 2x/year)" },
    ],
  },
  {
    title: "Operational Readiness",
    items: [
      { id: "incident-tabletop", label: "Incident tabletop drills quarterly" },
      { id: "backup-restore-drills", label: "Backup-restore drills monthly" },
      { id: "key-rotation-drills", label: "Key rotation drills + rollback plan" },
    ],
  },
];

const statusLabel: Record<ControlStatus, string> = {
  implemented: "Implemented",
  partial: "Partial",
  pending: "Pending",
};

const classForStatus = (status: ControlStatus): string => {
  if (status === "implemented") return styles.implemented;
  if (status === "partial") return styles.partial;
  return styles.pending;
};

const fetchSecurityStatus = async (): Promise<{ map: Record<string, SecurityControl>; generatedAt: string | null }> => {
  const baseUrl = process.env.KUTUMBSY_API_URL ?? "http://localhost:8080";
  const token = process.env.KUTUMBSY_API_AUTH_TOKEN ?? process.env.API_AUTH_TOKEN ?? "";

  if (!token) {
    return { map: {}, generatedAt: null };
  }

  try {
    const response = await fetch(`${baseUrl}/api/v1/platform/security/checklist`, {
      headers: { Authorization: `Bearer ${token}` },
      cache: "no-store",
    });

    if (!response.ok) {
      return { map: {}, generatedAt: null };
    }

    const json = (await response.json()) as {
      data?: { controls?: SecurityControl[]; generatedAt?: string };
    };

    const controls = json.data?.controls ?? [];
    const map = Object.fromEntries(controls.map((control) => [control.id, control])) as Record<string, SecurityControl>;

    return { map, generatedAt: json.data?.generatedAt ?? null };
  } catch {
    return { map: {}, generatedAt: null };
  }
};

export const dynamic = "force-dynamic";

export default async function PlatformSecurityChecklistPage() {
  const { map, generatedAt } = await fetchSecurityStatus();
  const generatedAtLabel =
    generatedAt && !Number.isNaN(new Date(generatedAt).getTime())
      ? DATE_TIME_FORMATTER.format(new Date(generatedAt))
      : null;

  const allItems = checklist.flatMap((group) => group.items);
  const totals = allItems.reduce(
    (acc, item) => {
      const status = map[item.id]?.status ?? "pending";
      acc[status] += 1;
      return acc;
    },
    { implemented: 0, partial: 0, pending: 0 } as Record<ControlStatus, number>,
  );

  return (
    <PostLoginShell
      title="Security Governance Checklist"
      subtitle="Operational dashboard for secure development. Live status is mapped to backend controls where available."
      activeNav="security"
      currentFamily={null}
      currentUser="Platform Admin"
      rightRail={
        <section className={styles.header}>
          <p className={styles.eyebrow}>Platform Admin</p>
          <div className={styles.summary}>
            <div className={`${styles.pill} ${styles.implemented}`}>Implemented: {totals.implemented}</div>
            <div className={`${styles.pill} ${styles.partial}`}>Partial: {totals.partial}</div>
            <div className={`${styles.pill} ${styles.pending}`}>Pending: {totals.pending}</div>
          </div>
          <p className={styles.generatedAt}>
            {generatedAtLabel ? `Last synced: ${generatedAtLabel}` : "Live sync unavailable (missing API auth env)."}
          </p>
        </section>
      }
    >
      <section className={styles.grid}>
        {checklist.map((group) => (
          <article key={group.title} className={styles.card}>
            <h2 className={styles.cardTitle}>{group.title}</h2>
            <ul className={styles.list}>
              {group.items.map((item) => {
                const status = map[item.id]?.status ?? "pending";
                const evidence = map[item.id]?.evidence;
                return (
                  <li key={item.id} className={styles.item}>
                    <div className={styles.itemHead}>
                      <span className={styles.itemLabel}>{item.label}</span>
                      <span className={`${styles.badge} ${classForStatus(status)}`}>{statusLabel[status]}</span>
                    </div>
                    {evidence ? <p className={styles.evidence}>{evidence}</p> : null}
                  </li>
                );
              })}
            </ul>
          </article>
        ))}
      </section>
    </PostLoginShell>
  );
}
