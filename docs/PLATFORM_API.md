# Platform API Modules

Base path: `/api/v1/platform`

## Tenant Management

- `GET /tenants`
- `POST /tenants`
- `PATCH /tenants/:id/status` (`active` or `suspended`)

## Subscription & Plans

- `GET /plans`
- `POST /plans`
- `GET /plans/subscriptions`
- `POST /plans/subscriptions`
- `PATCH /plans/subscriptions/:id`

## Lead Management

- `GET /leads?status=&stage=`
- `POST /leads`
- `PATCH /leads/:id`

## Platform RBAC Templates

- `GET /rbac/templates`
- `POST /rbac/templates`
- `PATCH /rbac/templates/:id`

## User Guide & FAQs

- `GET /content/faqs?category=&published=`
- `POST /content/faqs`
- `PATCH /content/faqs/:id`

## System Settings

- `GET /settings`
- `PUT /settings`

## Notes

- All modules are persisted via Prisma/PostgreSQL.
- Migration added: `api-node/prisma/migrations/20260325090000_platform_modules`.

## Security Checklist Status

- GET /security/checklist`r

