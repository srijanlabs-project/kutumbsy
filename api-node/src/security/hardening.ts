import type { NextFunction, Request, Response } from "express";
import { env } from "../config/env.js";

type Counter = {
  count: number;
  resetAt: number;
};

const counters = new Map<string, Counter>();

setInterval(() => {
  const now = Date.now();
  for (const [key, counter] of counters.entries()) {
    if (counter.resetAt <= now) {
      counters.delete(key);
    }
  }
}, 30_000).unref();

const clientKey = (req: Request): string => {
  const forwarded = req.headers["x-forwarded-for"];
  if (typeof forwarded === "string" && forwarded.length > 0) {
    return forwarded.split(",")[0]?.trim() ?? req.ip;
  }
  return req.ip || "unknown";
};

export const strictSecurityHeaders = (_req: Request, res: Response, next: NextFunction): void => {
  res.setHeader("X-Content-Type-Options", "nosniff");
  res.setHeader("X-Frame-Options", "DENY");
  res.setHeader("Referrer-Policy", "no-referrer");
  res.setHeader("Permissions-Policy", "camera=(), microphone=(), geolocation=()");
  res.setHeader("X-DNS-Prefetch-Control", "off");
  next();
};

export const strictCors = (req: Request, res: Response, next: NextFunction): void => {
  const origin = req.headers.origin;
  if (!origin) {
    next();
    return;
  }

  if (!env.corsAllowedOrigins.includes(origin)) {
    res.status(403).json({ error: "origin not allowed" });
    return;
  }

  res.setHeader("Access-Control-Allow-Origin", origin);
  res.setHeader("Vary", "Origin");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,PATCH,PUT,DELETE,OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Authorization,Content-Type");
  res.setHeader("Access-Control-Allow-Credentials", "true");

  if (req.method === "OPTIONS") {
    res.status(204).end();
    return;
  }

  next();
};

export const strictRateLimit = (req: Request, res: Response, next: NextFunction): void => {
  const key = `${clientKey(req)}:${req.path}`;
  const now = Date.now();
  const current = counters.get(key);

  if (!current || current.resetAt <= now) {
    counters.set(key, {
      count: 1,
      resetAt: now + env.rateLimitWindowMs,
    });
    next();
    return;
  }

  current.count += 1;
  if (current.count > env.rateLimitMaxRequests) {
    res.status(429).json({ error: "too many requests" });
    return;
  }

  next();
};
