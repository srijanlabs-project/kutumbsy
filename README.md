# Kutumbsy

Kutumbsy is the initial product workspace for building a digital family legacy platform for Indian families.

## Workspace Structure

- `web`: Next.js frontend for the consumer app
- `api`: Go backend for auth, family graph, profiles, media, and exports
- `docs`: product requirements and setup notes

## Planned Stack

- Frontend: Next.js, React, TypeScript, Tailwind CSS
- Backend: Go, Gin, PostgreSQL
- Storage: S3/R2 compatible object storage
- Auth: OTP-first mobile login

## Getting Started

Frontend:

```powershell
cd D:\Kutumbsy\web
npm.cmd run dev
```

Backend:

```powershell
cd D:\Kutumbsy\api
$env:POSTGRES_DSN="postgres://postgres:<password>@localhost:5432/kutumbsy?sslmode=disable"
go run ./cmd/server
```

## Database Setup

1. Ensure PostgreSQL is running locally on port `5432`.
2. Create database `kutumbsy`.
3. Set `POSTGRES_DSN` before starting the API.
4. The API auto-runs SQL migrations from `api/migrations` on startup.

Schema reference:
- `docs/DB_SCHEMA.md` (family-space and platform table design)
- `api-node/prisma/schema.prisma` (Prisma source of truth)
- `docs/RAILWAY_DB_SETUP.md` (Railway PostgreSQL deployment setup)

## Initial Scope

- Family onboarding and creation
- Family graph and relationships
- Person profiles with Indian context fields
- Memory vault and storytelling foundations
- Privacy-first access control
## Node Backend (Planned Default)

We now have a Node + Prisma backend scaffold in `D:\Kutumbsy\api-node`.

Setup:

```powershell
cd D:\Kutumbsy\api-node
npm.cmd install
copy .env.example .env
# set DATABASE_URL in .env
npm.cmd run migrate -- --name init
npm.cmd run dev
```

The existing Go backend in `D:\Kutumbsy\api` remains for reference until we fully switch.
