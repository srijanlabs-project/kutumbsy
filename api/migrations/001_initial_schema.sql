CREATE TABLE IF NOT EXISTS families (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL,
    slug TEXT NOT NULL UNIQUE,
    description TEXT,
    native_place TEXT,
    created_by_phone TEXT,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS people (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    family_id UUID NOT NULL REFERENCES families(id) ON DELETE CASCADE,
    full_name TEXT NOT NULL,
    gender TEXT,
    date_of_birth DATE,
    is_deceased BOOLEAN NOT NULL DEFAULT FALSE,
    photo_url TEXT,
    native_village TEXT,
    gotra TEXT,
    kuldevta TEXT,
    community TEXT,
    education TEXT,
    occupation TEXT,
    notes TEXT,
    metadata JSONB NOT NULL DEFAULT '{}'::jsonb,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS relationships (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    family_id UUID NOT NULL REFERENCES families(id) ON DELETE CASCADE,
    person_1_id UUID NOT NULL REFERENCES people(id) ON DELETE CASCADE,
    person_2_id UUID NOT NULL REFERENCES people(id) ON DELETE CASCADE,
    relationship_type TEXT NOT NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    CONSTRAINT relationships_distinct_people CHECK (person_1_id <> person_2_id)
);

CREATE INDEX IF NOT EXISTS idx_people_family_id ON people(family_id);
CREATE INDEX IF NOT EXISTS idx_relationships_family_id ON relationships(family_id);
CREATE INDEX IF NOT EXISTS idx_relationships_person_1_id ON relationships(person_1_id);
CREATE INDEX IF NOT EXISTS idx_relationships_person_2_id ON relationships(person_2_id);