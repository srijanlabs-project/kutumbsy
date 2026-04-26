# Security Baseline (Strict Mode)

This backend now runs in strict security mode for sensitive family/person data.

## Enforced Controls

- Mandatory bearer authentication for all `/api/v1/**` routes.
- CORS allowlist only (`CORS_ALLOWED_ORIGINS`).
- Rate limiting per IP and path.
- Security response headers (`nosniff`, frame deny, strict referrer policy).
- Request JSON size limit (`256kb`) to reduce abuse surface.
- UUID validation for route params that reference records.
- Centralized 500 response handling without stack trace leaks.
- Encryption at rest (`AES-256-GCM`) for sensitive text fields.

## Required Environment Variables

- `API_AUTH_TOKEN` (minimum 32 chars)
- `DATA_ENCRYPTION_KEY` (base64 encoded 32-byte key)
- `CORS_ALLOWED_ORIGINS` (comma separated)
- `RATE_LIMIT_WINDOW_MS`
- `RATE_LIMIT_MAX_REQUESTS`

## Sensitive Fields Encrypted

- Family: `createdByPhone`
- Person: `fullName`, `photoUrl`, `nativeVillage`, `gotra`, `kuldevta`, `community`, `education`, `occupation`, `notes`
- Tenant: `contactName`, `contactEmail`, `contactPhone`
- Lead: `companyName`, `contactName`, `contactEmail`, `contactPhone`, `city`, `assignedTo`, `notes`

## Important Notes

- Existing plaintext rows remain readable; newly written values are encrypted.
- API responses return decrypted values only for authenticated callers.
- Rotate `API_AUTH_TOKEN` and `DATA_ENCRYPTION_KEY` using secure secret management in production.
