CREATE TABLE IF NOT EXISTS users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  mobile_number TEXT NOT NULL UNIQUE,
  password_hash TEXT NOT NULL,
  full_name TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'active',
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_users_status ON users(status);

CREATE TABLE IF NOT EXISTS family_memberships (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  family_id UUID NOT NULL REFERENCES families(id) ON DELETE CASCADE,
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  role TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'active',
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  CONSTRAINT family_memberships_family_id_user_id_key UNIQUE (family_id, user_id)
);

CREATE INDEX IF NOT EXISTS idx_family_memberships_family_id ON family_memberships(family_id);
CREATE INDEX IF NOT EXISTS idx_family_memberships_user_id ON family_memberships(user_id);
CREATE INDEX IF NOT EXISTS idx_family_memberships_role ON family_memberships(role);

CREATE TABLE IF NOT EXISTS user_person_links (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  family_id UUID NOT NULL REFERENCES families(id) ON DELETE CASCADE,
  person_id UUID NOT NULL REFERENCES people(id) ON DELETE CASCADE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  CONSTRAINT user_person_links_family_id_user_id_key UNIQUE (family_id, user_id)
);

CREATE INDEX IF NOT EXISTS idx_user_person_links_family_id ON user_person_links(family_id);
CREATE INDEX IF NOT EXISTS idx_user_person_links_person_id ON user_person_links(person_id);
CREATE INDEX IF NOT EXISTS idx_user_person_links_user_id ON user_person_links(user_id);
