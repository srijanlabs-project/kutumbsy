module.exports = [
"[project]/app/platform/auth/constants.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RESEND_COOLDOWN_SECONDS",
    ()=>RESEND_COOLDOWN_SECONDS,
    "emptyOtpForm",
    ()=>emptyOtpForm,
    "emptyRegisterForm",
    ()=>emptyRegisterForm,
    "emptyWorkspaceForm",
    ()=>emptyWorkspaceForm
]);
const RESEND_COOLDOWN_SECONDS = 30;
const emptyRegisterForm = {
    fullName: "",
    mobileNumber: ""
};
const emptyOtpForm = {
    mobileNumber: "",
    otp: ""
};
const emptyWorkspaceForm = {
    name: "",
    nativePlace: "",
    description: "",
    initialAdminName: "",
    initialAdminMobileNumber: ""
};
}),
"[project]/app/platform/auth/services.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createFamilySpace",
    ()=>createFamilySpace,
    "loadSessionAndActiveWorkspace",
    ()=>loadSessionAndActiveWorkspace,
    "logout",
    ()=>logout,
    "registerUser",
    ()=>registerUser,
    "resendOtp",
    ()=>resendOtp,
    "sendOtp",
    ()=>sendOtp,
    "setActiveWorkspace",
    ()=>setActiveWorkspace,
    "verifyOtp",
    ()=>verifyOtp
]);
async function readJson(response) {
    return await response.json();
}
async function loadSessionAndActiveWorkspace() {
    const [sessionResponse, activeWorkspaceResponse] = await Promise.all([
        fetch("/api/auth/me", {
            cache: "no-store"
        }),
        fetch("/api/auth/active-workspace", {
            cache: "no-store"
        })
    ]);
    const session = sessionResponse.ok ? await readJson(sessionResponse) : {};
    const activeWorkspace = activeWorkspaceResponse.ok ? await readJson(activeWorkspaceResponse) : {};
    return {
        session,
        activeWorkspace
    };
}
async function registerUser(registerForm) {
    const response = await fetch("/api/auth/register-user", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(registerForm)
    });
    const payload = await readJson(response);
    if (!response.ok) {
        throw new Error(payload.error ?? "Unable to create family account");
    }
    return payload;
}
async function sendOtp(mobileNumber) {
    const response = await fetch("/api/auth/send-otp", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            mobileNumber
        })
    });
    const payload = await readJson(response);
    if (!response.ok) {
        throw new Error(payload.error ?? "Unable to send OTP");
    }
    return payload;
}
async function resendOtp(mobileNumber) {
    const response = await fetch("/api/auth/resend-otp", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            mobileNumber
        })
    });
    const payload = await readJson(response);
    return {
        ok: response.ok,
        payload
    };
}
async function verifyOtp(otpForm) {
    const response = await fetch("/api/auth/verify-otp", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(otpForm)
    });
    const payload = await readJson(response);
    if (!response.ok) {
        throw new Error(payload.error ?? "Unable to verify OTP");
    }
    return payload;
}
async function createFamilySpace(workspaceForm) {
    const response = await fetch("/api/families", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name: workspaceForm.name,
            nativePlace: workspaceForm.nativePlace || undefined,
            description: workspaceForm.description || undefined,
            initialAdminName: workspaceForm.initialAdminName,
            initialAdminMobileNumber: workspaceForm.initialAdminMobileNumber
        })
    });
    const payload = await readJson(response);
    if (!response.ok) {
        throw new Error(payload.error ?? "Unable to create Family Space");
    }
    return payload;
}
async function setActiveWorkspace(familyId) {
    await fetch("/api/auth/active-workspace", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            familyId
        })
    });
}
async function logout() {
    await fetch("/api/auth/logout", {
        method: "POST"
    });
}
}),
"[project]/app/landing/LandingPage.module.css [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "actionStack": "LandingPage-module__borBAq__actionStack",
  "authField": "LandingPage-module__borBAq__authField",
  "authForm": "LandingPage-module__borBAq__authForm",
  "authHint": "LandingPage-module__borBAq__authHint",
  "authMessage": "LandingPage-module__borBAq__authMessage",
  "authModeButton": "LandingPage-module__borBAq__authModeButton",
  "authModeButtonActive": "LandingPage-module__borBAq__authModeButtonActive",
  "authModeRow": "LandingPage-module__borBAq__authModeRow",
  "authTextButton": "LandingPage-module__borBAq__authTextButton",
  "authUtilityRow": "LandingPage-module__borBAq__authUtilityRow",
  "benefitList": "LandingPage-module__borBAq__benefitList",
  "brandBlock": "LandingPage-module__borBAq__brandBlock",
  "brandLogo": "LandingPage-module__borBAq__brandLogo",
  "brandSubtitle": "LandingPage-module__borBAq__brandSubtitle",
  "brandTitle": "LandingPage-module__borBAq__brandTitle",
  "card": "LandingPage-module__borBAq__card",
  "cardText": "LandingPage-module__borBAq__cardText",
  "cardTitle": "LandingPage-module__borBAq__cardTitle",
  "hero": "LandingPage-module__borBAq__hero",
  "input": "LandingPage-module__borBAq__input",
  "inputs": "LandingPage-module__borBAq__inputs",
  "links": "LandingPage-module__borBAq__links",
  "page": "LandingPage-module__borBAq__page",
  "primaryButton": "LandingPage-module__borBAq__primaryButton",
  "separator": "LandingPage-module__borBAq__separator",
  "socialButton": "LandingPage-module__borBAq__socialButton",
});
}),
"[project]/app/landing/AuthPanel.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AuthPanel",
    ()=>AuthPanel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$auth$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/platform/auth/constants.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$auth$2f$services$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/platform/auth/services.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$landing$2f$LandingPage$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/app/landing/LandingPage.module.css [app-ssr] (css module)");
