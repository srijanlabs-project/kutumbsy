import { NextRequest, NextResponse } from "next/server";

export const SESSION_COOKIE = "kutumbsy_session";
export const ACTIVE_WORKSPACE_COOKIE = "kutumbsy_active_workspace";
const useSecureCookies = process.env.COOKIE_SECURE === "true";
const sessionMaxAgeSeconds = 60 * 60 * 24 * 7;
const activeWorkspaceMaxAgeSeconds = 60 * 60 * 24 * 30;

export const readSessionToken = (request: NextRequest): string | null =>
  request.cookies.get(SESSION_COOKIE)?.value ?? null;

export const writeSessionCookie = (response: NextResponse, token: string) => {
  response.cookies.set(SESSION_COOKIE, token, {
    httpOnly: true,
    sameSite: "lax",
    secure: useSecureCookies,
    path: "/",
    maxAge: sessionMaxAgeSeconds,
    priority: "high",
  });
};

export const clearSessionCookie = (response: NextResponse) => {
  response.cookies.set(SESSION_COOKIE, "", {
    httpOnly: true,
    sameSite: "lax",
    secure: useSecureCookies,
    path: "/",
    maxAge: 0,
    priority: "high",
  });
};

export const readActiveWorkspace = (request: NextRequest): string | null =>
  request.cookies.get(ACTIVE_WORKSPACE_COOKIE)?.value ?? null;

export const writeActiveWorkspace = (response: NextResponse, familyId: string) => {
  response.cookies.set(ACTIVE_WORKSPACE_COOKIE, familyId, {
    httpOnly: true,
    sameSite: "lax",
    secure: useSecureCookies,
    path: "/",
    maxAge: activeWorkspaceMaxAgeSeconds,
    priority: "high",
  });
};

export const clearActiveWorkspace = (response: NextResponse) => {
  response.cookies.set(ACTIVE_WORKSPACE_COOKIE, "", {
    httpOnly: true,
    sameSite: "lax",
    secure: useSecureCookies,
    path: "/",
    maxAge: 0,
    priority: "high",
  });
};

export const requireSessionToken = (
  request: NextRequest,
): { ok: true; token: string } | { ok: false; response: NextResponse } => {
  const token = readSessionToken(request);
  if (!token) {
    return {
      ok: false,
      response: NextResponse.json({ error: "login required" }, { status: 401 }),
    };
  }

  return { ok: true, token };
};

export const readJsonSafely = async <T>(response: Response): Promise<T | null> => {
  const raw = await response.text();
  if (!raw.trim()) {
    return null;
  }

  try {
    return JSON.parse(raw) as T;
  } catch {
    return null;
  }
};
