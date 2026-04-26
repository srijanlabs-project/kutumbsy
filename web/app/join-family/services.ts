import { ApiPayload, Family, OtpForm, RegisterForm, RequestedRole, SessionData } from "./types";
import { parseJson } from "./helpers";

async function readPayload<T>(response: Response): Promise<ApiPayload<T>> {
  return parseJson<ApiPayload<T>>(await response.text());
}

export async function loadJoinFamilyBootstrap(): Promise<{
  session: ApiPayload<SessionData>;
  families: ApiPayload<Family[]>;
}> {
  const [sessionResponse, familiesResponse] = await Promise.all([
    fetch("/api/auth/me", { cache: "no-store" }),
    fetch("/api/families?scope=discover", { cache: "no-store" }),
  ]);

  const session = sessionResponse.ok ? await readPayload<SessionData>(sessionResponse) : {};
  const families = familiesResponse.ok ? await readPayload<Family[]>(familiesResponse) : {};
  return { session, families };
}

export async function registerJoinUser(registerForm: RegisterForm): Promise<{ ok: boolean; payload: ApiPayload<SessionData> }> {
  const response = await fetch("/api/auth/register-user", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(registerForm),
  });

  return { ok: response.ok, payload: await readPayload<SessionData>(response) };
}

export async function sendJoinOtp(mobileNumber: string): Promise<{ ok: boolean; payload: ApiPayload<{ message?: string }> }> {
  const response = await fetch("/api/auth/send-otp", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ mobileNumber }),
  });

  return { ok: response.ok, payload: await readPayload<{ message?: string }>(response) };
}

export async function verifyJoinOtp(otpForm: OtpForm): Promise<{ ok: boolean; payload: ApiPayload<SessionData> }> {
  const response = await fetch("/api/auth/verify-otp", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(otpForm),
  });

  return { ok: response.ok, payload: await readPayload<SessionData>(response) };
}

export async function resendJoinOtp(mobileNumber: string): Promise<{ ok: boolean; payload: ApiPayload<{ message?: string }> }> {
  const response = await fetch("/api/auth/resend-otp", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ mobileNumber }),
  });

  return { ok: response.ok, payload: await readPayload<{ message?: string }>(response) };
}

export async function requestJoinAccess(params: {
  workspaceIdentifier: string;
  requestedRole: RequestedRole;
  message?: string;
}): Promise<{ ok: boolean; payload: ApiPayload<{ id: string; familyName: string }> }> {
  const response = await fetch("/api/join-requests", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(params),
  });

  return { ok: response.ok, payload: await readPayload<{ id: string; familyName: string }>(response) };
}
