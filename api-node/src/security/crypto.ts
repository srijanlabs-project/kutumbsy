import crypto from "node:crypto";
import { env } from "../config/env.js";

const PREFIX = "enc:v1:";

export const isEncryptedValue = (value: string): boolean => value.startsWith(PREFIX);

export const encryptText = (plainText: string): string => {
  const iv = crypto.randomBytes(12);
  const cipher = crypto.createCipheriv("aes-256-gcm", env.dataEncryptionKey, iv);
  const encrypted = Buffer.concat([cipher.update(plainText, "utf8"), cipher.final()]);
  const tag = cipher.getAuthTag();
  const payload = Buffer.concat([iv, tag, encrypted]).toString("base64");
  return `${PREFIX}${payload}`;
};

export const decryptText = (cipherText: string): string => {
  const payload = cipherText.slice(PREFIX.length);
  const raw = Buffer.from(payload, "base64");
  const iv = raw.subarray(0, 12);
  const tag = raw.subarray(12, 28);
  const encrypted = raw.subarray(28);
  const decipher = crypto.createDecipheriv("aes-256-gcm", env.dataEncryptionKey, iv);
  decipher.setAuthTag(tag);
  const decrypted = Buffer.concat([decipher.update(encrypted), decipher.final()]);
  return decrypted.toString("utf8");
};

export const protectNullableText = (value?: string | null): string | null =>
  value && value.trim() ? encryptText(value.trim()) : null;

export const revealNullableText = (value?: string | null): string | null => {
  if (!value) {
    return null;
  }

  if (!isEncryptedValue(value)) {
    return value;
  }

  return decryptText(value);
};
