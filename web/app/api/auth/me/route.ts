import { NextRequest, NextResponse } from "next/server";
import { readJsonSafely, readSessionToken } from "../shared";

const apiUrl = process.env.KUTUMBSY_API_URL ?? "http://localhost:8080";

export async function GET(request: NextRequest) {
  const token = readSessionToken(request);
  if (!token) {
    return NextResponse.json({ error: "not logged in" }, { status: 401 });
  }

  try {
    const response = await fetch(`${apiUrl}/api/v1/auth/me`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      cache: "no-store",
    });

    const payload = (await readJsonSafely(response)) ?? { error: "empty response from auth service" };
    return NextResponse.json(payload, { status: response.status });
  } catch (error) {
    const message = error instanceof Error ? error.message : "unable to reach auth service";
    return NextResponse.json({ error: message }, { status: 502 });
  }
}
