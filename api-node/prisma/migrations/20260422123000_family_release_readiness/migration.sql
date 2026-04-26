-- Release readiness for family data collection:
-- relationships lifecycle fields, join requests, and audit logging

ALTER TABLE "relationships"
ADD COLUMN "status" TEXT NOT NULL DEFAULT 'active',
ADD COLUMN "start_date" DATE,
ADD COLUMN "end_date" DATE,
ADD COLUMN "notes" TEXT,
ADD COLUMN "metadata" JSONB NOT NULL DEFAULT '{}',
ADD COLUMN "updated_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP;

CREATE INDEX "idx_relationships_status" ON "relationships"("status");

CREATE TABLE "workspace_join_requests" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "family_id" UUID NOT NULL,
    "requesting_user_id" UUID NOT NULL,
    "target_person_id" UUID,
    "requested_role" TEXT NOT NULL DEFAULT 'viewer',
    "status" TEXT NOT NULL DEFAULT 'pending',
    "message" TEXT,
    "reviewed_by_user_id" UUID,
    "reviewed_at" TIMESTAMPTZ(6),
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "workspace_join_requests_pkey" PRIMARY KEY ("id")
);

CREATE INDEX "idx_workspace_join_requests_family_id" ON "workspace_join_requests"("family_id");
CREATE INDEX "idx_workspace_join_requests_requesting_user_id" ON "workspace_join_requests"("requesting_user_id");
CREATE INDEX "idx_workspace_join_requests_status" ON "workspace_join_requests"("status");

ALTER TABLE "workspace_join_requests"
ADD CONSTRAINT "workspace_join_requests_family_id_fkey"
FOREIGN KEY ("family_id") REFERENCES "families"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

ALTER TABLE "workspace_join_requests"
ADD CONSTRAINT "workspace_join_requests_requesting_user_id_fkey"
FOREIGN KEY ("requesting_user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

ALTER TABLE "workspace_join_requests"
ADD CONSTRAINT "workspace_join_requests_reviewed_by_user_id_fkey"
FOREIGN KEY ("reviewed_by_user_id") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE NO ACTION;

ALTER TABLE "workspace_join_requests"
ADD CONSTRAINT "workspace_join_requests_target_person_id_fkey"
FOREIGN KEY ("target_person_id") REFERENCES "people"("id") ON DELETE SET NULL ON UPDATE NO ACTION;

CREATE TABLE "family_audit_logs" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "family_id" UUID NOT NULL,
    "actor_user_id" UUID,
    "action" TEXT NOT NULL,
    "entity_type" TEXT NOT NULL,
    "entity_id" UUID NOT NULL,
    "metadata" JSONB NOT NULL DEFAULT '{}',
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "family_audit_logs_pkey" PRIMARY KEY ("id")
);

CREATE INDEX "idx_family_audit_logs_family_id" ON "family_audit_logs"("family_id");
CREATE INDEX "idx_family_audit_logs_actor_user_id" ON "family_audit_logs"("actor_user_id");
CREATE INDEX "idx_family_audit_logs_action" ON "family_audit_logs"("action");

ALTER TABLE "family_audit_logs"
ADD CONSTRAINT "family_audit_logs_family_id_fkey"
FOREIGN KEY ("family_id") REFERENCES "families"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

ALTER TABLE "family_audit_logs"
ADD CONSTRAINT "family_audit_logs_actor_user_id_fkey"
FOREIGN KEY ("actor_user_id") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE NO ACTION;
