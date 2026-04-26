import { NextRequest, NextResponse } from "next/server";
import { readActiveWorkspace, requireSessionToken, writeActiveWorkspace } from "../shared";

export async function GET(request: NextRequest) {
  return NextResponse.json({
    data: {
      familyId: readActiveWorkspace(request),
    },
  });
}

export async function POST(request: NextRequest) {
  const authResult = requireSessionToken(request);
  if (!authResult.ok) {
    return authResult.response;
  }

  const body = (await request.json()) as { familyId?: string };
  if (!body.familyId) {
    return NextResponse.json({ error: "familyId is required" }, { status: 400 });
  }

  const response = NextResponse.json({
    data: {
      familyId: body.familyId,
    },
  });
  writeActiveWorkspace(response, body.familyId);
  return response;
}
