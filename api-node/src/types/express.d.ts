import "express";

declare global {
  namespace Express {
    interface Request {
      authContext?: {
        kind: "api" | "session";
        userId?: string;
        mobileNumber?: string;
      };
    }
  }
}

export {};
