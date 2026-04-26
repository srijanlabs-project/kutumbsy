import { NextRequest, NextResponse } from "next/server";
import { readJsonSafely, writeSessionCookie } from "../shared";

const apiUrl = process.env.KUTUMBSY_API_URL ?? "http://localhost:8080";

export async function POST(request: NextRequest) {
  try {
    const body = await request.text();
    const response = await fetch(`${apiUrl}/api/v1/auth/register-user`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body,
      cache: "no-store",
    });

    const payload = ((await readJsonSafely(response)) ?? {
      error: "empty response from auth service",
    }) as { data?: { token?: string } };
    const nextResponse = NextResponse.json(payload, {
      status: response.status,
    });

    if (response.ok && payload.data?.token) {
      writeSessionCookie(nextResponse, payload.data.token);
    }

    return nextResponse;
  } catch (error) {
    const message = error instanceof Error ? error.message : "unable to reach auth service";
    return NextResponse.json({ error: message }, { status: 502 });
  }
}
