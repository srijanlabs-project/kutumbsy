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
                src: "/image.png",
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
"[project]/components/PostLoginShell.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PostLoginShell",
    ()=>PostLoginShell
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$BrandLogo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/BrandLogo.tsx [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module './PostLoginShell.module.css'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
;
;
;
function PostLoginShell(param) {
    let { title, subtitle, activeNav, currentFamily, currentUser, children, rightRail } = param;
    const avatarInitial = (currentUser !== null && currentUser !== void 0 ? currentUser : "U").trim().charAt(0).toUpperCase() || "U";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: styles.page,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: styles.topNav,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: styles.topNavInner,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/family-space",
                            className: styles.brandLink,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$BrandLogo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BrandLogo"], {
                                className: styles.brandLogoWrap,
                                imageClassName: styles.brandLogo,
                                fallbackClassName: styles.brandFallback
                            }, void 0, false, {
                                fileName: "[project]/components/PostLoginShell.tsx",
                                lineNumber: 34,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/PostLoginShell.tsx",
                            lineNumber: 33,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                            className: styles.topActions,
                            "aria-label": "Primary",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/platform/auth",
                                    className: "".concat(styles.topAction, " ").concat(activeNav === "platform" ? styles.topActionActive : ""),
                                    children: "Dashboard"
                                }, void 0, false, {
                                    fileName: "[project]/components/PostLoginShell.tsx",
                                    lineNumber: 41,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/family-space",
                                    className: "".concat(styles.topAction, " ").concat(activeNav === "family-space" ? styles.topActionActive : ""),
                                    children: "Family Space"
                                }, void 0, false, {
                                    fileName: "[project]/components/PostLoginShell.tsx",
                                    lineNumber: 44,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/family-space/requests",
                                    className: "".concat(styles.topAction, " ").concat(activeNav === "requests" ? styles.topActionActive : ""),
                                    children: "Requests"
                                }, void 0, false, {
                                    fileName: "[project]/components/PostLoginShell.tsx",
                                    lineNumber: 47,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/platform/admin/data-capture",
                                    className: "".concat(styles.topAction, " ").concat(activeNav === "data-capture" ? styles.topActionActive : ""),
                                    children: "Add Member"
                                }, void 0, false, {
                                    fileName: "[project]/components/PostLoginShell.tsx",
                                    lineNumber: 50,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/platform/admin/security",
                                    className: "".concat(styles.topAction, " ").concat(activeNav === "security" ? styles.topActionActive : ""),
                                    children: "Security"
                                }, void 0, false, {
                                    fileName: "[project]/components/PostLoginShell.tsx",
                                    lineNumber: 53,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/PostLoginShell.tsx",
                            lineNumber: 40,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: styles.navAvatar,
                            children: avatarInitial
                        }, void 0, false, {
                            fileName: "[project]/components/PostLoginShell.tsx",
                            lineNumber: 57,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/PostLoginShell.tsx",
                    lineNumber: 32,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/PostLoginShell.tsx",
                lineNumber: 31,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: styles.shell,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                        className: styles.sidebar,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                className: styles.sidebarContext,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: styles.sidebarLabel,
                                        children: "Current context"
                                    }, void 0, false, {
                                        fileName: "[project]/components/PostLoginShell.tsx",
                                        lineNumber: 64,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        className: styles.sidebarValue,
                                        children: currentFamily || "No Family Space selected"
                                    }, void 0, false, {
                                        fileName: "[project]/components/PostLoginShell.tsx",
                                        lineNumber: 65,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: styles.sidebarHint,
                                        children: currentUser || "No active user loaded"
                                    }, void 0, false, {
                                        fileName: "[project]/components/PostLoginShell.tsx",
                                        lineNumber: 66,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/PostLoginShell.tsx",
                                lineNumber: 63,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                className: styles.sidebarNav,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: styles.sidebarLabel,
                                        children: "Navigate"
                                    }, void 0, false, {
                                        fileName: "[project]/components/PostLoginShell.tsx",
                                        lineNumber: 70,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: styles.navList,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/platform/auth",
                                                className: "".concat(styles.navItem, " ").concat(activeNav === "platform" ? styles.navItemActive : ""),
                                                children: "Platform Dashboard"
                                            }, void 0, false, {
                                                fileName: "[project]/components/PostLoginShell.tsx",
                                                lineNumber: 72,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/family-space",
                                                className: "".concat(styles.navItem, " ").concat(activeNav === "family-space" ? styles.navItemActive : ""),
                                                children: "Family Space"
                                            }, void 0, false, {
                                                fileName: "[project]/components/PostLoginShell.tsx",
                                                lineNumber: 73,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/family-space/requests",
                                                className: "".concat(styles.navItem, " ").concat(activeNav === "requests" ? styles.navItemActive : ""),
                                                children: "Family Requests"
                                            }, void 0, false, {
                                                fileName: "[project]/components/PostLoginShell.tsx",
                                                lineNumber: 74,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/platform/admin/data-capture",
                                                className: "".concat(styles.navItem, " ").concat(activeNav === "data-capture" ? styles.navItemActive : ""),
                                                children: "Add User / Member"
                                            }, void 0, false, {
                                                fileName: "[project]/components/PostLoginShell.tsx",
                                                lineNumber: 75,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/platform/admin/security",
                                                className: "".concat(styles.navItem, " ").concat(activeNav === "security" ? styles.navItemActive : ""),
                                                children: "Security"
                                            }, void 0, false, {
                                                fileName: "[project]/components/PostLoginShell.tsx",
                                                lineNumber: 76,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/PostLoginShell.tsx",
                                        lineNumber: 71,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/PostLoginShell.tsx",
                                lineNumber: 69,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/PostLoginShell.tsx",
                        lineNumber: 62,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: styles.content,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                className: styles.hero,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: styles.eyebrow,
                                            children: "Post-login workspace"
                                        }, void 0, false, {
                                            fileName: "[project]/components/PostLoginShell.tsx",
                                            lineNumber: 84,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                            className: styles.title,
                                            children: title
                                        }, void 0, false, {
                                            fileName: "[project]/components/PostLoginShell.tsx",
                                            lineNumber: 85,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: styles.subtitle,
                                            children: subtitle
                                        }, void 0, false, {
                                            fileName: "[project]/components/PostLoginShell.tsx",
                                            lineNumber: 86,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/PostLoginShell.tsx",
                                    lineNumber: 83,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/PostLoginShell.tsx",
                                lineNumber: 82,
                                columnNumber: 11
                            }, this),
                            children,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                                className: styles.footer,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Kutumbsy post-login workspace"
                                    }, void 0, false, {
                                        fileName: "[project]/components/PostLoginShell.tsx",
                                        lineNumber: 91,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Family-first navigation, shared access, and consistent tooling."
                                    }, void 0, false, {
                                        fileName: "[project]/components/PostLoginShell.tsx",
                                        lineNumber: 92,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/PostLoginShell.tsx",
                                lineNumber: 90,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/PostLoginShell.tsx",
                        lineNumber: 81,
                        columnNumber: 9
                    }, this),
                    rightRail ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                        className: styles.rightRail,
                        children: rightRail
                    }, void 0, false, {
                        fileName: "[project]/components/PostLoginShell.tsx",
                        lineNumber: 96,
                        columnNumber: 22
                    }, this) : null
                ]
            }, void 0, true, {
                fileName: "[project]/components/PostLoginShell.tsx",
                lineNumber: 61,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/PostLoginShell.tsx",
        lineNumber: 30,
        columnNumber: 5
    }, this);
}
_c = PostLoginShell;
var _c;
__turbopack_context__.k.register(_c, "PostLoginShell");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/platform/auth/constants.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/platform/auth/services.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
        var _payload_error;
        throw new Error((_payload_error = payload.error) !== null && _payload_error !== void 0 ? _payload_error : "Unable to create platform account");
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
        var _payload_error;
        throw new Error((_payload_error = payload.error) !== null && _payload_error !== void 0 ? _payload_error : "Unable to send OTP");
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
        var _payload_error;
        throw new Error((_payload_error = payload.error) !== null && _payload_error !== void 0 ? _payload_error : "Unable to verify OTP");
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
        var _payload_error;
        throw new Error((_payload_error = payload.error) !== null && _payload_error !== void 0 ? _payload_error : "Unable to create Family Space");
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/platform/auth/workspace.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "actionRow": "workspace-module__vfaI4W__actionRow",
  "activeFamilyCard": "workspace-module__vfaI4W__activeFamilyCard",
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
  "createCard": "workspace-module__vfaI4W__createCard",
  "dashboardGrid": "workspace-module__vfaI4W__dashboardGrid",
  "dashboardMiddleRow": "workspace-module__vfaI4W__dashboardMiddleRow",
  "dashboardTopRow": "workspace-module__vfaI4W__dashboardTopRow",
  "empty": "workspace-module__vfaI4W__empty",
  "eyebrow": "workspace-module__vfaI4W__eyebrow",
  "field": "workspace-module__vfaI4W__field",
  "form": "workspace-module__vfaI4W__form",
  "hero": "workspace-module__vfaI4W__hero",
  "inlineActionLink": "workspace-module__vfaI4W__inlineActionLink",
  "layout": "workspace-module__vfaI4W__layout",
  "linkButton": "workspace-module__vfaI4W__linkButton",
  "logoFallback": "workspace-module__vfaI4W__logoFallback",
  "logoImage": "workspace-module__vfaI4W__logoImage",
  "logoWrap": "workspace-module__vfaI4W__logoWrap",
  "membershipActions": "workspace-module__vfaI4W__membershipActions",
  "membershipBoxNoBorder": "workspace-module__vfaI4W__membershipBoxNoBorder",
  "membershipItem": "workspace-module__vfaI4W__membershipItem",
  "membershipList": "workspace-module__vfaI4W__membershipList",
  "message": "workspace-module__vfaI4W__message",
  "navCard": "workspace-module__vfaI4W__navCard",
  "navGrid": "workspace-module__vfaI4W__navGrid",
  "pageShell": "workspace-module__vfaI4W__pageShell",
  "panel": "workspace-module__vfaI4W__panel",
  "panelText": "workspace-module__vfaI4W__panelText",
  "primaryButton": "workspace-module__vfaI4W__primaryButton",
  "profileCard": "workspace-module__vfaI4W__profileCard",
  "profileCardActions": "workspace-module__vfaI4W__profileCardActions",
  "secondaryButton": "workspace-module__vfaI4W__secondaryButton",
  "sessionCard": "workspace-module__vfaI4W__sessionCard",
  "sessionLabel": "workspace-module__vfaI4W__sessionLabel",
  "subtitle": "workspace-module__vfaI4W__subtitle",
  "switchButton": "workspace-module__vfaI4W__switchButton",
  "title": "workspace-module__vfaI4W__title",
});
}),
"[project]/app/platform/auth/workspace.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AuthWorkspace",
    ()=>AuthWorkspace
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$BrandLogo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/BrandLogo.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$PostLoginShell$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/PostLoginShell.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$auth$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/platform/auth/constants.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$auth$2f$services$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/platform/auth/services.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$auth$2f$workspace$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/app/platform/auth/workspace.module.css [app-client] (css module)");
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
function AuthWorkspace() {
    _s();
    const [authMode, setAuthMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("login");
    const [registerForm, setRegisterForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$auth$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["emptyRegisterForm"]);
    const [otpForm, setOtpForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$auth$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["emptyOtpForm"]);
    const [otpSent, setOtpSent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [resendCountdown, setResendCountdown] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [submitting, setSubmitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [registerMessage, setRegisterMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [loginMessage, setLoginMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [workspaceForm, setWorkspaceForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$auth$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["emptyWorkspaceForm"]);
    const [workspaceMessage, setWorkspaceMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [session, setSession] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [sessionChecked, setSessionChecked] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [activeWorkspaceId, setActiveWorkspaceId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const formatCountdown = (seconds)=>{
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        if (minutes <= 0) {
            return "".concat(remainingSeconds, "s");
        }
        return "".concat(minutes, "m ").concat(remainingSeconds.toString().padStart(2, "0"), "s");
    };
    const reloadSession = async ()=>{
        var _payload_activeWorkspace_data;
        const payload = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$auth$2f$services$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["loadSessionAndActiveWorkspace"])();
        if (payload.session.data) {
            setSession(payload.session.data);
        }
        var _payload_activeWorkspace_data_familyId;
        setActiveWorkspaceId((_payload_activeWorkspace_data_familyId = (_payload_activeWorkspace_data = payload.activeWorkspace.data) === null || _payload_activeWorkspace_data === void 0 ? void 0 : _payload_activeWorkspace_data.familyId) !== null && _payload_activeWorkspace_data_familyId !== void 0 ? _payload_activeWorkspace_data_familyId : "");
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AuthWorkspace.useEffect": ()=>{
            const params = new URLSearchParams(window.location.search);
            const mode = params.get("mode");
            if (mode === "register") {
                setAuthMode("register");
            }
        }
    }["AuthWorkspace.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AuthWorkspace.useEffect": ()=>{
            const loadSession = {
                "AuthWorkspace.useEffect.loadSession": async ()=>{
                    try {
                        await reloadSession();
                    } catch (e) {
                    // keep page usable even if session lookup fails
                    } finally{
                        setSessionChecked(true);
                    }
                }
            }["AuthWorkspace.useEffect.loadSession"];
            void loadSession();
        }
    }["AuthWorkspace.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AuthWorkspace.useEffect": ()=>{
            if (!otpSent || resendCountdown <= 0) {
                return;
            }
            const timer = window.setTimeout({
                "AuthWorkspace.useEffect.timer": ()=>{
                    setResendCountdown({
                        "AuthWorkspace.useEffect.timer": (current)=>Math.max(0, current - 1)
                    }["AuthWorkspace.useEffect.timer"]);
                }
            }["AuthWorkspace.useEffect.timer"], 1000);
            return ({
                "AuthWorkspace.useEffect": ()=>window.clearTimeout(timer)
            })["AuthWorkspace.useEffect"];
        }
    }["AuthWorkspace.useEffect"], [
        otpSent,
        resendCountdown
    ]);
    const handleRegister = async (event)=>{
        event.preventDefault();
        setSubmitting("register");
        setRegisterMessage("");
        try {
            const payload = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$auth$2f$services$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["registerUser"])(registerForm);
            if (!payload.data) {
                var _payload_error;
                throw new Error((_payload_error = payload.error) !== null && _payload_error !== void 0 ? _payload_error : "Unable to create platform account");
            }
            setSession(payload.data);
            setRegisterForm(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$auth$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["emptyRegisterForm"]);
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
            var _payload_data;
            const payload = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$auth$2f$services$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sendOtp"])(otpForm.mobileNumber);
            if (payload.error) {
                var _payload_error;
                throw new Error((_payload_error = payload.error) !== null && _payload_error !== void 0 ? _payload_error : "Unable to send OTP");
            }
            setOtpSent(true);
            setResendCountdown(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$auth$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RESEND_COOLDOWN_SECONDS"]);
            setOtpForm((current)=>({
                    ...current,
                    otp: ""
                }));
            var _payload_data_message;
            setLoginMessage((_payload_data_message = (_payload_data = payload.data) === null || _payload_data === void 0 ? void 0 : _payload_data.message) !== null && _payload_data_message !== void 0 ? _payload_data_message : "OTP sent. Enter it to complete login.");
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
            var _result_payload_data;
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$auth$2f$services$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resendOtp"])(otpForm.mobileNumber);
            if (!result.ok) {
                if (result.payload.retryAfterSeconds) {
                    setResendCountdown(result.payload.retryAfterSeconds);
                }
                var _result_payload_error;
                throw new Error((_result_payload_error = result.payload.error) !== null && _result_payload_error !== void 0 ? _result_payload_error : "Unable to resend OTP");
            }
            setResendCountdown(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$auth$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RESEND_COOLDOWN_SECONDS"]);
            var _result_payload_data_message;
            setLoginMessage((_result_payload_data_message = (_result_payload_data = result.payload.data) === null || _result_payload_data === void 0 ? void 0 : _result_payload_data.message) !== null && _result_payload_data_message !== void 0 ? _result_payload_data_message : "OTP resent successfully.");
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
            var _payload_data_memberships_;
            const payload = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$auth$2f$services$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["verifyOtp"])(otpForm);
            if (!payload.data) {
                var _payload_error;
                throw new Error((_payload_error = payload.error) !== null && _payload_error !== void 0 ? _payload_error : "Unable to verify OTP");
            }
            setSession(payload.data);
            var _payload_data_memberships__familyId;
            const firstWorkspaceId = (_payload_data_memberships__familyId = (_payload_data_memberships_ = payload.data.memberships[0]) === null || _payload_data_memberships_ === void 0 ? void 0 : _payload_data_memberships_.familyId) !== null && _payload_data_memberships__familyId !== void 0 ? _payload_data_memberships__familyId : "";
            if (firstWorkspaceId) {
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$auth$2f$services$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setActiveWorkspace"])(firstWorkspaceId);
                setActiveWorkspaceId(firstWorkspaceId);
            }
            setOtpForm(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$auth$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["emptyOtpForm"]);
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
            var _payload_data;
            const payload = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$auth$2f$services$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createFamilySpace"])(workspaceForm);
            if (!((_payload_data = payload.data) === null || _payload_data === void 0 ? void 0 : _payload_data.id)) {
                var _payload_error;
                throw new Error((_payload_error = payload.error) !== null && _payload_error !== void 0 ? _payload_error : "Unable to create Family Space");
            }
            setWorkspaceForm(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$auth$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["emptyWorkspaceForm"]);
            setWorkspaceMessage(payload.data.initialAdmin ? "Family Space created. ".concat(payload.data.initialAdmin.fullName, " can now log in with OTP using ").concat(payload.data.initialAdmin.mobileNumber, ".") : "Family Space created successfully.");
        } catch (error) {
            setWorkspaceMessage(error instanceof Error ? error.message : "Unable to create Family Space");
        } finally{
            setSubmitting(null);
        }
    };
    const handleLogout = async ()=>{
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$auth$2f$services$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["logout"])();
        setSession(null);
        setActiveWorkspaceId("");
        setRegisterMessage("");
        setLoginMessage("Logged out.");
    };
    const handleWorkspaceSwitch = async (familyId)=>{
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$auth$2f$services$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setActiveWorkspace"])(familyId);
        setActiveWorkspaceId(familyId);
    };
    if (!sessionChecked) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$auth$2f$workspace$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].authPage,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$auth$2f$workspace$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].authShell,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$auth$2f$workspace$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].authBrandPanel,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$BrandLogo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BrandLogo"], {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$auth$2f$workspace$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].logoWrap,
                            imageClassName: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$auth$2f$workspace$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].logoImage,
                            fallbackClassName: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$auth$2f$workspace$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].logoFallback
                        }, void 0, false, {
                            fileName: "[project]/app/platform/auth/workspace.tsx",
                            lineNumber: 229,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$auth$2f$workspace$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].brandQuote,
                            children: "Checking secure session..."
                        }, void 0, false, {
                            fileName: "[project]/app/platform/auth/workspace.tsx",
                            lineNumber: 230,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/platform/auth/workspace.tsx",
                    lineNumber: 228,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/platform/auth/workspace.tsx",
                lineNumber: 227,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/platform/auth/workspace.tsx",
            lineNumber: 226,
            columnNumber: 7
        }, this);
    }
    if (!session) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$auth$2f$workspace$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].authPage,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$auth$2f$workspace$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].authShell,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$auth$2f$workspace$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].authBrandPanel,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$BrandLogo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BrandLogo"], {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$auth$2f$workspace$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].logoWrap,
                                imageClassName: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$auth$2f$workspace$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].logoImage,
                                fallbackClassName: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$auth$2f$workspace$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].logoFallback
                            }, void 0, false, {
                                fileName: "[project]/app/platform/auth/workspace.tsx",
                                lineNumber: 242,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$auth$2f$workspace$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].brandQuote,
                                children: "Connect every branch of your family. Preserve your heritage. Share your story."
                            }, void 0, false, {
                                fileName: "[project]/app/platform/auth/workspace.tsx",
                                lineNumber: 247,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$auth$2f$workspace$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].brandList,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: "Build an interactive family tree across generations"
                                    }, void 0, false, {
                                        fileName: "[project]/app/platform/auth/workspace.tsx",
                                        lineNumber: 251,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: "Invite relatives and grow your tree together"
                                    }, void 0, false, {
                                        fileName: "[project]/app/platform/auth/workspace.tsx",
                                        lineNumber: 252,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: "Preserve photos, stories and timelines"
                                    }, void 0, false, {
                                        fileName: "[project]/app/platform/auth/workspace.tsx",
                                        lineNumber: 253,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: "Celebrate birthdays and anniversaries"
                                    }, void 0, false, {
                                        fileName: "[project]/app/platform/auth/workspace.tsx",
                                        lineNumber: 254,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: "Private and secure - you control who sees what"
                                    }, void 0, false, {
                                        fileName: "[project]/app/platform/auth/workspace.tsx",
                                        lineNumber: 255,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/platform/auth/workspace.tsx",
                                lineNumber: 250,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/platform/auth/workspace.tsx",
                        lineNumber: 241,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$auth$2f$workspace$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].authCard,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$auth$2f$workspace$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].authModeRow,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        className: "".concat(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$auth$2f$workspace$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].authModeButton, " ").concat(authMode === "login" ? __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$auth$2f$workspace$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].authModeButtonActive : ""),
                                        onClick: ()=>setAuthMode("login"),
                                        children: "Welcome Back"
                                    }, void 0, false, {
                                        fileName: "[project]/app/platform/auth/workspace.tsx",
                                        lineNumber: 261,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        className: "".concat(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$auth$2f$workspace$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].authModeButton, " ").concat(authMode === "register" ? __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$auth$2f$workspace$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].authModeButtonActive : ""),
                                        onClick: ()=>setAuthMode("register"),
                                        children: "Create Account"
                                    }, void 0, false, {
                                        fileName: "[project]/app/platform/auth/workspace.tsx",
                                        lineNumber: 268,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/platform/auth/workspace.tsx",
                                lineNumber: 260,
                                columnNumber: 13
                            }, this),
                            authMode === "login" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$auth$2f$workspace$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].authHeader,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                children: "Welcome Back"
                                            }, void 0, false, {
                                                fileName: "[project]/app/platform/auth/workspace.tsx",
                                                lineNumber: 280,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: "Sign in to continue your family journey."
                                            }, void 0, false, {
                                                fileName: "[project]/app/platform/auth/workspace.tsx",
                                                lineNumber: 281,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/platform/auth/workspace.tsx",
                                        lineNumber: 279,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$auth$2f$workspace$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].authSocialStack,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$auth$2f$workspace$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].authSocialButton,
                                                children: "Continue with Google"
                                            }, void 0, false, {
                                                fileName: "[project]/app/platform/auth/workspace.tsx",
                                                lineNumber: 284,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$auth$2f$workspace$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].authSocialButton,
                                                children: "Continue with Facebook"
                                            }, void 0, false, {
                                                fileName: "[project]/app/platform/auth/workspace.tsx",
                                                lineNumber: 287,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/platform/auth/workspace.tsx",
                                        lineNumber: 283,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$auth$2f$workspace$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].authDivider,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "OR"
                                        }, void 0, false, {
                                            fileName: "[project]/app/platform/auth/workspace.tsx",
                                            lineNumber: 292,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/platform/auth/workspace.tsx",
                                        lineNumber: 291,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$auth$2f$workspace$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].authForm,
                                        onSubmit: otpSent ? handleVerifyOtp : handleSendOtp,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$auth$2f$workspace$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].authField,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "Mobile number"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/platform/auth/workspace.tsx",
                                                        lineNumber: 296,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
                                                        lineNumber: 297,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/platform/auth/workspace.tsx",
                                                lineNumber: 295,
                                                columnNumber: 19
                                            }, this),
                                            otpSent ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$auth$2f$workspace$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].authField,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "OTP"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/platform/auth/workspace.tsx",
                                                        lineNumber: 312,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        value: otpForm.otp,
                                                        onChange: (event)=>setOtpForm((current)=>({
                                                                    ...current,
                                                                    otp: event.target.value
                                                                })),
                                                        placeholder: "Enter the OTP",
                                                        required: true
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/platform/auth/workspace.tsx",
                                                        lineNumber: 313,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/platform/auth/workspace.tsx",
                                                lineNumber: 311,
                                                columnNumber: 21
                                            }, this) : null,
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$auth$2f$workspace$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].authPrimaryButton,
                                                type: "submit",
                                                disabled: submitting === "sendOtp" || submitting === "verifyOtp",
                                                children: otpSent ? submitting === "verifyOtp" ? "Verifying..." : "Verify OTP" : submitting === "sendOtp" ? "Sending..." : "Send OTP"
                                            }, void 0, false, {
                                                fileName: "[project]/app/platform/auth/workspace.tsx",
                                                lineNumber: 321,
                                                columnNumber: 19
                                            }, this),
                                            otpSent ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$auth$2f$workspace$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].authUtilityRow,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$auth$2f$workspace$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].authTextButton,
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
                                                        lineNumber: 336,
                                                        columnNumber: 23
                                                    }, this),
                                                    resendCountdown > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$auth$2f$workspace$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].authHint,
                                                        children: [
                                                            "Resend SMS in ",
                                                            formatCountdown(resendCountdown)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/platform/auth/workspace.tsx",
                                                        lineNumber: 349,
                                                        columnNumber: 25
                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$auth$2f$workspace$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].authTextButton,
                                                        onClick: ()=>void handleResendOtp(),
                                                        disabled: submitting === "resendOtp",
                                                        children: submitting === "resendOtp" ? "Resending..." : "Resend SMS"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/platform/auth/workspace.tsx",
                                                        lineNumber: 351,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/platform/auth/workspace.tsx",
                                                lineNumber: 335,
                                                columnNumber: 21
                                            }, this) : null,
                                            loginMessage ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$auth$2f$workspace$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].authMessage,
                                                children: loginMessage
                                            }, void 0, false, {
                                                fileName: "[project]/app/platform/auth/workspace.tsx",
                                                lineNumber: 362,
                                                columnNumber: 35
                                            }, this) : null
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/platform/auth/workspace.tsx",
                                        lineNumber: 294,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$auth$2f$workspace$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].authHeader,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                children: "Create Account"
                                            }, void 0, false, {
                                                fileName: "[project]/app/platform/auth/workspace.tsx",
                                                lineNumber: 368,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: "Join thousands of families preserving their legacy."
                                            }, void 0, false, {
                                                fileName: "[project]/app/platform/auth/workspace.tsx",
                                                lineNumber: 369,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/platform/auth/workspace.tsx",
                                        lineNumber: 367,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$auth$2f$workspace$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].authSocialStack,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$auth$2f$workspace$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].authSocialButton,
                                            children: "Sign up with Google"
                                        }, void 0, false, {
                                            fileName: "[project]/app/platform/auth/workspace.tsx",
                                            lineNumber: 372,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/platform/auth/workspace.tsx",
                                        lineNumber: 371,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$auth$2f$workspace$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].authDivider,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "OR"
                                        }, void 0, false, {
                                            fileName: "[project]/app/platform/auth/workspace.tsx",
                                            lineNumber: 377,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/platform/auth/workspace.tsx",
                                        lineNumber: 376,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$auth$2f$workspace$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].authForm,
                                        onSubmit: handleRegister,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$auth$2f$workspace$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].authField,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "Full name"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/platform/auth/workspace.tsx",
                                                        lineNumber: 381,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        value: registerForm.fullName,
                                                        onChange: (event)=>setRegisterForm((current)=>({
                                                                    ...current,
                                                                    fullName: event.target.value
                                                                })),
                                                        placeholder: "e.g. Rahul Prakash",
                                                        required: true
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/platform/auth/workspace.tsx",
                                                        lineNumber: 382,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/platform/auth/workspace.tsx",
                                                lineNumber: 380,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$auth$2f$workspace$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].authField,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "Mobile number"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/platform/auth/workspace.tsx",
                                                        lineNumber: 390,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        value: registerForm.mobileNumber,
                                                        onChange: (event)=>setRegisterForm((current)=>({
                                                                    ...current,
                                                                    mobileNumber: event.target.value
                                                                })),
                                                        placeholder: "10 digits",
                                                        required: true
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/platform/auth/workspace.tsx",
                                                        lineNumber: 391,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/platform/auth/workspace.tsx",
                                                lineNumber: 389,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$auth$2f$workspace$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].authGoldButton,
                                                type: "submit",
                                                disabled: submitting === "register",
                                                children: submitting === "register" ? "Creating..." : "Create My Account"
                                            }, void 0, false, {
                                                fileName: "[project]/app/platform/auth/workspace.tsx",
                                                lineNumber: 398,
                                                columnNumber: 19
                                            }, this),
                                            registerMessage ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$auth$2f$workspace$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].authMessage,
                                                children: registerMessage
                                            }, void 0, false, {
                                                fileName: "[project]/app/platform/auth/workspace.tsx",
                                                lineNumber: 401,
                                                columnNumber: 38
                                            }, this) : null
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/platform/auth/workspace.tsx",
                                        lineNumber: 379,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/platform/auth/workspace.tsx",
                        lineNumber: 259,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/platform/auth/workspace.tsx",
                lineNumber: 240,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/platform/auth/workspace.tsx",
            lineNumber: 239,
            columnNumber: 7
        }, this);
    }
    var _session_memberships_find, _ref;
    const activeMembership = (_ref = (_session_memberships_find = session.memberships.find((membership)=>membership.familyId === activeWorkspaceId)) !== null && _session_memberships_find !== void 0 ? _session_memberships_find : session.memberships[0]) !== null && _ref !== void 0 ? _ref : null;
    var _activeMembership_familyName, _activeMembership_familyName1, _activeMembership_role;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$PostLoginShell$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PostLoginShell"], {
        title: "Family Space Administration",
        subtitle: "Manage your platform session, switch Family Spaces, and open the working areas where members and access are maintained.",
        activeNav: "platform",
        currentFamily: (_activeMembership_familyName = activeMembership === null || activeMembership === void 0 ? void 0 : activeMembership.familyName) !== null && _activeMembership_familyName !== void 0 ? _activeMembership_familyName : null,
        currentUser: session.user.fullName,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$auth$2f$workspace$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].dashboardGrid,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$auth$2f$workspace$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].dashboardTopRow,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                            className: "".concat(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$auth$2f$workspace$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].panel, " ").concat(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$auth$2f$workspace$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].activeFamilyCard),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    children: (_activeMembership_familyName1 = activeMembership === null || activeMembership === void 0 ? void 0 : activeMembership.familyName) !== null && _activeMembership_familyName1 !== void 0 ? _activeMembership_familyName1 : "No Family Space selected"
                                }, void 0, false, {
                                    fileName: "[project]/app/platform/auth/workspace.tsx",
                                    lineNumber: 424,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$auth$2f$workspace$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].panelText,
                                    children: [
                                        "Role: ",
                                        (_activeMembership_role = activeMembership === null || activeMembership === void 0 ? void 0 : activeMembership.role) !== null && _activeMembership_role !== void 0 ? _activeMembership_role : "No active role"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/platform/auth/workspace.tsx",
                                    lineNumber: 425,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$auth$2f$workspace$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].actionRow,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/family-space",
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$auth$2f$workspace$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].primaryButton,
                                            children: "Enter Family Space"
                                        }, void 0, false, {
                                            fileName: "[project]/app/platform/auth/workspace.tsx",
                                            lineNumber: 427,
                                            columnNumber: 15
                                        }, this),
                                        activeMembership ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$auth$2f$workspace$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].secondaryButton,
                                            onClick: ()=>void handleWorkspaceSwitch(activeMembership.familyId),
                                            children: "Switch"
                                        }, void 0, false, {
                                            fileName: "[project]/app/platform/auth/workspace.tsx",
                                            lineNumber: 431,
                                            columnNumber: 17
                                        }, this) : null
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/platform/auth/workspace.tsx",
                                    lineNumber: 426,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/platform/auth/workspace.tsx",
                            lineNumber: 423,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                            className: "".concat(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$auth$2f$workspace$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].panel, " ").concat(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$auth$2f$workspace$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].profileCard),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$auth$2f$workspace$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sessionLabel,
                                    children: "Current session"
                                }, void 0, false, {
                                    fileName: "[project]/app/platform/auth/workspace.tsx",
                                    lineNumber: 439,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: session.user.fullName
                                }, void 0, false, {
                                    fileName: "[project]/app/platform/auth/workspace.tsx",
                                    lineNumber: 440,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$auth$2f$workspace$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].panelText,
                                    children: session.user.mobileNumber
                                }, void 0, false, {
                                    fileName: "[project]/app/platform/auth/workspace.tsx",
                                    lineNumber: 441,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$auth$2f$workspace$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].profileCardActions,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/family-space",
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$auth$2f$workspace$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].secondaryButton,
                                            children: "Open Family Space"
                                        }, void 0, false, {
                                            fileName: "[project]/app/platform/auth/workspace.tsx",
                                            lineNumber: 443,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$auth$2f$workspace$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].secondaryButton,
                                            onClick: handleLogout,
                                            children: "Logout"
                                        }, void 0, false, {
                                            fileName: "[project]/app/platform/auth/workspace.tsx",
                                            lineNumber: 446,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/platform/auth/workspace.tsx",
                                    lineNumber: 442,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/platform/auth/workspace.tsx",
                            lineNumber: 438,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/platform/auth/workspace.tsx",
                    lineNumber: 422,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$auth$2f$workspace$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].dashboardMiddleRow,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$auth$2f$workspace$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].panel,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    children: "Quick Actions"
                                }, void 0, false, {
                                    fileName: "[project]/app/platform/auth/workspace.tsx",
                                    lineNumber: 455,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$auth$2f$workspace$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].navGrid,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/family-space",
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$auth$2f$workspace$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].navCard,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: "Family Space"
                                            }, void 0, false, {
                                                fileName: "[project]/app/platform/auth/workspace.tsx",
                                                lineNumber: 458,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/platform/auth/workspace.tsx",
                                            lineNumber: 457,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/platform/admin/data-capture",
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$auth$2f$workspace$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].navCard,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: "Data Capture"
                                            }, void 0, false, {
                                                fileName: "[project]/app/platform/auth/workspace.tsx",
                                                lineNumber: 461,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/platform/auth/workspace.tsx",
                                            lineNumber: 460,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/platform/admin/data-capture",
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$auth$2f$workspace$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].navCard,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: "Add Member"
                                            }, void 0, false, {
                                                fileName: "[project]/app/platform/auth/workspace.tsx",
                                                lineNumber: 464,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/platform/auth/workspace.tsx",
                                            lineNumber: 463,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/platform/admin/security",
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$auth$2f$workspace$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].navCard,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: "Security"
                                            }, void 0, false, {
                                                fileName: "[project]/app/platform/auth/workspace.tsx",
                                                lineNumber: 467,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/platform/auth/workspace.tsx",
                                            lineNumber: 466,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/platform/auth/workspace.tsx",
                                    lineNumber: 456,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/platform/auth/workspace.tsx",
                            lineNumber: 454,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$auth$2f$workspace$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].panel,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    children: "Your Family Spaces"
                                }, void 0, false, {
                                    fileName: "[project]/app/platform/auth/workspace.tsx",
                                    lineNumber: 473,
                                    columnNumber: 13
                                }, this),
                                session.memberships.length ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$auth$2f$workspace$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].membershipList,
                                    children: session.memberships.map((membership)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$auth$2f$workspace$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].membershipItem,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: membership.familyName
                                                }, void 0, false, {
                                                    fileName: "[project]/app/platform/auth/workspace.tsx",
                                                    lineNumber: 478,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: membership.role
                                                }, void 0, false, {
                                                    fileName: "[project]/app/platform/auth/workspace.tsx",
                                                    lineNumber: 479,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$auth$2f$workspace$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].membershipActions,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$auth$2f$workspace$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].switchButton,
                                                        onClick: ()=>void handleWorkspaceSwitch(membership.familyId),
                                                        children: activeWorkspaceId === membership.familyId ? "Active" : "Enter"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/platform/auth/workspace.tsx",
                                                        lineNumber: 481,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/platform/auth/workspace.tsx",
                                                    lineNumber: 480,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, "".concat(membership.familyId, "-").concat(membership.role), true, {
                                            fileName: "[project]/app/platform/auth/workspace.tsx",
                                            lineNumber: 477,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/app/platform/auth/workspace.tsx",
                                    lineNumber: 475,
                                    columnNumber: 15
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$auth$2f$workspace$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].empty,
                                    children: "No Family Space memberships yet."
                                }, void 0, false, {
                                    fileName: "[project]/app/platform/auth/workspace.tsx",
                                    lineNumber: 493,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/platform/auth/workspace.tsx",
                            lineNumber: 472,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/platform/auth/workspace.tsx",
                    lineNumber: 453,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                    className: "".concat(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$auth$2f$workspace$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].panel, " ").concat(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$auth$2f$workspace$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].createCard),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            children: "Create Family Space"
                        }, void 0, false, {
                            fileName: "[project]/app/platform/auth/workspace.tsx",
                            lineNumber: 499,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$auth$2f$workspace$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].form,
                            onSubmit: handleCreateWorkspace,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$auth$2f$workspace$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].field,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "Family Space name"
                                        }, void 0, false, {
                                            fileName: "[project]/app/platform/auth/workspace.tsx",
                                            lineNumber: 502,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
                                            lineNumber: 503,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/platform/auth/workspace.tsx",
                                    lineNumber: 501,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$auth$2f$workspace$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].field,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "Initial Family admin name"
                                        }, void 0, false, {
                                            fileName: "[project]/app/platform/auth/workspace.tsx",
                                            lineNumber: 512,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
                                            lineNumber: 513,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/platform/auth/workspace.tsx",
                                    lineNumber: 511,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$auth$2f$workspace$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].field,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "Initial Family admin mobile number"
                                        }, void 0, false, {
                                            fileName: "[project]/app/platform/auth/workspace.tsx",
                                            lineNumber: 522,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
                                            lineNumber: 523,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/platform/auth/workspace.tsx",
                                    lineNumber: 521,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$auth$2f$workspace$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].field,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "Native place"
                                        }, void 0, false, {
                                            fileName: "[project]/app/platform/auth/workspace.tsx",
                                            lineNumber: 534,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            value: workspaceForm.nativePlace,
                                            onChange: (event)=>setWorkspaceForm((current)=>({
                                                        ...current,
                                                        nativePlace: event.target.value
                                                    })),
                                            placeholder: "Optional",
                                            disabled: !session
                                        }, void 0, false, {
                                            fileName: "[project]/app/platform/auth/workspace.tsx",
                                            lineNumber: 535,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/platform/auth/workspace.tsx",
                                    lineNumber: 533,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$auth$2f$workspace$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].field,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "Description"
                                        }, void 0, false, {
                                            fileName: "[project]/app/platform/auth/workspace.tsx",
                                            lineNumber: 543,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            value: workspaceForm.description,
                                            onChange: (event)=>setWorkspaceForm((current)=>({
                                                        ...current,
                                                        description: event.target.value
                                                    })),
                                            placeholder: "Optional purpose or branch note",
                                            disabled: !session
                                        }, void 0, false, {
                                            fileName: "[project]/app/platform/auth/workspace.tsx",
                                            lineNumber: 544,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/platform/auth/workspace.tsx",
                                    lineNumber: 542,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$auth$2f$workspace$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].primaryButton,
                                    type: "submit",
                                    disabled: submitting === "workspace" || !session,
                                    children: submitting === "workspace" ? "Creating..." : "Create Family Space"
                                }, void 0, false, {
                                    fileName: "[project]/app/platform/auth/workspace.tsx",
                                    lineNumber: 551,
                                    columnNumber: 13
                                }, this),
                                workspaceMessage ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$platform$2f$auth$2f$workspace$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].message,
                                    children: workspaceMessage
                                }, void 0, false, {
                                    fileName: "[project]/app/platform/auth/workspace.tsx",
                                    lineNumber: 554,
                                    columnNumber: 33
                                }, this) : null
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/platform/auth/workspace.tsx",
                            lineNumber: 500,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/platform/auth/workspace.tsx",
                    lineNumber: 498,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/platform/auth/workspace.tsx",
            lineNumber: 421,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/platform/auth/workspace.tsx",
        lineNumber: 414,
        columnNumber: 5
    }, this);
}
_s(AuthWorkspace, "Ze4nyQuYWW7MbYtUzWPZINTXGh0=");
_c = AuthWorkspace;
var _c;
__turbopack_context__.k.register(_c, "AuthWorkspace");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_73ba7c15._.js.map