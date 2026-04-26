import { NextRequest, NextResponse } from "next/server";
import { requireSessionToken } from "../../../auth/shared";

const apiUrl = process.env.KUTUMBSY_API_URL ?? "http://localhost:8080";

const proxy = async (request: NextRequest, path: string, init?: RequestInit) => {
  const authResult = requireSessionToken(request);
  if (!authResult.ok) {
    return authResult.response;
  }

  const authToken = authResult.token;

  try {
    const response = await fetch(`${apiUrl}${path}`, {
      ...init,
      headers: {
        Authorization: `Bearer ${authToken}`,
        "Content-Type": "application/json",
        ...(init?.headers ?? {}),
      },
      cache: "no-store",
    });

    const text = await response.text();

    return new NextResponse(text, {
      status: response.status,
      headers: { "Content-Type": response.headers.get("content-type") ?? "application/json" },
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Upstream API request failed";
    return NextResponse.json(
      { error: "Unable to reach family service", detail: message },
      { status: 502 },
    );
  }
};

type RouteContext = {
  params: Promise<{ id: string }>;
};

export async function GET(_request: NextRequest, context: RouteContext) {
  const { id } = await context.params;
  const query = _request.nextUrl.searchParams.toString();
  return proxy(_request, `/api/v1/families/${id}/people${query ? `?${query}` : ""}`, { method: "GET" });
}

export async function POST(request: NextRequest, context: RouteContext) {
  const { id } = await context.params;
  const body = await request.text();
  return proxy(request, `/api/v1/families/${id}/people`, {
    method: "POST",
    body,
  });
}


