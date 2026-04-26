(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/BrandLogo.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BrandLogo",
    ()=>BrandLogo
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function BrandLogo(param) {
    let { className, imageClassName, fallbackClassName, alt = "Kutumbsy logo" } = param;
    _s();
    const [imageMissing, setImageMissing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: className,
        children: [
            !imageMissing ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                src: "/logo_1kutumb.png",
                alt: alt,
                className: imageClassName,
                onError: ()=>setImageMissing(true)
            }, void 0, false, {
                fileName: "[project]/components/BrandLogo.tsx",
                lineNumber: 23,
                columnNumber: 9
            }, this) : null,
            imageMissing ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
_s(BrandLogo, "PMpvn1qXEn7gc5iuc6lBGB4GxXA=");
_c = BrandLogo;
var _c;
__turbopack_context__.k.register(_c, "BrandLogo");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/LoadingState.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "bounce": "LoadingState-module__IwaHbW__bounce",
  "compact": "LoadingState-module__IwaHbW__compact",
  "dot": "LoadingState-module__IwaHbW__dot",
  "dots": "LoadingState-module__IwaHbW__dots",
  "logoFallback": "LoadingState-module__IwaHbW__logoFallback",
  "logoImage": "LoadingState-module__IwaHbW__logoImage",
  "logoWrap": "LoadingState-module__IwaHbW__logoWrap",
  "message": "LoadingState-module__IwaHbW__message",
  "root": "LoadingState-module__IwaHbW__root",
  "title": "LoadingState-module__IwaHbW__title",
});
}),
"[project]/components/LoadingState.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LoadingState",
    ()=>LoadingState
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$BrandLogo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/BrandLogo.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$LoadingState$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/components/LoadingState.module.css [app-client] (css module)");
"use client";
;
;
;
function LoadingState(param) {
    let { title = "Loading...", message, compact = false, className } = param;
    const classes = [
        __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$LoadingState$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].root,
        compact ? __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$LoadingState$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].compact : "",
        className !== null && className !== void 0 ? className : ""
    ].filter(Boolean).join(" ");
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: classes,
        role: "status",
        "aria-live": "polite",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$BrandLogo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BrandLogo"], {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$LoadingState$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].logoWrap,
                imageClassName: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$LoadingState$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].logoImage,
                fallbackClassName: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$LoadingState$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].logoFallback,
                alt: "Kutumbsy"
            }, void 0, false, {
                fileName: "[project]/components/LoadingState.tsx",
                lineNumber: 23,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$LoadingState$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].dots,
                "aria-hidden": "true",
                children: [
                    0,
                    1,
                    2,
                    3,
                    4,
                    5
                ].map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$LoadingState$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].dot
                    }, item, false, {
                        fileName: "[project]/components/LoadingState.tsx",
                        lineNumber: 31,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/LoadingState.tsx",
                lineNumber: 29,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$LoadingState$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].title,
                children: title
            }, void 0, false, {
                fileName: "[project]/components/LoadingState.tsx",
                lineNumber: 34,
                columnNumber: 7
            }, this),
            message ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$LoadingState$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].message,
                children: message
            }, void 0, false, {
                fileName: "[project]/components/LoadingState.tsx",
                lineNumber: 35,
                columnNumber: 18
            }, this) : null
        ]
    }, void 0, true, {
        fileName: "[project]/components/LoadingState.tsx",
        lineNumber: 22,
        columnNumber: 5
    }, this);
}
_c = LoadingState;
var _c;
__turbopack_context__.k.register(_c, "LoadingState");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/PostLoginShell.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "brandFallback": "PostLoginShell-module__QyUwxW__brandFallback",
  "brandIcon": "PostLoginShell-module__QyUwxW__brandIcon",
  "brandLink": "PostLoginShell-module__QyUwxW__brandLink",
  "brandLogo": "PostLoginShell-module__QyUwxW__brandLogo",
  "brandLogoWrap": "PostLoginShell-module__QyUwxW__brandLogoWrap",
  "brandText": "PostLoginShell-module__QyUwxW__brandText",
  "contentGrid": "PostLoginShell-module__QyUwxW__contentGrid",
  "eyebrow": "PostLoginShell-module__QyUwxW__eyebrow",
  "footer": "PostLoginShell-module__QyUwxW__footer",
  "main": "PostLoginShell-module__QyUwxW__main",
  "navAvatar": "PostLoginShell-module__QyUwxW__navAvatar",
  "navItem": "PostLoginShell-module__QyUwxW__navItem",
  "navItemActive": "PostLoginShell-module__QyUwxW__navItemActive",
  "navItemIcon": "PostLoginShell-module__QyUwxW__navItemIcon",
  "navList": "PostLoginShell-module__QyUwxW__navList",
  "page": "PostLoginShell-module__QyUwxW__page",
  "pageTop": "PostLoginShell-module__QyUwxW__pageTop",
  "rightRail": "PostLoginShell-module__QyUwxW__rightRail",
  "shell": "PostLoginShell-module__QyUwxW__shell",
  "shellNoRail": "PostLoginShell-module__QyUwxW__shellNoRail",
  "shellWithRail": "PostLoginShell-module__QyUwxW__shellWithRail",
  "sidebar": "PostLoginShell-module__QyUwxW__sidebar",
  "sidebarContext": "PostLoginShell-module__QyUwxW__sidebarContext",
  "sidebarFamilyButton": "PostLoginShell-module__QyUwxW__sidebarFamilyButton",
  "sidebarFamilyCode": "PostLoginShell-module__QyUwxW__sidebarFamilyCode",
  "sidebarHint": "PostLoginShell-module__QyUwxW__sidebarHint",
  "sidebarLabel": "PostLoginShell-module__QyUwxW__sidebarLabel",
  "sidebarNav": "PostLoginShell-module__QyUwxW__sidebarNav",
  "sidebarUser": "PostLoginShell-module__QyUwxW__sidebarUser",
  "sidebarUserAvatar": "PostLoginShell-module__QyUwxW__sidebarUserAvatar",
  "sidebarUserName": "PostLoginShell-module__QyUwxW__sidebarUserName",
  "sidebarUserRole": "PostLoginShell-module__QyUwxW__sidebarUserRole",
  "sidebarValue": "PostLoginShell-module__QyUwxW__sidebarValue",
  "subtitle": "PostLoginShell-module__QyUwxW__subtitle",
  "title": "PostLoginShell-module__QyUwxW__title",
  "topAction": "PostLoginShell-module__QyUwxW__topAction",
  "topActionActive": "PostLoginShell-module__QyUwxW__topActionActive",
  "topActions": "PostLoginShell-module__QyUwxW__topActions",
  "topNav": "PostLoginShell-module__QyUwxW__topNav",
  "topNavInner": "PostLoginShell-module__QyUwxW__topNavInner",
});
}),
"[project]/components/PostLoginShell.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PostLoginShell",
    ()=>PostLoginShell
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$PostLoginShell$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/components/PostLoginShell.module.css [app-client] (css module)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function PostLoginShell(param) {
    let { title, subtitle, activeNav, currentFamily, currentFamilyCode, currentUser, children, rightRail } = param;
    _s();
    const avatarInitial = (currentUser !== null && currentUser !== void 0 ? currentUser : "U").trim().charAt(0).toUpperCase() || "U";
    const [showFamilyCode, setShowFamilyCode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$PostLoginShell$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].page,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$PostLoginShell$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].topNav,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$PostLoginShell$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].topNavInner,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/family-space",
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$PostLoginShell$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].brandLink,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: "/logo_1kutumb.png",
                                alt: "Kutumbsy",
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$PostLoginShell$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].brandLogo
                            }, void 0, false, {
                                fileName: "[project]/components/PostLoginShell.tsx",
                                lineNumber: 38,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/PostLoginShell.tsx",
                            lineNumber: 37,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$PostLoginShell$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].topActions,
                            "aria-label": "Primary",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/family-space",
                                    className: "".concat(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$PostLoginShell$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].topAction, " ").concat(activeNav === "family-space" ? __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$PostLoginShell$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].topActionActive : ""),
                                    children: "Family Home"
                                }, void 0, false, {
                                    fileName: "[project]/components/PostLoginShell.tsx",
                                    lineNumber: 41,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/family-space/requests",
                                    className: "".concat(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$PostLoginShell$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].topAction, " ").concat(activeNav === "requests" ? __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$PostLoginShell$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].topActionActive : ""),
                                    children: "Requests"
                                }, void 0, false, {
                                    fileName: "[project]/components/PostLoginShell.tsx",
                                    lineNumber: 44,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/family-space/data-capture",
                                    className: "".concat(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$PostLoginShell$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].topAction, " ").concat(activeNav === "data-capture" ? __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$PostLoginShell$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].topActionActive : ""),
                                    children: "Add Member"
                                }, void 0, false, {
                                    fileName: "[project]/components/PostLoginShell.tsx",
                                    lineNumber: 47,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/PostLoginShell.tsx",
                            lineNumber: 40,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$PostLoginShell$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].navAvatar,
                            children: avatarInitial
                        }, void 0, false, {
                            fileName: "[project]/components/PostLoginShell.tsx",
                            lineNumber: 51,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/PostLoginShell.tsx",
                    lineNumber: 36,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/PostLoginShell.tsx",
                lineNumber: 35,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "".concat(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$PostLoginShell$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].shell, " ").concat(rightRail ? __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$PostLoginShell$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].shellWithRail : __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$PostLoginShell$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].shellNoRail),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$PostLoginShell$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sidebar,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$PostLoginShell$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sidebarContext,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$PostLoginShell$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sidebarLabel,
                                        children: "Current context"
                                    }, void 0, false, {
                                        fileName: "[project]/components/PostLoginShell.tsx",
                                        lineNumber: 58,
                                        columnNumber: 13
                                    }, this),
                                    currentFamilyCode && currentFamily ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$PostLoginShell$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sidebarFamilyButton,
                                        onClick: ()=>setShowFamilyCode((value)=>!value),
                                        title: "Click to show family code",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$PostLoginShell$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sidebarValue,
                                            children: currentFamily
                                        }, void 0, false, {
                                            fileName: "[project]/components/PostLoginShell.tsx",
                                            lineNumber: 66,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/PostLoginShell.tsx",
                                        lineNumber: 60,
                                        columnNumber: 15
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$PostLoginShell$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sidebarValue,
                                        children: currentFamily || "No Family Space selected"
                                    }, void 0, false, {
                                        fileName: "[project]/components/PostLoginShell.tsx",
                                        lineNumber: 69,
                                        columnNumber: 15
                                    }, this),
                                    currentFamilyCode && showFamilyCode ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$PostLoginShell$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sidebarFamilyCode,
                                        children: [
                                            "Code: ",
                                            currentFamilyCode
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/PostLoginShell.tsx",
                                        lineNumber: 71,
                                        columnNumber: 52
                                    }, this) : null,
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$PostLoginShell$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sidebarHint,
                                        children: currentUser || "No active user loaded"
                                    }, void 0, false, {
                                        fileName: "[project]/components/PostLoginShell.tsx",
                                        lineNumber: 72,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/PostLoginShell.tsx",
                                lineNumber: 57,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$PostLoginShell$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sidebarNav,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$PostLoginShell$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sidebarLabel,
                                        children: "Navigate"
                                    }, void 0, false, {
                                        fileName: "[project]/components/PostLoginShell.tsx",
                                        lineNumber: 76,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$PostLoginShell$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].navList,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/family-space",
                                                className: "".concat(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$PostLoginShell$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].navItem, " ").concat(activeNav === "family-space" ? __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$PostLoginShell$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].navItemActive : ""),
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$PostLoginShell$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].navItemIcon,
                                                        children: "O"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/PostLoginShell.tsx",
                                                        lineNumber: 79,
                                                        columnNumber: 17
                                                    }, this),
                                                    "Family Home"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/PostLoginShell.tsx",
                                                lineNumber: 78,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/join-family",
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$PostLoginShell$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].navItem,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$PostLoginShell$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].navItemIcon,
                                                        children: ">"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/PostLoginShell.tsx",
                                                        lineNumber: 83,
                                                        columnNumber: 17
                                                    }, this),
                                                    "Join Family"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/PostLoginShell.tsx",
                                                lineNumber: 82,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/family-space/requests",
                                                className: "".concat(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$PostLoginShell$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].navItem, " ").concat(activeNav === "requests" ? __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$PostLoginShell$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].navItemActive : ""),
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$PostLoginShell$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].navItemIcon,
                                                        children: "="
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/PostLoginShell.tsx",
                                                        lineNumber: 87,
                                                        columnNumber: 17
                                                    }, this),
                                                    "Family Requests"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/PostLoginShell.tsx",
                                                lineNumber: 86,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/family-space/data-capture",
                                                className: "".concat(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$PostLoginShell$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].navItem, " ").concat(activeNav === "data-capture" ? __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$PostLoginShell$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].navItemActive : ""),
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$PostLoginShell$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].navItemIcon,
                                                        children: "+"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/PostLoginShell.tsx",
                                                        lineNumber: 91,
                                                        columnNumber: 17
                                                    }, this),
                                                    "Family Data Capture"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/PostLoginShell.tsx",
                                                lineNumber: 90,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/PostLoginShell.tsx",
                                        lineNumber: 77,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/PostLoginShell.tsx",
                                lineNumber: 75,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$PostLoginShell$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sidebarUser,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$PostLoginShell$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sidebarUserAvatar,
                                        children: avatarInitial
                                    }, void 0, false, {
                                        fileName: "[project]/components/PostLoginShell.tsx",
                                        lineNumber: 98,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$PostLoginShell$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sidebarUserName,
                                                children: currentUser || "User"
                                            }, void 0, false, {
                                                fileName: "[project]/components/PostLoginShell.tsx",
                                                lineNumber: 100,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$PostLoginShell$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sidebarUserRole,
                                                children: currentFamily ? "Family Admin - ".concat(currentFamily) : "Family context"
                                            }, void 0, false, {
                                                fileName: "[project]/components/PostLoginShell.tsx",
                                                lineNumber: 101,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/PostLoginShell.tsx",
                                        lineNumber: 99,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/PostLoginShell.tsx",
                                lineNumber: 97,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/PostLoginShell.tsx",
                        lineNumber: 56,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$PostLoginShell$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].main,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$PostLoginShell$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].pageTop,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$PostLoginShell$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].eyebrow,
                                            children: "Family Workspace"
                                        }, void 0, false, {
                                            fileName: "[project]/components/PostLoginShell.tsx",
                                            lineNumber: 109,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$PostLoginShell$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].title,
                                            children: title
                                        }, void 0, false, {
                                            fileName: "[project]/components/PostLoginShell.tsx",
                                            lineNumber: 110,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$PostLoginShell$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].subtitle,
                                            children: subtitle
                                        }, void 0, false, {
                                            fileName: "[project]/components/PostLoginShell.tsx",
                                            lineNumber: 111,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/PostLoginShell.tsx",
                                    lineNumber: 108,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/PostLoginShell.tsx",
                                lineNumber: 107,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$PostLoginShell$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].contentGrid,
                                children: [
                                    children,
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$PostLoginShell$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].footer,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "Kutumbsy family workspace"
                                            }, void 0, false, {
                                                fileName: "[project]/components/PostLoginShell.tsx",
                                                lineNumber: 118,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "Family-first navigation and data capture."
                                            }, void 0, false, {
                                                fileName: "[project]/components/PostLoginShell.tsx",
                                                lineNumber: 119,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/PostLoginShell.tsx",
                                        lineNumber: 117,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/PostLoginShell.tsx",
                                lineNumber: 115,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/PostLoginShell.tsx",
                        lineNumber: 106,
                        columnNumber: 9
                    }, this),
                    rightRail ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$PostLoginShell$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].rightRail,
                        children: rightRail
                    }, void 0, false, {
                        fileName: "[project]/components/PostLoginShell.tsx",
                        lineNumber: 124,
                        columnNumber: 22
                    }, this) : null
                ]
            }, void 0, true, {
                fileName: "[project]/components/PostLoginShell.tsx",
                lineNumber: 55,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/PostLoginShell.tsx",
        lineNumber: 34,
        columnNumber: 5
    }, this);
}
_s(PostLoginShell, "wz5C7MXsx24NKZAna1eE+BBDPr8=");
_c = PostLoginShell;
var _c;
__turbopack_context__.k.register(_c, "PostLoginShell");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/platform/admin/data-capture/workspace.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "actionRow": "workspace-module__NW328W__actionRow",
  "checkboxField": "workspace-module__NW328W__checkboxField",
  "collapsiblePanel": "workspace-module__NW328W__collapsiblePanel",
  "compactCard": "workspace-module__NW328W__compactCard",
  "compactCardActive": "workspace-module__NW328W__compactCardActive",
  "compactList": "workspace-module__NW328W__compactList",
  "empty": "workspace-module__NW328W__empty",
  "eyebrow": "workspace-module__NW328W__eyebrow",
  "familyCard": "workspace-module__NW328W__familyCard",
  "familyCardActive": "workspace-module__NW328W__familyCardActive",
  "familyList": "workspace-module__NW328W__familyList",
  "field": "workspace-module__NW328W__field",
  "form": "workspace-module__NW328W__form",
  "grid": "workspace-module__NW328W__grid",
  "hero": "workspace-module__NW328W__hero",
  "layout": "workspace-module__NW328W__layout",
  "loadingBanner": "workspace-module__NW328W__loadingBanner",
  "mainPanel": "workspace-module__NW328W__mainPanel",
  "memberAvatarFallback": "workspace-module__NW328W__memberAvatarFallback",
  "memberAvatarImage": "workspace-module__NW328W__memberAvatarImage",
  "memberAvatarWrap": "workspace-module__NW328W__memberAvatarWrap",
  "memberCard": "workspace-module__NW328W__memberCard",
  "memberForm": "workspace-module__NW328W__memberForm",
  "memberFormActions": "workspace-module__NW328W__memberFormActions",
  "memberHeader": "workspace-module__NW328W__memberHeader",
  "memberIdentity": "workspace-module__NW328W__memberIdentity",
  "memberList": "workspace-module__NW328W__memberList",
  "memberMeta": "workspace-module__NW328W__memberMeta",
  "memberNotes": "workspace-module__NW328W__memberNotes",
  "memberSection": "workspace-module__NW328W__memberSection",
  "memberSectionBody": "workspace-module__NW328W__memberSectionBody",
  "memberSectionHeader": "workspace-module__NW328W__memberSectionHeader",
  "memberTag": "workspace-module__NW328W__memberTag",
  "message": "workspace-module__NW328W__message",
  "metricCard": "workspace-module__NW328W__metricCard",
  "metricLabel": "workspace-module__NW328W__metricLabel",
  "metricSubtext": "workspace-module__NW328W__metricSubtext",
  "metricValue": "workspace-module__NW328W__metricValue",
  "metricValueSmall": "workspace-module__NW328W__metricValueSmall",
  "metrics": "workspace-module__NW328W__metrics",
  "page": "workspace-module__NW328W__page",
  "panel": "workspace-module__NW328W__panel",
  "panelHeader": "workspace-module__NW328W__panelHeader",
  "panelSummary": "workspace-module__NW328W__panelSummary",
  "photoDropzone": "workspace-module__NW328W__photoDropzone",
  "photoPreview": "workspace-module__NW328W__photoPreview",
  "photoUploadInput": "workspace-module__NW328W__photoUploadInput",
  "photoUploadMessage": "workspace-module__NW328W__photoUploadMessage",
  "photoUploadRow": "workspace-module__NW328W__photoUploadRow",
  "primaryButton": "workspace-module__NW328W__primaryButton",
  "secondaryButton": "workspace-module__NW328W__secondaryButton",
  "sectionHint": "workspace-module__NW328W__sectionHint",
  "sessionNotice": "workspace-module__NW328W__sessionNotice",
  "sidebar": "workspace-module__NW328W__sidebar",
  "stackGrid": "workspace-module__NW328W__stackGrid",
  "subtitle": "workspace-module__NW328W__subtitle",
  "tabBar": "workspace-module__NW328W__tabBar",
  "tabButton": "workspace-module__NW328W__tabButton",
  "tabButtonActive": "workspace-module__NW328W__tabButtonActive",
  "title": "workspace-module__NW328W__title",
  "toolbar": "workspace-module__NW328W__toolbar",
  "topBar": "workspace-module__NW328W__topBar",
  "topBarActions": "workspace-module__NW328W__topBarActions",
  "topBarBrand": "workspace-module__NW328W__topBarBrand",
  "topBarButton": "workspace-module__NW328W__topBarButton",
  "topBarFamily": "workspace-module__NW328W__topBarFamily",
  "topBarGhostButton": "workspace-module__NW328W__topBarGhostButton",
  "topBarInner": "workspace-module__NW328W__topBarInner",
  "topBarLogo": "workspace-module__NW328W__topBarLogo",
  "topBarLogoFallback": "workspace-module__NW328W__topBarLogoFallback",
  "topBarLogoImage": "workspace-module__NW328W__topBarLogoImage",
});
}),
"[project]/app/platform/admin/data-capture/helpers.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "asRecord",
    ()=>asRecord,
    "asText",
    ()=>asText,
    "formatDate",
    ()=>formatDate,
    "toMemberForm",
    ()=>toMemberForm
]);
const DATE_FORMATTER = new Intl.DateTimeFormat("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    timeZone: "Asia/Kolkata"
});
const formatDate = (value)=>{
    if (!value) {
        return "Not added";
    }
    const date = new Date(value);
    if (Number.isNaN(date.getTime())) {
        return value;
    }
    return DATE_FORMATTER.format(date);
};
const asText = (value)=>typeof value === "string" && value.trim() ? value : "Not added";
const asRecord = (value)=>value && typeof value === "object" && !Array.isArray(value) ? value : {};
const toMemberForm = (person)=>{
    const metadata = asRecord(person.metadata);
    const personal = asRecord(metadata.personal);
    const familyContext = asRecord(metadata.familyContext);
    const interests = asRecord(metadata.interests);
    var _person_photoUrl, _person_gender, _person_nativeVillage, _person_gotra, _person_kuldevta, _person_community, _person_education, _person_occupation, _person_notes;
    return {
        fullName: person.fullName,
        photoUrl: (_person_photoUrl = person.photoUrl) !== null && _person_photoUrl !== void 0 ? _person_photoUrl : "",
        gender: (_person_gender = person.gender) !== null && _person_gender !== void 0 ? _person_gender : "",
        dateOfBirth: person.dateOfBirth ? person.dateOfBirth.slice(0, 10) : "",
        isDeceased: person.isDeceased,
        nativeVillage: (_person_nativeVillage = person.nativeVillage) !== null && _person_nativeVillage !== void 0 ? _person_nativeVillage : "",
        gotra: (_person_gotra = person.gotra) !== null && _person_gotra !== void 0 ? _person_gotra : "",
        kuldevta: (_person_kuldevta = person.kuldevta) !== null && _person_kuldevta !== void 0 ? _person_kuldevta : "",
        community: (_person_community = person.community) !== null && _person_community !== void 0 ? _person_community : "",
        education: (_person_education = person.education) !== null && _person_education !== void 0 ? _person_education : "",
        occupation: (_person_occupation = person.occupation) !== null && _person_occupation !== void 0 ? _person_occupation : "",
        mobileNumber: typeof personal.mobileNumber === "string" ? personal.mobileNumber : "",
        email: typeof personal.email === "string" ? personal.email : "",
        currentCity: typeof personal.currentCity === "string" ? personal.currentCity : "",
        address: typeof personal.address === "string" ? personal.address : "",
        maritalStatus: typeof personal.maritalStatus === "string" ? personal.maritalStatus : "",
        relationToAnchor: typeof familyContext.relationToAnchor === "string" ? familyContext.relationToAnchor : "",
        generationLevel: typeof familyContext.generationLevel === "string" ? familyContext.generationLevel : "",
        hobbies: typeof interests.hobbies === "string" ? interests.hobbies : "",
        languages: typeof personal.languages === "string" ? personal.languages : "",
        biography: typeof metadata.biography === "string" ? metadata.biography : "",
        notes: (_person_notes = person.notes) !== null && _person_notes !== void 0 ? _person_notes : ""
    };
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/platform/admin/data-capture/state.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "emptyFamilyForm",
    ()=>emptyFamilyForm,
    "emptyFilters",
    ()=>emptyFilters,
    "emptyJoinRequestForm",
    ()=>emptyJoinRequestForm,
    "emptyJoinReviewForm",
    ()=>emptyJoinReviewForm,
    "emptyMemberAccessUpdate",
    ()=>emptyMemberAccessUpdate,
    "emptyMemberForm",
    ()=>emptyMemberForm,
    "emptyMemberLoginForm",
    ()=>emptyMemberLoginForm,
    "emptyRelationshipForm",
    ()=>emptyRelationshipForm
]);
const emptyFamilyForm = {
    name: "",
    nativePlace: "",
    createdByPhone: "",
    description: ""
};
const emptyMemberForm = {
    fullName: "",
    photoUrl: "",
    gender: "",
    dateOfBirth: "",
    isDeceased: false,
    nativeVillage: "",
    gotra: "",
    kuldevta: "",
    community: "",
    education: "",
    occupation: "",
    mobileNumber: "",
    email: "",
    currentCity: "",
    address: "",
    maritalStatus: "",
    relationToAnchor: "",
    generationLevel: "",
    hobbies: "",
    languages: "",
    biography: "",
    notes: ""
};
const emptyMemberLoginForm = {
    personId: "",
    mobileNumber: "",
    role: "editor"
};
const emptyMemberAccessUpdate = {
    membershipId: "",
    personId: "",
    role: "editor",
    status: "active",
    password: ""
};
const emptyRelationshipForm = {
    person1Id: "",
    person2Id: "",
    relationshipType: "parent_of",
    spouseState: "married",
    startDate: "",
    marriageDatePrecision: "dd_mm_yyyy",
    marriageDateDay: "",
    marriageDateMonth: "",
    marriageDateYear: "",
    endDate: "",
    notes: ""
};
const emptyJoinRequestForm = {
    workspaceIdentifier: "",
    requestedRole: "viewer",
    message: ""
};
const emptyJoinReviewForm = {
    requestId: "",
    decision: "approved",
    role: "viewer",
    personId: "",
    mappingMode: "relation",
    relationType: "child",
    primaryContactSource: "requester",
    mergeConfirmed: false
};
const emptyFilters = {
    q: "",
    relation: "",
    generation: "",
    livingStatus: ""
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/platform/admin/data-capture/workspace.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DataCaptureWorkspace",
    ()=>DataCaptureWorkspace
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$LoadingState$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/LoadingState.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$PostLoginShell$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/PostLoginShell.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$admin$2f$data$2d$capture$2f$workspace$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/app/platform/admin/data-capture/workspace.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$admin$2f$data$2d$capture$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/platform/admin/data-capture/helpers.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$admin$2f$data$2d$capture$2f$state$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/platform/admin/data-capture/state.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
const MEMBER_RELATION_OPTIONS = [
    "Self / Root member",
    "Spouse",
    "Child"
];
const DEFAULT_GOTRA_OPTIONS = [
    "Atri",
    "Agastya",
    "Angiras",
    "Ashvalayana",
    "Bharadwaj",
    "Bhargava",
    "Bhrigu",
    "Chyavana",
    "Devala",
    "Durvasa",
    "Garga",
    "Gargya",
    "Gautam",
    "Harita",
    "Jaimini",
    "Shandilya",
    "Jamadagni",
    "Kapila",
    "Kashyapa",
    "Katyayana",
    "Kaushik",
    "Kaundinya",
    "Kutsa",
    "Mandavya",
    "Marichi",
    "Maitreya",
    "Mudgala",
    "Narada",
    "Parashara",
    "Pulastya",
    "Pulaha",
    "Shaunaka",
    "Shukra",
    "Srivatsa",
    "Upamanyu",
    "Vashistha",
    "Vatsa",
    "Vishwamitra",
    "Yajnavalkya"
];
const SPOUSE_STATE_CONFIG = {
    married: {
        status: "active",
        label: "Married",
        endDateLabel: ""
    },
    divorced: {
        status: "historical",
        label: "Divorced",
        endDateLabel: "Divorce date"
    },
    separated: {
        status: "historical",
        label: "Separated",
        endDateLabel: "Separation date"
    },
    widowed: {
        status: "historical",
        label: "Widowed",
        endDateLabel: "Death anniversary date"
    }
};
function formatRelationshipSummary(relationship) {
    var _relationship_notes, _spouseStatusMatch_;
    const spouseStatusMatch = (_relationship_notes = relationship.notes) === null || _relationship_notes === void 0 ? void 0 : _relationship_notes.match(/Spouse status:\s*([a-z]+)/i);
    const spouseStatus = spouseStatusMatch === null || spouseStatusMatch === void 0 ? void 0 : (_spouseStatusMatch_ = spouseStatusMatch[1]) === null || _spouseStatusMatch_ === void 0 ? void 0 : _spouseStatusMatch_.toLowerCase();
    if (relationship.relationshipType === "parent_of") {
        return "".concat(relationship.personOne.fullName, " is parent of ").concat(relationship.personTwo.fullName);
    }
    if (relationship.relationshipType === "spouse_of") {
        const statusLabel = spouseStatus ? SPOUSE_STATE_CONFIG[spouseStatus].label : relationship.status === "historical" ? "Past spouse relationship" : "Married";
        return "".concat(relationship.personOne.fullName, " and ").concat(relationship.personTwo.fullName, " (").concat(statusLabel, ")");
    }
    return "".concat(relationship.personOne.fullName, " ").concat(relationship.relationshipType.replaceAll("_", " "), " ").concat(relationship.personTwo.fullName);
}
function extractSpouseState(relationship) {
    var _relationship_notes, _spouseStatusMatch_;
    const spouseStatusMatch = (_relationship_notes = relationship.notes) === null || _relationship_notes === void 0 ? void 0 : _relationship_notes.match(/Spouse status:\s*([a-z]+)/i);
    const fromNotes = spouseStatusMatch === null || spouseStatusMatch === void 0 ? void 0 : (_spouseStatusMatch_ = spouseStatusMatch[1]) === null || _spouseStatusMatch_ === void 0 ? void 0 : _spouseStatusMatch_.toLowerCase();
    if (fromNotes === "divorced" || fromNotes === "separated" || fromNotes === "widowed") {
        return fromNotes;
    }
    if (relationship.status === "historical") {
        return "divorced";
    }
    return "married";
}
function extractMarriageDateFields(relationship) {
    var _relationship_notes, _relationship_notes1, _precisionMatch_, _relationship_notes2;
    const precisionMatch = (_relationship_notes = relationship.notes) === null || _relationship_notes === void 0 ? void 0 : _relationship_notes.match(/Marriage date precision:\s*([A-Z/]+)/i);
    const valueMatch = (_relationship_notes1 = relationship.notes) === null || _relationship_notes1 === void 0 ? void 0 : _relationship_notes1.match(/Marriage date value:\s*([0-9/]+)/i);
    var _precisionMatch__toUpperCase;
    const precisionRaw = (_precisionMatch__toUpperCase = precisionMatch === null || precisionMatch === void 0 ? void 0 : (_precisionMatch_ = precisionMatch[1]) === null || _precisionMatch_ === void 0 ? void 0 : _precisionMatch_.toUpperCase()) !== null && _precisionMatch__toUpperCase !== void 0 ? _precisionMatch__toUpperCase : "";
    var _valueMatch_;
    const value = (_valueMatch_ = valueMatch === null || valueMatch === void 0 ? void 0 : valueMatch[1]) !== null && _valueMatch_ !== void 0 ? _valueMatch_ : "";
    if (precisionRaw === "MM/YYYY" && value) {
        const [month, year] = value.split("/");
        if (month && year) {
            return {
                precision: "mm_yyyy",
                day: "",
                month: "".concat(year, "-").concat(month.padStart(2, "0")),
                year
            };
        }
    }
    if (precisionRaw === "YYYY" && value) {
        return {
            precision: "yyyy",
            day: "",
            month: "",
            year: value
        };
    }
    if (precisionRaw === "DD/MM/YYYY" && value) {
        const [day, month, year] = value.split("/");
        if (day && month && year) {
            return {
                precision: "dd_mm_yyyy",
                day: "".concat(year, "-").concat(month.padStart(2, "0"), "-").concat(day.padStart(2, "0")),
                month: "".concat(year, "-").concat(month.padStart(2, "0")),
                year
            };
        }
    }
    const legacyMarriageYearMatch = (_relationship_notes2 = relationship.notes) === null || _relationship_notes2 === void 0 ? void 0 : _relationship_notes2.match(/Marriage year:\s*(\d{4})/i);
    if (legacyMarriageYearMatch === null || legacyMarriageYearMatch === void 0 ? void 0 : legacyMarriageYearMatch[1]) {
        return {
            precision: "yyyy",
            day: "",
            month: "",
            year: legacyMarriageYearMatch[1]
        };
    }
    if (relationship.startDate) {
        const iso = String(relationship.startDate).slice(0, 10);
        const [year, month] = iso.split("-");
        return {
            precision: "dd_mm_yyyy",
            day: iso,
            month: year && month ? "".concat(year, "-").concat(month) : "",
            year: year !== null && year !== void 0 ? year : ""
        };
    }
    return {
        precision: "dd_mm_yyyy",
        day: "",
        month: "",
        year: ""
    };
}
function DataCaptureWorkspace() {
    _s();
    const [families, setFamilies] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [selectedFamilyId, setSelectedFamilyId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [people, setPeople] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [relationships, setRelationships] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [memberAccessList, setMemberAccessList] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [joinRequests, setJoinRequests] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [auditLogs, setAuditLogs] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [memberForm, setMemberForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$admin$2f$data$2d$capture$2f$state$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["emptyMemberForm"]);
    const [memberLoginForm, setMemberLoginForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$admin$2f$data$2d$capture$2f$state$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["emptyMemberLoginForm"]);
    const [memberAccessUpdate, setMemberAccessUpdate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$admin$2f$data$2d$capture$2f$state$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["emptyMemberAccessUpdate"]);
    const [relationshipForm, setRelationshipForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$admin$2f$data$2d$capture$2f$state$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["emptyRelationshipForm"]);
    const [joinReviewForm, setJoinReviewForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$admin$2f$data$2d$capture$2f$state$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["emptyJoinReviewForm"]);
    const [filters, setFilters] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$admin$2f$data$2d$capture$2f$state$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["emptyFilters"]);
    const [editingPersonId, setEditingPersonId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [memberSubmitting, setMemberSubmitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [memberLoginSubmitting, setMemberLoginSubmitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [memberAccessSubmitting, setMemberAccessSubmitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [relationshipSubmitting, setRelationshipSubmitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [editingRelationshipId, setEditingRelationshipId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [joinReviewSubmitting, setJoinReviewSubmitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [memberMessage, setMemberMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [photoUploadMessage, setPhotoUploadMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [memberLoginMessage, setMemberLoginMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [memberAccessMessage, setMemberAccessMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [relationshipMessage, setRelationshipMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [joinReviewMessage, setJoinReviewMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [loadingFamilies, setLoadingFamilies] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [loadingPeople, setLoadingPeople] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [loadingRelatedData, setLoadingRelatedData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [session, setSession] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [sessionMessage, setSessionMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [activeWorkspaceId, setActiveWorkspaceId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("members");
    var _families_find;
    const selectedFamily = (_families_find = families.find((family)=>family.id === selectedFamilyId)) !== null && _families_find !== void 0 ? _families_find : null;
    var _session_memberships_find;
    const selectedMembership = (_session_memberships_find = session === null || session === void 0 ? void 0 : session.memberships.find((membership)=>membership.familyId === selectedFamilyId)) !== null && _session_memberships_find !== void 0 ? _session_memberships_find : null;
    const canCreateMemberLogin = (selectedMembership === null || selectedMembership === void 0 ? void 0 : selectedMembership.role) === "admin";
    const canManageWorkspace = (selectedMembership === null || selectedMembership === void 0 ? void 0 : selectedMembership.role) === "admin";
    const isWorkspaceLoading = loadingFamilies || loadingPeople || loadingRelatedData;
    const availablePersonOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "DataCaptureWorkspace.useMemo[availablePersonOptions]": ()=>people.map({
                "DataCaptureWorkspace.useMemo[availablePersonOptions]": (person)=>({
                        id: person.id,
                        label: person.fullName
                    })
            }["DataCaptureWorkspace.useMemo[availablePersonOptions]"])
    }["DataCaptureWorkspace.useMemo[availablePersonOptions]"], [
        people
    ]);
    const availableLoginPersonOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "DataCaptureWorkspace.useMemo[availableLoginPersonOptions]": ()=>{
            const linkedPersonIds = new Set(memberAccessList.map({
                "DataCaptureWorkspace.useMemo[availableLoginPersonOptions]": (item)=>{
                    var _item_person;
                    return (_item_person = item.person) === null || _item_person === void 0 ? void 0 : _item_person.id;
                }
            }["DataCaptureWorkspace.useMemo[availableLoginPersonOptions]"]).filter({
                "DataCaptureWorkspace.useMemo[availableLoginPersonOptions]": (id)=>Boolean(id)
            }["DataCaptureWorkspace.useMemo[availableLoginPersonOptions]"]));
            return availablePersonOptions.filter({
                "DataCaptureWorkspace.useMemo[availableLoginPersonOptions]": (person)=>!linkedPersonIds.has(person.id)
            }["DataCaptureWorkspace.useMemo[availableLoginPersonOptions]"]);
        }
    }["DataCaptureWorkspace.useMemo[availableLoginPersonOptions]"], [
        availablePersonOptions,
        memberAccessList
    ]);
    const gotraOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "DataCaptureWorkspace.useMemo[gotraOptions]": ()=>Array.from(new Set([
                ...DEFAULT_GOTRA_OPTIONS,
                ...people.map({
                    "DataCaptureWorkspace.useMemo[gotraOptions]": (person)=>{
                        var _person_gotra;
                        return (_person_gotra = person.gotra) !== null && _person_gotra !== void 0 ? _person_gotra : "";
                    }
                }["DataCaptureWorkspace.useMemo[gotraOptions]"]).filter(Boolean)
            ].filter(Boolean)))
    }["DataCaptureWorkspace.useMemo[gotraOptions]"], [
        people
    ]);
    const spouseStateMeta = SPOUSE_STATE_CONFIG[relationshipForm.spouseState];
    const relationshipStartDateLabel = relationshipForm.relationshipType === "parent_of" ? "Birth / adoption date" : "Marriage date (optional)";
    const relationshipEndDateLabel = relationshipForm.relationshipType === "spouse_of" ? spouseStateMeta.endDateLabel : "";
    const relationshipStatusText = relationshipForm.relationshipType === "parent_of" ? "Use only child links here. Parent labels are derived automatically from direction and gender." : spouseStateMeta.status === "active" ? "Use only spouse links here. Marriage date becomes the primary relationship date." : "".concat(spouseStateMeta.label, " spouse relationship. Use the matching status date.");
    const syncSelectedDefaults = function(nextPeople) {
        let nextAccessList = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : memberAccessList;
        setMemberLoginForm((current)=>{
            var _nextPeople_;
            var _nextPeople__id;
            return {
                ...current,
                personId: current.personId && nextPeople.some((person)=>person.id === current.personId) ? current.personId : (_nextPeople__id = (_nextPeople_ = nextPeople[0]) === null || _nextPeople_ === void 0 ? void 0 : _nextPeople_.id) !== null && _nextPeople__id !== void 0 ? _nextPeople__id : ""
            };
        });
        setRelationshipForm((current)=>{
            var _nextPeople_, _nextPeople_1, _nextPeople_2;
            var _nextPeople__id, _nextPeople__id1, _ref;
            return {
                ...current,
                person1Id: current.person1Id && nextPeople.some((person)=>person.id === current.person1Id) ? current.person1Id : (_nextPeople__id = (_nextPeople_ = nextPeople[0]) === null || _nextPeople_ === void 0 ? void 0 : _nextPeople_.id) !== null && _nextPeople__id !== void 0 ? _nextPeople__id : "",
                person2Id: current.person2Id && nextPeople.some((person)=>person.id === current.person2Id) ? current.person2Id : (_ref = (_nextPeople__id1 = (_nextPeople_1 = nextPeople[1]) === null || _nextPeople_1 === void 0 ? void 0 : _nextPeople_1.id) !== null && _nextPeople__id1 !== void 0 ? _nextPeople__id1 : (_nextPeople_2 = nextPeople[0]) === null || _nextPeople_2 === void 0 ? void 0 : _nextPeople_2.id) !== null && _ref !== void 0 ? _ref : ""
            };
        });
        setMemberAccessUpdate((current)=>{
            var _nextAccessList_find_person, _nextAccessList_find, _nextPeople_;
            var _nextAccessList_find_person_id, _ref;
            return {
                ...current,
                personId: current.personId && nextPeople.some((person)=>person.id === current.personId) ? current.personId : (_ref = (_nextAccessList_find_person_id = (_nextAccessList_find = nextAccessList.find((item)=>item.id === current.membershipId)) === null || _nextAccessList_find === void 0 ? void 0 : (_nextAccessList_find_person = _nextAccessList_find.person) === null || _nextAccessList_find_person === void 0 ? void 0 : _nextAccessList_find_person.id) !== null && _nextAccessList_find_person_id !== void 0 ? _nextAccessList_find_person_id : (_nextPeople_ = nextPeople[0]) === null || _nextPeople_ === void 0 ? void 0 : _nextPeople_.id) !== null && _ref !== void 0 ? _ref : ""
            };
        });
        setJoinReviewForm((current)=>{
            var _nextPeople_;
            var _nextPeople__id;
            return {
                ...current,
                personId: current.personId && nextPeople.some((person)=>person.id === current.personId) ? current.personId : (_nextPeople__id = (_nextPeople_ = nextPeople[0]) === null || _nextPeople_ === void 0 ? void 0 : _nextPeople_.id) !== null && _nextPeople__id !== void 0 ? _nextPeople__id : ""
            };
        });
    };
    const loadSession = async ()=>{
        try {
            const [sessionResponse, activeWorkspaceResponse] = await Promise.all([
                fetch("/api/auth/me", {
                    cache: "no-store"
                }),
                fetch("/api/auth/active-workspace", {
                    cache: "no-store"
                })
            ]);
            if (!sessionResponse.ok) {
                setSession(null);
                setSessionMessage("Login as a workspace user to enforce role-based actions.");
            } else {
                const payload = await sessionResponse.json();
                var _payload_data;
                setSession((_payload_data = payload.data) !== null && _payload_data !== void 0 ? _payload_data : null);
                setSessionMessage("");
            }
            if (activeWorkspaceResponse.ok) {
                var _payload_data1;
                const payload = await activeWorkspaceResponse.json();
                var _payload_data_familyId;
                setActiveWorkspaceId((_payload_data_familyId = (_payload_data1 = payload.data) === null || _payload_data1 === void 0 ? void 0 : _payload_data1.familyId) !== null && _payload_data_familyId !== void 0 ? _payload_data_familyId : "");
            }
        } catch (e) {
            setSession(null);
            setSessionMessage("Unable to load session details.");
        }
    };
    const loadFamilies = async ()=>{
        setLoadingFamilies(true);
        try {
            const response = await fetch("/api/families", {
                cache: "no-store"
            });
            const payload = await response.json();
            if (!response.ok) {
                var _payload_error;
                throw new Error((_payload_error = payload.error) !== null && _payload_error !== void 0 ? _payload_error : "Unable to load families");
            }
            var _payload_data;
            const nextFamilies = (_payload_data = payload.data) !== null && _payload_data !== void 0 ? _payload_data : [];
            setFamilies(nextFamilies);
            setSelectedFamilyId((current)=>{
                var _nextFamilies_;
                if (activeWorkspaceId && nextFamilies.some((family)=>family.id === activeWorkspaceId)) {
                    return activeWorkspaceId;
                }
                if (current && nextFamilies.some((family)=>family.id === current)) {
                    return current;
                }
                var _nextFamilies__id;
                return (_nextFamilies__id = (_nextFamilies_ = nextFamilies[0]) === null || _nextFamilies_ === void 0 ? void 0 : _nextFamilies_.id) !== null && _nextFamilies__id !== void 0 ? _nextFamilies__id : "";
            });
        } catch (error) {
            setSessionMessage(error instanceof Error ? error.message : "Unable to load families");
        } finally{
            setLoadingFamilies(false);
        }
    };
    const loadPeople = async (familyId, nextFilters)=>{
        if (!familyId) {
            setPeople([]);
            return;
        }
        setLoadingPeople(true);
        try {
            const params = new URLSearchParams();
            if (nextFilters.q) params.set("q", nextFilters.q);
            if (nextFilters.relation) params.set("relation", nextFilters.relation);
            if (nextFilters.livingStatus) params.set("livingStatus", nextFilters.livingStatus);
            const response = await fetch("/api/families/".concat(familyId, "/people").concat(params.toString() ? "?".concat(params.toString()) : ""), {
                cache: "no-store"
            });
            const payload = await response.json();
            if (!response.ok) {
                var _payload_error;
                throw new Error((_payload_error = payload.error) !== null && _payload_error !== void 0 ? _payload_error : "Unable to load family members");
            }
            var _payload_data;
            const nextPeople = (_payload_data = payload.data) !== null && _payload_data !== void 0 ? _payload_data : [];
            setPeople(nextPeople);
            syncSelectedDefaults(nextPeople);
        } catch (error) {
            setMemberMessage(error instanceof Error ? error.message : "Unable to load family members");
        } finally{
            setLoadingPeople(false);
        }
    };
    const loadWorkspaceDetail = async (familyId)=>{
        if (!familyId) {
            setRelationships([]);
            setMemberAccessList([]);
            setJoinRequests([]);
            setAuditLogs([]);
            return;
        }
        setLoadingRelatedData(true);
        try {
            const requests = [
                fetch("/api/families/".concat(familyId, "/relationships"), {
                    cache: "no-store"
                })
            ];
            if (canManageWorkspace) {
                requests.push(fetch("/api/families/".concat(familyId, "/member-logins"), {
                    cache: "no-store"
                }), fetch("/api/families/".concat(familyId, "/join-requests"), {
                    cache: "no-store"
                }), fetch("/api/families/".concat(familyId, "/audit-logs"), {
                    cache: "no-store"
                }));
            }
            const responses = await Promise.all(requests);
            const payloads = await Promise.all(responses.map((response)=>response.json()));
            if (!responses[0].ok) {
                var _error;
                throw new Error((_error = payloads[0].error) !== null && _error !== void 0 ? _error : "Unable to load relationships");
            }
            var _data;
            setRelationships((_data = payloads[0].data) !== null && _data !== void 0 ? _data : []);
            if (canManageWorkspace) {
                if (!responses[1].ok) {
                    var _error1;
                    throw new Error((_error1 = payloads[1].error) !== null && _error1 !== void 0 ? _error1 : "Unable to load member access");
                }
                if (!responses[2].ok) {
                    var _error2;
                    throw new Error((_error2 = payloads[2].error) !== null && _error2 !== void 0 ? _error2 : "Unable to load join requests");
                }
                if (!responses[3].ok) {
                    var _error3;
                    throw new Error((_error3 = payloads[3].error) !== null && _error3 !== void 0 ? _error3 : "Unable to load audit logs");
                }
                var _data1;
                const nextAccessList = (_data1 = payloads[1].data) !== null && _data1 !== void 0 ? _data1 : [];
                setMemberAccessList(nextAccessList);
                var _data2;
                setJoinRequests((_data2 = payloads[2].data) !== null && _data2 !== void 0 ? _data2 : []);
                var _data3;
                setAuditLogs((_data3 = payloads[3].data) !== null && _data3 !== void 0 ? _data3 : []);
                setMemberAccessUpdate((current)=>{
                    var _selected_person;
                    var _nextAccessList_find;
                    const selected = (_nextAccessList_find = nextAccessList.find((item)=>item.id === current.membershipId)) !== null && _nextAccessList_find !== void 0 ? _nextAccessList_find : nextAccessList[0];
                    var _selected_person_id;
                    return selected ? {
                        membershipId: selected.id,
                        role: selected.role,
                        status: selected.status,
                        password: "",
                        personId: (_selected_person_id = (_selected_person = selected.person) === null || _selected_person === void 0 ? void 0 : _selected_person.id) !== null && _selected_person_id !== void 0 ? _selected_person_id : ""
                    } : __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$admin$2f$data$2d$capture$2f$state$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["emptyMemberAccessUpdate"];
                });
                setJoinReviewForm((current)=>{
                    var _data, _selected_targetPerson, _people_;
                    var _data1, _data2, _find, _ref;
                    const selected = (_ref = (_find = ((_data1 = payloads[2].data) !== null && _data1 !== void 0 ? _data1 : []).find((item)=>item.id === current.requestId)) !== null && _find !== void 0 ? _find : ((_data2 = payloads[2].data) !== null && _data2 !== void 0 ? _data2 : []).find((item)=>item.status === "pending")) !== null && _ref !== void 0 ? _ref : (_data = payloads[2].data) === null || _data === void 0 ? void 0 : _data[0];
                    var _selected_targetPerson_id, _ref1;
                    return selected ? {
                        requestId: selected.id,
                        decision: "approved",
                        role: selected.requestedRole,
                        personId: (_ref1 = (_selected_targetPerson_id = (_selected_targetPerson = selected.targetPerson) === null || _selected_targetPerson === void 0 ? void 0 : _selected_targetPerson.id) !== null && _selected_targetPerson_id !== void 0 ? _selected_targetPerson_id : (_people_ = people[0]) === null || _people_ === void 0 ? void 0 : _people_.id) !== null && _ref1 !== void 0 ? _ref1 : "",
                        mappingMode: "relation",
                        relationType: "child",
                        primaryContactSource: "requester",
                        mergeConfirmed: false
                    } : __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$admin$2f$data$2d$capture$2f$state$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["emptyJoinReviewForm"];
                });
                syncSelectedDefaults(people, nextAccessList);
            } else {
                setMemberAccessList([]);
                setJoinRequests([]);
                setAuditLogs([]);
            }
        } catch (error) {
            setRelationshipMessage(error instanceof Error ? error.message : "Unable to load workspace details");
        } finally{
            setLoadingRelatedData(false);
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DataCaptureWorkspace.useEffect": ()=>{
            void loadSession();
        }
    }["DataCaptureWorkspace.useEffect"], [
        activeWorkspaceId
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DataCaptureWorkspace.useEffect": ()=>{
            void loadFamilies();
        }
    }["DataCaptureWorkspace.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DataCaptureWorkspace.useEffect": ()=>{
            void loadPeople(selectedFamilyId, filters);
        }
    }["DataCaptureWorkspace.useEffect"], [
        selectedFamilyId,
        filters
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DataCaptureWorkspace.useEffect": ()=>{
            void loadWorkspaceDetail(selectedFamilyId);
        }
    }["DataCaptureWorkspace.useEffect"], [
        selectedFamilyId,
        canManageWorkspace
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DataCaptureWorkspace.useEffect": ()=>{
            if (!selectedFamilyId) {
                return;
            }
            const syncActiveWorkspace = {
                "DataCaptureWorkspace.useEffect.syncActiveWorkspace": async ()=>{
                    await fetch("/api/auth/active-workspace", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            familyId: selectedFamilyId
                        })
                    });
                    setActiveWorkspaceId(selectedFamilyId);
                }
            }["DataCaptureWorkspace.useEffect.syncActiveWorkspace"];
            void syncActiveWorkspace();
        }
    }["DataCaptureWorkspace.useEffect"], [
        selectedFamilyId
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DataCaptureWorkspace.useEffect": ()=>{
            if (!canManageWorkspace && (activeTab === "requests" || activeTab === "audit")) {
                setActiveTab("members");
            }
        }
    }["DataCaptureWorkspace.useEffect"], [
        activeTab,
        canManageWorkspace
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DataCaptureWorkspace.useEffect": ()=>{
            setMemberLoginForm({
                "DataCaptureWorkspace.useEffect": (current)=>{
                    var _availableLoginPersonOptions_;
                    if (current.personId && availableLoginPersonOptions.some({
                        "DataCaptureWorkspace.useEffect": (person)=>person.id === current.personId
                    }["DataCaptureWorkspace.useEffect"])) {
                        return current;
                    }
                    var _availableLoginPersonOptions__id;
                    return {
                        ...current,
                        personId: (_availableLoginPersonOptions__id = (_availableLoginPersonOptions_ = availableLoginPersonOptions[0]) === null || _availableLoginPersonOptions_ === void 0 ? void 0 : _availableLoginPersonOptions_.id) !== null && _availableLoginPersonOptions__id !== void 0 ? _availableLoginPersonOptions__id : ""
                    };
                }
            }["DataCaptureWorkspace.useEffect"]);
        }
    }["DataCaptureWorkspace.useEffect"], [
        availableLoginPersonOptions
    ]);
    const buildMemberPayload = ()=>({
            fullName: memberForm.fullName,
            photoUrl: memberForm.photoUrl || undefined,
            gender: memberForm.gender || undefined,
            dateOfBirth: memberForm.dateOfBirth || undefined,
            isDeceased: memberForm.isDeceased,
            nativeVillage: memberForm.nativeVillage || undefined,
            gotra: memberForm.gotra || undefined,
            kuldevta: memberForm.kuldevta || undefined,
            community: memberForm.community || undefined,
            education: memberForm.education || undefined,
            occupation: memberForm.occupation || undefined,
            notes: memberForm.notes || undefined,
            metadata: {
                personal: {
                    mobileNumber: memberForm.mobileNumber,
                    email: memberForm.email,
                    currentCity: memberForm.currentCity,
                    address: memberForm.address,
                    maritalStatus: memberForm.maritalStatus,
                    languages: memberForm.languages
                },
                familyContext: {
                    relationToAnchor: memberForm.relationToAnchor,
                    generationLevel: memberForm.generationLevel
                },
                interests: {
                    hobbies: memberForm.hobbies
                },
                biography: memberForm.biography
            }
        });
    const loadImageDataUrl = (file)=>new Promise((resolve, reject)=>{
            const reader = new FileReader();
            reader.onload = ()=>resolve(typeof reader.result === "string" ? reader.result : "");
            reader.onerror = ()=>reject(new Error("Unable to read selected photo."));
            reader.readAsDataURL(file);
        });
    const resizePhotoDataUrl = function(dataUrl) {
        let maxSize = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 960;
        return new Promise((resolve, reject)=>{
            const img = new Image();
            img.onload = ()=>{
                const width = img.width;
                const height = img.height;
                if (!width || !height) {
                    resolve(dataUrl);
                    return;
                }
                const scale = Math.min(1, maxSize / Math.max(width, height));
                if (scale === 1) {
                    resolve(dataUrl);
                    return;
                }
                const canvas = document.createElement("canvas");
                canvas.width = Math.round(width * scale);
                canvas.height = Math.round(height * scale);
                const context = canvas.getContext("2d");
                if (!context) {
                    resolve(dataUrl);
                    return;
                }
                context.drawImage(img, 0, 0, canvas.width, canvas.height);
                resolve(canvas.toDataURL("image/jpeg", 0.88));
            };
            img.onerror = ()=>reject(new Error("Unable to process selected photo."));
            img.src = dataUrl;
        });
    };
    const onUploadPhoto = async (event)=>{
        var _event_target_files;
        const file = (_event_target_files = event.target.files) === null || _event_target_files === void 0 ? void 0 : _event_target_files[0];
        event.target.value = "";
        if (!file) {
            return;
        }
        if (!file.type.startsWith("image/")) {
            setPhotoUploadMessage("Please select an image file.");
            return;
        }
        setPhotoUploadMessage("Uploading photo...");
        try {
            const dataUrl = await loadImageDataUrl(file);
            const optimized = await resizePhotoDataUrl(dataUrl);
            setMemberForm((current)=>({
                    ...current,
                    photoUrl: optimized
                }));
            setPhotoUploadMessage("Photo added.");
        } catch (error) {
            setPhotoUploadMessage(error instanceof Error ? error.message : "Unable to upload photo.");
        }
    };
    const onSubmitMember = async (event)=>{
        event.preventDefault();
        if (!selectedFamilyId) {
            setMemberMessage("Create or select a family workspace first.");
            return;
        }
        setMemberSubmitting(true);
        setMemberMessage("");
        try {
            const url = editingPersonId ? "/api/families/".concat(selectedFamilyId, "/people/").concat(editingPersonId) : "/api/families/".concat(selectedFamilyId, "/people");
            const method = editingPersonId ? "PATCH" : "POST";
            const response = await fetch(url, {
                method,
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(buildMemberPayload())
            });
            const payload = await response.json();
            if (!response.ok) {
                var _payload_error;
                throw new Error((_payload_error = payload.error) !== null && _payload_error !== void 0 ? _payload_error : "Unable to save family member");
            }
            setMemberForm(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$admin$2f$data$2d$capture$2f$state$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["emptyMemberForm"]);
            setEditingPersonId("");
            setMemberMessage(editingPersonId ? "Family member updated successfully." : "Family member captured successfully.");
            await loadPeople(selectedFamilyId, filters);
        } catch (error) {
            setMemberMessage(error instanceof Error ? error.message : "Unable to save family member");
        } finally{
            setMemberSubmitting(false);
        }
    };
    const startEditingPerson = (person)=>{
        setEditingPersonId(person.id);
        setMemberForm((0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$admin$2f$data$2d$capture$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toMemberForm"])(person));
        setMemberMessage("Editing ".concat(person.fullName, ". Save to update this record."));
    };
    const cancelEditingPerson = ()=>{
        setEditingPersonId("");
        setMemberForm(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$admin$2f$data$2d$capture$2f$state$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["emptyMemberForm"]);
        setMemberMessage("");
    };
    const onCreateMemberLogin = async (event)=>{
        event.preventDefault();
        if (!selectedFamilyId) {
            setMemberLoginMessage("Select a family workspace first.");
            return;
        }
        setMemberLoginSubmitting(true);
        setMemberLoginMessage("");
        try {
            var _payload_data, _payload_data_user;
            if (!canCreateMemberLogin) {
                throw new Error("Only workspace admins can create member login access.");
            }
            const sanitizedMobile = memberLoginForm.mobileNumber.replace(/\D/g, "");
            if (sanitizedMobile.length !== 10) {
                throw new Error("Mobile number must be exactly 10 digits.");
            }
            if (!memberLoginForm.personId) {
                throw new Error("Select a family member to create login access.");
            }
            const response = await fetch("/api/families/".concat(selectedFamilyId, "/member-logins"), {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    personId: memberLoginForm.personId,
                    role: memberLoginForm.role,
                    mobileNumber: sanitizedMobile
                })
            });
            const payload = await response.json();
            if (!response.ok) {
                var _payload_error;
                throw new Error((_payload_error = payload.error) !== null && _payload_error !== void 0 ? _payload_error : "Unable to create member login");
            }
            var _payload_data_user_mobileNumber;
            setMemberLoginMessage(((_payload_data = payload.data) === null || _payload_data === void 0 ? void 0 : _payload_data.reusedExistingUser) ? "Existing user ".concat((_payload_data_user_mobileNumber = (_payload_data_user = payload.data.user) === null || _payload_data_user === void 0 ? void 0 : _payload_data_user.mobileNumber) !== null && _payload_data_user_mobileNumber !== void 0 ? _payload_data_user_mobileNumber : "", " added to this workspace.") : "Login created and workspace access granted.");
            setMemberLoginForm((current)=>({
                    ...__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$admin$2f$data$2d$capture$2f$state$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["emptyMemberLoginForm"],
                    personId: current.personId
                }));
            await loadWorkspaceDetail(selectedFamilyId);
        } catch (error) {
            setMemberLoginMessage(error instanceof Error ? error.message : "Unable to create member login");
        } finally{
            setMemberLoginSubmitting(false);
        }
    };
    const onUpdateMemberAccess = async (event)=>{
        event.preventDefault();
        if (!selectedFamilyId || !memberAccessUpdate.membershipId) {
            setMemberAccessMessage("Select a workspace access record first.");
            return;
        }
        setMemberAccessSubmitting(true);
        setMemberAccessMessage("");
        try {
            const response = await fetch("/api/families/".concat(selectedFamilyId, "/member-logins/").concat(memberAccessUpdate.membershipId), {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    role: memberAccessUpdate.role,
                    status: memberAccessUpdate.status,
                    password: memberAccessUpdate.password || undefined,
                    personId: memberAccessUpdate.personId || undefined
                })
            });
            const payload = await response.json();
            if (!response.ok) {
                var _payload_error;
                throw new Error((_payload_error = payload.error) !== null && _payload_error !== void 0 ? _payload_error : "Unable to update member access");
            }
            setMemberAccessMessage("Workspace access updated successfully.");
            setMemberAccessUpdate((current)=>({
                    ...current,
                    password: ""
                }));
            await loadWorkspaceDetail(selectedFamilyId);
        } catch (error) {
            setMemberAccessMessage(error instanceof Error ? error.message : "Unable to update member access");
        } finally{
            setMemberAccessSubmitting(false);
        }
    };
    const onCreateRelationship = async (event)=>{
        event.preventDefault();
        if (!selectedFamilyId) {
            setRelationshipMessage("Select a family workspace first.");
            return;
        }
        setRelationshipSubmitting(true);
        setRelationshipMessage("");
        try {
            const buildMarriageDatePayload = ()=>{
                if (relationshipForm.relationshipType !== "spouse_of") {
                    return {
                        startDate: relationshipForm.startDate || undefined,
                        precisionLabel: "",
                        valueLabel: ""
                    };
                }
                if (relationshipForm.marriageDatePrecision === "dd_mm_yyyy" && relationshipForm.marriageDateDay) {
                    const [year, month, day] = relationshipForm.marriageDateDay.split("-");
                    return {
                        startDate: relationshipForm.marriageDateDay,
                        precisionLabel: "DD/MM/YYYY",
                        valueLabel: "".concat(day, "/").concat(month, "/").concat(year)
                    };
                }
                if (relationshipForm.marriageDatePrecision === "mm_yyyy" && relationshipForm.marriageDateMonth) {
                    const [year, month] = relationshipForm.marriageDateMonth.split("-");
                    return {
                        startDate: "".concat(year, "-").concat(month, "-01"),
                        precisionLabel: "MM/YYYY",
                        valueLabel: "".concat(month, "/").concat(year)
                    };
                }
                if (relationshipForm.marriageDatePrecision === "yyyy" && relationshipForm.marriageDateYear) {
                    return {
                        startDate: "".concat(relationshipForm.marriageDateYear, "-01-01"),
                        precisionLabel: "YYYY",
                        valueLabel: relationshipForm.marriageDateYear
                    };
                }
                return {
                    startDate: undefined,
                    precisionLabel: "",
                    valueLabel: ""
                };
            };
            const marriageDatePayload = buildMarriageDatePayload();
            const isEditing = Boolean(editingRelationshipId);
            const response = await fetch(isEditing ? "/api/families/".concat(selectedFamilyId, "/relationships/").concat(editingRelationshipId) : "/api/families/".concat(selectedFamilyId, "/relationships"), {
                method: isEditing ? "PATCH" : "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    person1Id: relationshipForm.person1Id,
                    person2Id: relationshipForm.person2Id,
                    relationshipType: relationshipForm.relationshipType,
                    status: relationshipForm.relationshipType === "parent_of" ? "active" : spouseStateMeta.status,
                    startDate: marriageDatePayload.startDate,
                    endDate: relationshipForm.relationshipType === "spouse_of" && spouseStateMeta.endDateLabel ? relationshipForm.endDate || undefined : undefined,
                    notes: [
                        relationshipForm.relationshipType === "spouse_of" ? "Spouse status: ".concat(relationshipForm.spouseState) : "",
                        relationshipForm.relationshipType === "spouse_of" && marriageDatePayload.precisionLabel ? "Marriage date precision: ".concat(marriageDatePayload.precisionLabel) : "",
                        relationshipForm.relationshipType === "spouse_of" && marriageDatePayload.valueLabel ? "Marriage date value: ".concat(marriageDatePayload.valueLabel) : "",
                        relationshipForm.notes
                    ].filter(Boolean).join("\n")
                })
            });
            const payload = await response.json();
            if (!response.ok) {
                var _payload_error;
                throw new Error((_payload_error = payload.error) !== null && _payload_error !== void 0 ? _payload_error : isEditing ? "Unable to update relationship" : "Unable to create relationship");
            }
            setRelationshipMessage(isEditing ? "Relationship updated successfully." : "Relationship captured successfully.");
            setRelationshipForm((current)=>({
                    ...__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$admin$2f$data$2d$capture$2f$state$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["emptyRelationshipForm"],
                    person1Id: current.person1Id,
                    person2Id: current.person2Id
                }));
            setEditingRelationshipId("");
            await loadWorkspaceDetail(selectedFamilyId);
        } catch (error) {
            setRelationshipMessage(error instanceof Error ? error.message : "Unable to save relationship");
        } finally{
            setRelationshipSubmitting(false);
        }
    };
    const onReviewJoinRequest = async (event)=>{
        event.preventDefault();
        if (!selectedFamilyId || !joinReviewForm.requestId) {
            setJoinReviewMessage("Select a join request first.");
            return;
        }
        if (joinReviewForm.decision === "approved" && !joinReviewForm.personId) {
            setJoinReviewMessage("Select a family member profile to map before approval.");
            return;
        }
        if (joinReviewForm.decision === "approved" && joinReviewForm.mappingMode === "same_person" && !joinReviewForm.mergeConfirmed) {
            setJoinReviewMessage("Please confirm merge warning before approving.");
            return;
        }
        setJoinReviewSubmitting(true);
        setJoinReviewMessage("");
        try {
            const response = await fetch("/api/families/".concat(selectedFamilyId, "/join-requests/").concat(joinReviewForm.requestId, "/review"), {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    decision: joinReviewForm.decision,
                    role: joinReviewForm.decision === "approved" ? joinReviewForm.role : undefined,
                    personId: joinReviewForm.decision === "approved" ? joinReviewForm.personId || undefined : undefined,
                    mappingMode: joinReviewForm.decision === "approved" ? joinReviewForm.mappingMode : undefined,
                    relationType: joinReviewForm.decision === "approved" && joinReviewForm.mappingMode === "relation" ? joinReviewForm.relationType : undefined,
                    primaryContactSource: joinReviewForm.decision === "approved" && joinReviewForm.mappingMode === "same_person" ? joinReviewForm.primaryContactSource : undefined
                })
            });
            const payload = await response.json();
            if (!response.ok) {
                var _payload_error;
                throw new Error((_payload_error = payload.error) !== null && _payload_error !== void 0 ? _payload_error : "Unable to review join request");
            }
            setJoinReviewMessage("Join request ".concat(joinReviewForm.decision, "."));
            await loadWorkspaceDetail(selectedFamilyId);
        } catch (error) {
            setJoinReviewMessage(error instanceof Error ? error.message : "Unable to review join request");
        } finally{
            setJoinReviewSubmitting(false);
        }
    };
    var _selectedFamily_name, _selectedFamily_familyCode, _session_user_fullName, _session_user_fullName1, _selectedMembership_role, _memberForm_fullName_split_;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$PostLoginShell$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PostLoginShell"], {
        title: "Add a Family Member",
        subtitle: "Every branch of the tree begins with a name and a story.",
        activeNav: "data-capture",
        currentFamily: (_selectedFamily_name = selectedFamily === null || selectedFamily === void 0 ? void 0 : selectedFamily.name) !== null && _selectedFamily_name !== void 0 ? _selectedFamily_name : null,
        currentFamilyCode: (_selectedFamily_familyCode = selectedFamily === null || selectedFamily === void 0 ? void 0 : selectedFamily.familyCode) !== null && _selectedFamily_familyCode !== void 0 ? _selectedFamily_familyCode : null,
        currentUser: (_session_user_fullName = session === null || session === void 0 ? void 0 : session.user.fullName) !== null && _session_user_fullName !== void 0 ? _session_user_fullName : null,
        rightRail: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$admin$2f$data$2d$capture$2f$workspace$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].panel,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$admin$2f$data$2d$capture$2f$workspace$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].panelHeader,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                children: "Available Families"
                            }, void 0, false, {
                                fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                                lineNumber: 956,
                                columnNumber: 15
                            }, void 0),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: "Select which family workspace you want to manage in data capture."
                            }, void 0, false, {
                                fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                                lineNumber: 957,
                                columnNumber: 15
                            }, void 0)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                        lineNumber: 955,
                        columnNumber: 13
                    }, void 0),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$admin$2f$data$2d$capture$2f$workspace$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].familyList,
                        children: [
                            families.map((family)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    className: "".concat(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$admin$2f$data$2d$capture$2f$workspace$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].familyCard, " ").concat(family.id === selectedFamilyId ? __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$admin$2f$data$2d$capture$2f$workspace$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].familyCardActive : ""),
                                    onClick: ()=>setSelectedFamilyId(family.id),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: family.name
                                        }, void 0, false, {
                                            fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                                            lineNumber: 967,
                                            columnNumber: 19
                                        }, void 0),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: family.nativePlace || "Native place not added"
                                        }, void 0, false, {
                                            fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                                            lineNumber: 968,
                                            columnNumber: 19
                                        }, void 0),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: [
                                                "Code: ",
                                                family.familyCode,
                                                " | Slug: ",
                                                family.slug
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                                            lineNumber: 969,
                                            columnNumber: 19
                                        }, void 0)
                                    ]
                                }, family.id, true, {
                                    fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                                    lineNumber: 961,
                                    columnNumber: 17
                                }, void 0)),
                            !families.length && !loadingFamilies ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$admin$2f$data$2d$capture$2f$workspace$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].empty,
                                children: "No families created yet."
                            }, void 0, false, {
                                fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                                lineNumber: 972,
                                columnNumber: 55
                            }, void 0) : null
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                        lineNumber: 959,
                        columnNumber: 13
                    }, void 0),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$admin$2f$data$2d$capture$2f$workspace$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].form,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$admin$2f$data$2d$capture$2f$workspace$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].message,
                                children: "For cleaner UX, family creation stays on onboarding and workspace access requests stay on join flow."
                            }, void 0, false, {
                                fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                                lineNumber: 975,
                                columnNumber: 15
                            }, void 0),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$admin$2f$data$2d$capture$2f$workspace$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].actionRow,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/family-space",
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$admin$2f$data$2d$capture$2f$workspace$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].secondaryButton,
                                        children: "Create Family Space"
                                    }, void 0, false, {
                                        fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                                        lineNumber: 979,
                                        columnNumber: 17
                                    }, void 0),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/join-family",
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$admin$2f$data$2d$capture$2f$workspace$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].secondaryButton,
                                        children: "Request Access"
                                    }, void 0, false, {
                                        fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                                        lineNumber: 982,
                                        columnNumber: 17
                                    }, void 0)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                                lineNumber: 978,
                                columnNumber: 15
                            }, void 0)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                        lineNumber: 974,
                        columnNumber: 13
                    }, void 0)
                ]
            }, void 0, true, {
                fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                lineNumber: 954,
                columnNumber: 11
            }, void 0)
        }, void 0, false),
        children: [
            sessionMessage ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$admin$2f$data$2d$capture$2f$workspace$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sessionNotice,
                children: sessionMessage
            }, void 0, false, {
                fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                lineNumber: 991,
                columnNumber: 25
            }, this) : null,
            isWorkspaceLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$admin$2f$data$2d$capture$2f$workspace$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].loadingBanner,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$LoadingState$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LoadingState"], {
                    compact: true,
                    title: "Loading workspace data",
                    message: "Syncing families, members, and relationships."
                }, void 0, false, {
                    fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                    lineNumber: 994,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                lineNumber: 993,
                columnNumber: 9
            }, this) : null,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$admin$2f$data$2d$capture$2f$workspace$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].hero,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$admin$2f$data$2d$capture$2f$workspace$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].metrics,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$admin$2f$data$2d$capture$2f$workspace$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].metricCard,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$admin$2f$data$2d$capture$2f$workspace$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].metricLabel,
                                    children: "Family Workspaces"
                                }, void 0, false, {
                                    fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                                    lineNumber: 1000,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$admin$2f$data$2d$capture$2f$workspace$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].metricValue,
                                    children: loadingFamilies ? "--" : families.length
                                }, void 0, false, {
                                    fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                                    lineNumber: 1001,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                            lineNumber: 999,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$admin$2f$data$2d$capture$2f$workspace$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].metricCard,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$admin$2f$data$2d$capture$2f$workspace$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].metricLabel,
                                    children: "Captured Members"
                                }, void 0, false, {
                                    fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                                    lineNumber: 1004,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$admin$2f$data$2d$capture$2f$workspace$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].metricValue,
                                    children: loadingPeople ? "--" : people.length
                                }, void 0, false, {
                                    fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                                    lineNumber: 1005,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                            lineNumber: 1003,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$admin$2f$data$2d$capture$2f$workspace$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].metricCard,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$admin$2f$data$2d$capture$2f$workspace$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].metricLabel,
                                    children: "Relationships"
                                }, void 0, false, {
                                    fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                                    lineNumber: 1008,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$admin$2f$data$2d$capture$2f$workspace$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].metricValue,
                                    children: loadingRelatedData ? "--" : relationships.length
                                }, void 0, false, {
                                    fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                                    lineNumber: 1009,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                            lineNumber: 1007,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$admin$2f$data$2d$capture$2f$workspace$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].metricCard,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$admin$2f$data$2d$capture$2f$workspace$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].metricLabel,
                                    children: "Logged-in user"
                                }, void 0, false, {
                                    fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                                    lineNumber: 1012,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$admin$2f$data$2d$capture$2f$workspace$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].metricValueSmall,
                                    children: (_session_user_fullName1 = session === null || session === void 0 ? void 0 : session.user.fullName) !== null && _session_user_fullName1 !== void 0 ? _session_user_fullName1 : "Guest"
                                }, void 0, false, {
                                    fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                                    lineNumber: 1013,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$admin$2f$data$2d$capture$2f$workspace$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].metricSubtext,
                                    children: (_selectedMembership_role = selectedMembership === null || selectedMembership === void 0 ? void 0 : selectedMembership.role) !== null && _selectedMembership_role !== void 0 ? _selectedMembership_role : "No workspace role selected"
                                }, void 0, false, {
                                    fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                                    lineNumber: 1014,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                            lineNumber: 1011,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                    lineNumber: 998,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                lineNumber: 997,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$admin$2f$data$2d$capture$2f$workspace$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].mainPanel,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$admin$2f$data$2d$capture$2f$workspace$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].tabBar,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                className: "".concat(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$admin$2f$data$2d$capture$2f$workspace$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].tabButton, " ").concat(activeTab === "members" ? __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$admin$2f$data$2d$capture$2f$workspace$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].tabButtonActive : ""),
                                onClick: ()=>setActiveTab("members"),
                                children: "Members"
                            }, void 0, false, {
                                fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                                lineNumber: 1021,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                className: "".concat(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$admin$2f$data$2d$capture$2f$workspace$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].tabButton, " ").concat(activeTab === "relationships" ? __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$admin$2f$data$2d$capture$2f$workspace$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].tabButtonActive : ""),
                                onClick: ()=>setActiveTab("relationships"),
                                children: "Relationships"
                            }, void 0, false, {
                                fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                                lineNumber: 1024,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                className: "".concat(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$admin$2f$data$2d$capture$2f$workspace$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].tabButton, " ").concat(activeTab === "access" ? __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$admin$2f$data$2d$capture$2f$workspace$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].tabButtonActive : ""),
                                onClick: ()=>setActiveTab("access"),
                                children: "Access"
                            }, void 0, false, {
                                fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                                lineNumber: 1027,
                                columnNumber: 11
                            }, this),
                            canManageWorkspace ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                className: "".concat(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$admin$2f$data$2d$capture$2f$workspace$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].tabButton, " ").concat(activeTab === "requests" ? __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$admin$2f$data$2d$capture$2f$workspace$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].tabButtonActive : ""),
                                onClick: ()=>setActiveTab("requests"),
                                children: "Requests"
                            }, void 0, false, {
                                fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                                lineNumber: 1031,
                                columnNumber: 13
                            }, this) : null,
                            canManageWorkspace ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                className: "".concat(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$admin$2f$data$2d$capture$2f$workspace$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].tabButton, " ").concat(activeTab === "audit" ? __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$admin$2f$data$2d$capture$2f$workspace$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].tabButtonActive : ""),
                                onClick: ()=>setActiveTab("audit"),
                                children: "Audit"
                            }, void 0, false, {
                                fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                                lineNumber: 1036,
                                columnNumber: 13
                            }, this) : null
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                        lineNumber: 1020,
                        columnNumber: 9
                    }, this),
                    activeTab === "members" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$admin$2f$data$2d$capture$2f$workspace$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].panel,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$admin$2f$data$2d$capture$2f$workspace$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].panelHeader,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                children: editingPersonId ? "Edit Family Member" : "Add Family Member"
                                            }, void 0, false, {
                                                fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                                                lineNumber: 1046,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: selectedFamily ? "Working inside ".concat(selectedFamily.name, ".") : "Select a family workspace first."
                                            }, void 0, false, {
                                                fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                                                lineNumber: 1047,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                                        lineNumber: 1045,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$admin$2f$data$2d$capture$2f$workspace$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].memberForm,
                                        onSubmit: onSubmitMember,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$admin$2f$data$2d$capture$2f$workspace$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].memberSection,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$admin$2f$data$2d$capture$2f$workspace$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].memberSectionHeader,
                                                        children: "Personal Information"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                                                        lineNumber: 1051,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$admin$2f$data$2d$capture$2f$workspace$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].memberSectionBody,
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$admin$2f$data$2d$capture$2f$workspace$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].grid,
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$admin$2f$data$2d$capture$2f$workspace$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].field,
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            children: "First name"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                                                                            lineNumber: 1054,
                                                                            columnNumber: 55
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                            value: (_memberForm_fullName_split_ = memberForm.fullName.split(" ")[0]) !== null && _memberForm_fullName_split_ !== void 0 ? _memberForm_fullName_split_ : "",
                                                                            onChange: (event)=>{
                                                                                const rest = memberForm.fullName.split(" ").slice(1).join(" ");
                                                                                setMemberForm((current)=>({
                                                                                        ...current,
                                                                                        fullName: "".concat(event.target.value).concat(rest ? " ".concat(rest) : "").trim()
                                                                                    }));
                                                                            },
                                                                            placeholder: "e.g. Priya",
                                                                            required: true
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                                                                            lineNumber: 1054,
                                                                            columnNumber: 78
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                                                                    lineNumber: 1054,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$admin$2f$data$2d$capture$2f$workspace$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].field,
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            children: "Last name"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                                                                            lineNumber: 1058,
                                                                            columnNumber: 55
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                            value: memberForm.fullName.split(" ").slice(1).join(" "),
                                                                            onChange: (event)=>{
                                                                                var _memberForm_fullName_split_;
                                                                                const first = (_memberForm_fullName_split_ = memberForm.fullName.split(" ")[0]) !== null && _memberForm_fullName_split_ !== void 0 ? _memberForm_fullName_split_ : "";
                                                                                setMemberForm((current)=>({
                                                                                        ...current,
                                                                                        fullName: "".concat(first, " ").concat(event.target.value).trim()
                                                                                    }));
                                                                            },
                                                                            placeholder: "e.g. Sharma"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                                                                            lineNumber: 1058,
                                                                            columnNumber: 77
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                                                                    lineNumber: 1058,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$admin$2f$data$2d$capture$2f$workspace$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].field,
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            children: "Middle / maiden name"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                                                                            lineNumber: 1062,
                                                                            columnNumber: 55
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                            value: memberForm.community,
                                                                            onChange: (event)=>setMemberForm((current)=>({
                                                                                        ...current,
                                                                                        community: event.target.value
                                                                                    })),
                                                                            placeholder: "Optional"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                                                                            lineNumber: 1062,
                                                                            columnNumber: 88
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                                                                    lineNumber: 1062,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$admin$2f$data$2d$capture$2f$workspace$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].field,
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            children: "Gender"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                                                                            lineNumber: 1063,
                                                                            columnNumber: 55
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                            value: memberForm.gender,
                                                                            onChange: (event)=>setMemberForm((current)=>({
                                                                                        ...current,
                                                                                        gender: event.target.value
                                                                                    })),
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                    value: "",
                                                                                    children: "Select"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                                                                                    lineNumber: 1063,
                                                                                    columnNumber: 203
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                    value: "male",
                                                                                    children: "Male"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                                                                                    lineNumber: 1063,
                                                                                    columnNumber: 235
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                    value: "female",
                                                                                    children: "Female"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                                                                                    lineNumber: 1063,
                                                                                    columnNumber: 269
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                    value: "other",
                                                                                    children: "Other"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                                                                                    lineNumber: 1063,
                                                                                    columnNumber: 307
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                                                                            lineNumber: 1063,
                                                                            columnNumber: 74
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                                                                    lineNumber: 1063,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$admin$2f$data$2d$capture$2f$workspace$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].field,
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            children: "Date of birth"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                                                                            lineNumber: 1064,
                                                                            columnNumber: 55
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                            type: "date",
                                                                            value: memberForm.dateOfBirth,
                                                                            onChange: (event)=>setMemberForm((current)=>({
                                                                                        ...current,
                                                                                        dateOfBirth: event.target.value
                                                                                    }))
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                                                                            lineNumber: 1064,
                                                                            columnNumber: 81
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                                                                    lineNumber: 1064,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$admin$2f$data$2d$capture$2f$workspace$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].field,
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            children: "Birthplace"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                                                                            lineNumber: 1065,
                                                                            columnNumber: 55
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                            value: memberForm.nativeVillage,
                                                                            onChange: (event)=>setMemberForm((current)=>({
                                                                                        ...current,
                                                                                        nativeVillage: event.target.value
                                                                                    })),
                                                                            placeholder: "City, State"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                                                                            lineNumber: 1065,
                                                                            columnNumber: 78
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                                                                    lineNumber: 1065,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$admin$2f$data$2d$capture$2f$workspace$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].field,
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            children: "Mobile number"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                                                                            lineNumber: 1066,
                                                                            columnNumber: 55
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                            value: memberForm.mobileNumber,
                                                                            onChange: (event)=>setMemberForm((current)=>({
                                                                                        ...current,
                                                                                        mobileNumber: event.target.value
                                                                                    })),
                                                                            placeholder: "10 digits"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                                                                            lineNumber: 1066,
                                                                            columnNumber: 81
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                                                                    lineNumber: 1066,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$admin$2f$data$2d$capture$2f$workspace$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].field,
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            children: "Email"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                                                                            lineNumber: 1067,
                                                                            columnNumber: 55
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                            type: "email",
                                                                            value: memberForm.email,
                                                                            onChange: (event)=>setMemberForm((current)=>({
                                                                                        ...current,
                                                                                        email: event.target.value
                                                                                    })),
                                                                            placeholder: "name@example.com"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                                                                            lineNumber: 1067,
                                                                            columnNumber: 73
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                                                                    lineNumber: 1067,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                                                            lineNumber: 1053,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                                                        lineNumber: 1052,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                                                lineNumber: 1050,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$admin$2f$data$2d$capture$2f$workspace$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].memberSection,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$admin$2f$data$2d$capture$2f$workspace$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].memberSectionHeader,
                                                        children: "Family Connection"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                                                        lineNumber: 1073,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$admin$2f$data$2d$capture$2f$workspace$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].memberSectionBody,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$admin$2f$data$2d$capture$2f$workspace$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sectionHint,
                                                                children: "Use these dropdowns to place the member correctly in the tree. Extended relations are inferred later from parent and spouse links."
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                                                                lineNumber: 1075,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$admin$2f$data$2d$capture$2f$workspace$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].grid,
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$admin$2f$data$2d$capture$2f$workspace$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].field,
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                children: "Related to"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                                                                                lineNumber: 1079,
                                                                                columnNumber: 55
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                                value: memberForm.relationToAnchor,
                                                                                onChange: (event)=>setMemberForm((current)=>({
                                                                                            ...current,
                                                                                            relationToAnchor: event.target.value
                                                                                        })),
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                        value: "",
                                                                                        children: "Select a family member"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                                                                                        lineNumber: 1079,
                                                                                        columnNumber: 227
                                                                                    }, this),
                                                                                    availablePersonOptions.map((person)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                            value: person.label,
                                                                                            children: person.label
                                                                                        }, person.id, false, {
                                                                                            fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                                                                                            lineNumber: 1079,
                                                                                            columnNumber: 315
                                                                                        }, this))
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                                                                                lineNumber: 1079,
                                                                                columnNumber: 78
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                                                                        lineNumber: 1079,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$admin$2f$data$2d$capture$2f$workspace$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].field,
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                children: "Relationship type"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                                                                                lineNumber: 1080,
                                                                                columnNumber: 55
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                                value: memberForm.maritalStatus,
                                                                                onChange: (event)=>setMemberForm((current)=>({
                                                                                            ...current,
                                                                                            maritalStatus: event.target.value
                                                                                        })),
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                        value: "",
                                                                                        children: "Select relationship"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                                                                                        lineNumber: 1080,
                                                                                        columnNumber: 228
                                                                                    }, this),
                                                                                    MEMBER_RELATION_OPTIONS.map((option)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                            value: option,
                                                                                            children: option
                                                                                        }, option, false, {
                                                                                            fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                                                                                            lineNumber: 1080,
                                                                                            columnNumber: 314
                                                                                        }, this))
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                                                                                lineNumber: 1080,
                                                                                columnNumber: 85
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                                                                        lineNumber: 1080,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$admin$2f$data$2d$capture$2f$workspace$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].field,
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                children: "Gotra / Lineage"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                                                                                lineNumber: 1082,
                                                                                columnNumber: 25
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                list: "gotra-options",
                                                                                value: memberForm.gotra,
                                                                                onChange: (event)=>setMemberForm((current)=>({
                                                                                            ...current,
                                                                                            gotra: event.target.value
                                                                                        })),
                                                                                placeholder: "Type to search gotra"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                                                                                lineNumber: 1083,
                                                                                columnNumber: 25
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                                                                        lineNumber: 1081,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                                                                lineNumber: 1078,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("datalist", {
                                                                id: "gotra-options",
                                                                children: gotraOptions.map((option)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        value: option
                                                                    }, option, false, {
                                                                        fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                                                                        lineNumber: 1092,
                                                                        columnNumber: 53
                                                                    }, this))
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                                                                lineNumber: 1091,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                                                        lineNumber: 1074,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                                                lineNumber: 1072,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$admin$2f$data$2d$capture$2f$workspace$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].memberSection,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$admin$2f$data$2d$capture$2f$workspace$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].memberSectionHeader,
                                                        children: "Life Details"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                                                        lineNumber: 1098,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$admin$2f$data$2d$capture$2f$workspace$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].memberSectionBody,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$admin$2f$data$2d$capture$2f$workspace$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].grid,
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$admin$2f$data$2d$capture$2f$workspace$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].field,
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                children: "Occupation"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                                                                                lineNumber: 1101,
                                                                                columnNumber: 55
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                value: memberForm.occupation,
                                                                                onChange: (event)=>setMemberForm((current)=>({
                                                                                            ...current,
                                                                                            occupation: event.target.value
                                                                                        })),
                                                                                placeholder: "e.g. Engineer, Teacher"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                                                                                lineNumber: 1101,
                                                                                columnNumber: 78
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                                                                        lineNumber: 1101,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$admin$2f$data$2d$capture$2f$workspace$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].field,
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                children: "Current city"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                                                                                lineNumber: 1102,
                                                                                columnNumber: 55
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                value: memberForm.currentCity,
                                                                                onChange: (event)=>setMemberForm((current)=>({
                                                                                            ...current,
                                                                                            currentCity: event.target.value
                                                                                        })),
                                                                                placeholder: "e.g. Mumbai"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                                                                                lineNumber: 1102,
                                                                                columnNumber: 80
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                                                                        lineNumber: 1102,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$admin$2f$data$2d$capture$2f$workspace$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].field,
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                children: "Address"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                                                                                lineNumber: 1103,
                                                                                columnNumber: 55
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                value: memberForm.address,
                                                                                onChange: (event)=>setMemberForm((current)=>({
                                                                                            ...current,
                                                                                            address: event.target.value
                                                                                        })),
                                                                                placeholder: "Street, area, city, state"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                                                                                lineNumber: 1103,
                                                                                columnNumber: 75
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                                                                        lineNumber: 1103,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                                                                lineNumber: 1100,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$admin$2f$data$2d$capture$2f$workspace$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].field,
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        children: "Biography / Notes"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                                                                        lineNumber: 1105,
                                                                        columnNumber: 53
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                                        value: memberForm.biography || memberForm.notes,
                                                                        onChange: (event)=>{
                                                                            setMemberForm((current)=>({
                                                                                    ...current,
                                                                                    biography: event.target.value,
                                                                                    notes: event.target.value
                                                                                }));
                                                                        },
                                                                        placeholder: "A brief note about this person - their personality, what they're remembered for...",
                                                                        rows: 4
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                                                                        lineNumber: 1105,
                                                                        columnNumber: 83
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                                                                lineNumber: 1105,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                                                        lineNumber: 1099,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                                                lineNumber: 1097,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$admin$2f$data$2d$capture$2f$workspace$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].memberSection,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$admin$2f$data$2d$capture$2f$workspace$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].memberSectionHeader,
                                                        children: "Photo"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                                                        lineNumber: 1112,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$admin$2f$data$2d$capture$2f$workspace$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].memberSectionBody,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$admin$2f$data$2d$capture$2f$workspace$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].photoUploadRow,
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$admin$2f$data$2d$capture$2f$workspace$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].secondaryButton,
                                                                        children: [
                                                                            "Upload photo",
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                type: "file",
                                                                                accept: "image/*",
                                                                                onChange: onUploadPhoto,
                                                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$admin$2f$data$2d$capture$2f$workspace$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].photoUploadInput
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                                                                                lineNumber: 1117,
                                                                                columnNumber: 25
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                                                                        lineNumber: 1115,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    memberForm.photoUrl ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        type: "button",
                                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$admin$2f$data$2d$capture$2f$workspace$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].secondaryButton,
                                                                        onClick: ()=>setMemberForm((current)=>({
                                                                                    ...current,
                                                                                    photoUrl: ""
                                                                                })),
                                                                        children: "Remove photo"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                                                                        lineNumber: 1120,
                                                                        columnNumber: 25
                                                                    }, this) : null
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                                                                lineNumber: 1114,
                                                                columnNumber: 21
                                                            }, this),
                                                            photoUploadMessage ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$admin$2f$data$2d$capture$2f$workspace$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].photoUploadMessage,
                                                                children: photoUploadMessage
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                                                                lineNumber: 1129,
                                                                columnNumber: 43
                                                            }, this) : null,
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$admin$2f$data$2d$capture$2f$workspace$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].field,
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        children: "Photo URL"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                                                                        lineNumber: 1131,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        type: "url",
                                                                        value: memberForm.photoUrl,
                                                                        onChange: (event)=>setMemberForm((current)=>({
                                                                                    ...current,
                                                                                    photoUrl: event.target.value
                                                                                })),
                                                                        placeholder: "https://.../member-photo.jpg"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                                                                        lineNumber: 1132,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                                                                lineNumber: 1130,
                                                                columnNumber: 21
                                                            }, this),
                                                            memberForm.photoUrl ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$admin$2f$data$2d$capture$2f$workspace$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].photoPreview,
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                    src: memberForm.photoUrl,
                                                                    alt: "Member preview"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                                                                    lineNumber: 1142,
                                                                    columnNumber: 25
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                                                                lineNumber: 1140,
                                                                columnNumber: 23
                                                            }, this) : null
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                                                        lineNumber: 1113,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                                                lineNumber: 1111,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$admin$2f$data$2d$capture$2f$workspace$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].memberFormActions,
                                                children: [
                                                    editingPersonId ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$admin$2f$data$2d$capture$2f$workspace$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].secondaryButton,
                                                        type: "button",
                                                        onClick: cancelEditingPerson,
                                                        children: "Cancel"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                                                        lineNumber: 1150,
                                                        columnNumber: 21
                                                    }, this) : null,
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$admin$2f$data$2d$capture$2f$workspace$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].primaryButton,
                                                        type: "submit",
                                                        disabled: memberSubmitting || !selectedFamilyId,
                                                        children: memberSubmitting ? "Saving..." : editingPersonId ? "Update Member" : "Save Member"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                                                        lineNumber: 1154,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                                                lineNumber: 1148,
                                                columnNumber: 17
                                            }, this),
                                            memberMessage ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$admin$2f$data$2d$capture$2f$workspace$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].message,
                                                children: memberMessage
                                            }, void 0, false, {
                                                fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                                                lineNumber: 1158,
                                                columnNumber: 34
                                            }, this) : null
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                                        lineNumber: 1049,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                                lineNumber: 1044,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$admin$2f$data$2d$capture$2f$workspace$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].panel,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$admin$2f$data$2d$capture$2f$workspace$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].panelHeader,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                children: "Captured Members"
                                            }, void 0, false, {
                                                fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                                                lineNumber: 1164,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: "Search, filter, and edit the family records already captured in this workspace."
                                            }, void 0, false, {
                                                fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                                                lineNumber: 1165,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                                        lineNumber: 1163,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$admin$2f$data$2d$capture$2f$workspace$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].toolbar,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                value: filters.q,
                                                onChange: (event)=>setFilters((current)=>({
                                                            ...current,
                                                            q: event.target.value
                                                        })),
                                                placeholder: "Search by name, occupation, village..."
                                            }, void 0, false, {
                                                fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                                                lineNumber: 1168,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                value: filters.relation,
                                                onChange: (event)=>setFilters((current)=>({
                                                            ...current,
                                                            relation: event.target.value
                                                        })),
                                                placeholder: "Relation filter"
                                            }, void 0, false, {
                                                fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                                                lineNumber: 1169,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                value: filters.livingStatus,
                                                onChange: (event)=>setFilters((current)=>({
                                                            ...current,
                                                            livingStatus: event.target.value
                                                        })),
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "",
                                                        children: "All records"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                                                        lineNumber: 1171,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "living",
                                                        children: "Living"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                                                        lineNumber: 1172,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "deceased",
                                                        children: "Deceased"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                                                        lineNumber: 1173,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                                                lineNumber: 1170,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                                        lineNumber: 1167,
                                        columnNumber: 15
                                    }, this),
                                    !selectedFamily ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$admin$2f$data$2d$capture$2f$workspace$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].empty,
                                        children: "No family selected yet."
                                    }, void 0, false, {
                                        fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                                        lineNumber: 1177,
                                        columnNumber: 17
                                    }, this) : !people.length && !loadingPeople ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$admin$2f$data$2d$capture$2f$workspace$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].empty,
                                        children: "No members match this workspace or filter set yet."
                                    }, void 0, false, {
                                        fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                                        lineNumber: 1179,
                                        columnNumber: 17
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$admin$2f$data$2d$capture$2f$workspace$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].memberList,
                                        children: people.map((person)=>{
                                            const personal = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$admin$2f$data$2d$capture$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["asRecord"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$admin$2f$data$2d$capture$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["asRecord"])(person.metadata).personal);
                                            const familyContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$admin$2f$data$2d$capture$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["asRecord"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$admin$2f$data$2d$capture$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["asRecord"])(person.metadata).familyContext);
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$admin$2f$data$2d$capture$2f$workspace$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].memberCard,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$admin$2f$data$2d$capture$2f$workspace$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].memberHeader,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$admin$2f$data$2d$capture$2f$workspace$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].memberIdentity,
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$admin$2f$data$2d$capture$2f$workspace$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].memberAvatarWrap,
                                                                        children: person.photoUrl ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                            src: person.photoUrl,
                                                                            alt: person.fullName,
                                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$admin$2f$data$2d$capture$2f$workspace$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].memberAvatarImage
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                                                                            lineNumber: 1192,
                                                                            columnNumber: 33
                                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$admin$2f$data$2d$capture$2f$workspace$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].memberAvatarFallback,
                                                                            children: person.fullName.slice(0, 1).toUpperCase()
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                                                                            lineNumber: 1194,
                                                                            columnNumber: 33
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                                                                        lineNumber: 1190,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                                children: person.fullName
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                                                                                lineNumber: 1198,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                children: [
                                                                                    person.gender || "Gender not set",
                                                                                    " | ",
                                                                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$admin$2f$data$2d$capture$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatDate"])(person.dateOfBirth)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                                                                                lineNumber: 1199,
                                                                                columnNumber: 29
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                                                                        lineNumber: 1197,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                                                                lineNumber: 1189,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$admin$2f$data$2d$capture$2f$workspace$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].actionRow,
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$admin$2f$data$2d$capture$2f$workspace$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].memberTag,
                                                                        children: person.isDeceased ? "Deceased" : "Living"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                                                                        lineNumber: 1203,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$admin$2f$data$2d$capture$2f$workspace$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].secondaryButton,
                                                                        type: "button",
                                                                        onClick: ()=>startEditingPerson(person),
                                                                        children: "Edit"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                                                                        lineNumber: 1204,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                                                                lineNumber: 1202,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                                                        lineNumber: 1188,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$admin$2f$data$2d$capture$2f$workspace$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].memberMeta,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: [
                                                                    "Relation: ",
                                                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$admin$2f$data$2d$capture$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["asText"])(familyContext.relationToAnchor)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                                                                lineNumber: 1208,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: [
                                                                    "Village: ",
                                                                    person.nativeVillage || "Not added"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                                                                lineNumber: 1209,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: [
                                                                    "Occupation: ",
                                                                    person.occupation || "Not added"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                                                                lineNumber: 1210,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: [
                                                                    "Phone: ",
                                                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$admin$2f$data$2d$capture$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["asText"])(personal.mobileNumber)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                                                                lineNumber: 1211,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: [
                                                                    "Address: ",
                                                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$admin$2f$data$2d$capture$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["asText"])(personal.address)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                                                                lineNumber: 1212,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: [
                                                                    "Email: ",
                                                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$admin$2f$data$2d$capture$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["asText"])(personal.email)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                                                                lineNumber: 1213,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                                                        lineNumber: 1207,
                                                        columnNumber: 25
                                                    }, this),
                                                    person.notes ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$admin$2f$data$2d$capture$2f$workspace$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].memberNotes,
                                                        children: person.notes
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                                                        lineNumber: 1215,
                                                        columnNumber: 41
                                                    }, this) : null
                                                ]
                                            }, person.id, true, {
                                                fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                                                lineNumber: 1187,
                                                columnNumber: 23
                                            }, this);
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                                        lineNumber: 1181,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                                lineNumber: 1162,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true) : null,
                    activeTab === "relationships" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$admin$2f$data$2d$capture$2f$workspace$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].panel,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$admin$2f$data$2d$capture$2f$workspace$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].panelHeader,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        children: "Relationships"
                                    }, void 0, false, {
                                        fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                                        lineNumber: 1228,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: "Only create Child or Spouse links here. All other relationships are derived automatically."
                                    }, void 0, false, {
                                        fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                                        lineNumber: 1229,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                                lineNumber: 1227,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$admin$2f$data$2d$capture$2f$workspace$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].form,
                                onSubmit: onCreateRelationship,
                                children: [
                                    editingRelationshipId ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$admin$2f$data$2d$capture$2f$workspace$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sectionHint,
                                        children: "Edit mode is active for the selected relationship."
                                    }, void 0, false, {
                                        fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                                        lineNumber: 1233,
                                        columnNumber: 17
                                    }, this) : null,
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$admin$2f$data$2d$capture$2f$workspace$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sectionHint,
                                        children: relationshipStatusText
                                    }, void 0, false, {
                                        fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                                        lineNumber: 1235,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$admin$2f$data$2d$capture$2f$workspace$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].grid,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$admin$2f$data$2d$capture$2f$workspace$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].field,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "Relationship"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                                                        lineNumber: 1237,
                                                        columnNumber: 49
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                        value: relationshipForm.relationshipType,
                                                        onChange: (event)=>setRelationshipForm((current)=>({
                                                                    ...current,
                                                                    relationshipType: event.target.value,
                                                                    endDate: event.target.value === "parent_of" ? "" : current.endDate,
                                                                    marriageDateDay: event.target.value === "parent_of" ? "" : current.marriageDateDay,
                                                                    marriageDateMonth: event.target.value === "parent_of" ? "" : current.marriageDateMonth,
                                                                    marriageDateYear: event.target.value === "parent_of" ? "" : current.marriageDateYear
                                                                })),
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "parent_of",
                                                                children: "Child"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                                                                lineNumber: 1237,
                                                                columnNumber: 606
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "spouse_of",
                                                                children: "Spouse"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                                                                lineNumber: 1237,
                                                                columnNumber: 646
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                                                        lineNumber: 1237,
                                                        columnNumber: 74
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                                                lineNumber: 1237,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$admin$2f$data$2d$capture$2f$workspace$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].field,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: relationshipForm.relationshipType === "parent_of" ? "Parent" : "Spouse one"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                                                        lineNumber: 1238,
                                                        columnNumber: 49
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                        value: relationshipForm.person1Id,
                                                        onChange: (event)=>setRelationshipForm((current)=>({
                                                                    ...current,
                                                                    person1Id: event.target.value
                                                                })),
                                                        children: availablePersonOptions.map((person)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: person.id,
                                                                children: person.label
                                                            }, person.id, false, {
                                                                fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                                                                lineNumber: 1238,
                                                                columnNumber: 326
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                                                        lineNumber: 1238,
                                                        columnNumber: 139
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                                                lineNumber: 1238,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$admin$2f$data$2d$capture$2f$workspace$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].field,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: relationshipForm.relationshipType === "parent_of" ? "Child" : "Spouse two"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                                                        lineNumber: 1239,
                                                        columnNumber: 49
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                        value: relationshipForm.person2Id,
                                                        onChange: (event)=>setRelationshipForm((current)=>({
                                                                    ...current,
                                                                    person2Id: event.target.value
                                                                })),
                                                        children: availablePersonOptions.map((person)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: person.id,
                                                                children: person.label
                                                            }, person.id, false, {
                                                                fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                                                                lineNumber: 1239,
                                                                columnNumber: 325
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                                                        lineNumber: 1239,
                                                        columnNumber: 138
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                                                lineNumber: 1239,
                                                columnNumber: 17
                                            }, this),
                                            relationshipForm.relationshipType === "spouse_of" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$admin$2f$data$2d$capture$2f$workspace$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].field,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "Spouse status"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                                                        lineNumber: 1241,
                                                        columnNumber: 51
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                        value: relationshipForm.spouseState,
                                                        onChange: (event)=>setRelationshipForm((current)=>({
                                                                    ...current,
                                                                    spouseState: event.target.value,
                                                                    endDate: event.target.value === "married" ? "" : current.endDate
                                                                })),
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "married",
                                                                children: "Married"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                                                                lineNumber: 1241,
                                                                columnNumber: 334
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "divorced",
                                                                children: "Divorced"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                                                                lineNumber: 1241,
                                                                columnNumber: 374
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "separated",
                                                                children: "Separated"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                                                                lineNumber: 1241,
                                                                columnNumber: 416
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "widowed",
                                                                children: "Widowed"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                                                                lineNumber: 1241,
                                                                columnNumber: 460
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                                                        lineNumber: 1241,
                                                        columnNumber: 77
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                                                lineNumber: 1241,
                                                columnNumber: 19
                                            }, this) : null,
                                            relationshipForm.relationshipType === "spouse_of" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$admin$2f$data$2d$capture$2f$workspace$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].field,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "Marriage date format"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                                                        lineNumber: 1245,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                        value: relationshipForm.marriageDatePrecision,
                                                        onChange: (event)=>setRelationshipForm((current)=>({
                                                                    ...current,
                                                                    marriageDatePrecision: event.target.value
                                                                })),
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "dd_mm_yyyy",
                                                                children: "DD/MM/YYYY"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                                                                lineNumber: 1255,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "mm_yyyy",
                                                                children: "MM/YYYY"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                                                                lineNumber: 1256,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "yyyy",
                                                                children: "YYYY"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                                                                lineNumber: 1257,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                                                        lineNumber: 1246,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                                                lineNumber: 1244,
                                                columnNumber: 19
                                            }, this) : null,
                                            relationshipForm.relationshipType === "spouse_of" && relationshipForm.marriageDatePrecision === "dd_mm_yyyy" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$admin$2f$data$2d$capture$2f$workspace$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].field,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "Marriage date"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                                                        lineNumber: 1262,
                                                        columnNumber: 51
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "date",
                                                        value: relationshipForm.marriageDateDay,
                                                        onChange: (event)=>setRelationshipForm((current)=>({
                                                                    ...current,
                                                                    marriageDateDay: event.target.value
                                                                }))
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                                                        lineNumber: 1262,
                                                        columnNumber: 77
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                                                lineNumber: 1262,
                                                columnNumber: 19
                                            }, this) : null,
                                            relationshipForm.relationshipType === "spouse_of" && relationshipForm.marriageDatePrecision === "mm_yyyy" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$admin$2f$data$2d$capture$2f$workspace$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].field,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "Marriage month"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                                                        lineNumber: 1265,
                                                        columnNumber: 51
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "month",
                                                        value: relationshipForm.marriageDateMonth,
                                                        onChange: (event)=>setRelationshipForm((current)=>({
                                                                    ...current,
                                                                    marriageDateMonth: event.target.value
                                                                }))
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                                                        lineNumber: 1265,
                                                        columnNumber: 78
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                                                lineNumber: 1265,
                                                columnNumber: 19
                                            }, this) : null,
                                            relationshipForm.relationshipType === "spouse_of" && relationshipForm.marriageDatePrecision === "yyyy" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$admin$2f$data$2d$capture$2f$workspace$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].field,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "Marriage year"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                                                        lineNumber: 1268,
                                                        columnNumber: 51
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "number",
                                                        min: "1800",
                                                        max: "2200",
                                                        placeholder: "e.g. 2008",
                                                        value: relationshipForm.marriageDateYear,
                                                        onChange: (event)=>setRelationshipForm((current)=>({
                                                                    ...current,
                                                                    marriageDateYear: event.target.value
                                                                }))
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                                                        lineNumber: 1268,
                                                        columnNumber: 77
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                                                lineNumber: 1268,
                                                columnNumber: 19
                                            }, this) : null,
                                            relationshipForm.relationshipType === "parent_of" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$admin$2f$data$2d$capture$2f$workspace$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].field,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: relationshipStartDateLabel
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                                                        lineNumber: 1271,
                                                        columnNumber: 51
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "date",
                                                        value: relationshipForm.startDate,
                                                        onChange: (event)=>setRelationshipForm((current)=>({
                                                                    ...current,
                                                                    startDate: event.target.value
                                                                }))
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                                                        lineNumber: 1271,
                                                        columnNumber: 92
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                                                lineNumber: 1271,
                                                columnNumber: 19
                                            }, this) : null,
                                            relationshipEndDateLabel ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$admin$2f$data$2d$capture$2f$workspace$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].field,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: relationshipEndDateLabel
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                                                        lineNumber: 1274,
                                                        columnNumber: 51
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "date",
                                                        value: relationshipForm.endDate,
                                                        onChange: (event)=>setRelationshipForm((current)=>({
                                                                    ...current,
                                                                    endDate: event.target.value
                                                                }))
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                                                        lineNumber: 1274,
                                                        columnNumber: 90
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                                                lineNumber: 1274,
                                                columnNumber: 19
                                            }, this) : null
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                                        lineNumber: 1236,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$admin$2f$data$2d$capture$2f$workspace$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].field,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "Notes"
                                            }, void 0, false, {
                                                fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                                                lineNumber: 1277,
                                                columnNumber: 47
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                value: relationshipForm.notes,
                                                onChange: (event)=>setRelationshipForm((current)=>({
                                                            ...current,
                                                            notes: event.target.value
                                                        })),
                                                placeholder: "Optional relationship context",
                                                rows: 3
                                            }, void 0, false, {
                                                fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                                                lineNumber: 1277,
                                                columnNumber: 65
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                                        lineNumber: 1277,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$admin$2f$data$2d$capture$2f$workspace$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].actionRow,
                                        children: [
                                            editingRelationshipId ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$admin$2f$data$2d$capture$2f$workspace$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].secondaryButton,
                                                type: "button",
                                                onClick: ()=>{
                                                    setEditingRelationshipId("");
                                                    setRelationshipForm((current)=>({
                                                            ...__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$admin$2f$data$2d$capture$2f$state$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["emptyRelationshipForm"],
                                                            person1Id: current.person1Id,
                                                            person2Id: current.person2Id
                                                        }));
                                                    setRelationshipMessage("");
                                                },
                                                children: "Cancel Edit"
                                            }, void 0, false, {
                                                fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                                                lineNumber: 1280,
                                                columnNumber: 19
                                            }, this) : null,
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$admin$2f$data$2d$capture$2f$workspace$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].primaryButton,
                                                type: "submit",
                                                disabled: relationshipSubmitting || !selectedFamilyId,
                                                children: relationshipSubmitting ? "Saving..." : editingRelationshipId ? "Update Relationship" : "Save Relationship"
                                            }, void 0, false, {
                                                fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                                                lineNumber: 1296,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                                        lineNumber: 1278,
                                        columnNumber: 15
                                    }, this),
                                    relationshipMessage ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$admin$2f$data$2d$capture$2f$workspace$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].message,
                                        children: relationshipMessage
                                    }, void 0, false, {
                                        fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                                        lineNumber: 1300,
                                        columnNumber: 38
                                    }, this) : null
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                                lineNumber: 1231,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$admin$2f$data$2d$capture$2f$workspace$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].compactList,
                                children: [
                                    relationships.map((relationship)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$admin$2f$data$2d$capture$2f$workspace$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].compactCard,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: formatRelationshipSummary(relationship)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                                                    lineNumber: 1305,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: [
                                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$admin$2f$data$2d$capture$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatDate"])(relationship.startDate),
                                                        relationship.endDate ? " - ".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$admin$2f$data$2d$capture$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatDate"])(relationship.endDate)) : ""
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                                                    lineNumber: 1306,
                                                    columnNumber: 19
                                                }, this),
                                                relationship.relationshipType === "parent_of" || relationship.relationshipType === "spouse_of" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$admin$2f$data$2d$capture$2f$workspace$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].actionRow,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$admin$2f$data$2d$capture$2f$workspace$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].secondaryButton,
                                                        onClick: ()=>{
                                                            var _relationship_notes;
                                                            const marriageDateFields = extractMarriageDateFields(relationship);
                                                            setEditingRelationshipId(relationship.id);
                                                            var _relationship_notes_replace_replace_replace_replace_trim;
                                                            setRelationshipForm({
                                                                person1Id: relationship.personOne.id,
                                                                person2Id: relationship.personTwo.id,
                                                                relationshipType: relationship.relationshipType === "parent_of" ? "parent_of" : "spouse_of",
                                                                spouseState: extractSpouseState(relationship),
                                                                startDate: relationship.startDate ? String(relationship.startDate).slice(0, 10) : "",
                                                                marriageDatePrecision: marriageDateFields.precision,
                                                                marriageDateDay: marriageDateFields.day,
                                                                marriageDateMonth: marriageDateFields.month,
                                                                marriageDateYear: marriageDateFields.year,
                                                                endDate: relationship.endDate ? String(relationship.endDate).slice(0, 10) : "",
                                                                notes: (_relationship_notes_replace_replace_replace_replace_trim = (_relationship_notes = relationship.notes) === null || _relationship_notes === void 0 ? void 0 : _relationship_notes.replace(/Spouse status:\s*[a-z]+\s*/i, "").replace(/Marriage date precision:\s*[A-Z/]+\s*/i, "").replace(/Marriage date value:\s*[0-9/]+\s*/i, "").replace(/Marriage year:\s*\d{4}\s*/i, "").trim()) !== null && _relationship_notes_replace_replace_replace_replace_trim !== void 0 ? _relationship_notes_replace_replace_replace_replace_trim : ""
                                                            });
                                                            setRelationshipMessage("");
                                                        },
                                                        children: "Edit"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                                                        lineNumber: 1309,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                                                    lineNumber: 1308,
                                                    columnNumber: 21
                                                }, this) : null
                                            ]
                                        }, relationship.id, true, {
                                            fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                                            lineNumber: 1304,
                                            columnNumber: 17
                                        }, this)),
                                    !relationships.length ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$admin$2f$data$2d$capture$2f$workspace$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].empty,
                                        children: "No relationships recorded yet."
                                    }, void 0, false, {
                                        fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                                        lineNumber: 1342,
                                        columnNumber: 40
                                    }, this) : null
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                                lineNumber: 1302,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                        lineNumber: 1226,
                        columnNumber: 11
                    }, this) : null,
                    activeTab === "access" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$admin$2f$data$2d$capture$2f$workspace$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].stackGrid,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$admin$2f$data$2d$capture$2f$workspace$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].panel,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$admin$2f$data$2d$capture$2f$workspace$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].panelHeader,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                children: "Create Login Access"
                                            }, void 0, false, {
                                                fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                                                lineNumber: 1351,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: "Admins can create OTP login access for family members."
                                            }, void 0, false, {
                                                fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                                                lineNumber: 1352,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                                        lineNumber: 1350,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$admin$2f$data$2d$capture$2f$workspace$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].form,
                                        onSubmit: onCreateMemberLogin,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$admin$2f$data$2d$capture$2f$workspace$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].grid,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$admin$2f$data$2d$capture$2f$workspace$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].field,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: "Family member"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                                                                lineNumber: 1356,
                                                                columnNumber: 51
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                value: memberLoginForm.personId,
                                                                onChange: (event)=>setMemberLoginForm((current)=>({
                                                                            ...current,
                                                                            personId: event.target.value
                                                                        })),
                                                                required: true,
                                                                disabled: !availableLoginPersonOptions.length,
                                                                children: availableLoginPersonOptions.map((person)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        value: person.id,
                                                                        children: person.label
                                                                    }, person.id, false, {
                                                                        fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                                                                        lineNumber: 1356,
                                                                        columnNumber: 321
                                                                    }, this))
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                                                                lineNumber: 1356,
                                                                columnNumber: 77
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                                                        lineNumber: 1356,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$admin$2f$data$2d$capture$2f$workspace$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].field,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: "Role"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                                                                lineNumber: 1357,
                                                                columnNumber: 51
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                value: memberLoginForm.role,
                                                                onChange: (event)=>setMemberLoginForm((current)=>({
                                                                            ...current,
                                                                            role: event.target.value
                                                                        })),
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        value: "admin",
                                                                        children: "Admin"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                                                                        lineNumber: 1357,
                                                                        columnNumber: 235
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        value: "editor",
                                                                        children: "Editor"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                                                                        lineNumber: 1357,
                                                                        columnNumber: 271
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        value: "contributor",
                                                                        children: "Contributor"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                                                                        lineNumber: 1357,
                                                                        columnNumber: 309
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        value: "viewer",
                                                                        children: "Viewer"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                                                                        lineNumber: 1357,
                                                                        columnNumber: 357
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                                                                lineNumber: 1357,
                                                                columnNumber: 68
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                                                        lineNumber: 1357,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$admin$2f$data$2d$capture$2f$workspace$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].field,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: "Mobile number"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                                                                lineNumber: 1358,
                                                                columnNumber: 51
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                value: memberLoginForm.mobileNumber,
                                                                onChange: (event)=>setMemberLoginForm((current)=>({
                                                                            ...current,
                                                                            mobileNumber: event.target.value
                                                                        })),
                                                                placeholder: "10 digits",
                                                                required: true
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                                                                lineNumber: 1358,
                                                                columnNumber: 77
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                                                        lineNumber: 1358,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                                                lineNumber: 1355,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$admin$2f$data$2d$capture$2f$workspace$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].primaryButton,
                                                type: "submit",
                                                disabled: memberLoginSubmitting || !selectedFamilyId || !availableLoginPersonOptions.length || !canCreateMemberLogin,
                                                children: memberLoginSubmitting ? "Creating..." : "Create Member Login"
                                            }, void 0, false, {
                                                fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                                                lineNumber: 1360,
                                                columnNumber: 17
                                            }, this),
                                            !availableLoginPersonOptions.length && selectedFamilyId ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$admin$2f$data$2d$capture$2f$workspace$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].message,
                                                children: "All members already have login access in this family."
                                            }, void 0, false, {
                                                fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                                                lineNumber: 1363,
                                                columnNumber: 76
                                            }, this) : null,
                                            !canCreateMemberLogin && selectedFamilyId ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$admin$2f$data$2d$capture$2f$workspace$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].message,
                                                children: "Admin role is required in this workspace to create member login access."
                                            }, void 0, false, {
                                                fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                                                lineNumber: 1364,
                                                columnNumber: 62
                                            }, this) : null,
                                            memberLoginMessage ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$admin$2f$data$2d$capture$2f$workspace$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].message,
                                                children: memberLoginMessage
                                            }, void 0, false, {
                                                fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                                                lineNumber: 1365,
                                                columnNumber: 39
                                            }, this) : null
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                                        lineNumber: 1354,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                                lineNumber: 1349,
                                columnNumber: 13
                            }, this),
                            canManageWorkspace ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$admin$2f$data$2d$capture$2f$workspace$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].panel,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$admin$2f$data$2d$capture$2f$workspace$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].panelHeader,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                children: "Access Management"
                                            }, void 0, false, {
                                                fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                                                lineNumber: 1372,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: "Adjust role, suspend access, reset passwords, and remap users to the right person record."
                                            }, void 0, false, {
                                                fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                                                lineNumber: 1373,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                                        lineNumber: 1371,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$admin$2f$data$2d$capture$2f$workspace$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].compactList,
                                        children: memberAccessList.map((item)=>{
                                            var _item_person;
                                            var _item_person_fullName;
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                className: "".concat(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$admin$2f$data$2d$capture$2f$workspace$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].compactCard, " ").concat(memberAccessUpdate.membershipId === item.id ? __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$admin$2f$data$2d$capture$2f$workspace$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].compactCardActive : ""),
                                                onClick: ()=>{
                                                    var _item_person;
                                                    var _item_person_id;
                                                    return setMemberAccessUpdate({
                                                        membershipId: item.id,
                                                        role: item.role,
                                                        status: item.status,
                                                        password: "",
                                                        personId: (_item_person_id = (_item_person = item.person) === null || _item_person === void 0 ? void 0 : _item_person.id) !== null && _item_person_id !== void 0 ? _item_person_id : ""
                                                    });
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                        children: [
                                                            item.user.fullName,
                                                            " (",
                                                            item.role,
                                                            ")"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                                                        lineNumber: 1391,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: [
                                                            item.user.mobileNumber,
                                                            " | ",
                                                            item.status,
                                                            " | ",
                                                            (_item_person_fullName = (_item_person = item.person) === null || _item_person === void 0 ? void 0 : _item_person.fullName) !== null && _item_person_fullName !== void 0 ? _item_person_fullName : "No person linked"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                                                        lineNumber: 1392,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, item.id, true, {
                                                fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                                                lineNumber: 1377,
                                                columnNumber: 21
                                            }, this);
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                                        lineNumber: 1375,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$admin$2f$data$2d$capture$2f$workspace$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].form,
                                        onSubmit: onUpdateMemberAccess,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$admin$2f$data$2d$capture$2f$workspace$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].grid,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$admin$2f$data$2d$capture$2f$workspace$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].field,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: "Linked person"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                                                                lineNumber: 1398,
                                                                columnNumber: 53
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                value: memberAccessUpdate.personId,
                                                                onChange: (event)=>setMemberAccessUpdate((current)=>({
                                                                            ...current,
                                                                            personId: event.target.value
                                                                        })),
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        value: "",
                                                                        children: "No person link"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                                                                        lineNumber: 1398,
                                                                        columnNumber: 228
                                                                    }, this),
                                                                    availablePersonOptions.map((person)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                            value: person.id,
                                                                            children: person.label
                                                                        }, person.id, false, {
                                                                            fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                                                                            lineNumber: 1398,
                                                                            columnNumber: 308
                                                                        }, this))
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                                                                lineNumber: 1398,
                                                                columnNumber: 79
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                                                        lineNumber: 1398,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$admin$2f$data$2d$capture$2f$workspace$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].field,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: "Role"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                                                                lineNumber: 1399,
                                                                columnNumber: 53
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                value: memberAccessUpdate.role,
                                                                onChange: (event)=>setMemberAccessUpdate((current)=>({
                                                                            ...current,
                                                                            role: event.target.value
                                                                        })),
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        value: "admin",
                                                                        children: "Admin"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                                                                        lineNumber: 1399,
                                                                        columnNumber: 246
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        value: "editor",
                                                                        children: "Editor"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                                                                        lineNumber: 1399,
                                                                        columnNumber: 282
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        value: "contributor",
                                                                        children: "Contributor"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                                                                        lineNumber: 1399,
                                                                        columnNumber: 320
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        value: "viewer",
                                                                        children: "Viewer"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                                                                        lineNumber: 1399,
                                                                        columnNumber: 368
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                                                                lineNumber: 1399,
                                                                columnNumber: 70
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                                                        lineNumber: 1399,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$admin$2f$data$2d$capture$2f$workspace$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].field,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: "Status"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                                                                lineNumber: 1400,
                                                                columnNumber: 53
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                value: memberAccessUpdate.status,
                                                                onChange: (event)=>setMemberAccessUpdate((current)=>({
                                                                            ...current,
                                                                            status: event.target.value
                                                                        })),
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        value: "active",
                                                                        children: "Active"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                                                                        lineNumber: 1400,
                                                                        columnNumber: 254
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        value: "suspended",
                                                                        children: "Suspended"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                                                                        lineNumber: 1400,
                                                                        columnNumber: 292
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                                                                lineNumber: 1400,
                                                                columnNumber: 72
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                                                        lineNumber: 1400,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$admin$2f$data$2d$capture$2f$workspace$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].field,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: "Reset password"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                                                                lineNumber: 1401,
                                                                columnNumber: 53
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "password",
                                                                value: memberAccessUpdate.password,
                                                                onChange: (event)=>setMemberAccessUpdate((current)=>({
                                                                            ...current,
                                                                            password: event.target.value
                                                                        })),
                                                                placeholder: "Leave blank to keep current password"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                                                                lineNumber: 1401,
                                                                columnNumber: 80
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                                                        lineNumber: 1401,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                                                lineNumber: 1397,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$admin$2f$data$2d$capture$2f$workspace$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].primaryButton,
                                                type: "submit",
                                                disabled: memberAccessSubmitting || !memberAccessUpdate.membershipId,
                                                children: memberAccessSubmitting ? "Updating..." : "Update Access"
                                            }, void 0, false, {
                                                fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                                                lineNumber: 1403,
                                                columnNumber: 19
                                            }, this),
                                            memberAccessMessage ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$admin$2f$data$2d$capture$2f$workspace$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].message,
                                                children: memberAccessMessage
                                            }, void 0, false, {
                                                fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                                                lineNumber: 1406,
                                                columnNumber: 42
                                            }, this) : null
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                                        lineNumber: 1396,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                                lineNumber: 1370,
                                columnNumber: 15
                            }, this) : null
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                        lineNumber: 1348,
                        columnNumber: 11
                    }, this) : null,
                    activeTab === "requests" ? canManageWorkspace ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$admin$2f$data$2d$capture$2f$workspace$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].panel,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$admin$2f$data$2d$capture$2f$workspace$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].panelHeader,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        children: "Join Requests"
                                    }, void 0, false, {
                                        fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                                        lineNumber: 1417,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: "Approve or reject multi-workspace access requests and map the user to the right family member profile."
                                    }, void 0, false, {
                                        fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                                        lineNumber: 1418,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                                lineNumber: 1416,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$admin$2f$data$2d$capture$2f$workspace$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].compactList,
                                children: joinRequests.map((request)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        className: "".concat(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$admin$2f$data$2d$capture$2f$workspace$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].compactCard, " ").concat(joinReviewForm.requestId === request.id ? __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$admin$2f$data$2d$capture$2f$workspace$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].compactCardActive : ""),
                                        onClick: ()=>{
                                            var _request_targetPerson, _people_;
                                            var _request_targetPerson_id, _ref;
                                            return setJoinReviewForm({
                                                requestId: request.id,
                                                decision: "approved",
                                                role: request.requestedRole,
                                                personId: (_ref = (_request_targetPerson_id = (_request_targetPerson = request.targetPerson) === null || _request_targetPerson === void 0 ? void 0 : _request_targetPerson.id) !== null && _request_targetPerson_id !== void 0 ? _request_targetPerson_id : (_people_ = people[0]) === null || _people_ === void 0 ? void 0 : _people_.id) !== null && _ref !== void 0 ? _ref : "",
                                                mappingMode: "relation",
                                                relationType: "child",
                                                primaryContactSource: "requester",
                                                mergeConfirmed: false
                                            });
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: [
                                                    request.requestingUser.fullName,
                                                    " requested ",
                                                    request.requestedRole
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                                                lineNumber: 1439,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: [
                                                    request.requestingUser.mobileNumber,
                                                    " | ",
                                                    request.status,
                                                    " | ",
                                                    request.message || "No message"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                                                lineNumber: 1440,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, request.id, true, {
                                        fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                                        lineNumber: 1422,
                                        columnNumber: 19
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                                lineNumber: 1420,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$admin$2f$data$2d$capture$2f$workspace$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].form,
                                onSubmit: onReviewJoinRequest,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$admin$2f$data$2d$capture$2f$workspace$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].grid,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$admin$2f$data$2d$capture$2f$workspace$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].field,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "Decision"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                                                        lineNumber: 1446,
                                                        columnNumber: 51
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                        value: joinReviewForm.decision,
                                                        onChange: (event)=>setJoinReviewForm((current)=>({
                                                                    ...current,
                                                                    decision: event.target.value
                                                                })),
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "approved",
                                                                children: "Approve"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                                                                lineNumber: 1446,
                                                                columnNumber: 248
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "rejected",
                                                                children: "Reject"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                                                                lineNumber: 1446,
                                                                columnNumber: 289
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                                                        lineNumber: 1446,
                                                        columnNumber: 72
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                                                lineNumber: 1446,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$admin$2f$data$2d$capture$2f$workspace$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].field,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "Role on approval"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                                                        lineNumber: 1447,
                                                        columnNumber: 51
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                        value: joinReviewForm.role,
                                                        onChange: (event)=>setJoinReviewForm((current)=>({
                                                                    ...current,
                                                                    role: event.target.value
                                                                })),
                                                        disabled: joinReviewForm.decision !== "approved",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "admin",
                                                                children: "Admin"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                                                                lineNumber: 1447,
                                                                columnNumber: 294
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "editor",
                                                                children: "Editor"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                                                                lineNumber: 1447,
                                                                columnNumber: 330
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "contributor",
                                                                children: "Contributor"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                                                                lineNumber: 1447,
                                                                columnNumber: 368
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "viewer",
                                                                children: "Viewer"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                                                                lineNumber: 1447,
                                                                columnNumber: 416
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                                                        lineNumber: 1447,
                                                        columnNumber: 80
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                                                lineNumber: 1447,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$admin$2f$data$2d$capture$2f$workspace$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].field,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "Map to member profile"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                                                        lineNumber: 1448,
                                                        columnNumber: 51
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                        value: joinReviewForm.personId,
                                                        onChange: (event)=>setJoinReviewForm((current)=>({
                                                                    ...current,
                                                                    personId: event.target.value
                                                                })),
                                                        disabled: joinReviewForm.decision !== "approved",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "",
                                                                children: "Select member profile"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                                                                lineNumber: 1448,
                                                                columnNumber: 276
                                                            }, this),
                                                            availablePersonOptions.map((person)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: person.id,
                                                                    children: person.label
                                                                }, person.id, false, {
                                                                    fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                                                                    lineNumber: 1448,
                                                                    columnNumber: 363
                                                                }, this))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                                                        lineNumber: 1448,
                                                        columnNumber: 85
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                                                lineNumber: 1448,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$admin$2f$data$2d$capture$2f$workspace$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].field,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "Mapping mode"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                                                        lineNumber: 1449,
                                                        columnNumber: 51
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                        value: joinReviewForm.mappingMode,
                                                        onChange: (event)=>setJoinReviewForm((current)=>({
                                                                    ...current,
                                                                    mappingMode: event.target.value,
                                                                    mergeConfirmed: false
                                                                })),
                                                        disabled: joinReviewForm.decision !== "approved",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "relation",
                                                                children: "Relation"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                                                                lineNumber: 1449,
                                                                columnNumber: 334
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "same_person",
                                                                children: "Same Person (Merge)"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                                                                lineNumber: 1449,
                                                                columnNumber: 376
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                                                        lineNumber: 1449,
                                                        columnNumber: 76
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                                                lineNumber: 1449,
                                                columnNumber: 19
                                            }, this),
                                            joinReviewForm.mappingMode === "relation" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$admin$2f$data$2d$capture$2f$workspace$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].field,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "Relationship"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                                                        lineNumber: 1451,
                                                        columnNumber: 53
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                        value: joinReviewForm.relationType,
                                                        onChange: (event)=>setJoinReviewForm((current)=>({
                                                                    ...current,
                                                                    relationType: event.target.value
                                                                })),
                                                        disabled: joinReviewForm.decision !== "approved",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "spouse",
                                                                children: "Spouse"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                                                                lineNumber: 1451,
                                                                columnNumber: 316
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "child",
                                                                children: "Child"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                                                                lineNumber: 1451,
                                                                columnNumber: 354
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "parent",
                                                                children: "Parent"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                                                                lineNumber: 1451,
                                                                columnNumber: 390
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                                                        lineNumber: 1451,
                                                        columnNumber: 78
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                                                lineNumber: 1451,
                                                columnNumber: 21
                                            }, this) : null,
                                            joinReviewForm.mappingMode === "same_person" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$admin$2f$data$2d$capture$2f$workspace$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].field,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "Primary contact number"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                                                        lineNumber: 1454,
                                                        columnNumber: 53
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                        value: joinReviewForm.primaryContactSource,
                                                        onChange: (event)=>setJoinReviewForm((current)=>({
                                                                    ...current,
                                                                    primaryContactSource: event.target.value
                                                                })),
                                                        disabled: joinReviewForm.decision !== "approved",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "requester",
                                                                children: "Requester number"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                                                                lineNumber: 1454,
                                                                columnNumber: 350
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "approved",
                                                                children: "Approved profile number"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                                                                lineNumber: 1454,
                                                                columnNumber: 401
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                                                        lineNumber: 1454,
                                                        columnNumber: 88
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                                                lineNumber: 1454,
                                                columnNumber: 21
                                            }, this) : null
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                                        lineNumber: 1445,
                                        columnNumber: 17
                                    }, this),
                                    joinReviewForm.mappingMode === "same_person" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$admin$2f$data$2d$capture$2f$workspace$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].field,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "Merge warning"
                                            }, void 0, false, {
                                                fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                                                lineNumber: 1459,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$admin$2f$data$2d$capture$2f$workspace$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].message,
                                                        children: "Duplicate warning: this action merges requester profile into selected profile. Merge history is saved and can be undone."
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                                                        lineNumber: 1461,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "checkbox",
                                                                checked: joinReviewForm.mergeConfirmed,
                                                                onChange: (event)=>setJoinReviewForm((current)=>({
                                                                            ...current,
                                                                            mergeConfirmed: event.target.checked
                                                                        })),
                                                                disabled: joinReviewForm.decision !== "approved"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                                                                lineNumber: 1463,
                                                                columnNumber: 25
                                                            }, this),
                                                            " ",
                                                            "I understand and confirm this merge"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                                                        lineNumber: 1462,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                                                lineNumber: 1460,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                                        lineNumber: 1458,
                                        columnNumber: 19
                                    }, this) : null,
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$admin$2f$data$2d$capture$2f$workspace$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].primaryButton,
                                        type: "submit",
                                        disabled: joinReviewSubmitting || !joinReviewForm.requestId || joinReviewForm.decision === "approved" && joinReviewForm.mappingMode === "same_person" && !joinReviewForm.mergeConfirmed,
                                        children: joinReviewSubmitting ? "Saving..." : "Submit Review"
                                    }, void 0, false, {
                                        fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                                        lineNumber: 1474,
                                        columnNumber: 17
                                    }, this),
                                    joinReviewMessage ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$admin$2f$data$2d$capture$2f$workspace$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].message,
                                        children: joinReviewMessage
                                    }, void 0, false, {
                                        fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                                        lineNumber: 1477,
                                        columnNumber: 38
                                    }, this) : null
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                                lineNumber: 1444,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                        lineNumber: 1415,
                        columnNumber: 13
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$admin$2f$data$2d$capture$2f$workspace$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].panel,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$admin$2f$data$2d$capture$2f$workspace$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].empty,
                            children: "Only workspace admins can review join requests."
                        }, void 0, false, {
                            fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                            lineNumber: 1482,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                        lineNumber: 1481,
                        columnNumber: 13
                    }, this) : null,
                    activeTab === "audit" ? canManageWorkspace ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$admin$2f$data$2d$capture$2f$workspace$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].panel,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$admin$2f$data$2d$capture$2f$workspace$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].panelHeader,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        children: "Audit Trail"
                                    }, void 0, false, {
                                        fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                                        lineNumber: 1491,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: "Latest sensitive actions inside this family workspace."
                                    }, void 0, false, {
                                        fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                                        lineNumber: 1492,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                                lineNumber: 1490,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$admin$2f$data$2d$capture$2f$workspace$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].compactList,
                                children: [
                                    auditLogs.map((log)=>{
                                        var _log_actorUser;
                                        var _log_actorUser_fullName;
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$admin$2f$data$2d$capture$2f$workspace$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].compactCard,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: log.action
                                                }, void 0, false, {
                                                    fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                                                    lineNumber: 1497,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: [
                                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$admin$2f$data$2d$capture$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatDate"])(log.createdAt),
                                                        " | ",
                                                        (_log_actorUser_fullName = (_log_actorUser = log.actorUser) === null || _log_actorUser === void 0 ? void 0 : _log_actorUser.fullName) !== null && _log_actorUser_fullName !== void 0 ? _log_actorUser_fullName : "System",
                                                        " | ",
                                                        log.entityType
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                                                    lineNumber: 1498,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, log.id, true, {
                                            fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                                            lineNumber: 1496,
                                            columnNumber: 19
                                        }, this);
                                    }),
                                    !auditLogs.length ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$admin$2f$data$2d$capture$2f$workspace$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].empty,
                                        children: "No audit log entries yet."
                                    }, void 0, false, {
                                        fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                                        lineNumber: 1501,
                                        columnNumber: 38
                                    }, this) : null
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                                lineNumber: 1494,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                        lineNumber: 1489,
                        columnNumber: 13
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$admin$2f$data$2d$capture$2f$workspace$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].panel,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$admin$2f$data$2d$capture$2f$workspace$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].empty,
                            children: "Only workspace admins can view audit trail entries."
                        }, void 0, false, {
                            fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                            lineNumber: 1506,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                        lineNumber: 1505,
                        columnNumber: 13
                    }, this) : null
                ]
            }, void 0, true, {
                fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
                lineNumber: 1019,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/platform/admin/data-capture/workspace.tsx",
        lineNumber: 945,
        columnNumber: 5
    }, this);
}
_s(DataCaptureWorkspace, "Az9i7qx0EnFdiMWszhhwFx7mHh8=");
_c = DataCaptureWorkspace;
var _c;
__turbopack_context__.k.register(_c, "DataCaptureWorkspace");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_b2fb7eb3._.js.map