import {
  ActiveWorkspaceResponse,
  AuthResponse,
  FamilySpaceResponse,
  OtpForm,
  RegisterForm,
  WorkspaceForm,
} from "./types";

async function readJson<T>(response: Response): Promise<T> {
  return (await response.json()) as T;
}

export async function loadSessionAndActiveWorkspace(): Promise<{
  session: AuthResponse;
  activeWorkspace: ActiveWorkspaceResponse;
}> {
  const [sessionResponse, activeWorkspaceResponse] = await Promise.all([
    fetch("/api/auth/me", { cache: "no-store" }),
    fetch("/api/auth/active-workspace", { cache: "no-store" }),
  ]);

  const session = sessionResponse.ok ? await readJson<AuthResponse>(sessionResponse) : {};
  const activeWorkspace = activeWorkspaceResponse.ok
    ? await readJson<ActiveWorkspaceResponse>(activeWorkspaceResponse)
    : {};

  return { session, activeWorkspace };
}

export async function registerUser(registerForm: RegisterForm): Promise<AuthResponse> {
  const response = await fetch("/api/auth/register-user", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(registerForm),
  });

  const payload = await readJson<AuthResponse>(response);
  if (!response.ok) {
    throw new Error(payload.error ?? "Unable to create family account");
  }

  return payload;
}

export async function sendOtp(mobileNumber: string): Promise<AuthResponse & { data?: { message?: string } }> {
  const response = await fetch("/api/auth/send-otp", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ mobileNumber }),
  });

  const payload = await readJson<AuthResponse & { data?: { message?: string } }>(response);
  if (!response.ok) {
    throw new Error(payload.error ?? "Unable to send OTP");
  }

  return payload;
}

export async function resendOtp(mobileNumber: string): Promise<{
  ok: boolean;
  payload: AuthResponse & { data?: { message?: string } };
}> {
  const response = await fetch("/api/auth/resend-otp", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ mobileNumber }),
  });

  const payload = await readJson<AuthResponse & { data?: { message?: string } }>(response);
  return { ok: response.ok, payload };
}

export async function verifyOtp(otpForm: OtpForm): Promise<AuthResponse> {
  const response = await fetch("/api/auth/verify-otp", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(otpForm),
  });

  const payload = await readJson<AuthResponse>(response);
  if (!response.ok) {
    throw new Error(payload.error ?? "Unable to verify OTP");
  }

  return payload;
}

export async function createFamilySpace(workspaceForm: WorkspaceForm): Promise<FamilySpaceResponse> {
  const response = await fetch("/api/families", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: workspaceForm.name,
      nativePlace: workspaceForm.nativePlace || undefined,
      description: workspaceForm.description || undefined,
      initialAdminName: workspaceForm.initialAdminName,
      initialAdminMobileNumber: workspaceForm.initialAdminMobileNumber,
    }),
  });

  const payload = await readJson<FamilySpaceResponse>(response);
  if (!response.ok) {
    throw new Error(payload.error ?? "Unable to create Family Space");
  }

  return payload;
}

export async function setActiveWorkspace(familyId: string): Promise<void> {
  await fetch("/api/auth/active-workspace", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ familyId }),
  });
}

export async function logout(): Promise<void> {
  await fetch("/api/auth/logout", { method: "POST" });
}
