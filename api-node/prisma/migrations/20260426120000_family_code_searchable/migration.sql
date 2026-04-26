-- Add stable 7-character alphanumeric family codes for join/search flows.

ALTER TABLE "families"
ADD COLUMN "family_code" TEXT;

CREATE OR REPLACE FUNCTION generate_family_code()
RETURNS TEXT
LANGUAGE plpgsql
AS $$
DECLARE
  chars CONSTANT TEXT := 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  code TEXT;
  idx INT;
BEGIN
  LOOP
    code := '';
    FOR idx IN 1..7 LOOP
      code := code || substr(chars, floor(random() * length(chars) + 1)::int, 1);
    END LOOP;

    IF NOT EXISTS (SELECT 1 FROM "families" WHERE "family_code" = code) THEN
      RETURN code;
    END IF;
  END LOOP;
END;
$$;

UPDATE "families"
SET "family_code" = generate_family_code()
WHERE "family_code" IS NULL;

ALTER TABLE "families"
ALTER COLUMN "family_code" SET DEFAULT generate_family_code(),
ALTER COLUMN "family_code" SET NOT NULL;

CREATE UNIQUE INDEX "families_family_code_key" ON "families"("family_code");
