module.exports = [
"[project]/components/BrandLogo.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BrandLogo",
    ()=>BrandLogo
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
function BrandLogo({ className, imageClassName, fallbackClassName, alt = "Kutumbsy logo" }) {
    const [imageMissing, setImageMissing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: className,
        children: [
            !imageMissing ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                src: "/logo_1kutumb.png",
                alt: alt,
                className: imageClassName,
                onError: ()=>setImageMissing(true)
            }, void 0, false, {
                fileName: "[project]/components/BrandLogo.tsx",
                lineNumber: 23,
                columnNumber: 9
            }, this) : null,
            imageMissing ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: fallbackClassName,
                children: "Kutumbsy"
            }, void 0, false, {
                fileName: "[project]/components/BrandLogo.tsx",
                lineNumber: 30,
                columnNumber: 23
            }, this) : null
        ]
    }, void 0, true, {
        fileName: "[project]/components/BrandLogo.tsx",
        lineNumber: 21,
        columnNumber: 5
    }, this);
}
}),
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
        throw new Error(payload.error ?? "Unable to create platform account");
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
"[project]/app/platform/auth/workspace.module.css [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "actionRow": "workspace-module__vfaI4W__actionRow",
  "activeFamilyCard": "workspace-module__vfaI4W__activeFamilyCard",
  "activeFamilyName": "workspace-module__vfaI4W__activeFamilyName",
  "activeFamilyRoleLine": "workspace-module__vfaI4W__activeFamilyRoleLine",
  "activeFamilyStats": "workspace-module__vfaI4W__activeFamilyStats",
  "activeFamilyTag": "workspace-module__vfaI4W__activeFamilyTag",
  "addFamilyButton": "workspace-module__vfaI4W__addFamilyButton",
  "authBrandPanel": "workspace-module__vfaI4W__authBrandPanel",
  "authCard": "workspace-module__vfaI4W__authCard",
  "authDivider": "workspace-module__vfaI4W__authDivider",
  "authField": "workspace-module__vfaI4W__authField",
  "authForm": "workspace-module__vfaI4W__authForm",
  "authGoldButton": "workspace-module__vfaI4W__authGoldButton",
  "authHeader": "workspace-module__vfaI4W__authHeader",
  "authHint": "workspace-module__vfaI4W__authHint",
  "authMessage": "workspace-module__vfaI4W__authMessage",
  "authModeButton": "workspace-module__vfaI4W__authModeButton",
  "authModeButtonActive": "workspace-module__vfaI4W__authModeButtonActive",
  "authModeRow": "workspace-module__vfaI4W__authModeRow",
  "authPage": "workspace-module__vfaI4W__authPage",
  "authPrimaryButton": "workspace-module__vfaI4W__authPrimaryButton",
  "authShell": "workspace-module__vfaI4W__authShell",
  "authSocialButton": "workspace-module__vfaI4W__authSocialButton",
  "authSocialStack": "workspace-module__vfaI4W__authSocialStack",
  "authTextButton": "workspace-module__vfaI4W__authTextButton",
  "authUtilityRow": "workspace-module__vfaI4W__authUtilityRow",
  "brandList": "workspace-module__vfaI4W__brandList",
  "brandQuote": "workspace-module__vfaI4W__brandQuote",
  "cardHeader": "workspace-module__vfaI4W__cardHeader",
  "cardHeaderMeta": "workspace-module__vfaI4W__cardHeaderMeta",
  "createCard": "workspace-module__vfaI4W__createCard",
  "dashboardGrid": "workspace-module__vfaI4W__dashboardGrid",
  "dashboardMiddleRow": "workspace-module__vfaI4W__dashboardMiddleRow",
  "dashboardTopRow": "workspace-module__vfaI4W__dashboardTopRow",
  "empty": "workspace-module__vfaI4W__empty",
  "eyebrow": "workspace-module__vfaI4W__eyebrow",
  "field": "workspace-module__vfaI4W__field",
  "form": "workspace-module__vfaI4W__form",
  "ghostButton": "workspace-module__vfaI4W__ghostButton",
  "hero": "workspace-module__vfaI4W__hero",
  "inlineActionLink": "workspace-module__vfaI4W__inlineActionLink",
  "layout": "workspace-module__vfaI4W__layout",
  "linkButton": "workspace-module__vfaI4W__linkButton",
  "logoFallback": "workspace-module__vfaI4W__logoFallback",
  "logoImage": "workspace-module__vfaI4W__logoImage",
  "logoWrap": "workspace-module__vfaI4W__logoWrap",
  "logoutButton": "workspace-module__vfaI4W__logoutButton",
  "membershipActions": "workspace-module__vfaI4W__membershipActions",
  "membershipBadge": "workspace-module__vfaI4W__membershipBadge",
  "membershipBoxNoBorder": "workspace-module__vfaI4W__membershipBoxNoBorder",
  "membershipItem": "workspace-module__vfaI4W__membershipItem",
  "membershipList": "workspace-module__vfaI4W__membershipList",
  "membershipMeta": "workspace-module__vfaI4W__membershipMeta",
  "message": "workspace-module__vfaI4W__message",
  "navCard": "workspace-module__vfaI4W__navCard",
  "navCardIcon": "workspace-module__vfaI4W__navCardIcon",
  "navGrid": "workspace-module__vfaI4W__navGrid",
  "pageShell": "workspace-module__vfaI4W__pageShell",
  "panel": "workspace-module__vfaI4W__panel",
  "panelText": "workspace-module__vfaI4W__panelText",
  "primaryButton": "workspace-module__vfaI4W__primaryButton",
  "privacyNote": "workspace-module__vfaI4W__privacyNote",
  "profileCard": "workspace-module__vfaI4W__profileCard",
  "profileCardActions": "workspace-module__vfaI4W__profileCardActions",
  "roleBadge": "workspace-module__vfaI4W__roleBadge",
  "secondaryButton": "workspace-module__vfaI4W__secondaryButton",
  "sessionCard": "workspace-module__vfaI4W__sessionCard",
  "sessionFooterNote": "workspace-module__vfaI4W__sessionFooterNote",
  "sessionLabel": "workspace-module__vfaI4W__sessionLabel",
  "sessionPhone": "workspace-module__vfaI4W__sessionPhone",
  "sessionStatus": "workspace-module__vfaI4W__sessionStatus",
  "sessionStatusDot": "workspace-module__vfaI4W__sessionStatusDot",
  "sessionUserName": "workspace-module__vfaI4W__sessionUserName",
  "subtitle": "workspace-module__vfaI4W__subtitle",
  "switchButton": "workspace-module__vfaI4W__switchButton",
  "title": "workspace-module__vfaI4W__title",
});
}),
"[project]/app/platform/auth/workspace.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AuthWorkspace",
    ()=>AuthWorkspace
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$BrandLogo$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/BrandLogo.tsx [app-ssr] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '../../../components/PostLoginShell'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$auth$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/platform/auth/constants.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$auth$2f$services$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/platform/auth/services.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$auth$2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/app/platform/auth/workspace.module.css [app-ssr] (css module)");
"use client";
;
;
;
;
;
;
;
;
function AuthWorkspace() {
    const [authMode, setAuthMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("login");
    const [registerForm, setRegisterForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$auth$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["emptyRegisterForm"]);
    const [otpForm, setOtpForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$auth$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["emptyOtpForm"]);
    const [otpSent, setOtpSent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [resendCountdown, setResendCountdown] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [submitting, setSubmitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [registerMessage, setRegisterMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [loginMessage, setLoginMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [workspaceForm, setWorkspaceForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$auth$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["emptyWorkspaceForm"]);
    const [workspaceMessage, setWorkspaceMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [session, setSession] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [sessionChecked, setSessionChecked] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [activeWorkspaceId, setActiveWorkspaceId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const createFormRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const formatCountdown = (seconds)=>{
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        if (minutes <= 0) {
            return `${remainingSeconds}s`;
        }
        return `${minutes}m ${remainingSeconds.toString().padStart(2, "0")}s`;
    };
    const reloadSession = async ()=>{
        const payload = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$auth$2f$services$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["loadSessionAndActiveWorkspace"])();
        if (payload.session.data) {
            setSession(payload.session.data);
        }
        setActiveWorkspaceId(payload.activeWorkspace.data?.familyId ?? "");
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const params = new URLSearchParams(window.location.search);
        const mode = params.get("mode");
        if (mode === "register") {
            setAuthMode("register");
        }
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const loadSession = async ()=>{
            try {
                await reloadSession();
            } catch  {
            // keep page usable even if session lookup fails
            } finally{
                setSessionChecked(true);
            }
        };
        void loadSession();
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
    const handleRegister = async (event)=>{
        event.preventDefault();
        setSubmitting("register");
        setRegisterMessage("");
        try {
            const payload = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$auth$2f$services$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["registerUser"])(registerForm);
            if (!payload.data) {
                throw new Error(payload.error ?? "Unable to create platform account");
            }
            setSession(payload.data);
            setRegisterForm(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$auth$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["emptyRegisterForm"]);
            setRegisterMessage("Platform account created. You can now create or join a Family Space.");
        } catch (error) {
            setRegisterMessage(error instanceof Error ? error.message : "Unable to create platform account");
        } finally{
            setSubmitting(null);
        }
    };
    const handleSendOtp = async (event)=>{
        event.preventDefault();
        setSubmitting("sendOtp");
        setLoginMessage("");
        try {
            const payload = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$auth$2f$services$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sendOtp"])(otpForm.mobileNumber);
            if (payload.error) {
                throw new Error(payload.error ?? "Unable to send OTP");
            }
            setOtpSent(true);
            setResendCountdown(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$auth$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RESEND_COOLDOWN_SECONDS"]);
            setOtpForm((current)=>({
                    ...current,
                    otp: ""
                }));
            setLoginMessage(payload.data?.message ?? "OTP sent. Enter it to complete login.");
        } catch (error) {
            setOtpSent(false);
            setLoginMessage(error instanceof Error ? error.message : "Unable to send OTP");
        } finally{
            setSubmitting(null);
        }
    };
    const handleResendOtp = async ()=>{
        if (!otpForm.mobileNumber || resendCountdown > 0) {
            return;
        }
        setSubmitting("resendOtp");
        setLoginMessage("");
        try {
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$auth$2f$services$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resendOtp"])(otpForm.mobileNumber);
            if (!result.ok) {
                if (result.payload.retryAfterSeconds) {
                    setResendCountdown(result.payload.retryAfterSeconds);
                }
                throw new Error(result.payload.error ?? "Unable to resend OTP");
            }
            setResendCountdown(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$auth$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RESEND_COOLDOWN_SECONDS"]);
            setLoginMessage(result.payload.data?.message ?? "OTP resent successfully.");
        } catch (error) {
            setLoginMessage(error instanceof Error ? error.message : "Unable to resend OTP");
        } finally{
            setSubmitting(null);
        }
    };
    const handleVerifyOtp = async (event)=>{
        event.preventDefault();
        setSubmitting("verifyOtp");
        setLoginMessage("");
        try {
            const payload = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$auth$2f$services$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["verifyOtp"])(otpForm);
            if (!payload.data) {
                throw new Error(payload.error ?? "Unable to verify OTP");
            }
            setSession(payload.data);
            const firstWorkspaceId = payload.data.memberships[0]?.familyId ?? "";
            if (firstWorkspaceId) {
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$auth$2f$services$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setActiveWorkspace"])(firstWorkspaceId);
                setActiveWorkspaceId(firstWorkspaceId);
            }
            setOtpForm(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$auth$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["emptyOtpForm"]);
            setOtpSent(false);
            setResendCountdown(0);
            setLoginMessage("Login successful.");
        } catch (error) {
            setLoginMessage(error instanceof Error ? error.message : "Unable to verify OTP");
        } finally{
            setSubmitting(null);
        }
    };
    const handleCreateWorkspace = async (event)=>{
        event.preventDefault();
        setSubmitting("workspace");
        setWorkspaceMessage("");
        try {
            const payload = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$auth$2f$services$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createFamilySpace"])(workspaceForm);
            if (!payload.data?.id) {
                throw new Error(payload.error ?? "Unable to create Family Space");
            }
            setWorkspaceForm(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$auth$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["emptyWorkspaceForm"]);
            setWorkspaceMessage(payload.data.initialAdmin ? `Family Space created. ${payload.data.initialAdmin.fullName} can now log in with OTP using ${payload.data.initialAdmin.mobileNumber}.` : "Family Space created successfully.");
        } catch (error) {
            setWorkspaceMessage(error instanceof Error ? error.message : "Unable to create Family Space");
        } finally{
            setSubmitting(null);
        }
    };
    const handleLogout = async ()=>{
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$auth$2f$services$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["logout"])();
        setSession(null);
        setActiveWorkspaceId("");
        setRegisterMessage("");
        setLoginMessage("Logged out.");
    };
    const handleWorkspaceSwitch = async (familyId)=>{
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$auth$2f$services$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setActiveWorkspace"])(familyId);
        setActiveWorkspaceId(familyId);
    };
    if (!sessionChecked) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$auth$2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].authPage,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$auth$2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].authShell,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$auth$2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].authBrandPanel,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$BrandLogo$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BrandLogo"], {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$auth$2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].logoWrap,
                            imageClassName: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$auth$2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].logoImage,
                            fallbackClassName: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$auth$2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].logoFallback
                        }, void 0, false, {
                            fileName: "[project]/app/platform/auth/workspace.tsx",
                            lineNumber: 230,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$auth$2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].brandQuote,
                            children: "Checking secure session..."
                        }, void 0, false, {
                            fileName: "[project]/app/platform/auth/workspace.tsx",
                            lineNumber: 231,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/platform/auth/workspace.tsx",
                    lineNumber: 229,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/platform/auth/workspace.tsx",
                lineNumber: 228,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/platform/auth/workspace.tsx",
            lineNumber: 227,
            columnNumber: 7
        }, this);
    }
    if (!session) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$auth$2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].authPage,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$auth$2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].authShell,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$auth$2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].authBrandPanel,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$BrandLogo$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BrandLogo"], {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$auth$2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].logoWrap,
                                imageClassName: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$auth$2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].logoImage,
                                fallbackClassName: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$auth$2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].logoFallback
                            }, void 0, false, {
                                fileName: "[project]/app/platform/auth/workspace.tsx",
                                lineNumber: 243,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$auth$2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].brandQuote,
                                children: "Connect every branch of your family. Preserve your heritage. Share your story."
                            }, void 0, false, {
                                fileName: "[project]/app/platform/auth/workspace.tsx",
                                lineNumber: 248,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$auth$2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].brandList,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: "Build an interactive family tree across generations"
                                    }, void 0, false, {
                                        fileName: "[project]/app/platform/auth/workspace.tsx",
                                        lineNumber: 252,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: "Invite relatives and grow your tree together"
                                    }, void 0, false, {
                                        fileName: "[project]/app/platform/auth/workspace.tsx",
                                        lineNumber: 253,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: "Preserve photos, stories and timelines"
                                    }, void 0, false, {
                                        fileName: "[project]/app/platform/auth/workspace.tsx",
                                        lineNumber: 254,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: "Celebrate birthdays and anniversaries"
                                    }, void 0, false, {
                                        fileName: "[project]/app/platform/auth/workspace.tsx",
                                        lineNumber: 255,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: "Private and secure - you control who sees what"
                                    }, void 0, false, {
                                        fileName: "[project]/app/platform/auth/workspace.tsx",
                                        lineNumber: 256,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/platform/auth/workspace.tsx",
                                lineNumber: 251,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/platform/auth/workspace.tsx",
                        lineNumber: 242,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$auth$2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].authCard,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$auth$2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].authModeRow,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$auth$2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].authModeButton} ${authMode === "login" ? __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$auth$2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].authModeButtonActive : ""}`,
                                        onClick: ()=>setAuthMode("login"),
                                        children: "Welcome Back"
                                    }, void 0, false, {
                                        fileName: "[project]/app/platform/auth/workspace.tsx",
                                        lineNumber: 262,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$auth$2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].authModeButton} ${authMode === "register" ? __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$auth$2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].authModeButtonActive : ""}`,
                                        onClick: ()=>setAuthMode("register"),
                                        children: "Create Account"
                                    }, void 0, false, {
                                        fileName: "[project]/app/platform/auth/workspace.tsx",
                                        lineNumber: 269,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/platform/auth/workspace.tsx",
                                lineNumber: 261,
                                columnNumber: 13
                            }, this),
                            authMode === "login" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$auth$2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].authHeader,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                children: "Welcome Back"
                                            }, void 0, false, {
                                                fileName: "[project]/app/platform/auth/workspace.tsx",
                                                lineNumber: 281,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: "Sign in to continue your family journey."
                                            }, void 0, false, {
                                                fileName: "[project]/app/platform/auth/workspace.tsx",
                                                lineNumber: 282,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/platform/auth/workspace.tsx",
                                        lineNumber: 280,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$auth$2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].authSocialStack,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$auth$2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].authSocialButton,
                                                children: "Continue with Google"
                                            }, void 0, false, {
                                                fileName: "[project]/app/platform/auth/workspace.tsx",
                                                lineNumber: 285,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$auth$2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].authSocialButton,
                                                children: "Continue with Facebook"
                                            }, void 0, false, {
                                                fileName: "[project]/app/platform/auth/workspace.tsx",
                                                lineNumber: 288,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/platform/auth/workspace.tsx",
                                        lineNumber: 284,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$auth$2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].authDivider,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "OR"
                                        }, void 0, false, {
                                            fileName: "[project]/app/platform/auth/workspace.tsx",
                                            lineNumber: 293,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/platform/auth/workspace.tsx",
                                        lineNumber: 292,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$auth$2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].authForm,
                                        onSubmit: otpSent ? handleVerifyOtp : handleSendOtp,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$auth$2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].authField,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "Mobile number"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/platform/auth/workspace.tsx",
                                                        lineNumber: 297,
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
                                                        fileName: "[project]/app/platform/auth/workspace.tsx",
                                                        lineNumber: 298,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/platform/auth/workspace.tsx",
                                                lineNumber: 296,
                                                columnNumber: 19
                                            }, this),
                                            otpSent ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$auth$2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].authField,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "OTP"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/platform/auth/workspace.tsx",
                                                        lineNumber: 313,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        value: otpForm.otp,
                                                        onChange: (event)=>setOtpForm((current)=>({
                                                                    ...current,
                                                                    otp: event.target.value
                                                                })),
                                                        placeholder: "Enter the OTP",
                                                        required: true
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/platform/auth/workspace.tsx",
                                                        lineNumber: 314,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/platform/auth/workspace.tsx",
                                                lineNumber: 312,
                                                columnNumber: 21
                                            }, this) : null,
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$auth$2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].authPrimaryButton,
                                                type: "submit",
                                                disabled: submitting === "sendOtp" || submitting === "verifyOtp",
                                                children: otpSent ? submitting === "verifyOtp" ? "Verifying..." : "Verify OTP" : submitting === "sendOtp" ? "Sending..." : "Send OTP"
                                            }, void 0, false, {
                                                fileName: "[project]/app/platform/auth/workspace.tsx",
                                                lineNumber: 322,
                                                columnNumber: 19
                                            }, this),
                                            otpSent ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$auth$2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].authUtilityRow,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$auth$2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].authTextButton,
                                                        onClick: ()=>{
                                                            setOtpSent(false);
                                                            setResendCountdown(0);
                                                            setOtpForm((current)=>({
                                                                    ...current,
                                                                    otp: ""
                                                                }));
                                                            setLoginMessage("");
                                                        },
                                                        children: "Change number"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/platform/auth/workspace.tsx",
                                                        lineNumber: 337,
                                                        columnNumber: 23
                                                    }, this),
                                                    resendCountdown > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$auth$2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].authHint,
                                                        children: [
                                                            "Resend SMS in ",
                                                            formatCountdown(resendCountdown)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/platform/auth/workspace.tsx",
                                                        lineNumber: 350,
                                                        columnNumber: 25
                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$auth$2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].authTextButton,
                                                        onClick: ()=>void handleResendOtp(),
                                                        disabled: submitting === "resendOtp",
                                                        children: submitting === "resendOtp" ? "Resending..." : "Resend SMS"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/platform/auth/workspace.tsx",
                                                        lineNumber: 352,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/platform/auth/workspace.tsx",
                                                lineNumber: 336,
                                                columnNumber: 21
                                            }, this) : null,
                                            loginMessage ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$auth$2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].authMessage,
                                                children: loginMessage
                                            }, void 0, false, {
                                                fileName: "[project]/app/platform/auth/workspace.tsx",
                                                lineNumber: 363,
                                                columnNumber: 35
                                            }, this) : null
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/platform/auth/workspace.tsx",
                                        lineNumber: 295,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$auth$2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].authHeader,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                children: "Create Account"
                                            }, void 0, false, {
                                                fileName: "[project]/app/platform/auth/workspace.tsx",
                                                lineNumber: 369,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: "Join thousands of families preserving their legacy."
                                            }, void 0, false, {
                                                fileName: "[project]/app/platform/auth/workspace.tsx",
                                                lineNumber: 370,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/platform/auth/workspace.tsx",
                                        lineNumber: 368,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$auth$2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].authSocialStack,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$auth$2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].authSocialButton,
                                            children: "Sign up with Google"
                                        }, void 0, false, {
                                            fileName: "[project]/app/platform/auth/workspace.tsx",
                                            lineNumber: 373,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/platform/auth/workspace.tsx",
                                        lineNumber: 372,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$auth$2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].authDivider,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "OR"
                                        }, void 0, false, {
                                            fileName: "[project]/app/platform/auth/workspace.tsx",
                                            lineNumber: 378,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/platform/auth/workspace.tsx",
                                        lineNumber: 377,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$auth$2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].authForm,
                                        onSubmit: handleRegister,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$auth$2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].authField,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "Full name"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/platform/auth/workspace.tsx",
                                                        lineNumber: 382,
                                                        columnNumber: 21
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
                                                        fileName: "[project]/app/platform/auth/workspace.tsx",
                                                        lineNumber: 383,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/platform/auth/workspace.tsx",
                                                lineNumber: 381,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$auth$2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].authField,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "Mobile number"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/platform/auth/workspace.tsx",
                                                        lineNumber: 391,
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
                                                        fileName: "[project]/app/platform/auth/workspace.tsx",
                                                        lineNumber: 392,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/platform/auth/workspace.tsx",
                                                lineNumber: 390,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$auth$2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].authGoldButton,
                                                type: "submit",
                                                disabled: submitting === "register",
                                                children: submitting === "register" ? "Creating..." : "Create My Account"
                                            }, void 0, false, {
                                                fileName: "[project]/app/platform/auth/workspace.tsx",
                                                lineNumber: 399,
                                                columnNumber: 19
                                            }, this),
                                            registerMessage ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$auth$2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].authMessage,
                                                children: registerMessage
                                            }, void 0, false, {
                                                fileName: "[project]/app/platform/auth/workspace.tsx",
                                                lineNumber: 402,
                                                columnNumber: 38
                                            }, this) : null
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/platform/auth/workspace.tsx",
                                        lineNumber: 380,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/platform/auth/workspace.tsx",
                        lineNumber: 260,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/platform/auth/workspace.tsx",
                lineNumber: 241,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/platform/auth/workspace.tsx",
            lineNumber: 240,
            columnNumber: 7
        }, this);
    }
    const activeMembership = session.memberships.find((membership)=>membership.familyId === activeWorkspaceId) ?? session.memberships[0] ?? null;
    const membershipCount = session.memberships.length;
    const familyMembersStat = membershipCount;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(PostLoginShell, {
        title: "Family Space Administration",
        subtitle: "Manage your platform session, switch Family Spaces, and open the working areas where members and access are maintained.",
        activeNav: "platform",
        currentFamily: activeMembership?.familyName ?? null,
        currentUser: session.user.fullName,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$auth$2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].dashboardGrid,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$auth$2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].dashboardTopRow,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$auth$2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].panel} ${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$auth$2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].activeFamilyCard}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$auth$2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].activeFamilyTag,
                                    children: "● Active Family Space"
                                }, void 0, false, {
                                    fileName: "[project]/app/platform/auth/workspace.tsx",
                                    lineNumber: 427,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$auth$2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].activeFamilyName,
                                    children: activeMembership?.familyName ?? "No Family Space selected"
                                }, void 0, false, {
                                    fileName: "[project]/app/platform/auth/workspace.tsx",
                                    lineNumber: 428,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$auth$2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].activeFamilyRoleLine,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$auth$2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].roleBadge,
                                            children: activeMembership?.role ?? "No active role"
                                        }, void 0, false, {
                                            fileName: "[project]/app/platform/auth/workspace.tsx",
                                            lineNumber: 430,
                                            columnNumber: 15
                                        }, this),
                                        activeMembership?.familyName ? "Motihari · Est. 1947" : "Select a family space to continue"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/platform/auth/workspace.tsx",
                                    lineNumber: 429,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$auth$2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].actionRow,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/family-space",
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$auth$2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].primaryButton,
                                            children: "🌳 Enter Family Space"
                                        }, void 0, false, {
                                            fileName: "[project]/app/platform/auth/workspace.tsx",
                                            lineNumber: 434,
                                            columnNumber: 15
                                        }, this),
                                        activeMembership ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$auth$2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].secondaryButton,
                                            onClick: ()=>void handleWorkspaceSwitch(activeMembership.familyId),
                                            children: "⇄ Switch"
                                        }, void 0, false, {
                                            fileName: "[project]/app/platform/auth/workspace.tsx",
                                            lineNumber: 438,
                                            columnNumber: 17
                                        }, this) : null,
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/platform/admin/security",
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$auth$2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].ghostButton,
                                            children: "⚙ Settings"
                                        }, void 0, false, {
                                            fileName: "[project]/app/platform/auth/workspace.tsx",
                                            lineNumber: 442,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/platform/auth/workspace.tsx",
                                    lineNumber: 433,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$auth$2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].activeFamilyStats,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: familyMembersStat
                                            }, void 0, false, {
                                                fileName: "[project]/app/platform/auth/workspace.tsx",
                                                lineNumber: 448,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "Members"
                                            }, void 0, false, {
                                                fileName: "[project]/app/platform/auth/workspace.tsx",
                                                lineNumber: 449,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/platform/auth/workspace.tsx",
                                        lineNumber: 447,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/platform/auth/workspace.tsx",
                                    lineNumber: 446,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/platform/auth/workspace.tsx",
                            lineNumber: 426,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$auth$2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].panel} ${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$auth$2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].profileCard}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$auth$2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].sessionLabel,
                                    children: "Current session"
                                }, void 0, false, {
                                    fileName: "[project]/app/platform/auth/workspace.tsx",
                                    lineNumber: 455,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$auth$2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].sessionUserName,
                                    children: session.user.fullName
                                }, void 0, false, {
                                    fileName: "[project]/app/platform/auth/workspace.tsx",
                                    lineNumber: 456,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$auth$2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].sessionPhone,
                                    children: [
                                        "📱 ",
                                        session.user.mobileNumber
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/platform/auth/workspace.tsx",
                                    lineNumber: 457,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$auth$2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].sessionStatus,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$auth$2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].sessionStatusDot
                                        }, void 0, false, {
                                            fileName: "[project]/app/platform/auth/workspace.tsx",
                                            lineNumber: 459,
                                            columnNumber: 15
                                        }, this),
                                        "Active session · ",
                                        activeMembership?.familyName ?? "Family Space"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/platform/auth/workspace.tsx",
                                    lineNumber: 458,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$auth$2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].profileCardActions,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/family-space",
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$auth$2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].secondaryButton,
                                            children: "🚪 Open Family Space"
                                        }, void 0, false, {
                                            fileName: "[project]/app/platform/auth/workspace.tsx",
                                            lineNumber: 463,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$auth$2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].secondaryButton} ${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$auth$2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].logoutButton}`,
                                            onClick: handleLogout,
                                            children: "↩ Logout"
                                        }, void 0, false, {
                                            fileName: "[project]/app/platform/auth/workspace.tsx",
                                            lineNumber: 466,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/platform/auth/workspace.tsx",
                                    lineNumber: 462,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$auth$2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].sessionFooterNote,
                                    children: "You are logged in as admin. Session is active and secured with OTP verification."
                                }, void 0, false, {
                                    fileName: "[project]/app/platform/auth/workspace.tsx",
                                    lineNumber: 470,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/platform/auth/workspace.tsx",
                            lineNumber: 454,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/platform/auth/workspace.tsx",
                    lineNumber: 425,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$auth$2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].dashboardMiddleRow,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$auth$2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].panel,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$auth$2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].cardHeader,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            children: "Quick Actions"
                                        }, void 0, false, {
                                            fileName: "[project]/app/platform/auth/workspace.tsx",
                                            lineNumber: 479,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$auth$2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].cardHeaderMeta,
                                            children: "Jump to any section"
                                        }, void 0, false, {
                                            fileName: "[project]/app/platform/auth/workspace.tsx",
                                            lineNumber: 480,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/platform/auth/workspace.tsx",
                                    lineNumber: 478,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$auth$2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].navGrid,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/family-space",
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$auth$2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].navCard,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$auth$2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].navCardIcon,
                                                    children: "🌳"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/platform/auth/workspace.tsx",
                                                    lineNumber: 484,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: "Family Space"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/platform/auth/workspace.tsx",
                                                    lineNumber: 485,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "View members, tree & events"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/platform/auth/workspace.tsx",
                                                    lineNumber: 486,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/platform/auth/workspace.tsx",
                                            lineNumber: 483,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/platform/admin/data-capture",
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$auth$2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].navCard,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$auth$2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].navCardIcon,
                                                    children: "📸"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/platform/auth/workspace.tsx",
                                                    lineNumber: 489,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: "Data Capture"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/platform/auth/workspace.tsx",
                                                    lineNumber: 490,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "Photos, events, milestones"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/platform/auth/workspace.tsx",
                                                    lineNumber: 491,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/platform/auth/workspace.tsx",
                                            lineNumber: 488,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/platform/admin/data-capture",
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$auth$2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].navCard,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$auth$2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].navCardIcon,
                                                    children: "➕"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/platform/auth/workspace.tsx",
                                                    lineNumber: 494,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: "Add Member"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/platform/auth/workspace.tsx",
                                                    lineNumber: 495,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "Invite or create a profile"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/platform/auth/workspace.tsx",
                                                    lineNumber: 496,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/platform/auth/workspace.tsx",
                                            lineNumber: 493,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/platform/admin/security",
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$auth$2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].navCard,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$auth$2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].navCardIcon,
                                                    children: "🔒"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/platform/auth/workspace.tsx",
                                                    lineNumber: 499,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: "Security"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/platform/auth/workspace.tsx",
                                                    lineNumber: 500,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "Roles, access & sessions"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/platform/auth/workspace.tsx",
                                                    lineNumber: 501,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/platform/auth/workspace.tsx",
                                            lineNumber: 498,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/platform/auth/workspace.tsx",
                                    lineNumber: 482,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/platform/auth/workspace.tsx",
                            lineNumber: 477,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$auth$2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].panel,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$auth$2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].cardHeader,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            children: "Your Family Spaces"
                                        }, void 0, false, {
                                            fileName: "[project]/app/platform/auth/workspace.tsx",
                                            lineNumber: 508,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$auth$2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].cardHeaderMeta,
                                            children: [
                                                session.memberships.length,
                                                " space"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/platform/auth/workspace.tsx",
                                            lineNumber: 509,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/platform/auth/workspace.tsx",
                                    lineNumber: 507,
                                    columnNumber: 13
                                }, this),
                                session.memberships.length ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$auth$2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].membershipList,
                                            children: session.memberships.map((membership)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$auth$2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].membershipItem,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$auth$2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].membershipBadge,
                                                            children: membership.familyName.slice(0, 1).toUpperCase()
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/platform/auth/workspace.tsx",
                                                            lineNumber: 516,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$auth$2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].membershipMeta,
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                    children: membership.familyName
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/platform/auth/workspace.tsx",
                                                                    lineNumber: 518,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    children: membership.role
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/platform/auth/workspace.tsx",
                                                                    lineNumber: 519,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/platform/auth/workspace.tsx",
                                                            lineNumber: 517,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$auth$2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].membershipActions,
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                type: "button",
                                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$auth$2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].switchButton,
                                                                onClick: ()=>void handleWorkspaceSwitch(membership.familyId),
                                                                children: activeWorkspaceId === membership.familyId ? "Active" : "Enter"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/platform/auth/workspace.tsx",
                                                                lineNumber: 522,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/platform/auth/workspace.tsx",
                                                            lineNumber: 521,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, `${membership.familyId}-${membership.role}`, true, {
                                                    fileName: "[project]/app/platform/auth/workspace.tsx",
                                                    lineNumber: 515,
                                                    columnNumber: 21
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/app/platform/auth/workspace.tsx",
                                            lineNumber: 513,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$auth$2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].addFamilyButton,
                                            onClick: ()=>createFormRef.current?.scrollIntoView({
                                                    behavior: "smooth",
                                                    block: "start"
                                                }),
                                            children: "+ Create a new Family Space"
                                        }, void 0, false, {
                                            fileName: "[project]/app/platform/auth/workspace.tsx",
                                            lineNumber: 533,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$auth$2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].empty,
                                    children: "No Family Space memberships yet."
                                }, void 0, false, {
                                    fileName: "[project]/app/platform/auth/workspace.tsx",
                                    lineNumber: 542,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/platform/auth/workspace.tsx",
                            lineNumber: 506,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/platform/auth/workspace.tsx",
                    lineNumber: 476,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                    ref: createFormRef,
                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$auth$2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].panel} ${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$auth$2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].createCard}`,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            children: "Create Family Space"
                        }, void 0, false, {
                            fileName: "[project]/app/platform/auth/workspace.tsx",
                            lineNumber: 548,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$auth$2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].form,
                            onSubmit: handleCreateWorkspace,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$auth$2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].field,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "Family Space name"
                                        }, void 0, false, {
                                            fileName: "[project]/app/platform/auth/workspace.tsx",
                                            lineNumber: 551,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            value: workspaceForm.name,
                                            onChange: (event)=>setWorkspaceForm((current)=>({
                                                        ...current,
                                                        name: event.target.value
                                                    })),
                                            placeholder: "e.g. Sharma Family",
                                            required: true,
                                            disabled: !session
                                        }, void 0, false, {
                                            fileName: "[project]/app/platform/auth/workspace.tsx",
                                            lineNumber: 552,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/platform/auth/workspace.tsx",
                                    lineNumber: 550,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$auth$2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].field,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "Initial Family admin name"
                                        }, void 0, false, {
                                            fileName: "[project]/app/platform/auth/workspace.tsx",
                                            lineNumber: 561,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            value: workspaceForm.initialAdminName,
                                            onChange: (event)=>setWorkspaceForm((current)=>({
                                                        ...current,
                                                        initialAdminName: event.target.value
                                                    })),
                                            placeholder: "e.g. Rahul Prakash",
                                            required: true,
                                            disabled: !session
                                        }, void 0, false, {
                                            fileName: "[project]/app/platform/auth/workspace.tsx",
                                            lineNumber: 562,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/platform/auth/workspace.tsx",
                                    lineNumber: 560,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$auth$2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].field,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "Initial Family admin mobile number"
                                        }, void 0, false, {
                                            fileName: "[project]/app/platform/auth/workspace.tsx",
                                            lineNumber: 571,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            value: workspaceForm.initialAdminMobileNumber,
                                            onChange: (event)=>setWorkspaceForm((current)=>({
                                                        ...current,
                                                        initialAdminMobileNumber: event.target.value
                                                    })),
                                            placeholder: "10 digits",
                                            required: true,
                                            disabled: !session
                                        }, void 0, false, {
                                            fileName: "[project]/app/platform/auth/workspace.tsx",
                                            lineNumber: 572,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/platform/auth/workspace.tsx",
                                    lineNumber: 570,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$auth$2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].field,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "Native place"
                                        }, void 0, false, {
                                            fileName: "[project]/app/platform/auth/workspace.tsx",
                                            lineNumber: 583,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            value: workspaceForm.nativePlace,
                                            onChange: (event)=>setWorkspaceForm((current)=>({
                                                        ...current,
                                                        nativePlace: event.target.value
                                                    })),
                                            placeholder: "Optional",
                                            disabled: !session
                                        }, void 0, false, {
                                            fileName: "[project]/app/platform/auth/workspace.tsx",
                                            lineNumber: 584,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/platform/auth/workspace.tsx",
                                    lineNumber: 582,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$auth$2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].field,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "Description"
                                        }, void 0, false, {
                                            fileName: "[project]/app/platform/auth/workspace.tsx",
                                            lineNumber: 592,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            value: workspaceForm.description,
                                            onChange: (event)=>setWorkspaceForm((current)=>({
                                                        ...current,
                                                        description: event.target.value
                                                    })),
                                            placeholder: "Optional purpose or branch note",
                                            disabled: !session
                                        }, void 0, false, {
                                            fileName: "[project]/app/platform/auth/workspace.tsx",
                                            lineNumber: 593,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/platform/auth/workspace.tsx",
                                    lineNumber: 591,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$auth$2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].privacyNote,
                                    children: "This Family Space remains private by default. Only invited members can access it."
                                }, void 0, false, {
                                    fileName: "[project]/app/platform/auth/workspace.tsx",
                                    lineNumber: 600,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$auth$2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].primaryButton,
                                    type: "submit",
                                    disabled: submitting === "workspace" || !session,
                                    children: submitting === "workspace" ? "Creating..." : "Create Family Space"
                                }, void 0, false, {
                                    fileName: "[project]/app/platform/auth/workspace.tsx",
                                    lineNumber: 603,
                                    columnNumber: 13
                                }, this),
                                workspaceMessage ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$auth$2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].message,
                                    children: workspaceMessage
                                }, void 0, false, {
                                    fileName: "[project]/app/platform/auth/workspace.tsx",
                                    lineNumber: 606,
                                    columnNumber: 33
                                }, this) : null
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/platform/auth/workspace.tsx",
                            lineNumber: 549,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/platform/auth/workspace.tsx",
                    lineNumber: 547,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/platform/auth/workspace.tsx",
            lineNumber: 424,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/platform/auth/workspace.tsx",
        lineNumber: 417,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=_261d5265._.js.map