import { NextRequest, NextResponse } from "next/server";
import { requireSessionToken } from "../../../../auth/shared";

const apiUrl = process.env.KUTUMBSY_API_URL ?? "http://localhost:8080";

type RouteContext = {
  params: Promise<{ id: string; relationshipId: string }>;
};

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

export async function PATCH(request: NextRequest, context: RouteContext) {
  const { id, relationshipId } = await context.params;
  const body = await request.text();
  return proxy(request, `/api/v1/families/${id}/relationships/${relationshipId}`, {
    method: "PATCH",
    body,
  });
}

