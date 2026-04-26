# Railway DB Setup (PostgreSQL + Prisma)

This project already contains Prisma migrations in:
- `api-node/prisma/migrations`

Use Railway PostgreSQL and run those migrations in production.

## 1. Create Railway Services

1. In Railway, create a new project.
2. Add a **PostgreSQL** service.
3. Add your **api-node** service (from GitHub repo).

## 2. Set Environment Variables on API Service

In Railway API service variables, set:
- `DATABASE_URL` = `${{Postgres.DATABASE_URL}}` (select from PostgreSQL service reference)
- `PORT` = `8080`
- `API_AUTH_TOKEN` = strong random secret
- `DATA_ENCRYPTION_KEY` = base64 32-byte key
- `SESSION_SECRET` = strong random secret
- `CORS_ALLOWED_ORIGINS` = your web app URL

## 3. Build/Start Commands

Use these commands in Railway for `api-node`:

- Build Command:
```bash
npm ci && npm run generate && npm run build
```

- Start Command:
```bash
npm run migrate:deploy && npm run start
```

`migrate:deploy` will create/update DB tables from migration files.

## 4. Verify Migration

After deploy, check Railway logs for lines similar to:
- `prisma migrate deploy`
- `Applying migration ...`
- `No pending migrations` (on subsequent deploys)

## Notes

- Do not run `prisma migrate dev` in Railway production.
- `migrate deploy` is the correct command for production/staging.
- Schema source of truth remains: `api-node/prisma/schema.prisma`.
