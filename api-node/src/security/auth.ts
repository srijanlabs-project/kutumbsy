import crypto from "node:crypto";
import type { NextFunction, Request, Response } from "express";
import { env } from "../config/env.js";
import { verifySessionToken } from "./session.js";

const unauthorized = (res: Response) => {
  res.status(401).json({ error: "unauthorized" });
};

const safeEqual = (a: string, b: string): boolean => {
  const aBuffer = Buffer.from(a);
  const bBuffer = Buffer.from(b);
  if (aBuffer.length !== bBuffer.length) {
    return false;
  }
  return crypto.timingSafeEqual(aBuffer, bBuffer);
};

export const requireApiAuth = (req: Request, res: Response, next: NextFunction): void => {
  const header = req.headers.authorization;
  if (!header || !header.startsWith("Bearer ")) {
    unauthorized(res);
    return;
  }

  const token = header.slice("Bearer ".length).trim();
  if (safeEqual(token, env.apiAuthToken)) {
    req.authContext = { kind: "api" };
    next();
    return;
  }

  const session = verifySessionToken(token);
  if (!session) {
    unauthorized(res);
    return;
  }

  req.authContext = {
    kind: "session",
    userId: session.sub,
    mobileNumber: session.mobileNumber,
  };
  next();
};
