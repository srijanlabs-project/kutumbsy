import { NextResponse } from "next/server";
import { clearActiveWorkspace, clearSessionCookie } from "../shared";

export async function POST() {
  const response = NextResponse.json({ data: { loggedOut: true } });
  clearSessionCookie(response);
  clearActiveWorkspace(response);
  return response;
}
