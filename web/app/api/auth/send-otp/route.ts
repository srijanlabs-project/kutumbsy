import { NextRequest, NextResponse } from "next/server";
import { readJsonSafely } from "../shared";

const apiUrl = process.env.KUTUMBSY_API_URL ?? "http://localhost:8080";

const normalizeMobile = (value: unknown) => {
  const raw = typeof value === "string" ? value : String(value ?? "");
  const digits = raw.replace(/\D/g, "");
  if (digits.length > 10 && digits.startsWith("91")) {
    return digits.slice(-10);
  }
  return digits;
};

export async function POST(request: NextRequest) {
  try {
    const inputPayload = (await request.json().catch(() => null)) as { mobileNumber?: unknown } | null;
    if (!inputPayload || typeof inputPayload !== "object") {
      return NextResponse.json({ error: "invalid request body" }, { status: 400 });
    }

    const body = JSON.stringify({
      ...inputPayload,
      mobileNumber: normalizeMobile(inputPayload.mobileNumber),
    });
    const response = await fetch(`${apiUrl}/api/v1/auth/send-otp`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body,
      cache: "no-store",
    });

    const responsePayload = (await readJsonSafely(response)) ?? { error: "empty response from auth service" };
    return NextResponse.json(responsePayload, { status: response.status });
  } catch (error) {
    const message = error instanceof Error ? error.message : "unable to reach auth service";
    return NextResponse.json({ error: message }, { status: 502 });
  }
}
