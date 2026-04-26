import { Request, Response, Router } from "express";
import { z } from "zod";
import prisma from "../db.js";
import { env } from "../config/env.js";
import { createSessionToken, verifySessionToken } from "../security/session.js";
import { isOtpProviderConfigured, sendOtp, verifyOtp } from "../services/otp.js";

const router = Router();

const sanitizeMobile = (value: string): string => value.replace(/\D/g, "");
const extractFirstIssue = (error: z.ZodError) => error.issues[0]?.message ?? "invalid request body";

const mobileSchema = z
  .string()
  .trim()
  .transform((value) => sanitizeMobile(value))
  .refine((value) => /^[0-9]{10}$/.test(value), "mobile number must contain exactly 10 digits");

const registerSchema = z.object({
  fullName: z.string().min(2),
  mobileNumber: mobileSchema,
});

const sendOtpSchema = z.object({
  mobileNumber: mobileSchema,
});

const verifyOtpSchema = z.object({
  mobileNumber: mobileSchema,
  otp: z.string().trim().regex(/^[0-9]{4,8}$/, "otp must contain 4 to 8 digits"),
});

const resendCooldownMs = 30_000;
const resendBlockWindowMs = 120 * 60_000;
const maxResendAttempts = 4;

type ResendGuardState = {
  attempts: number;
  lastSentAt: number | null;
  blockedUntil: number | null;
};

const resendGuard = new Map<string, ResendGuardState>();

const getResendState = (mobileNumber: string): ResendGuardState =>
  resendGuard.get(mobileNumber) ?? {
    attempts: 0,
    lastSentAt: null,
    blockedUntil: null,
  };

const setResendState = (mobileNumber: string, state: ResendGuardState) => {
  resendGuard.set(mobileNumber, state);
};

const clearResendState = (mobileNumber: string) => {
  resendGuard.delete(mobileNumber);
};

const getRetryAfterSeconds = (until: number, now: number): number => Math.max(1, Math.ceil((until - now) / 1000));

const sendOtpToRegisteredUser = async (mobileNumber: string) => {
  if (!isOtpProviderConfigured()) {
    return { status: 500, error: "otp provider is not configured" };
  }

  const user = await prisma.user.findUnique({ where: { mobileNumber } });
  if (!user) {
    return { status: 404, error: "mobile number is not registered" };
  }

  const result = await sendOtp(mobileNumber);
  if (!result.ok) {
    return { status: 502, error: result.message };
  }

  return {
    status: 200,
    data: {
      sent: true,
      message: result.message,
    },
  };
};

const enforceResendPolicy = (mobileNumber: string) => {
  const now = Date.now();
  const state = getResendState(mobileNumber);

  if (state.blockedUntil && state.blockedUntil > now) {
    return {
      allowed: false as const,
      retryAfterSeconds: getRetryAfterSeconds(state.blockedUntil, now),
      message: "Resend limit reached. Try again later.",
    };
  }

  if (state.blockedUntil && state.blockedUntil <= now) {
    state.attempts = 0;
    state.blockedUntil = null;
    state.lastSentAt = null;
  }

  if (state.lastSentAt && now - state.lastSentAt < resendCooldownMs) {
    return {
      allowed: false as const,
      retryAfterSeconds: getRetryAfterSeconds(state.lastSentAt + resendCooldownMs, now),
      message: "Please wait before requesting another OTP.",
    };
  }

  if (state.attempts >= maxResendAttempts) {
    state.blockedUntil = now + resendBlockWindowMs;
    setResendState(mobileNumber, state);
    return {
      allowed: false as const,
      retryAfterSeconds: getRetryAfterSeconds(state.blockedUntil, now),
      message: "Resend limit reached. Try again later.",
    };
  }

  return {
    allowed: true as const,
    state,
  };
};

const buildAuthResponse = async (userId: string) => {
  const user = await prisma.user.findUnique({
    where: { id: userId },
    include: {
      memberships: {
        where: { status: "active" },
        include: { family: true },
      },
    },
  });

  if (!user) {
    return null;
  }

  const token = createSessionToken({
    sub: user.id,
    mobileNumber: user.mobileNumber,
    issuedAt: Date.now(),
    expiresAt: Date.now() + env.sessionTtlSeconds * 1000,
  });

  return {
    token,
    user: {
      id: user.id,
      fullName: user.fullName,
      mobileNumber: user.mobileNumber,
    },
    memberships: user.memberships.map((membership) => ({
      familyId: membership.familyId,
      familyName: membership.family.name,
      familySlug: membership.family.slug,
      familyCode: membership.family.familyCode,
      role: membership.role,
    })),
  };
};

