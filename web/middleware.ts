import { NextRequest, NextResponse } from "next/server";
const SESSION_COOKIE = "kutumbsy_session";

const PROTECTED_PATH_PREFIXES = ["/family-space", "/tenant/workspace", "/platform/admin"];
const GUEST_ONLY_PATH_PREFIXES: string[] = [];

const matchesPrefix = (pathname: string, prefixes: string[]): boolean =>
  prefixes.some((prefix) => pathname === prefix || pathname.startsWith(`${prefix}/`));

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const hasSession = Boolean(request.cookies.get(SESSION_COOKIE)?.value);

  if (hasSession && (pathname === "/platform/auth" || pathname.startsWith("/platform/auth/"))) {
    return NextResponse.redirect(new URL("/family-space", request.url));
  }

  if (hasSession && (pathname === "/platform/admin/security" || pathname.startsWith("/platform/admin/security/"))) {
    return NextResponse.redirect(new URL("/family-space", request.url));
  }

  if (!hasSession && matchesPrefix(pathname, PROTECTED_PATH_PREFIXES)) {
    const targetUrl = new URL("/", request.url);
    targetUrl.searchParams.set("auth", "login");
    return NextResponse.redirect(targetUrl);
  }

  if (hasSession && matchesPrefix(pathname, GUEST_ONLY_PATH_PREFIXES)) {
    return NextResponse.redirect(new URL("/platform/auth", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/family-space/:path*", "/tenant/workspace/:path*", "/platform/auth/:path*", "/platform/admin/:path*", "/join-family/:path*", "/create-family/:path*"],
};
