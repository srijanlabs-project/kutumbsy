-- CreateTable
CREATE TABLE "families" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "description" TEXT,
    "native_place" TEXT,
    "created_by_phone" TEXT,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "families_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "people" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "family_id" UUID NOT NULL,
    "full_name" TEXT NOT NULL,
    "gender" TEXT,
    "date_of_birth" DATE,
    "is_deceased" BOOLEAN NOT NULL DEFAULT false,
    "photo_url" TEXT,
    "native_village" TEXT,
    "gotra" TEXT,
    "kuldevta" TEXT,
    "community" TEXT,
    "education" TEXT,
    "occupation" TEXT,
    "notes" TEXT,
    "metadata" JSONB NOT NULL DEFAULT '{}',
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "people_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "relationships" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "family_id" UUID NOT NULL,
    "person_1_id" UUID NOT NULL,
    "person_2_id" UUID NOT NULL,
    "relationship_type" TEXT NOT NULL,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "relationships_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "schema_migrations" (
    "version" TEXT NOT NULL,
    "applied_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "schema_migrations_pkey" PRIMARY KEY ("version")
);

-- CreateIndex
CREATE UNIQUE INDEX "families_slug_key" ON "families"("slug");

-- CreateIndex
CREATE INDEX "idx_people_family_id" ON "people"("family_id");

-- CreateIndex
CREATE INDEX "idx_relationships_family_id" ON "relationships"("family_id");

-- CreateIndex
CREATE INDEX "idx_relationships_person_1_id" ON "relationships"("person_1_id");

-- CreateIndex
CREATE INDEX "idx_relationships_person_2_id" ON "relationships"("person_2_id");

-- AddForeignKey
ALTER TABLE "people" ADD CONSTRAINT "people_family_id_fkey" FOREIGN KEY ("family_id") REFERENCES "families"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "relationships" ADD CONSTRAINT "relationships_family_id_fkey" FOREIGN KEY ("family_id") REFERENCES "families"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "relationships" ADD CONSTRAINT "relationships_person_1_id_fkey" FOREIGN KEY ("person_1_id") REFERENCES "people"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "relationships" ADD CONSTRAINT "relationships_person_2_id_fkey" FOREIGN KEY ("person_2_id") REFERENCES "people"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