const registerPlatformUser = async (req: Request, res: Response) => {
  const parsed = registerSchema.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: extractFirstIssue(parsed.error) });
    return;
  }

  const input = parsed.data;
  const mobileNumber = input.mobileNumber;

  const existingUser = await prisma.user.findUnique({ where: { mobileNumber } });
  if (existingUser) {
    res.status(409).json({ error: "mobile number already registered" });
    return;
  }

  try {
    const user = await prisma.user.create({
      data: {
        fullName: input.fullName.trim(),
        mobileNumber,
        passwordHash: null,
      },
    });

    res.status(201).json({
      data: await buildAuthResponse(user.id),
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : "failed to register platform user";
    res.status(500).json({ error: message });
  }
};

router.post("/register-user", registerPlatformUser);
router.post("/register-admin", registerPlatformUser);

router.post("/send-otp", async (req, res) => {
  const parsed = sendOtpSchema.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: extractFirstIssue(parsed.error) });
    return;
  }

  const mobileNumber = parsed.data.mobileNumber;
  clearResendState(mobileNumber);
  const result = await sendOtpToRegisteredUser(mobileNumber);
  if ("error" in result) {
    res.status(result.status).json({ error: result.error });
    return;
  }

  res.status(result.status).json({ data: result.data });
});

router.post("/resend-otp", async (req, res) => {
  const parsed = sendOtpSchema.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: extractFirstIssue(parsed.error) });
    return;
  }

  const mobileNumber = parsed.data.mobileNumber;
  const resendPolicy = enforceResendPolicy(mobileNumber);
  if (!resendPolicy.allowed) {
    res.status(429).json({
      error: resendPolicy.message,
      retryAfterSeconds: resendPolicy.retryAfterSeconds,
    });
    return;
  }

  const result = await sendOtpToRegisteredUser(mobileNumber);
  if ("error" in result) {
    res.status(result.status).json({ error: result.error });
    return;
  }

  resendPolicy.state.attempts += 1;
  resendPolicy.state.lastSentAt = Date.now();
  setResendState(mobileNumber, resendPolicy.state);

  res.status(result.status).json({
    data: {
      ...result.data,
      message: "OTP resent successfully.",
    },
  });
});

router.post("/verify-otp", async (req, res) => {
  const parsed = verifyOtpSchema.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: extractFirstIssue(parsed.error) });
    return;
  }

  const mobileNumber = parsed.data.mobileNumber;
  const result = await verifyOtp(mobileNumber, parsed.data.otp);
  if (!result.ok) {
    res.status(401).json({ error: result.message });
    return;
  }

  const user = await prisma.user.findUnique({ where: { mobileNumber } });
  if (!user) {
    res.status(404).json({ error: "mobile number is not registered" });
    return;
  }

  if (user.status !== "active") {
    res.status(403).json({ error: "user is not active" });
    return;
  }

  await prisma.user.update({
    where: { id: user.id },
    data: {
      phoneVerifiedAt: new Date(),
    },
  });
  clearResendState(mobileNumber);

  const data = await buildAuthResponse(user.id);
  if (!data) {
    res.status(404).json({ error: "user not found" });
    return;
  }

  res.json({
    data,
  });
});

router.post("/login", async (req, res) => {
  res.status(410).json({
    error: "password login has been replaced by OTP login. Use /send-otp and /verify-otp.",
  });
});

router.get("/me", async (req, res) => {
  const header = req.headers.authorization;
  if (!header || !header.startsWith("Bearer ")) {
    res.status(401).json({ error: "unauthorized" });
    return;
  }

  const payload = verifySessionToken(header.slice("Bearer ".length).trim());
  if (!payload) {
    res.status(401).json({ error: "invalid session token" });
    return;
  }

  const user = await prisma.user.findUnique({
    where: { id: payload.sub },
    include: {
      memberships: {
        where: { status: "active" },
        include: { family: true },
      },
    },
  });

  if (!user) {
    res.status(404).json({ error: "user not found" });
    return;
  }

  res.json({
    data: {
      user: {
        id: user.id,
        fullName: user.fullName,
        mobileNumber: user.mobileNumber,
      },
      memberships: user.memberships.map((membership) => ({
        familyId: membership.familyId,
        familyName: membership.family.name,
        familySlug: membership.family.slug,
        familyCode: membership.family.familyCode,
        role: membership.role,
      })),
    },
  });
});

export default router;
