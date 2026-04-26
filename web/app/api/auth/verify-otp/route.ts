import { NextRequest, NextResponse } from "next/server";
import { readJsonSafely, writeSessionCookie } from "../shared";

const apiUrl = process.env.KUTUMBSY_API_URL ?? "http://localhost:8080";

const normalizeMobile = (value: unknown) => {
  const raw = typeof value === "string" ? value : String(value ?? "");
  const digits = raw.replace(/\D/g, "");
  if (digits.length > 10 && digits.startsWith("91")) {
    return digits.slice(-10);
  }
  return digits;
};

const normalizeOtp = (value: unknown) => {
  const raw = typeof value === "string" ? value : String(value ?? "");
  return raw.replace(/\s/g, "");
};

export async function POST(request: NextRequest) {
  try {
    const inputPayload = (await request.json().catch(() => null)) as { mobileNumber?: unknown; otp?: unknown } | null;
    if (!inputPayload || typeof inputPayload !== "object") {
      return NextResponse.json({ error: "invalid request body" }, { status: 400 });
    }

    const body = JSON.stringify({
      ...inputPayload,
      mobileNumber: normalizeMobile(inputPayload.mobileNumber),
      otp: normalizeOtp(inputPayload.otp),
    });
    const response = await fetch(`${apiUrl}/api/v1/auth/verify-otp`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body,
      cache: "no-store",
    });

    const responsePayload = ((await readJsonSafely(response)) ?? {
      error: "empty response from auth service",
    }) as { data?: { token?: string } };

    const nextResponse = NextResponse.json(responsePayload, {
      status: response.status,
    });

    if (response.ok && responsePayload.data?.token) {
      writeSessionCookie(nextResponse, responsePayload.data.token);
    }

    return nextResponse;
  } catch (error) {
    const message = error instanceof Error ? error.message : "unable to reach auth service";
    return NextResponse.json({ error: message }, { status: 502 });
  }
}