"use client";
;
;
;
;
;
;
function AuthPanel() {
    const [authMode, setAuthMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("login");
    const [registerForm, setRegisterForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$auth$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["emptyRegisterForm"]);
    const [otpForm, setOtpForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$auth$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["emptyOtpForm"]);
    const [otpSent, setOtpSent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [resendCountdown, setResendCountdown] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [submitting, setSubmitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [message, setMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [session, setSession] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const params = new URLSearchParams(window.location.search);
        const auth = params.get("auth");
        if (auth === "register") {
            setAuthMode("register");
        }
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const load = async ()=>{
            try {
                const payload = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$auth$2f$services$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["loadSessionAndActiveWorkspace"])();
                if (payload.session.data) {
                    setSession(payload.session.data);
                }
            } catch  {
            // keep auth panel usable
            }
        };
        void load();
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!otpSent || resendCountdown <= 0) {
            return;
        }
        const timer = window.setTimeout(()=>{
            setResendCountdown((current)=>Math.max(0, current - 1));
        }, 1000);
        return ()=>window.clearTimeout(timer);
    }, [
        otpSent,
        resendCountdown
    ]);
    const formatCountdown = (seconds)=>seconds > 60 ? `${Math.floor(seconds / 60)}m ${String(seconds % 60).padStart(2, "0")}s` : `${seconds}s`;
    const handleRegister = async (event)=>{
        event.preventDefault();
        setSubmitting("register");
        setMessage("");
        try {
            const payload = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$auth$2f$services$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["registerUser"])(registerForm);
            if (!payload.data) {
                throw new Error(payload.error ?? "Unable to create account");
            }
            setSession(payload.data);
            setRegisterForm(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$auth$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["emptyRegisterForm"]);
            setMessage("Account created successfully. Continue to dashboard.");
        } catch (error) {
            setMessage(error instanceof Error ? error.message : "Unable to create account");
        } finally{
            setSubmitting(null);
        }
    };
    const handleSendOtp = async (event)=>{
        event.preventDefault();
        setSubmitting("sendOtp");
        setMessage("");
        try {
            const payload = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$auth$2f$services$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sendOtp"])(otpForm.mobileNumber);
            setOtpSent(true);
            setResendCountdown(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$auth$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RESEND_COOLDOWN_SECONDS"]);
            setOtpForm((current)=>({
                    ...current,
                    otp: ""
                }));
            setMessage(payload.data?.message ?? "OTP sent. Enter it to continue.");
        } catch (error) {
            setMessage(error instanceof Error ? error.message : "Unable to send OTP");
        } finally{
            setSubmitting(null);
        }
    };
    const handleVerifyOtp = async (event)=>{
        event.preventDefault();
        setSubmitting("verifyOtp");
        setMessage("");
        try {
            const payload = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$auth$2f$services$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["verifyOtp"])(otpForm);
            if (!payload.data) {
                throw new Error(payload.error ?? "Unable to verify OTP");
            }
            setSession(payload.data);
            const firstWorkspaceId = payload.data.memberships[0]?.familyId ?? "";
            if (firstWorkspaceId) {
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$auth$2f$services$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setActiveWorkspace"])(firstWorkspaceId);
            }
            setOtpForm(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$auth$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["emptyOtpForm"]);
            setOtpSent(false);
            setResendCountdown(0);
            setMessage("Login successful. Continue to dashboard.");
        } catch (error) {
            setMessage(error instanceof Error ? error.message : "Unable to verify OTP");
        } finally{
            setSubmitting(null);
        }
    };
    const handleResendOtp = async ()=>{
        if (!otpForm.mobileNumber || resendCountdown > 0) {
            return;
        }
        setSubmitting("resendOtp");
        setMessage("");
        try {
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$auth$2f$services$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resendOtp"])(otpForm.mobileNumber);
            if (!result.ok) {
                if (result.payload.retryAfterSeconds) {
                    setResendCountdown(result.payload.retryAfterSeconds);
                }
                throw new Error(result.payload.error ?? "Unable to resend OTP");
            }
            setResendCountdown(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$auth$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RESEND_COOLDOWN_SECONDS"]);
            setMessage(result.payload.data?.message ?? "OTP resent successfully.");
        } catch (error) {
            setMessage(error instanceof Error ? error.message : "Unable to resend OTP");
        } finally{
            setSubmitting(null);
        }
    };
    if (session) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$landing$2f$LandingPage$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].card,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$landing$2f$LandingPage$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].cardTitle,
                    children: "You are logged in"
                }, void 0, false, {
                    fileName: "[project]/app/landing/AuthPanel.tsx",
                    lineNumber: 154,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$landing$2f$LandingPage$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].cardText,
                    children: "Continue managing your family workspace."
                }, void 0, false, {
                    fileName: "[project]/app/landing/AuthPanel.tsx",
                    lineNumber: 155,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    href: "/platform/auth",
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$landing$2f$LandingPage$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].primaryButton,
                    children: "Open Dashboard"
                }, void 0, false, {
                    fileName: "[project]/app/landing/AuthPanel.tsx",
                    lineNumber: 156,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/landing/AuthPanel.tsx",
            lineNumber: 153,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$landing$2f$LandingPage$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].card,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$landing$2f$LandingPage$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].authModeRow,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$landing$2f$LandingPage$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].authModeButton} ${authMode === "login" ? __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$landing$2f$LandingPage$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].authModeButtonActive : ""}`,
                        onClick: ()=>setAuthMode("login"),
                        children: "Welcome Back"
                    }, void 0, false, {
                        fileName: "[project]/app/landing/AuthPanel.tsx",
                        lineNumber: 166,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$landing$2f$LandingPage$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].authModeButton} ${authMode === "register" ? __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$landing$2f$LandingPage$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].authModeButtonActive : ""}`,
                        onClick: ()=>setAuthMode("register"),
                        children: "Create Account"
                    }, void 0, false, {
                        fileName: "[project]/app/landing/AuthPanel.tsx",
                        lineNumber: 173,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/landing/AuthPanel.tsx",
                lineNumber: 165,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$landing$2f$LandingPage$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].cardTitle,
                children: authMode === "login" ? "Welcome Back" : "Create Account"
            }, void 0, false, {
                fileName: "[project]/app/landing/AuthPanel.tsx",
                lineNumber: 182,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$landing$2f$LandingPage$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].cardText,
                children: authMode === "login" ? "Sign in to continue your family journey." : "Join thousands of families preserving their legacy."
            }, void 0, false, {
                fileName: "[project]/app/landing/AuthPanel.tsx",
                lineNumber: 183,
                columnNumber: 7
            }, this),
            authMode === "login" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$landing$2f$LandingPage$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].authForm,
                onSubmit: otpSent ? handleVerifyOtp : handleSendOtp,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$landing$2f$LandingPage$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].authField,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Mobile number"
                            }, void 0, false, {
                                fileName: "[project]/app/landing/AuthPanel.tsx",
                                lineNumber: 190,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                value: otpForm.mobileNumber,
                                onChange: (event)=>setOtpForm((current)=>({
                                            ...current,
                                            mobileNumber: event.target.value
                                        })),
                                placeholder: "10 digits",
                                required: true,
                                disabled: otpSent
                            }, void 0, false, {
                                fileName: "[project]/app/landing/AuthPanel.tsx",
                                lineNumber: 191,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/landing/AuthPanel.tsx",
                        lineNumber: 189,
                        columnNumber: 11
                    }, this),
                    otpSent ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$landing$2f$LandingPage$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].authField,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "OTP"
                            }, void 0, false, {
                                fileName: "[project]/app/landing/AuthPanel.tsx",
                                lineNumber: 201,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                value: otpForm.otp,
                                onChange: (event)=>setOtpForm((current)=>({
                                            ...current,
                                            otp: event.target.value
                                        })),
                                placeholder: "Enter OTP",
                                required: true
                            }, void 0, false, {
                                fileName: "[project]/app/landing/AuthPanel.tsx",
                                lineNumber: 202,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/landing/AuthPanel.tsx",
                        lineNumber: 200,
                        columnNumber: 13
                    }, this) : null,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$landing$2f$LandingPage$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].primaryButton,
                        type: "submit",
                        disabled: submitting === "sendOtp" || submitting === "verifyOtp",
                        children: otpSent ? submitting === "verifyOtp" ? "Verifying..." : "Verify OTP" : submitting === "sendOtp" ? "Sending..." : "Send OTP"
                    }, void 0, false, {
                        fileName: "[project]/app/landing/AuthPanel.tsx",
                        lineNumber: 211,
                        columnNumber: 11
                    }, this),
                    otpSent ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$landing$2f$LandingPage$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].authUtilityRow,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$landing$2f$LandingPage$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].authTextButton,
                                onClick: ()=>{
                                    setOtpSent(false);
                                    setResendCountdown(0);
                                    setOtpForm((current)=>({
                                            ...current,
                                            otp: ""
                                        }));
                                    setMessage("");
                                },
                                children: "Change number"
                            }, void 0, false, {
                                fileName: "[project]/app/landing/AuthPanel.tsx",
                                lineNumber: 216,
                                columnNumber: 15
                            }, this),
                            resendCountdown > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$landing$2f$LandingPage$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].authHint,
                                children: [
                                    "Resend SMS in ",
                                    formatCountdown(resendCountdown)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/landing/AuthPanel.tsx",
                                lineNumber: 229,
                                columnNumber: 17
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$landing$2f$LandingPage$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].authTextButton,
                                onClick: ()=>void handleResendOtp(),
                                disabled: submitting === "resendOtp",
                                children: submitting === "resendOtp" ? "Resending..." : "Resend SMS"
                            }, void 0, false, {
                                fileName: "[project]/app/landing/AuthPanel.tsx",
                                lineNumber: 231,
                                columnNumber: 17
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/landing/AuthPanel.tsx",
                        lineNumber: 215,
                        columnNumber: 13
                    }, this) : null
                ]
            }, void 0, true, {
                fileName: "[project]/app/landing/AuthPanel.tsx",
                lineNumber: 188,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$landing$2f$LandingPage$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].authForm,
                onSubmit: handleRegister,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$landing$2f$LandingPage$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].authField,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Full name"
                            }, void 0, false, {
                                fileName: "[project]/app/landing/AuthPanel.tsx",
                                lineNumber: 241,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                value: registerForm.fullName,
                                onChange: (event)=>setRegisterForm((current)=>({
                                            ...current,
                                            fullName: event.target.value
                                        })),
                                placeholder: "e.g. Rahul Prakash",
                                required: true
                            }, void 0, false, {
                                fileName: "[project]/app/landing/AuthPanel.tsx",
                                lineNumber: 242,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/landing/AuthPanel.tsx",
                        lineNumber: 240,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$landing$2f$LandingPage$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].authField,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Mobile number"
                            }, void 0, false, {
                                fileName: "[project]/app/landing/AuthPanel.tsx",
                                lineNumber: 250,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                value: registerForm.mobileNumber,
                                onChange: (event)=>setRegisterForm((current)=>({
                                            ...current,
                                            mobileNumber: event.target.value
                                        })),
                                placeholder: "10 digits",
                                required: true
                            }, void 0, false, {
                                fileName: "[project]/app/landing/AuthPanel.tsx",
                                lineNumber: 251,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/landing/AuthPanel.tsx",
                        lineNumber: 249,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$landing$2f$LandingPage$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].primaryButton,
                        type: "submit",
                        disabled: submitting === "register",
                        children: submitting === "register" ? "Creating..." : "Create My Account"
                    }, void 0, false, {
                        fileName: "[project]/app/landing/AuthPanel.tsx",
                        lineNumber: 258,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/landing/AuthPanel.tsx",
                lineNumber: 239,
                columnNumber: 9
            }, this),
            message ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$landing$2f$LandingPage$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].authMessage,
                children: message
            }, void 0, false, {
                fileName: "[project]/app/landing/AuthPanel.tsx",
                lineNumber: 264,
                columnNumber: 18
            }, this) : null
        ]
    }, void 0, true, {
        fileName: "[project]/app/landing/AuthPanel.tsx",
        lineNumber: 164,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=app_536e84e9._.js.map