module.exports = [
"[project]/app/join-family/constants.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RESEND_COOLDOWN_SECONDS",
    ()=>RESEND_COOLDOWN_SECONDS,
    "emptyOtpForm",
    ()=>emptyOtpForm,
    "emptyRegisterForm",
    ()=>emptyRegisterForm
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
}),
"[project]/app/join-family/helpers.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "filterFamilies",
    ()=>filterFamilies,
    "formatCountdown",
    ()=>formatCountdown,
    "parseJson",
    ()=>parseJson
]);
function parseJson(text) {
    if (!text.trim()) {
        return {};
    }
    return JSON.parse(text);
}
function formatCountdown(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainder = seconds % 60;
    return minutes > 0 ? `${minutes}m ${remainder.toString().padStart(2, "0")}s` : `${remainder}s`;
}
function filterFamilies(families, query) {
    const normalized = query.trim().toLowerCase();
    if (!normalized) {
        return families.slice(0, 8);
    }
    return families.filter((family)=>[
            family.name,
            family.familyCode,
            family.slug,
            family.nativePlace ?? ""
        ].some((value)=>value.toLowerCase().includes(normalized)));
}
}),
"[project]/app/join-family/services.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "loadJoinFamilyBootstrap",
    ()=>loadJoinFamilyBootstrap,
    "registerJoinUser",
    ()=>registerJoinUser,
    "requestJoinAccess",
    ()=>requestJoinAccess,
    "resendJoinOtp",
    ()=>resendJoinOtp,
    "sendJoinOtp",
    ()=>sendJoinOtp,
    "verifyJoinOtp",
    ()=>verifyJoinOtp
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$join$2d$family$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/join-family/helpers.ts [app-ssr] (ecmascript)");
;
async function readPayload(response) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$join$2d$family$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseJson"])(await response.text());
}
async function loadJoinFamilyBootstrap() {
    const [sessionResponse, familiesResponse] = await Promise.all([
        fetch("/api/auth/me", {
            cache: "no-store"
        }),
        fetch("/api/families?scope=discover", {
            cache: "no-store"
        })
    ]);
    const session = sessionResponse.ok ? await readPayload(sessionResponse) : {};
    const families = familiesResponse.ok ? await readPayload(familiesResponse) : {};
    return {
        session,
        families
    };
}
async function registerJoinUser(registerForm) {
    const response = await fetch("/api/auth/register-user", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(registerForm)
    });
    return {
        ok: response.ok,
        payload: await readPayload(response)
    };
}
async function sendJoinOtp(mobileNumber) {
    const response = await fetch("/api/auth/send-otp", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            mobileNumber
        })
    });
    return {
        ok: response.ok,
        payload: await readPayload(response)
    };
}
async function verifyJoinOtp(otpForm) {
    const response = await fetch("/api/auth/verify-otp", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(otpForm)
    });
    return {
        ok: response.ok,
        payload: await readPayload(response)
    };
}
async function resendJoinOtp(mobileNumber) {
    const response = await fetch("/api/auth/resend-otp", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            mobileNumber
        })
    });
    return {
        ok: response.ok,
        payload: await readPayload(response)
    };
}
async function requestJoinAccess(params) {
    const response = await fetch("/api/join-requests", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(params)
    });
    return {
        ok: response.ok,
        payload: await readPayload(response)
    };
}
}),
"[project]/app/join-family/workspace.module.css [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "actionRow": "workspace-module__ClDvXG__actionRow",
  "brand": "workspace-module__ClDvXG__brand",
  "brandPanel": "workspace-module__ClDvXG__brandPanel",
  "brandTag": "workspace-module__ClDvXG__brandTag",
  "brandTop": "workspace-module__ClDvXG__brandTop",
  "emptyCard": "workspace-module__ClDvXG__emptyCard",
  "familyCard": "workspace-module__ClDvXG__familyCard",
  "familyCardActive": "workspace-module__ClDvXG__familyCardActive",
  "familyList": "workspace-module__ClDvXG__familyList",
  "field": "workspace-module__ClDvXG__field",
  "form": "workspace-module__ClDvXG__form",
  "homeLink": "workspace-module__ClDvXG__homeLink",
  "linkButton": "workspace-module__ClDvXG__linkButton",
  "message": "workspace-module__ClDvXG__message",
  "modeButton": "workspace-module__ClDvXG__modeButton",
  "modeButtonActive": "workspace-module__ClDvXG__modeButtonActive",
  "modeRow": "workspace-module__ClDvXG__modeRow",
  "page": "workspace-module__ClDvXG__page",
  "panel": "workspace-module__ClDvXG__panel",
  "previewCard": "workspace-module__ClDvXG__previewCard",
  "primaryButton": "workspace-module__ClDvXG__primaryButton",
  "promiseList": "workspace-module__ClDvXG__promiseList",
  "resendHint": "workspace-module__ClDvXG__resendHint",
  "resendRow": "workspace-module__ClDvXG__resendRow",
  "secondaryButton": "workspace-module__ClDvXG__secondaryButton",
  "shell": "workspace-module__ClDvXG__shell",
  "stage": "workspace-module__ClDvXG__stage",
  "stageHeader": "workspace-module__ClDvXG__stageHeader",
  "stepCircle": "workspace-module__ClDvXG__stepCircle",
  "stepCircleActive": "workspace-module__ClDvXG__stepCircleActive",
  "stepItem": "workspace-module__ClDvXG__stepItem",
  "stepLabel": "workspace-module__ClDvXG__stepLabel",
  "stepLabelActive": "workspace-module__ClDvXG__stepLabelActive",
  "stepper": "workspace-module__ClDvXG__stepper",
});
}),
"[project]/app/join-family/workspace.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "JoinFamilyWorkspace",
    ()=>JoinFamilyWorkspace
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$join$2d$family$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/join-family/constants.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$join$2d$family$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/join-family/helpers.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$join$2d$family$2f$services$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/join-family/services.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$join$2d$family$2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/app/join-family/workspace.module.css [app-ssr] (css module)");
"use client";
;
;
;
;
;
;
;
function JoinFamilyWorkspace() {
    const [session, setSession] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [families, setFamilies] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [query, setQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [selectedFamilyId, setSelectedFamilyId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [requestedRole, setRequestedRole] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("viewer");
    const [joinMessage, setJoinMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [authMode, setAuthMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("signup");
    const [registerForm, setRegisterForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$join$2d$family$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["emptyRegisterForm"]);
    const [otpForm, setOtpForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$join$2d$family$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["emptyOtpForm"]);
    const [otpSent, setOtpSent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [resendCountdown, setResendCountdown] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [step, setStep] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(1);
    const [submitting, setSubmitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [message, setMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const load = async ()=>{
            try {
                const payload = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$join$2d$family$2f$services$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["loadJoinFamilyBootstrap"])();
                if (payload.session.data) {
                    setSession(payload.session.data);
                    setStep(2);
                }
                setFamilies(payload.families.data ?? []);
            } catch  {
            // keep screen usable even if preload fails
            }
        };
        void load();
    }, []);
    const reloadFamilies = async ()=>{
        try {
            const response = await fetch("/api/families?scope=discover", {
                cache: "no-store"
            });
            if (!response.ok) {
                return;
            }
            const payload = await response.json();
            setFamilies(payload.data ?? []);
        } catch  {
        // keep screen usable even if family directory refresh fails
        }
    };
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
    const filteredFamilies = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$join$2d$family$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["filterFamilies"])(families, query);
    }, [
        families,
        query
    ]);
    const selectedFamily = filteredFamilies.find((family)=>family.id === selectedFamilyId) ?? families.find((family)=>family.id === selectedFamilyId) ?? null;
    const handleRegister = async (event)=>{
        event.preventDefault();
        setSubmitting("register");
        setMessage("");
        try {
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$join$2d$family$2f$services$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["registerJoinUser"])(registerForm);
            if (!result.ok || !result.payload.data) {
                throw new Error(result.payload.error ?? "Unable to create your account.");
            }
            setSession(result.payload.data);
            setStep(2);
            setRegisterForm(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$join$2d$family$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["emptyRegisterForm"]);
            await reloadFamilies();
            setMessage("Your account is ready. Now choose a family tree to join.");
        } catch (error) {
            setMessage(error instanceof Error ? error.message : "Unable to create your account.");
        } finally{
            setSubmitting(null);
        }
    };
    const handleSendOtp = async (event)=>{
        event.preventDefault();
        setSubmitting("sendOtp");
        setMessage("");
        try {
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$join$2d$family$2f$services$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sendJoinOtp"])(otpForm.mobileNumber);
            if (!result.ok) {
                throw new Error(result.payload.error ?? "Unable to send OTP.");
            }
            setOtpSent(true);
            setResendCountdown(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$join$2d$family$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RESEND_COOLDOWN_SECONDS"]);
            setMessage(result.payload.data?.message ?? "OTP sent. Enter it to continue.");
        } catch (error) {
            setMessage(error instanceof Error ? error.message : "Unable to send OTP.");
        } finally{
            setSubmitting(null);
        }
    };
    const handleVerifyOtp = async (event)=>{
        event.preventDefault();
        setSubmitting("verifyOtp");
        setMessage("");
        try {
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$join$2d$family$2f$services$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["verifyJoinOtp"])(otpForm);
            if (!result.ok || !result.payload.data) {
                throw new Error(result.payload.error ?? "Unable to verify OTP.");
            }
            setSession(result.payload.data);
            setOtpForm(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$join$2d$family$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["emptyOtpForm"]);
            setOtpSent(false);
            setResendCountdown(0);
            setStep(2);
            await reloadFamilies();
            setMessage("Welcome back. Choose the family tree you want to join.");
        } catch (error) {
            setMessage(error instanceof Error ? error.message : "Unable to verify OTP.");
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
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$join$2d$family$2f$services$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resendJoinOtp"])(otpForm.mobileNumber);
            if (!result.ok) {
                if (result.payload.retryAfterSeconds) {
                    setResendCountdown(result.payload.retryAfterSeconds);
                }
                throw new Error(result.payload.error ?? "Unable to resend OTP.");
            }
            setResendCountdown(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$join$2d$family$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RESEND_COOLDOWN_SECONDS"]);
            setMessage(result.payload.data?.message ?? "OTP resent successfully.");
        } catch (error) {
            setMessage(error instanceof Error ? error.message : "Unable to resend OTP.");
        } finally{
            setSubmitting(null);
        }
    };
    const handleRequestAccess = async (event)=>{
        event.preventDefault();
        if (!selectedFamily) {
            setMessage("Choose a family tree first.");
            return;
        }
        setSubmitting("join");
        setMessage("");
        try {
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$join$2d$family$2f$services$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["requestJoinAccess"])({
                workspaceIdentifier: selectedFamily.familyCode,
                requestedRole,
                message: joinMessage || undefined
            });
            if (!result.ok) {
                throw new Error(result.payload.error ?? "Unable to request access.");
            }
            setStep(3);
            setMessage(`Access request sent to ${selectedFamily.name}.`);
        } catch (error) {
            setMessage(error instanceof Error ? error.message : "Unable to request access.");
        } finally{
            setSubmitting(null);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$join$2d$family$2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].page,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$join$2d$family$2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].shell,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$join$2d$family$2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].brandPanel,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$join$2d$family$2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].brandTop,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/",
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$join$2d$family$2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].homeLink,
                                    children: "Back to Home"
                                }, void 0, false, {
                                    fileName: "[project]/app/join-family/workspace.tsx",
                                    lineNumber: 213,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/",
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$join$2d$family$2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].brand,
                                    children: [
                                        "Kutumb",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                            children: "sy"
                                        }, void 0, false, {
                                            fileName: "[project]/app/join-family/workspace.tsx",
                                            lineNumber: 217,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/join-family/workspace.tsx",
                                    lineNumber: 216,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/join-family/workspace.tsx",
                            lineNumber: 212,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$join$2d$family$2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].brandTag,
                            children: "Join an existing family tree, preview its identity, and request the right level of access."
                        }, void 0, false, {
                            fileName: "[project]/app/join-family/workspace.tsx",
                            lineNumber: 220,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$join$2d$family$2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].promiseList,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: "Use the existing OTP-backed login flow."
                                }, void 0, false, {
                                    fileName: "[project]/app/join-family/workspace.tsx",
                                    lineNumber: 222,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: "Search by family name, family code, slug, or origin."
                                }, void 0, false, {
                                    fileName: "[project]/app/join-family/workspace.tsx",
                                    lineNumber: 223,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: "Send a join request that admins can review from the family side."
                                }, void 0, false, {
                                    fileName: "[project]/app/join-family/workspace.tsx",
                                    lineNumber: 224,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/join-family/workspace.tsx",
                            lineNumber: 221,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/join-family/workspace.tsx",
                    lineNumber: 211,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$join$2d$family$2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].panel,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$join$2d$family$2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].stepper,
                            children: [
                                {
                                    id: 1,
                                    label: "Login"
                                },
                                {
                                    id: 2,
                                    label: "Preview Family"
                                },
                                {
                                    id: 3,
                                    label: "Request Sent"
                                }
                            ].map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$join$2d$family$2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].stepItem,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$join$2d$family$2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].stepCircle} ${step >= item.id ? __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$join$2d$family$2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].stepCircleActive : ""}`,
                                            children: item.id
                                        }, void 0, false, {
                                            fileName: "[project]/app/join-family/workspace.tsx",
                                            lineNumber: 236,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$join$2d$family$2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].stepLabel} ${step >= item.id ? __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$join$2d$family$2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].stepLabelActive : ""}`,
                                            children: item.label
                                        }, void 0, false, {
                                            fileName: "[project]/app/join-family/workspace.tsx",
                                            lineNumber: 237,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, item.id, true, {
                                    fileName: "[project]/app/join-family/workspace.tsx",
                                    lineNumber: 235,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/app/join-family/workspace.tsx",
                            lineNumber: 229,
                            columnNumber: 11
                        }, this),
                        step === 1 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$join$2d$family$2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].stage,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$join$2d$family$2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].stageHeader,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                            children: "Join Family Tree"
                                        }, void 0, false, {
                                            fileName: "[project]/app/join-family/workspace.tsx",
                                            lineNumber: 245,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "Create an account or log in with OTP first, then choose the family tree you want to join."
                                        }, void 0, false, {
                                            fileName: "[project]/app/join-family/workspace.tsx",
                                            lineNumber: 246,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/join-family/workspace.tsx",
                                    lineNumber: 244,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$join$2d$family$2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].modeRow,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$join$2d$family$2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].modeButton} ${authMode === "signup" ? __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$join$2d$family$2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].modeButtonActive : ""}`,
                                            onClick: ()=>setAuthMode("signup"),
                                            children: "New to Kutumbsy"
                                        }, void 0, false, {
                                            fileName: "[project]/app/join-family/workspace.tsx",
                                            lineNumber: 250,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$join$2d$family$2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].modeButton} ${authMode === "otp" ? __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$join$2d$family$2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].modeButtonActive : ""}`,
                                            onClick: ()=>setAuthMode("otp"),
                                            children: "Existing user"
                                        }, void 0, false, {
                                            fileName: "[project]/app/join-family/workspace.tsx",
                                            lineNumber: 257,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/join-family/workspace.tsx",
                                    lineNumber: 249,
                                    columnNumber: 15
                                }, this),
                                authMode === "signup" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$join$2d$family$2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].form,
                                    onSubmit: handleRegister,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$join$2d$family$2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].field,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "Full name"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/join-family/workspace.tsx",
                                                    lineNumber: 269,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    value: registerForm.fullName,
                                                    onChange: (event)=>setRegisterForm((current)=>({
                                                                ...current,
                                                                fullName: event.target.value
                                                            })),
                                                    required: true
                                                }, void 0, false, {
                                                    fileName: "[project]/app/join-family/workspace.tsx",
                                                    lineNumber: 270,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/join-family/workspace.tsx",
                                            lineNumber: 268,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$join$2d$family$2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].field,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "Mobile number"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/join-family/workspace.tsx",
                                                    lineNumber: 277,
                                                    columnNumber: 21
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
                                                    fileName: "[project]/app/join-family/workspace.tsx",
                                                    lineNumber: 278,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/join-family/workspace.tsx",
                                            lineNumber: 276,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$join$2d$family$2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].primaryButton,
                                            type: "submit",
                                            disabled: submitting === "register",
                                            children: submitting === "register" ? "Creating..." : "Create my account"
                                        }, void 0, false, {
                                            fileName: "[project]/app/join-family/workspace.tsx",
                                            lineNumber: 285,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/join-family/workspace.tsx",
                                    lineNumber: 267,
                                    columnNumber: 17
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$join$2d$family$2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].form,
                                    onSubmit: otpSent ? handleVerifyOtp : handleSendOtp,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$join$2d$family$2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].field,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "Mobile number"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/join-family/workspace.tsx",
                                                    lineNumber: 292,
                                                    columnNumber: 21
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
                                                    fileName: "[project]/app/join-family/workspace.tsx",
                                                    lineNumber: 293,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/join-family/workspace.tsx",
                                            lineNumber: 291,
                                            columnNumber: 19
                                        }, this),
                                        otpSent ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$join$2d$family$2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].field,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "OTP"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/join-family/workspace.tsx",
                                                    lineNumber: 303,
                                                    columnNumber: 23
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
                                                    fileName: "[project]/app/join-family/workspace.tsx",
                                                    lineNumber: 304,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/join-family/workspace.tsx",
                                            lineNumber: 302,
                                            columnNumber: 21
                                        }, this) : null,
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$join$2d$family$2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].actionRow,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$join$2d$family$2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].primaryButton,
                                                    type: "submit",
                                                    disabled: submitting === "sendOtp" || submitting === "verifyOtp",
                                                    children: otpSent ? submitting === "verifyOtp" ? "Verifying..." : "Verify OTP" : submitting === "sendOtp" ? "Sending..." : "Send OTP"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/join-family/workspace.tsx",
                                                    lineNumber: 313,
                                                    columnNumber: 21
                                                }, this),
                                                otpSent ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$join$2d$family$2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].secondaryButton,
                                                    onClick: ()=>{
                                                        setOtpSent(false);
                                                        setResendCountdown(0);
                                                        setOtpForm((current)=>({
                                                                ...current,
                                                                otp: ""
                                                            }));
                                                    },
                                                    children: "Change number"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/join-family/workspace.tsx",
                                                    lineNumber: 323,
                                                    columnNumber: 23
                                                }, this) : null
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/join-family/workspace.tsx",
                                            lineNumber: 312,
                                            columnNumber: 19
                                        }, this),
                                        otpSent ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$join$2d$family$2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].resendRow,
                                            children: resendCountdown > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$join$2d$family$2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].resendHint,
                                                children: [
                                                    "Resend SMS in ",
                                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$join$2d$family$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatCountdown"])(resendCountdown)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/join-family/workspace.tsx",
                                                lineNumber: 339,
                                                columnNumber: 25
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$join$2d$family$2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].linkButton,
                                                onClick: ()=>void handleResendOtp(),
                                                children: submitting === "resendOtp" ? "Resending..." : "Resend SMS"
                                            }, void 0, false, {
                                                fileName: "[project]/app/join-family/workspace.tsx",
                                                lineNumber: 341,
                                                columnNumber: 25
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/join-family/workspace.tsx",
                                            lineNumber: 337,
                                            columnNumber: 21
                                        }, this) : null
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/join-family/workspace.tsx",
                                    lineNumber: 290,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/join-family/workspace.tsx",
                            lineNumber: 243,
                            columnNumber: 13
                        }, this) : null,
                        step === 2 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$join$2d$family$2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].stage,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$join$2d$family$2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].stageHeader,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                            children: "Preview Family"
                                        }, void 0, false, {
                                            fileName: "[project]/app/join-family/workspace.tsx",
                                            lineNumber: 355,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "Search by family name, family code, slug, or origin. Then request the access level you need."
                                        }, void 0, false, {
                                            fileName: "[project]/app/join-family/workspace.tsx",
                                            lineNumber: 356,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/join-family/workspace.tsx",
                                    lineNumber: 354,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$join$2d$family$2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].field,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "Search family tree"
                                        }, void 0, false, {
                                            fileName: "[project]/app/join-family/workspace.tsx",
                                            lineNumber: 359,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            value: query,
                                            onChange: (event)=>setQuery(event.target.value),
                                            placeholder: "e.g. A7K2M9Q, Verma, verma-family, Varanasi"
                                        }, void 0, false, {
                                            fileName: "[project]/app/join-family/workspace.tsx",
                                            lineNumber: 360,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/join-family/workspace.tsx",
                                    lineNumber: 358,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$join$2d$family$2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].familyList,
                                    children: filteredFamilies.length ? filteredFamilies.map((family)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$join$2d$family$2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].familyCard} ${selectedFamilyId === family.id ? __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$join$2d$family$2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].familyCardActive : ""}`,
                                            onClick: ()=>setSelectedFamilyId(family.id),
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: family.name
                                                }, void 0, false, {
                                                    fileName: "[project]/app/join-family/workspace.tsx",
                                                    lineNumber: 372,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: family.nativePlace || "Origin not added"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/join-family/workspace.tsx",
                                                    lineNumber: 373,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                    children: [
                                                        "Code: ",
                                                        family.familyCode,
                                                        " | Slug: ",
                                                        family.slug
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/join-family/workspace.tsx",
                                                    lineNumber: 374,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, family.id, true, {
                                            fileName: "[project]/app/join-family/workspace.tsx",
                                            lineNumber: 366,
                                            columnNumber: 21
                                        }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$join$2d$family$2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].emptyCard,
                                        children: "No matching family trees found yet."
                                    }, void 0, false, {
                                        fileName: "[project]/app/join-family/workspace.tsx",
                                        lineNumber: 378,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/join-family/workspace.tsx",
                                    lineNumber: 363,
                                    columnNumber: 15
                                }, this),
                                selectedFamily ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$join$2d$family$2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].form,
                                    onSubmit: handleRequestAccess,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$join$2d$family$2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].previewCard,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: selectedFamily.name
                                                }, void 0, false, {
                                                    fileName: "[project]/app/join-family/workspace.tsx",
                                                    lineNumber: 385,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: selectedFamily.nativePlace || "Origin not added"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/join-family/workspace.tsx",
                                                    lineNumber: 386,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: [
                                                        "Family Code: ",
                                                        selectedFamily.familyCode
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/join-family/workspace.tsx",
                                                    lineNumber: 387,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "This is a limited preview. Access is granted after an admin reviews your request."
                                                }, void 0, false, {
                                                    fileName: "[project]/app/join-family/workspace.tsx",
                                                    lineNumber: 388,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/join-family/workspace.tsx",
                                            lineNumber: 384,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$join$2d$family$2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].field,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "Requested role"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/join-family/workspace.tsx",
                                                    lineNumber: 392,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                    value: requestedRole,
                                                    onChange: (event)=>setRequestedRole(event.target.value),
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "viewer",
                                                            children: "Viewer"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/join-family/workspace.tsx",
                                                            lineNumber: 394,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "contributor",
                                                            children: "Contributor"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/join-family/workspace.tsx",
                                                            lineNumber: 395,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "editor",
                                                            children: "Editor"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/join-family/workspace.tsx",
                                                            lineNumber: 396,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/join-family/workspace.tsx",
                                                    lineNumber: 393,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/join-family/workspace.tsx",
                                            lineNumber: 391,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$join$2d$family$2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].field,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "Why do you want to join?"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/join-family/workspace.tsx",
                                                    lineNumber: 400,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                    value: joinMessage,
                                                    onChange: (event)=>setJoinMessage(event.target.value),
                                                    rows: 4,
                                                    placeholder: "Optional note for the family admins reviewing your request."
                                                }, void 0, false, {
                                                    fileName: "[project]/app/join-family/workspace.tsx",
                                                    lineNumber: 401,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/join-family/workspace.tsx",
                                            lineNumber: 399,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$join$2d$family$2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].actionRow,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$join$2d$family$2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].primaryButton,
                                                    type: "submit",
                                                    disabled: submitting === "join",
                                                    children: submitting === "join" ? "Sending..." : "Request access"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/join-family/workspace.tsx",
                                                    lineNumber: 409,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    href: "/",
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$join$2d$family$2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].linkButton,
                                                    children: "Back to home"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/join-family/workspace.tsx",
                                                    lineNumber: 412,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/join-family/workspace.tsx",
                                            lineNumber: 408,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/join-family/workspace.tsx",
                                    lineNumber: 383,
                                    columnNumber: 17
                                }, this) : null
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/join-family/workspace.tsx",
                            lineNumber: 353,
                            columnNumber: 13
                        }, this) : null,
                        step === 3 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$join$2d$family$2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].stage,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$join$2d$family$2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].stageHeader,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                            children: "Request sent"
                                        }, void 0, false, {
                                            fileName: "[project]/app/join-family/workspace.tsx",
                                            lineNumber: 424,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "Your access request is now waiting for family admin review. Once approved, this family tree will appear in your family dashboard."
                                        }, void 0, false, {
                                            fileName: "[project]/app/join-family/workspace.tsx",
                                            lineNumber: 425,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/join-family/workspace.tsx",
                                    lineNumber: 423,
                                    columnNumber: 15
                                }, this),
                                selectedFamily ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$join$2d$family$2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].previewCard,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: selectedFamily.name
                                        }, void 0, false, {
                                            fileName: "[project]/app/join-family/workspace.tsx",
                                            lineNumber: 429,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: [
                                                "Requested role: ",
                                                requestedRole
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/join-family/workspace.tsx",
                                            lineNumber: 430,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "Admins can review this in the family-side requests flow."
                                        }, void 0, false, {
                                            fileName: "[project]/app/join-family/workspace.tsx",
                                            lineNumber: 431,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/join-family/workspace.tsx",
                                    lineNumber: 428,
                                    columnNumber: 17
                                }, this) : null,
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$join$2d$family$2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].actionRow,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/family-space",
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$join$2d$family$2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].secondaryButton,
                                            children: "Open Family Home"
                                        }, void 0, false, {
                                            fileName: "[project]/app/join-family/workspace.tsx",
                                            lineNumber: 435,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/",
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$join$2d$family$2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].linkButton,
                                            children: "Back to home"
                                        }, void 0, false, {
                                            fileName: "[project]/app/join-family/workspace.tsx",
                                            lineNumber: 438,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/join-family/workspace.tsx",
                                    lineNumber: 434,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/join-family/workspace.tsx",
                            lineNumber: 422,
                            columnNumber: 13
                        }, this) : null,
                        message ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$join$2d$family$2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].message,
                            children: message
                        }, void 0, false, {
                            fileName: "[project]/app/join-family/workspace.tsx",
                            lineNumber: 445,
                            columnNumber: 22
                        }, this) : null
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/join-family/workspace.tsx",
                    lineNumber: 228,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/join-family/workspace.tsx",
            lineNumber: 210,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/join-family/workspace.tsx",
        lineNumber: 209,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=app_join-family_f3a66060._.js.map