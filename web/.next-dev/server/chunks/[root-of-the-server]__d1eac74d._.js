module.exports = [
"[project]/.next-internal/server/app/api/families/[id]/audit-logs/route/actions.js [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__, module, exports) => {

}),
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[project]/app/api/auth/shared.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ACTIVE_WORKSPACE_COOKIE",
    ()=>ACTIVE_WORKSPACE_COOKIE,
    "SESSION_COOKIE",
    ()=>SESSION_COOKIE,
    "clearActiveWorkspace",
    ()=>clearActiveWorkspace,
    "clearSessionCookie",
    ()=>clearSessionCookie,
    "readActiveWorkspace",
    ()=>readActiveWorkspace,
    "readJsonSafely",
    ()=>readJsonSafely,
    "readSessionToken",
    ()=>readSessionToken,
    "requireSessionToken",
    ()=>requireSessionToken,
    "writeActiveWorkspace",
    ()=>writeActiveWorkspace,
    "writeSessionCookie",
    ()=>writeSessionCookie
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
;
const SESSION_COOKIE = "kutumbsy_session";
const ACTIVE_WORKSPACE_COOKIE = "kutumbsy_active_workspace";
const useSecureCookies = process.env.COOKIE_SECURE === "true";
const sessionMaxAgeSeconds = 60 * 60 * 24 * 7;
const activeWorkspaceMaxAgeSeconds = 60 * 60 * 24 * 30;
const readSessionToken = (request)=>request.cookies.get(SESSION_COOKIE)?.value ?? null;
const writeSessionCookie = (response, token)=>{
    response.cookies.set(SESSION_COOKIE, token, {
        httpOnly: true,
        sameSite: "lax",
        secure: useSecureCookies,
        path: "/",
        maxAge: sessionMaxAgeSeconds,
        priority: "high"
    });
};
const clearSessionCookie = (response)=>{
    response.cookies.set(SESSION_COOKIE, "", {
        httpOnly: true,
        sameSite: "lax",
        secure: useSecureCookies,
        path: "/",
        maxAge: 0,
        priority: "high"
    });
};
const readActiveWorkspace = (request)=>request.cookies.get(ACTIVE_WORKSPACE_COOKIE)?.value ?? null;
const writeActiveWorkspace = (response, familyId)=>{
    response.cookies.set(ACTIVE_WORKSPACE_COOKIE, familyId, {
        httpOnly: true,
        sameSite: "lax",
        secure: useSecureCookies,
        path: "/",
        maxAge: activeWorkspaceMaxAgeSeconds,
        priority: "high"
    });
};
const clearActiveWorkspace = (response)=>{
    response.cookies.set(ACTIVE_WORKSPACE_COOKIE, "", {
        httpOnly: true,
        sameSite: "lax",
        secure: useSecureCookies,
        path: "/",
        maxAge: 0,
        priority: "high"
    });
};
const requireSessionToken = (request)=>{
    const token = readSessionToken(request);
    if (!token) {
        return {
            ok: false,
            response: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "login required"
            }, {
                status: 401
            })
        };
    }
    return {
        ok: true,
        token
    };
};
const readJsonSafely = async (response)=>{
    const raw = await response.text();
    if (!raw.trim()) {
        return null;
    }
    try {
        return JSON.parse(raw);
    } catch  {
        return null;
    }
};
}),
"[project]/app/api/families/[id]/audit-logs/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GET",
    ()=>GET
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$auth$2f$shared$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/api/auth/shared.ts [app-route] (ecmascript)");
;
;
const apiUrl = process.env.KUTUMBSY_API_URL ?? "http://localhost:8080";
async function GET(request, context) {
    const authResult = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$auth$2f$shared$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["requireSessionToken"])(request);
    if (!authResult.ok) {
        return authResult.response;
    }
    const authToken = authResult.token;
    const { id } = await context.params;
    const response = await fetch(`${apiUrl}/api/v1/families/${id}/audit-logs`, {
        method: "GET",
        headers: {
            Authorization: `Bearer ${authToken}`,
            "Content-Type": "application/json"
        },
        cache: "no-store"
    });
    const text = await response.text();
    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"](text, {
        status: response.status,
        headers: {
            "Content-Type": response.headers.get("content-type") ?? "application/json"
        }
    });
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__d1eac74d._.js.map