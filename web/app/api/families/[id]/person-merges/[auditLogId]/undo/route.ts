import { NextRequest, NextResponse } from "next/server";
import { requireSessionToken } from "../../../../../auth/shared";

const apiUrl = process.env.KUTUMBSY_API_URL ?? "http://localhost:8080";

type RouteContext = {
  params: Promise<{ id: string; auditLogId: string }>;
};

export async function POST(request: NextRequest, context: RouteContext) {
  const authResult = requireSessionToken(request);
  if (!authResult.ok) {
    return authResult.response;
  }

  const authToken = authResult.token;
  const { id, auditLogId } = await context.params;

  const response = await fetch(`${apiUrl}/api/v1/families/${id}/person-merges/${auditLogId}/undo`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${authToken}`,
      "Content-Type": "application/json",
    },
    cache: "no-store",
  });

  const text = await response.text();
  return new NextResponse(text, {
    status: response.status,
    headers: { "Content-Type": response.headers.get("content-type") ?? "application/json" },
  });
}
