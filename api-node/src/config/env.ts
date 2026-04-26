const required = (name: string): string => {
  const value = process.env[name];
  if (!value || !value.trim()) {
    throw new Error(`missing required env var: ${name}`);
  }
  return value.trim();
};

const parseNumber = (name: string, fallback: number): number => {
  const raw = process.env[name];
  if (!raw) {
    return fallback;
  }
  const parsed = Number(raw);
  if (!Number.isFinite(parsed) || parsed <= 0) {
    throw new Error(`invalid numeric env var: ${name}`);
  }
  return parsed;
};

const parseEncryptionKey = (raw: string): Buffer => {
  const key = Buffer.from(raw, "base64");
  if (key.length !== 32) {
    throw new Error("DATA_ENCRYPTION_KEY must be base64 for exactly 32 bytes");
  }
  return key;
};

const parseOrigins = (raw: string): string[] =>
  raw
    .split(",")
    .map((origin) => origin.trim())
    .filter(Boolean);

const parseFixedOtpCode = (raw: string): string => {
  const value = raw.trim();
  if (!/^[0-9]{4,8}$/.test(value)) {
    throw new Error("OTP_FIXED_CODE must contain 4 to 8 digits");
  }
  return value;
};

const apiAuthToken = required("API_AUTH_TOKEN");
if (apiAuthToken.length < 32) {
  throw new Error("API_AUTH_TOKEN must be at least 32 characters");
}

const dataEncryptionKeyRaw = required("DATA_ENCRYPTION_KEY");
const dataEncryptionKey = parseEncryptionKey(dataEncryptionKeyRaw);

const corsAllowedOrigins = parseOrigins(required("CORS_ALLOWED_ORIGINS"));
if (corsAllowedOrigins.length === 0) {
  throw new Error("CORS_ALLOWED_ORIGINS must include at least one origin");
}

const sessionSecret = required("SESSION_SECRET");
if (sessionSecret.length < 32) {
  throw new Error("SESSION_SECRET must be at least 32 characters");
}

export const env = {
  port: parseNumber("PORT", 8080),
  databaseUrl: required("DATABASE_URL"),
  apiAuthToken,
  dataEncryptionKey,
  corsAllowedOrigins,
  sessionSecret,
  sessionTtlSeconds: parseNumber("SESSION_TTL_SECONDS", 60 * 60 * 24 * 7),
  rateLimitWindowMs: parseNumber("RATE_LIMIT_WINDOW_MS", 60_000),
  rateLimitMaxRequests: parseNumber("RATE_LIMIT_MAX_REQUESTS", 120),
  otpProvider: (process.env.OTP_PROVIDER ?? "mock").trim().toLowerCase(),
  otpFixedCode: parseFixedOtpCode(process.env.OTP_FIXED_CODE ?? "123456"),
  msg91BaseUrl: process.env.MSG91_BASE_URL?.trim() || "https://control.msg91.com/api/v5/",
  msg91AuthKey: process.env.MSG91_AUTH_KEY?.trim() || "",
  msg91OtpTemplateId: process.env.MSG91_OTP_TEMPLATE_ID?.trim() || "",
  msg91CountryCode: process.env.MSG91_COUNTRY_CODE?.trim() || "91",
};
