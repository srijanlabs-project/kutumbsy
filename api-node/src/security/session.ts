import crypto from "node:crypto";
import { env } from "../config/env.js";

type SessionPayload = {
  sub: string;
  mobileNumber: string;
  issuedAt: number;
  expiresAt: number;
};

const encode = (value: Buffer | string): string =>
  Buffer.from(value)
    .toString("base64")
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/g, "");

const decode = (value: string): Buffer => {
  const normalized = value.replace(/-/g, "+").replace(/_/g, "/");
  const padding = normalized.length % 4 === 0 ? "" : "=".repeat(4 - (normalized.length % 4));
  return Buffer.from(`${normalized}${padding}`, "base64");
};

export const createSessionToken = (payload: SessionPayload): string => {
  const serializedPayload = JSON.stringify(payload);
  const encodedPayload = encode(serializedPayload);
  const signature = crypto.createHmac("sha256", env.sessionSecret).update(encodedPayload).digest();
  return `${encodedPayload}.${encode(signature)}`;
};

export const verifySessionToken = (token: string): SessionPayload | null => {
  const [encodedPayload, encodedSignature] = token.split(".");
  if (!encodedPayload || !encodedSignature) {
    return null;
  }

  const expectedSignature = crypto.createHmac("sha256", env.sessionSecret).update(encodedPayload).digest();
  const providedSignature = decode(encodedSignature);

  if (expectedSignature.length !== providedSignature.length) {
    return null;
  }

  if (!crypto.timingSafeEqual(expectedSignature, providedSignature)) {
    return null;
  }

  try {
    const payload = JSON.parse(decode(encodedPayload).toString("utf8")) as SessionPayload;
    if (!payload.sub || !payload.mobileNumber || !payload.issuedAt || !payload.expiresAt) {
      return null;
    }

    if (!Number.isFinite(payload.issuedAt) || !Number.isFinite(payload.expiresAt)) {
      return null;
    }

    if (payload.expiresAt <= payload.issuedAt) {
      return null;
    }

    if (payload.issuedAt > Date.now() + 5 * 60_000) {
      return null;
    }

    if (Date.now() >= payload.expiresAt) {
      return null;
    }
    return payload;
  } catch {
    return null;
  }
};
