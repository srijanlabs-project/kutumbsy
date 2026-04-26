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
"[project]/components/LoadingState.module.css [app-ssr] (css module)", ((__turbopack_context__) => {

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
"[project]/components/LoadingState.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LoadingState",
    ()=>LoadingState
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$BrandLogo$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/BrandLogo.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$LoadingState$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/components/LoadingState.module.css [app-ssr] (css module)");
"use client";
;
;
;
function LoadingState({ title = "Loading...", message, compact = false, className }) {
    const classes = [
        __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$LoadingState$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].root,
        compact ? __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$LoadingState$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].compact : "",
        className ?? ""
    ].filter(Boolean).join(" ");
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: classes,
        role: "status",
        "aria-live": "polite",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$BrandLogo$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BrandLogo"], {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$LoadingState$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].logoWrap,
                imageClassName: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$LoadingState$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].logoImage,
                fallbackClassName: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$LoadingState$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].logoFallback,
                alt: "Kutumbsy"
            }, void 0, false, {
                fileName: "[project]/components/LoadingState.tsx",
                lineNumber: 23,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$LoadingState$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].dots,
                "aria-hidden": "true",
                children: [
                    0,
                    1,
                    2,
                    3,
                    4,
                    5
                ].map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$LoadingState$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].dot
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$LoadingState$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].title,
                children: title
            }, void 0, false, {
                fileName: "[project]/components/LoadingState.tsx",
                lineNumber: 34,
                columnNumber: 7
            }, this),
            message ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$LoadingState$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].message,
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
}),
"[project]/app/tenant/workspace/workspace.module.css [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "actionRow": "workspace-module__4478FG__actionRow",
  "addMemberButton": "workspace-module__4478FG__addMemberButton",
  "appFooter": "workspace-module__4478FG__appFooter",
  "appFrame": "workspace-module__4478FG__appFrame",
  "avatarBubble": "workspace-module__4478FG__avatarBubble",
  "brandMark": "workspace-module__4478FG__brandMark",
  "cardButton": "workspace-module__4478FG__cardButton",
  "cardTitleRow": "workspace-module__4478FG__cardTitleRow",
  "composeActionButton": "workspace-module__4478FG__composeActionButton",
  "composeActions": "workspace-module__4478FG__composeActions",
  "composeAvatar": "workspace-module__4478FG__composeAvatar",
  "composeCard": "workspace-module__4478FG__composeCard",
  "composePrompt": "workspace-module__4478FG__composePrompt",
  "contentColumn": "workspace-module__4478FG__contentColumn",
  "directoryGrid": "workspace-module__4478FG__directoryGrid",
  "empty": "workspace-module__4478FG__empty",
  "emptyRailText": "workspace-module__4478FG__emptyRailText",
  "emptyState": "workspace-module__4478FG__emptyState",
  "emptyStateLoading": "workspace-module__4478FG__emptyStateLoading",
  "eventDays": "workspace-module__4478FG__eventDays",
  "eventItem": "workspace-module__4478FG__eventItem",
  "eventList": "workspace-module__4478FG__eventList",
  "eventRail": "workspace-module__4478FG__eventRail",
  "eventRailItem": "workspace-module__4478FG__eventRailItem",
  "eventRailList": "workspace-module__4478FG__eventRailList",
  "eventWhen": "workspace-module__4478FG__eventWhen",
  "eyebrow": "workspace-module__4478FG__eyebrow",
  "familyBadge": "workspace-module__4478FG__familyBadge",
  "familyList": "workspace-module__4478FG__familyList",
  "familySwitcher": "workspace-module__4478FG__familySwitcher",
  "familySwitcherActive": "workspace-module__4478FG__familySwitcherActive",
  "feedStack": "workspace-module__4478FG__feedStack",
  "field": "workspace-module__4478FG__field",
  "fieldBlock": "workspace-module__4478FG__fieldBlock",
  "focusNode": "workspace-module__4478FG__focusNode",
  "focusNodeAvatarFallback": "workspace-module__4478FG__focusNodeAvatarFallback",
  "focusNodeAvatarImage": "workspace-module__4478FG__focusNodeAvatarImage",
  "focusNodeAvatarWrap": "workspace-module__4478FG__focusNodeAvatarWrap",
  "focusNodeButton": "workspace-module__4478FG__focusNodeButton",
  "focusNodeIdentity": "workspace-module__4478FG__focusNodeIdentity",
  "focusNodeSecondary": "workspace-module__4478FG__focusNodeSecondary",
  "focusNodeText": "workspace-module__4478FG__focusNodeText",
  "focusPairJoin": "workspace-module__4478FG__focusPairJoin",
  "focusPairRow": "workspace-module__4478FG__focusPairRow",
  "formGrid": "workspace-module__4478FG__formGrid",
  "formStack": "workspace-module__4478FG__formStack",
  "ghostButton": "workspace-module__4478FG__ghostButton",
  "grid": "workspace-module__4478FG__grid",
  "hero": "workspace-module__4478FG__hero",
  "heroActions": "workspace-module__4478FG__heroActions",
  "heroCard": "workspace-module__4478FG__heroCard",
  "heroContent": "workspace-module__4478FG__heroContent",
  "heroGhostButton": "workspace-module__4478FG__heroGhostButton",
  "heroHint": "workspace-module__4478FG__heroHint",
  "heroLabel": "workspace-module__4478FG__heroLabel",
  "heroMeta": "workspace-module__4478FG__heroMeta",
  "heroOverline": "workspace-module__4478FG__heroOverline",
  "heroPrimaryButton": "workspace-module__4478FG__heroPrimaryButton",
  "heroStats": "workspace-module__4478FG__heroStats",
  "heroSubtitle": "workspace-module__4478FG__heroSubtitle",
  "heroTitle": "workspace-module__4478FG__heroTitle",
  "iconBubble": "workspace-module__4478FG__iconBubble",
  "inlineActionLink": "workspace-module__4478FG__inlineActionLink",
  "inlineButton": "workspace-module__4478FG__inlineButton",
  "inlineLink": "workspace-module__4478FG__inlineLink",
  "inlineMessage": "workspace-module__4478FG__inlineMessage",
  "inlineStatus": "workspace-module__4478FG__inlineStatus",
  "inlineWarning": "workspace-module__4478FG__inlineWarning",
  "kutumbsyPage": "workspace-module__4478FG__kutumbsyPage",
  "linkButton": "workspace-module__4478FG__linkButton",
  "memberAvatar": "workspace-module__4478FG__memberAvatar",
  "memberCard": "workspace-module__4478FG__memberCard",
  "memberCardActive": "workspace-module__4478FG__memberCardActive",
  "memberDirectoryActions": "workspace-module__4478FG__memberDirectoryActions",
  "memberDirectoryAddButton": "workspace-module__4478FG__memberDirectoryAddButton",
  "memberDirectoryAddCard": "workspace-module__4478FG__memberDirectoryAddCard",
  "memberDirectoryAddCardIcon": "workspace-module__4478FG__memberDirectoryAddCardIcon",
  "memberDirectoryCard": "workspace-module__4478FG__memberDirectoryCard",
  "memberDirectoryGrid": "workspace-module__4478FG__memberDirectoryGrid",
  "memberDirectoryHeader": "workspace-module__4478FG__memberDirectoryHeader",
  "memberDirectoryItem": "workspace-module__4478FG__memberDirectoryItem",
  "memberDirectoryItemActive": "workspace-module__4478FG__memberDirectoryItemActive",
  "memberDirectoryMeta": "workspace-module__4478FG__memberDirectoryMeta",
  "memberDirectoryOpenLink": "workspace-module__4478FG__memberDirectoryOpenLink",
  "memberDirectoryTagNeutral": "workspace-module__4478FG__memberDirectoryTagNeutral",
  "memberDirectoryTagPrimary": "workspace-module__4478FG__memberDirectoryTagPrimary",
  "memberDirectoryTags": "workspace-module__4478FG__memberDirectoryTags",
  "memberDirectoryTitle": "workspace-module__4478FG__memberDirectoryTitle",
  "memberDirectoryTitleIcon": "workspace-module__4478FG__memberDirectoryTitleIcon",
  "memberGeneration": "workspace-module__4478FG__memberGeneration",
  "memberGenerationTone0": "workspace-module__4478FG__memberGenerationTone0",
  "memberGenerationTone1": "workspace-module__4478FG__memberGenerationTone1",
  "memberGenerationTone2": "workspace-module__4478FG__memberGenerationTone2",
  "memberGrid": "workspace-module__4478FG__memberGrid",
  "membershipActions": "workspace-module__4478FG__membershipActions",
  "membershipBoxNoBorder": "workspace-module__4478FG__membershipBoxNoBorder",
  "membershipItem": "workspace-module__4478FG__membershipItem",
  "membershipList": "workspace-module__4478FG__membershipList",
  "memoryCard": "workspace-module__4478FG__memoryCard",
  "memoryEventGrid": "workspace-module__4478FG__memoryEventGrid",
  "memoryList": "workspace-module__4478FG__memoryList",
  "memoryMeta": "workspace-module__4478FG__memoryMeta",
  "message": "workspace-module__4478FG__message",
  "navCard": "workspace-module__4478FG__navCard",
  "navGrid": "workspace-module__4478FG__navGrid",
  "notice": "workspace-module__4478FG__notice",
  "noticeIcon": "workspace-module__4478FG__noticeIcon",
  "noticeRetry": "workspace-module__4478FG__noticeRetry",
  "noticeWarn": "workspace-module__4478FG__noticeWarn",
  "page": "workspace-module__4478FG__page",
  "panel": "workspace-module__4478FG__panel",
  "panelHeader": "workspace-module__4478FG__panelHeader",
  "personCard": "workspace-module__4478FG__personCard",
  "personCardActive": "workspace-module__4478FG__personCardActive",
  "personRelationNames": "workspace-module__4478FG__personRelationNames",
  "personRelationRow": "workspace-module__4478FG__personRelationRow",
  "personRelationRows": "workspace-module__4478FG__personRelationRows",
  "profileActions": "workspace-module__4478FG__profileActions",
  "profileAvatarImage": "workspace-module__4478FG__profileAvatarImage",
  "profileBlock": "workspace-module__4478FG__profileBlock",
  "profileCompactAvatar": "workspace-module__4478FG__profileCompactAvatar",
  "profileCompactChips": "workspace-module__4478FG__profileCompactChips",
  "profileCompactHeader": "workspace-module__4478FG__profileCompactHeader",
  "profileCompactList": "workspace-module__4478FG__profileCompactList",
  "profileGrid": "workspace-module__4478FG__profileGrid",
  "quickAction": "workspace-module__4478FG__quickAction",
  "quickActionIcon": "workspace-module__4478FG__quickActionIcon",
  "quickActionList": "workspace-module__4478FG__quickActionList",
  "quickAddChoice": "workspace-module__4478FG__quickAddChoice",
  "quickAddChoiceActive": "workspace-module__4478FG__quickAddChoiceActive",
  "quickAddChooser": "workspace-module__4478FG__quickAddChooser",
  "quickAddContext": "workspace-module__4478FG__quickAddContext",
  "quickAddExisting": "workspace-module__4478FG__quickAddExisting",
  "quickAddExistingList": "workspace-module__4478FG__quickAddExistingList",
  "quickAddSuccessActions": "workspace-module__4478FG__quickAddSuccessActions",
  "relationshipChip": "workspace-module__4478FG__relationshipChip",
  "relationshipList": "workspace-module__4478FG__relationshipList",
  "relationshipTree": "workspace-module__4478FG__relationshipTree",
  "requestActions": "workspace-module__4478FG__requestActions",
  "requestCard": "workspace-module__4478FG__requestCard",
  "requestControls": "workspace-module__4478FG__requestControls",
  "requestHeader": "workspace-module__4478FG__requestHeader",
  "requestList": "workspace-module__4478FG__requestList",
  "requestMessage": "workspace-module__4478FG__requestMessage",
  "requestMeta": "workspace-module__4478FG__requestMeta",
  "requestStatus": "workspace-module__4478FG__requestStatus",
  "requestStatusApproved": "workspace-module__4478FG__requestStatusApproved",
  "requestStatusPending": "workspace-module__4478FG__requestStatusPending",
  "requestStatusRejected": "workspace-module__4478FG__requestStatusRejected",
  "resendHint": "workspace-module__4478FG__resendHint",
  "resendRow": "workspace-module__4478FG__resendRow",
  "reviewOutcome": "workspace-module__4478FG__reviewOutcome",
  "scard": "workspace-module__4478FG__scard",
  "scardHeader": "workspace-module__4478FG__scardHeader",
  "scardSub": "workspace-module__4478FG__scardSub",
  "scardTitle": "workspace-module__4478FG__scardTitle",
  "scardTitleWrap": "workspace-module__4478FG__scardTitleWrap",
  "secondaryButton": "workspace-module__4478FG__secondaryButton",
  "shell": "workspace-module__4478FG__shell",
  "sideAvatar": "workspace-module__4478FG__sideAvatar",
  "sideCard": "workspace-module__4478FG__sideCard",
  "sideCardTitle": "workspace-module__4478FG__sideCardTitle",
  "sideLabel": "workspace-module__4478FG__sideLabel",
  "sideLabelLink": "workspace-module__4478FG__sideLabelLink",
  "sideLink": "workspace-module__4478FG__sideLink",
  "sideMenu": "workspace-module__4478FG__sideMenu",
  "sideMenuIcon": "workspace-module__4478FG__sideMenuIcon",
  "sideMenuItem": "workspace-module__4478FG__sideMenuItem",
  "sideMenuItemActive": "workspace-module__4478FG__sideMenuItemActive",
  "sideProfile": "workspace-module__4478FG__sideProfile",
  "sidebarLeft": "workspace-module__4478FG__sidebarLeft",
  "sidebarRight": "workspace-module__4478FG__sidebarRight",
  "snapshotGrid": "workspace-module__4478FG__snapshotGrid",
  "stack": "workspace-module__4478FG__stack",
  "storyBlock": "workspace-module__4478FG__storyBlock",
  "subtitle": "workspace-module__4478FG__subtitle",
  "switchButton": "workspace-module__4478FG__switchButton",
  "title": "workspace-module__4478FG__title",
  "topActions": "workspace-module__4478FG__topActions",
  "topBar": "workspace-module__4478FG__topBar",
  "topLinks": "workspace-module__4478FG__topLinks",
  "topNav": "workspace-module__4478FG__topNav",
  "topNavInner": "workspace-module__4478FG__topNavInner",
  "topSearch": "workspace-module__4478FG__topSearch",
  "topTab": "workspace-module__4478FG__topTab",
  "topTabActive": "workspace-module__4478FG__topTabActive",
  "topTabs": "workspace-module__4478FG__topTabs",
  "treeBand": "workspace-module__4478FG__treeBand",
  "treeBandBody": "workspace-module__4478FG__treeBandBody",
  "treeBandBodyConnected": "workspace-module__4478FG__treeBandBodyConnected",
  "treeBandBranch": "workspace-module__4478FG__treeBandBranch",
  "treeBandConnector": "workspace-module__4478FG__treeBandConnector",
  "treeBandHeader": "workspace-module__4478FG__treeBandHeader",
  "treeBandStem": "workspace-module__4478FG__treeBandStem",
  "treeCanvas": "workspace-module__4478FG__treeCanvas",
  "treeCanvasInteractive": "workspace-module__4478FG__treeCanvasInteractive",
  "treeCanvasStructured": "workspace-module__4478FG__treeCanvasStructured",
  "treeChildFamilyCard": "workspace-module__4478FG__treeChildFamilyCard",
  "treeChildFamilyGrid": "workspace-module__4478FG__treeChildFamilyGrid",
  "treeChildPairRow": "workspace-module__4478FG__treeChildPairRow",
  "treeCoupleRow": "workspace-module__4478FG__treeCoupleRow",
  "treeCta": "workspace-module__4478FG__treeCta",
  "treeCtaActions": "workspace-module__4478FG__treeCtaActions",
  "treeCtaLabel": "workspace-module__4478FG__treeCtaLabel",
  "treeCtaSub": "workspace-module__4478FG__treeCtaSub",
  "treeCtaTitle": "workspace-module__4478FG__treeCtaTitle",
  "treeEmpty": "workspace-module__4478FG__treeEmpty",
  "treeFocusConnector": "workspace-module__4478FG__treeFocusConnector",
  "treeFocusStem": "workspace-module__4478FG__treeFocusStem",
  "treeGrandChildGroup": "workspace-module__4478FG__treeGrandChildGroup",
  "treeGrandGrid": "workspace-module__4478FG__treeGrandGrid",
  "treeGrandLabel": "workspace-module__4478FG__treeGrandLabel",
  "treeInLawWrap": "workspace-module__4478FG__treeInLawWrap",
  "treeModalClose": "workspace-module__4478FG__treeModalClose",
  "treeModalOverlay": "workspace-module__4478FG__treeModalOverlay",
  "treeNode": "workspace-module__4478FG__treeNode",
  "treeNodeActive": "workspace-module__4478FG__treeNodeActive",
  "treeNodeAvatarFallback": "workspace-module__4478FG__treeNodeAvatarFallback",
  "treeNodeAvatarImage": "workspace-module__4478FG__treeNodeAvatarImage",
  "treeNodeAvatarWrap": "workspace-module__4478FG__treeNodeAvatarWrap",
  "treeNodeButton": "workspace-module__4478FG__treeNodeButton",
  "treeNodeGeneration": "workspace-module__4478FG__treeNodeGeneration",
  "treeNodeHeader": "workspace-module__4478FG__treeNodeHeader",
  "treeNodeIdentity": "workspace-module__4478FG__treeNodeIdentity",
  "treeNodeLinked": "workspace-module__4478FG__treeNodeLinked",
  "treeNodeRelationText": "workspace-module__4478FG__treeNodeRelationText",
  "treePairJoin": "workspace-module__4478FG__treePairJoin",
  "treePanel": "workspace-module__4478FG__treePanel",
  "treePanelFullscreen": "workspace-module__4478FG__treePanelFullscreen",
  "treePersonAvatarFallback": "workspace-module__4478FG__treePersonAvatarFallback",
  "treePersonAvatarImage": "workspace-module__4478FG__treePersonAvatarImage",
  "treePersonAvatarWrap": "workspace-module__4478FG__treePersonAvatarWrap",
  "treePersonCard": "workspace-module__4478FG__treePersonCard",
  "treePersonCardPrimary": "workspace-module__4478FG__treePersonCardPrimary",
  "treePersonText": "workspace-module__4478FG__treePersonText",
  "treeRow": "workspace-module__4478FG__treeRow",
  "treeRowCards": "workspace-module__4478FG__treeRowCards",
  "treeRowLabel": "workspace-module__4478FG__treeRowLabel",
  "treeRowSection": "workspace-module__4478FG__treeRowSection",
  "treeSelectGroup": "workspace-module__4478FG__treeSelectGroup",
  "treeSiblingRow": "workspace-module__4478FG__treeSiblingRow",
  "treeStructuredConnector": "workspace-module__4478FG__treeStructuredConnector",
  "treeStructuredConnectorSmall": "workspace-module__4478FG__treeStructuredConnectorSmall",
  "treeToolbar": "workspace-module__4478FG__treeToolbar",
  "treeViewport": "workspace-module__4478FG__treeViewport",
  "treeViewportDragging": "workspace-module__4478FG__treeViewportDragging",
  "treeZoomGroup": "workspace-module__4478FG__treeZoomGroup",
});
}),
"[project]/app/tenant/workspace/sections/FamilyWorkspaceShell.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FamilyWorkspaceShell",
    ()=>FamilyWorkspaceShell
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '../../../../components/PostLoginShell'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/app/tenant/workspace/workspace.module.css [app-ssr] (css module)");
"use client";
;
;
;
;
;
function getUpcomingBirthdays(people) {
    const today = new Date();
    return people.filter((person)=>person.dateOfBirth).map((person)=>{
        const date = new Date(person.dateOfBirth);
        const nextBirthday = new Date(today.getFullYear(), date.getMonth(), date.getDate());
        if (nextBirthday < today) {
            nextBirthday.setFullYear(today.getFullYear() + 1);
        }
        const diffDays = Math.ceil((nextBirthday.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
        const label = diffDays <= 0 ? "Today" : diffDays === 1 ? "Tomorrow" : `In ${diffDays} days`;
        return {
            id: person.id,
            fullName: person.fullName,
            daysAway: diffDays,
            label
        };
    }).sort((left, right)=>left.daysAway - right.daysAway).slice(0, 4).map(({ id, fullName, label })=>({
            id,
            fullName,
            label
        }));
}
function getDaysAwayLabel(label) {
    if (label === "Today") {
        return "0";
    }
    if (label === "Tomorrow") {
        return "1";
    }
    const match = label.match(/(\d+)/);
    return match ? match[1] : "-";
}
function FamilyWorkspaceShell({ session, families, activeWorkspaceId, selectedFamily, people, selectedPerson, pageTitle, pageSubtitle, activeView, canManageData, onSwitchFamily, children, rightRail, topMessage }) {
    const [upcomingBirthdays, setUpcomingBirthdays] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const activeNav = activeView === "requests" ? "requests" : "family-space";
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setUpcomingBirthdays(getUpcomingBirthdays(people));
    }, [
        people
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(PostLoginShell, {
        title: pageTitle,
        subtitle: pageSubtitle,
        activeNav: activeNav,
        currentFamily: selectedFamily.name,
        currentUser: session.user.fullName,
        rightRail: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].sideCard,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].cardTitleRow,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].sideCardTitle,
                                    children: "Family Snapshot"
                                }, void 0, false, {
                                    fileName: "[project]/app/tenant/workspace/sections/FamilyWorkspaceShell.tsx",
                                    lineNumber: 104,
                                    columnNumber: 15
                                }, void 0),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].sideLabelLink,
                                    children: "Details"
                                }, void 0, false, {
                                    fileName: "[project]/app/tenant/workspace/sections/FamilyWorkspaceShell.tsx",
                                    lineNumber: 105,
                                    columnNumber: 15
                                }, void 0)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/tenant/workspace/sections/FamilyWorkspaceShell.tsx",
                            lineNumber: 103,
                            columnNumber: 13
                        }, void 0),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].snapshotGrid,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: people.length
                                        }, void 0, false, {
                                            fileName: "[project]/app/tenant/workspace/sections/FamilyWorkspaceShell.tsx",
                                            lineNumber: 109,
                                            columnNumber: 17
                                        }, void 0),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "Members"
                                        }, void 0, false, {
                                            fileName: "[project]/app/tenant/workspace/sections/FamilyWorkspaceShell.tsx",
                                            lineNumber: 110,
                                            columnNumber: 17
                                        }, void 0)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/tenant/workspace/sections/FamilyWorkspaceShell.tsx",
                                    lineNumber: 108,
                                    columnNumber: 15
                                }, void 0),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: selectedFamily.nativePlace ? 1 : 0
                                        }, void 0, false, {
                                            fileName: "[project]/app/tenant/workspace/sections/FamilyWorkspaceShell.tsx",
                                            lineNumber: 113,
                                            columnNumber: 17
                                        }, void 0),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "Origins"
                                        }, void 0, false, {
                                            fileName: "[project]/app/tenant/workspace/sections/FamilyWorkspaceShell.tsx",
                                            lineNumber: 114,
                                            columnNumber: 17
                                        }, void 0)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/tenant/workspace/sections/FamilyWorkspaceShell.tsx",
                                    lineNumber: 112,
                                    columnNumber: 15
                                }, void 0),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: session.memberships.length
                                        }, void 0, false, {
                                            fileName: "[project]/app/tenant/workspace/sections/FamilyWorkspaceShell.tsx",
                                            lineNumber: 117,
                                            columnNumber: 17
                                        }, void 0),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "Roles"
                                        }, void 0, false, {
                                            fileName: "[project]/app/tenant/workspace/sections/FamilyWorkspaceShell.tsx",
                                            lineNumber: 118,
                                            columnNumber: 17
                                        }, void 0)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/tenant/workspace/sections/FamilyWorkspaceShell.tsx",
                                    lineNumber: 116,
                                    columnNumber: 15
                                }, void 0),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: upcomingBirthdays.length
                                        }, void 0, false, {
                                            fileName: "[project]/app/tenant/workspace/sections/FamilyWorkspaceShell.tsx",
                                            lineNumber: 121,
                                            columnNumber: 17
                                        }, void 0),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "Upcoming"
                                        }, void 0, false, {
                                            fileName: "[project]/app/tenant/workspace/sections/FamilyWorkspaceShell.tsx",
                                            lineNumber: 122,
                                            columnNumber: 17
                                        }, void 0)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/tenant/workspace/sections/FamilyWorkspaceShell.tsx",
                                    lineNumber: 120,
                                    columnNumber: 15
                                }, void 0)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/tenant/workspace/sections/FamilyWorkspaceShell.tsx",
                            lineNumber: 107,
                            columnNumber: 13
                        }, void 0)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/tenant/workspace/sections/FamilyWorkspaceShell.tsx",
                    lineNumber: 102,
                    columnNumber: 11
                }, void 0),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].sideCard,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].cardTitleRow,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].sideCardTitle,
                                children: "Your Families"
                            }, void 0, false, {
                                fileName: "[project]/app/tenant/workspace/sections/FamilyWorkspaceShell.tsx",
                                lineNumber: 129,
                                columnNumber: 15
                            }, void 0)
                        }, void 0, false, {
                            fileName: "[project]/app/tenant/workspace/sections/FamilyWorkspaceShell.tsx",
                            lineNumber: 128,
                            columnNumber: 13
                        }, void 0),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].familyList,
                            children: families.map((family)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].familySwitcher} ${family.id === activeWorkspaceId ? __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].familySwitcherActive : ""}`,
                                    onClick: ()=>onSwitchFamily(family.id),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].familyBadge,
                                            children: family.name.slice(0, 1).toUpperCase()
                                        }, void 0, false, {
                                            fileName: "[project]/app/tenant/workspace/sections/FamilyWorkspaceShell.tsx",
                                            lineNumber: 139,
                                            columnNumber: 19
                                        }, void 0),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: family.name
                                                }, void 0, false, {
                                                    fileName: "[project]/app/tenant/workspace/sections/FamilyWorkspaceShell.tsx",
                                                    lineNumber: 141,
                                                    columnNumber: 21
                                                }, void 0),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                    children: [
                                                        family.nativePlace || "Family Space",
                                                        " - ",
                                                        people.length,
                                                        " members"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/tenant/workspace/sections/FamilyWorkspaceShell.tsx",
                                                    lineNumber: 142,
                                                    columnNumber: 21
                                                }, void 0)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/tenant/workspace/sections/FamilyWorkspaceShell.tsx",
                                            lineNumber: 140,
                                            columnNumber: 19
                                        }, void 0)
                                    ]
                                }, family.id, true, {
                                    fileName: "[project]/app/tenant/workspace/sections/FamilyWorkspaceShell.tsx",
                                    lineNumber: 133,
                                    columnNumber: 17
                                }, void 0))
                        }, void 0, false, {
                            fileName: "[project]/app/tenant/workspace/sections/FamilyWorkspaceShell.tsx",
                            lineNumber: 131,
                            columnNumber: 13
                        }, void 0),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].secondaryButton,
                            onClick: ()=>onSwitchFamily(activeWorkspaceId),
                            children: "Switch Family"
                        }, void 0, false, {
                            fileName: "[project]/app/tenant/workspace/sections/FamilyWorkspaceShell.tsx",
                            lineNumber: 147,
                            columnNumber: 13
                        }, void 0)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/tenant/workspace/sections/FamilyWorkspaceShell.tsx",
                    lineNumber: 127,
                    columnNumber: 11
                }, void 0),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].sideCard,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].cardTitleRow,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].sideCardTitle,
                                    children: "Upcoming Events"
                                }, void 0, false, {
                                    fileName: "[project]/app/tenant/workspace/sections/FamilyWorkspaceShell.tsx",
                                    lineNumber: 154,
                                    columnNumber: 15
                                }, void 0),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].sideLabelLink,
                                    children: "All →"
                                }, void 0, false, {
                                    fileName: "[project]/app/tenant/workspace/sections/FamilyWorkspaceShell.tsx",
                                    lineNumber: 155,
                                    columnNumber: 15
                                }, void 0)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/tenant/workspace/sections/FamilyWorkspaceShell.tsx",
                            lineNumber: 153,
                            columnNumber: 13
                        }, void 0),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].eventRailList,
                            children: upcomingBirthdays.length ? upcomingBirthdays.map((person)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].eventRailItem,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].eventDays,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: getDaysAwayLabel(person.label)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/tenant/workspace/sections/FamilyWorkspaceShell.tsx",
                                                    lineNumber: 162,
                                                    columnNumber: 23
                                                }, void 0),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "days"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/tenant/workspace/sections/FamilyWorkspaceShell.tsx",
                                                    lineNumber: 163,
                                                    columnNumber: 23
                                                }, void 0)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/tenant/workspace/sections/FamilyWorkspaceShell.tsx",
                                            lineNumber: 161,
                                            columnNumber: 21
                                        }, void 0),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: person.fullName
                                                }, void 0, false, {
                                                    fileName: "[project]/app/tenant/workspace/sections/FamilyWorkspaceShell.tsx",
                                                    lineNumber: 166,
                                                    columnNumber: 23
                                                }, void 0),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "Birthday"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/tenant/workspace/sections/FamilyWorkspaceShell.tsx",
                                                    lineNumber: 167,
                                                    columnNumber: 23
                                                }, void 0)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/tenant/workspace/sections/FamilyWorkspaceShell.tsx",
                                            lineNumber: 165,
                                            columnNumber: 21
                                        }, void 0)
                                    ]
                                }, person.id, true, {
                                    fileName: "[project]/app/tenant/workspace/sections/FamilyWorkspaceShell.tsx",
                                    lineNumber: 160,
                                    columnNumber: 19
                                }, void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].emptyRailText,
                                children: "No birthdays are available yet."
                            }, void 0, false, {
                                fileName: "[project]/app/tenant/workspace/sections/FamilyWorkspaceShell.tsx",
                                lineNumber: 172,
                                columnNumber: 17
                            }, void 0)
                        }, void 0, false, {
                            fileName: "[project]/app/tenant/workspace/sections/FamilyWorkspaceShell.tsx",
                            lineNumber: 157,
                            columnNumber: 13
                        }, void 0)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/tenant/workspace/sections/FamilyWorkspaceShell.tsx",
                    lineNumber: 152,
                    columnNumber: 11
                }, void 0),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].sideCard,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].cardTitleRow,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].sideCardTitle,
                                children: "Quick Actions"
                            }, void 0, false, {
                                fileName: "[project]/app/tenant/workspace/sections/FamilyWorkspaceShell.tsx",
                                lineNumber: 179,
                                columnNumber: 15
                            }, void 0)
                        }, void 0, false, {
                            fileName: "[project]/app/tenant/workspace/sections/FamilyWorkspaceShell.tsx",
                            lineNumber: 178,
                            columnNumber: 13
                        }, void 0),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].quickActionList,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/family-space",
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].quickAction,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].quickActionIcon,
                                            children: "🌳"
                                        }, void 0, false, {
                                            fileName: "[project]/app/tenant/workspace/sections/FamilyWorkspaceShell.tsx",
                                            lineNumber: 183,
                                            columnNumber: 17
                                        }, void 0),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: "Open Tree View"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/tenant/workspace/sections/FamilyWorkspaceShell.tsx",
                                                    lineNumber: 185,
                                                    columnNumber: 19
                                                }, void 0),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                    children: "Full screen family tree"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/tenant/workspace/sections/FamilyWorkspaceShell.tsx",
                                                    lineNumber: 186,
                                                    columnNumber: 19
                                                }, void 0)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/tenant/workspace/sections/FamilyWorkspaceShell.tsx",
                                            lineNumber: 184,
                                            columnNumber: 17
                                        }, void 0)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/tenant/workspace/sections/FamilyWorkspaceShell.tsx",
                                    lineNumber: 182,
                                    columnNumber: 15
                                }, void 0),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/platform/admin/data-capture",
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].quickAction,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].quickActionIcon,
                                            children: "➕"
                                        }, void 0, false, {
                                            fileName: "[project]/app/tenant/workspace/sections/FamilyWorkspaceShell.tsx",
                                            lineNumber: 190,
                                            columnNumber: 17
                                        }, void 0),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: "Add Member"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/tenant/workspace/sections/FamilyWorkspaceShell.tsx",
                                                    lineNumber: 192,
                                                    columnNumber: 19
                                                }, void 0),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                    children: "Expand your family"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/tenant/workspace/sections/FamilyWorkspaceShell.tsx",
                                                    lineNumber: 193,
                                                    columnNumber: 19
                                                }, void 0)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/tenant/workspace/sections/FamilyWorkspaceShell.tsx",
                                            lineNumber: 191,
                                            columnNumber: 17
                                        }, void 0)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/tenant/workspace/sections/FamilyWorkspaceShell.tsx",
                                    lineNumber: 189,
                                    columnNumber: 15
                                }, void 0),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/family-space/requests",
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].quickAction,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].quickActionIcon,
                                            children: "📋"
                                        }, void 0, false, {
                                            fileName: "[project]/app/tenant/workspace/sections/FamilyWorkspaceShell.tsx",
                                            lineNumber: 197,
                                            columnNumber: 17
                                        }, void 0),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: "Family Requests"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/tenant/workspace/sections/FamilyWorkspaceShell.tsx",
                                                    lineNumber: 199,
                                                    columnNumber: 19
                                                }, void 0),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                    children: "Pending invites and joins"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/tenant/workspace/sections/FamilyWorkspaceShell.tsx",
                                                    lineNumber: 200,
                                                    columnNumber: 19
                                                }, void 0)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/tenant/workspace/sections/FamilyWorkspaceShell.tsx",
                                            lineNumber: 198,
                                            columnNumber: 17
                                        }, void 0)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/tenant/workspace/sections/FamilyWorkspaceShell.tsx",
                                    lineNumber: 196,
                                    columnNumber: 15
                                }, void 0)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/tenant/workspace/sections/FamilyWorkspaceShell.tsx",
                            lineNumber: 181,
                            columnNumber: 13
                        }, void 0)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/tenant/workspace/sections/FamilyWorkspaceShell.tsx",
                    lineNumber: 177,
                    columnNumber: 11
                }, void 0),
                rightRail
            ]
        }, void 0, true),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].heroCard,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].heroContent,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].heroOverline,
                                children: "Family Space"
                            }, void 0, false, {
                                fileName: "[project]/app/tenant/workspace/sections/FamilyWorkspaceShell.tsx",
                                lineNumber: 212,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].heroSubtitle,
                                children: "Focused workspace for your active family context."
                            }, void 0, false, {
                                fileName: "[project]/app/tenant/workspace/sections/FamilyWorkspaceShell.tsx",
                                lineNumber: 213,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].heroStats,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: selectedFamily.nativePlace || "Native place not added"
                                    }, void 0, false, {
                                        fileName: "[project]/app/tenant/workspace/sections/FamilyWorkspaceShell.tsx",
                                        lineNumber: 215,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: [
                                            people.length,
                                            " members"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/tenant/workspace/sections/FamilyWorkspaceShell.tsx",
                                        lineNumber: 216,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: [
                                            session.memberships.length,
                                            " memberships"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/tenant/workspace/sections/FamilyWorkspaceShell.tsx",
                                        lineNumber: 217,
                                        columnNumber: 13
                                    }, this),
                                    selectedPerson ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: [
                                            "Selected: ",
                                            selectedPerson.fullName
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/tenant/workspace/sections/FamilyWorkspaceShell.tsx",
                                        lineNumber: 218,
                                        columnNumber: 31
                                    }, this) : null
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/tenant/workspace/sections/FamilyWorkspaceShell.tsx",
                                lineNumber: 214,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/tenant/workspace/sections/FamilyWorkspaceShell.tsx",
                        lineNumber: 211,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].heroActions,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: "/platform/auth",
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].heroGhostButton,
                                children: "⇄ Switch Family"
                            }, void 0, false, {
                                fileName: "[project]/app/tenant/workspace/sections/FamilyWorkspaceShell.tsx",
                                lineNumber: 222,
                                columnNumber: 11
                            }, this),
                            canManageData ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: "/platform/admin/data-capture",
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].heroPrimaryButton,
                                children: "⚙ Manage Family Data"
                            }, void 0, false, {
                                fileName: "[project]/app/tenant/workspace/sections/FamilyWorkspaceShell.tsx",
                                lineNumber: 226,
                                columnNumber: 13
                            }, this) : null
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/tenant/workspace/sections/FamilyWorkspaceShell.tsx",
                        lineNumber: 221,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/tenant/workspace/sections/FamilyWorkspaceShell.tsx",
                lineNumber: 210,
                columnNumber: 7
            }, this),
            children
        ]
    }, void 0, true, {
        fileName: "[project]/app/tenant/workspace/sections/FamilyWorkspaceShell.tsx",
        lineNumber: 94,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/tenant/workspace/kinship.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getKinshipLabel",
    ()=>getKinshipLabel,
    "isKinshipCode",
    ()=>isKinshipCode,
    "normalizeKinshipLanguage",
    ()=>normalizeKinshipLanguage,
    "resolveKinshipCodeFromPath",
    ()=>resolveKinshipCodeFromPath
]);
const KINSHIP_MASTER = {
    en: {
        SELF: "Self",
        FATHER: "Father",
        MOTHER: "Mother",
        PARENT: "Parent",
        SON: "Son",
        DAUGHTER: "Daughter",
        CHILD: "Child",
        BROTHER: "Brother",
        SISTER: "Sister",
        SIBLING: "Sibling",
        HUSBAND: "Husband",
        WIFE: "Wife",
        SPOUSE: "Spouse",
        GRANDFATHER: "Grandfather",
        GRANDMOTHER: "Grandmother",
        GRANDPARENT: "Grandparent",
        GRANDSON: "Grandson",
        GRANDDAUGHTER: "Granddaughter",
        GRANDCHILD: "Grandchild",
        MAMA: "Maternal uncle (Mama)",
        MAMI: "Maternal uncle's wife (Mami)",
        MAUSI: "Maternal aunt (Mausi)",
        MAUSA: "Maternal aunt's husband (Mausa)",
        CHACHA: "Paternal uncle (Chacha)",
        CHACHI: "Paternal uncle's wife (Chachi)",
        BUA: "Paternal aunt (Bua)",
        FUFA: "Paternal aunt's husband (Fufa Ji)",
        BHATIJA: "Nephew (brother's son)",
        BHATIJI: "Niece (brother's daughter)",
        BHANJA: "Nephew (sister's son)",
        BHANJI: "Niece (sister's daughter)",
        DADA: "Paternal grandfather (Dada)",
        DADI: "Paternal grandmother (Dadi)",
        NANA: "Maternal grandfather (Nana)",
        NANI: "Maternal grandmother (Nani)",
        POTA: "Grandson (son's son)",
        POTI: "Granddaughter (son's daughter)",
        NATI: "Grandson (daughter's son)",
        NATINI: "Granddaughter (daughter's daughter)",
        FAMILY_MEMBER: "Family member"
    },
    hi: {
        SELF: "स्वयं",
        FATHER: "पिता",
        MOTHER: "माता",
        PARENT: "माता-पिता",
        SON: "बेटा",
        DAUGHTER: "बेटी",
        CHILD: "संतान",
        BROTHER: "भाई",
        SISTER: "बहन",
        SIBLING: "भाई/बहन",
        HUSBAND: "पति",
        WIFE: "पत्नी",
        SPOUSE: "जीवनसाथी",
        GRANDFATHER: "दादा/नाना",
        GRANDMOTHER: "दादी/नानी",
        GRANDPARENT: "दादा-दादी/नाना-नानी",
        GRANDSON: "पोता/नाती",
        GRANDDAUGHTER: "पोती/नातिन",
        GRANDCHILD: "पोता/पोती/नाती/नातिन",
        MAMA: "मामा",
        MAMI: "मामी",
        MAUSI: "मौसी",
        MAUSA: "मौसा",
        CHACHA: "चाचा",
        CHACHI: "चाची",
        BUA: "बुआ",
        FUFA: "फूफा जी",
        BHATIJA: "भतीजा",
        BHATIJI: "भतीजी",
        BHANJA: "भांजा",
        BHANJI: "भांजी",
        DADA: "दादा",
        DADI: "दादी",
        NANA: "नाना",
        NANI: "नानी",
        POTA: "पोता",
        POTI: "पोती",
        NATI: "नाती",
        NATINI: "नातिन",
        FAMILY_MEMBER: "परिवार सदस्य"
    }
};
const KINSHIP_CODES = new Set(Object.keys(KINSHIP_MASTER.en));
const getKinshipLabel = (code, language = "en")=>KINSHIP_MASTER[language][code];
const isKinshipCode = (value)=>KINSHIP_CODES.has(value);
const normalizeKinshipLanguage = (value)=>{
    if (typeof value === "string" && value.toLowerCase().startsWith("hi")) {
        return "hi";
    }
    return "en";
};
const resolveKinshipCodeFromPath = (path)=>{
    if (!path.length) {
        return "SELF";
    }
    // Direct one-hop relations.
    if (path.length === 1) {
        switch(path[0]){
            case "father":
                return "FATHER";
            case "mother":
                return "MOTHER";
            case "parent":
                return "PARENT";
            case "child":
                return "CHILD";
            case "sibling":
                return "SIBLING";
            case "spouse":
                return "SPOUSE";
            default:
                return null;
        }
    }
    // Two-hop maternal/paternal examples.
    if (path.length === 2 && path[0] === "mother" && path[1] === "sibling") {
        return "MAMA";
    }
    if (path.length === 2 && path[0] === "father" && path[1] === "sibling") {
        return "CHACHA";
    }
    return null;
};
}),
"[project]/app/tenant/workspace/helpers.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "asRecord",
    ()=>asRecord,
    "asText",
    ()=>asText,
    "buildGenerationGroups",
    ()=>buildGenerationGroups,
    "buildImmediateFamilyRelations",
    ()=>buildImmediateFamilyRelations,
    "buildRelationshipSummary",
    ()=>buildRelationshipSummary,
    "buildRelationshipTree",
    ()=>buildRelationshipTree,
    "formatDate",
    ()=>formatDate,
    "getBiography",
    ()=>getBiography,
    "getGenerationLabel",
    ()=>getGenerationLabel,
    "getPersonalData",
    ()=>getPersonalData,
    "getProfileEvents",
    ()=>getProfileEvents,
    "getProfileMemories",
    ()=>getProfileMemories,
    "getRelationLabel",
    ()=>getRelationLabel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$kinship$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/tenant/workspace/kinship.ts [app-ssr] (ecmascript)");
;
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
const asRecord = (value)=>value && typeof value === "object" && !Array.isArray(value) ? value : {};
const asText = (value, fallback = "Not added")=>typeof value === "string" && value.trim() ? value : fallback;
const getGenerationLabel = (person)=>{
    const metadata = asRecord(person.metadata);
    const familyContext = asRecord(metadata.familyContext);
    const label = asText(familyContext.generationLevel, "");
    return label.toLowerCase() === "unassigned" ? "" : label;
};
const getRelationLabel = (person, fallbackLanguage = "en")=>{
    const metadata = asRecord(person.metadata);
    const familyContext = asRecord(metadata.familyContext);
    const personal = asRecord(metadata.personal);
    const language = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$kinship$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["normalizeKinshipLanguage"])(personal.preferredLanguage ?? fallbackLanguage);
    const kinshipCode = asText(familyContext.kinshipCode, "");
    if (kinshipCode) {
        const normalizedCode = kinshipCode.toUpperCase();
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$kinship$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isKinshipCode"])(normalizedCode)) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$kinship$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getKinshipLabel"])(normalizedCode, language);
        }
    }
    return asText(familyContext.relationToAnchor, "Family member");
};
const getPersonalData = (person)=>{
    const metadata = asRecord(person.metadata);
    return asRecord(metadata.personal);
};
const getBiography = (person)=>{
    const metadata = asRecord(person.metadata);
    return asText(metadata.biography, "No story added yet.");
};
const asRecordArray = (value)=>Array.isArray(value) ? value.filter((item)=>!!item && typeof item === "object" && !Array.isArray(item)) : [];
const firstText = (...values)=>{
    for (const value of values){
        if (typeof value === "string" && value.trim()) {
            return value.trim();
        }
    }
    return "";
};
const normalizeDateLabel = (value)=>{
    if (typeof value !== "string" || !value.trim()) {
        return "";
    }
    const date = new Date(value);
    if (Number.isNaN(date.getTime())) {
        return value;
    }
    return DATE_FORMATTER.format(date);
};
const getProfileMemories = (person)=>{
    const metadata = asRecord(person.metadata);
    const memorySources = [
        ...asRecordArray(metadata.memories),
        ...asRecordArray(metadata.memoryVault),
        ...asRecordArray(metadata.stories)
    ];
    const explicitMemories = memorySources.map((entry, index)=>{
        const title = firstText(entry.title, entry.heading, entry.name, entry.type, `Memory ${index + 1}`);
        const detail = firstText(entry.description, entry.story, entry.summary, entry.note, entry.caption);
        const label = firstText(entry.year, entry.date, entry.era, entry.category, entry.type, "Family memory");
        if (!title || !detail) {
            return null;
        }
        return {
            id: `memory-${index}`,
            title,
            detail,
            label: normalizeDateLabel(label) || label
        };
    }).filter((item)=>item !== null);
    if (explicitMemories.length > 0) {
        return explicitMemories;
    }
    const fallbackMemories = [];
    const biography = getBiography(person);
    if (biography !== "No story added yet.") {
        fallbackMemories.push({
            id: "bio-memory",
            title: "Life story",
            detail: biography,
            label: "Profile story"
        });
    }
    if (person.notes?.trim()) {
        fallbackMemories.push({
            id: "notes-memory",
            title: "Family notes",
            detail: person.notes.trim(),
            label: "Captured note"
        });
    }
    return fallbackMemories;
};
const getProfileEvents = (person, relationships)=>{
    const metadata = asRecord(person.metadata);
    const eventSources = [
        ...asRecordArray(metadata.events),
        ...asRecordArray(metadata.lifeEvents),
        ...asRecordArray(metadata.timeline),
        ...asRecordArray(metadata.milestones)
    ];
    const explicitEvents = eventSources.map((entry, index)=>{
        const title = firstText(entry.title, entry.name, entry.label, `Event ${index + 1}`);
        const detail = firstText(entry.description, entry.summary, entry.note, entry.details);
        const when = firstText(entry.date, entry.year, entry.period, entry.when);
        if (!title) {
            return null;
        }
        return {
            id: `event-${index}`,
            title,
            detail: detail || "Family milestone recorded on this profile.",
            when: normalizeDateLabel(when) || when || "Timeline"
        };
    }).filter((item)=>item !== null);
    const inferredEvents = [];
    if (person.dateOfBirth) {
        inferredEvents.push({
            id: "birth-event",
            title: "Birth",
            detail: `${person.fullName} was born.`,
            when: formatDate(person.dateOfBirth)
        });
    }
    if (person.isDeceased) {
        inferredEvents.push({
            id: "legacy-event",
            title: "Remembered in family record",
            detail: `${person.fullName} is marked as deceased in the family profile.`,
            when: "Family archive"
        });
    }
    const relationshipEvents = relationships.filter((relationship)=>relationship.personOne.id === person.id || relationship.personTwo.id === person.id).filter((relationship)=>relationship.startDate || relationship.endDate).map((relationship)=>{
        const otherPerson = relationship.personOne.id === person.id ? relationship.personTwo.fullName : relationship.personOne.fullName;
        const when = relationship.startDate ?? relationship.endDate;
        const marker = relationship.startDate ? "Started" : "Ended";
        return {
            id: `relationship-${relationship.id}`,
            title: `${relationship.relationshipType.replaceAll("_", " ")} with ${otherPerson}`,
            detail: `${marker} relationship record for ${person.fullName} and ${otherPerson}.`,
            when: normalizeDateLabel(when) || "Relationship timeline"
        };
    });
    return [
        ...explicitEvents,
        ...inferredEvents,
        ...relationshipEvents
    ];
};
const buildGenerationGroups = (people)=>{
    const groups = new Map();
    for (const person of people){
        const generation = getGenerationLabel(person);
        const list = groups.get(generation) ?? [];
        list.push(person);
        groups.set(generation, list);
    }
    return Array.from(groups.entries()).sort(([left], [right])=>left.localeCompare(right));
};
const buildRelationshipSummary = (relationships, selectedPersonId)=>relationships.filter((relationship)=>relationship.personOne.id === selectedPersonId || relationship.personTwo.id === selectedPersonId);
const isSpouseLikeRelationship = (relationshipType)=>relationshipType === "spouse_of" || relationshipType === "divorced_from" || relationshipType === "separated_from" || relationshipType === "widowed_from";
const pushUnique = (target, value)=>{
    if (!target.has(value.id)) {
        target.set(value.id, value);
    }
};
const sortedItems = (items)=>Array.from(items.values()).sort((left, right)=>left.fullName.localeCompare(right.fullName));
const buildImmediateFamilyRelations = (people, relationships, selectedPersonId, selectedPersonGender)=>{
    const peopleById = new Map(people.map((person)=>[
            person.id,
            person
        ]));
    const spouseMap = new Map();
    const parentToChildren = new Map();
    const directSpouseIds = new Set();
    const directParentIds = new Set();
    const directChildIds = new Set();
    const directSiblingIds = new Set();
    for (const relationship of relationships){
        const sourceId = relationship.personOne.id;
        const targetId = relationship.personTwo.id;
        if (relationship.relationshipType === "parent_of") {
            const children = parentToChildren.get(sourceId) ?? new Set();
            children.add(targetId);
            parentToChildren.set(sourceId, children);
        }
        if (isSpouseLikeRelationship(relationship.relationshipType)) {
            const sourceSpouses = spouseMap.get(sourceId) ?? new Set();
            sourceSpouses.add(targetId);
            spouseMap.set(sourceId, sourceSpouses);
            const targetSpouses = spouseMap.get(targetId) ?? new Set();
            targetSpouses.add(sourceId);
            spouseMap.set(targetId, targetSpouses);
        }
        const isPersonOne = sourceId === selectedPersonId;
        const isPersonTwo = targetId === selectedPersonId;
        if (!isPersonOne && !isPersonTwo) {
            continue;
        }
        const otherId = isPersonOne ? targetId : sourceId;
        if (relationship.relationshipType === "parent_of") {
            if (isPersonOne) {
                directChildIds.add(otherId);
            } else {
                directParentIds.add(otherId);
            }
        } else if (relationship.relationshipType === "sibling_of") {
            directSiblingIds.add(otherId);
        } else if (isSpouseLikeRelationship(relationship.relationshipType)) {
            directSpouseIds.add(otherId);
        }
    }
    // Derived parent via mapped parent's spouse.
    for (const parentId of directParentIds){
        const parentSpouses = spouseMap.get(parentId) ?? new Set();
        for (const spouseId of parentSpouses){
            if (spouseId !== selectedPersonId) {
                directParentIds.add(spouseId);
            }
        }
    }
    // Derived child via selected spouse's parent links.
    for (const spouseId of directSpouseIds){
        const spouseChildren = parentToChildren.get(spouseId) ?? new Set();
        for (const childId of spouseChildren){
            if (childId !== selectedPersonId) {
                directChildIds.add(childId);
            }
        }
    }
    // Derived siblings via shared parents.
    for (const parentId of directParentIds){
        const siblings = parentToChildren.get(parentId) ?? new Set();
        for (const siblingId of siblings){
            if (siblingId !== selectedPersonId) {
                directSiblingIds.add(siblingId);
            }
        }
    }
    const spouses = new Map();
    const fathers = new Map();
    const mothers = new Map();
    const brothers = new Map();
    const sisters = new Map();
    const sons = new Map();
    const daughters = new Map();
    const asItem = (id)=>({
            id,
            fullName: peopleById.get(id)?.fullName ?? relationships.find((rel)=>rel.personOne.id === id)?.personOne.fullName ?? relationships.find((rel)=>rel.personTwo.id === id)?.personTwo.fullName ?? "Unknown member",
            linkable: peopleById.has(id)
        });
    const lowerGender = (id)=>(peopleById.get(id)?.gender ?? "").toLowerCase();
    for (const id of directSpouseIds){
        pushUnique(spouses, asItem(id));
    }
    for (const id of directParentIds){
        const gender = lowerGender(id);
        if (gender === "male") {
            pushUnique(fathers, asItem(id));
        } else {
            pushUnique(mothers, asItem(id));
        }
    }
    for (const id of directSiblingIds){
        const gender = lowerGender(id);
        if (gender === "male") {
            pushUnique(brothers, asItem(id));
        } else {
            pushUnique(sisters, asItem(id));
        }
    }
    for (const id of directChildIds){
        const gender = lowerGender(id);
        if (gender === "male") {
            pushUnique(sons, asItem(id));
        } else {
            pushUnique(daughters, asItem(id));
        }
    }
    const selectedGender = (selectedPersonGender ?? "").toLowerCase();
    const spouseLabel = selectedGender === "male" ? "Wife" : selectedGender === "female" ? "Husband" : "Spouse";
    return {
        spouseLabel,
        spouses: sortedItems(spouses),
        fathers: sortedItems(fathers),
        mothers: sortedItems(mothers),
        brothers: sortedItems(brothers),
        sisters: sortedItems(sisters),
        sons: sortedItems(sons),
        daughters: sortedItems(daughters)
    };
};
const buildRelationshipTree = (relationships, selectedPersonId)=>{
    const parents = new Map();
    const guardians = new Map();
    const spouses = new Map();
    const formerPartners = new Map();
    const siblings = new Map();
    const children = new Map();
    for (const relationship of relationships){
        const isPersonOne = relationship.personOne.id === selectedPersonId;
        const isPersonTwo = relationship.personTwo.id === selectedPersonId;
        if (!isPersonOne && !isPersonTwo) {
            continue;
        }
        const other = isPersonOne ? relationship.personTwo : relationship.personOne;
        switch(relationship.relationshipType){
            case "parent_of":
                if (isPersonOne) {
                    children.set(other.id, {
                        id: other.id,
                        fullName: other.fullName,
                        descriptor: "Child"
                    });
                } else {
                    parents.set(other.id, {
                        id: other.id,
                        fullName: other.fullName,
                        descriptor: "Parent"
                    });
                }
                break;
            case "guardian_of":
                if (isPersonOne) {
                    children.set(other.id, {
                        id: other.id,
                        fullName: other.fullName,
                        descriptor: "Ward"
                    });
                } else {
                    guardians.set(other.id, {
                        id: other.id,
                        fullName: other.fullName,
                        descriptor: "Guardian"
                    });
                }
                break;
            case "spouse_of":
                spouses.set(other.id, {
                    id: other.id,
                    fullName: other.fullName,
                    descriptor: "Spouse"
                });
                break;
            case "divorced_from":
                formerPartners.set(other.id, {
                    id: other.id,
                    fullName: other.fullName,
                    descriptor: "Divorced"
                });
                break;
            case "separated_from":
                formerPartners.set(other.id, {
                    id: other.id,
                    fullName: other.fullName,
                    descriptor: "Separated"
                });
                break;
            case "widowed_from":
                formerPartners.set(other.id, {
                    id: other.id,
                    fullName: other.fullName,
                    descriptor: "Past spouse"
                });
                break;
            case "sibling_of":
                siblings.set(other.id, {
                    id: other.id,
                    fullName: other.fullName,
                    descriptor: "Sibling"
                });
                break;
            default:
                break;
        }
    }
    const groups = [
        {
            label: "Parents",
            items: Array.from(parents.values())
        },
        {
            label: "Guardians",
            items: Array.from(guardians.values())
        },
        {
            label: "Spouses",
            items: Array.from(spouses.values())
        },
        {
            label: "Former Partners",
            items: Array.from(formerPartners.values())
        },
        {
            label: "Siblings",
            items: Array.from(siblings.values())
        },
        {
            label: "Children",
            items: Array.from(children.values())
        }
    ];
    return groups.filter((group)=>group.items.length > 0);
};
}),
"[project]/app/tenant/workspace/sections/PersonSpotlight.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PersonSpotlight",
    ()=>PersonSpotlight
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/tenant/workspace/helpers.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/app/tenant/workspace/workspace.module.css [app-ssr] (css module)");
;
;
;
;
function PersonSpotlight({ person, people, relationships, compact = false }) {
    if (!person) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: compact ? __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].sideCard : __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].panel,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].panelHeader,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        children: "Person Profile"
                    }, void 0, false, {
                        fileName: "[project]/app/tenant/workspace/sections/PersonSpotlight.tsx",
                        lineNumber: 28,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "Select a member to view their grouped profile."
                    }, void 0, false, {
                        fileName: "[project]/app/tenant/workspace/sections/PersonSpotlight.tsx",
                        lineNumber: 29,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/tenant/workspace/sections/PersonSpotlight.tsx",
                lineNumber: 27,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/tenant/workspace/sections/PersonSpotlight.tsx",
            lineNumber: 26,
            columnNumber: 7
        }, this);
    }
    const personal = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPersonalData"])(person);
    const related = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["buildRelationshipSummary"])(relationships, person.id);
    const immediate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["buildImmediateFamilyRelations"])(people, relationships, person.id, person.gender);
    const memories = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getProfileMemories"])(person);
    const events = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getProfileEvents"])(person, relationships);
    const renderRelationRow = (label, items)=>{
        if (!items.length) {
            return null;
        }
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].personRelationRow,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                    children: [
                        label,
                        ":"
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/tenant/workspace/sections/PersonSpotlight.tsx",
                    lineNumber: 48,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].personRelationNames,
                    children: items.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: [
                                item.linkable ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].inlineLink,
                                    href: `/family-space/members/${item.id}`,
                                    children: item.fullName
                                }, void 0, false, {
                                    fileName: "[project]/app/tenant/workspace/sections/PersonSpotlight.tsx",
                                    lineNumber: 53,
                                    columnNumber: 17
                                }, this) : item.fullName,
                                index < items.length - 1 ? ", " : ""
                            ]
                        }, item.id, true, {
                            fileName: "[project]/app/tenant/workspace/sections/PersonSpotlight.tsx",
                            lineNumber: 51,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/app/tenant/workspace/sections/PersonSpotlight.tsx",
                    lineNumber: 49,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/tenant/workspace/sections/PersonSpotlight.tsx",
            lineNumber: 47,
            columnNumber: 7
        }, this);
    };
    if (compact) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].sideCard,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].cardTitleRow,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].sideCardTitle,
                            children: "Selected Member"
                        }, void 0, false, {
                            fileName: "[project]/app/tenant/workspace/sections/PersonSpotlight.tsx",
                            lineNumber: 71,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].sideLink,
                            href: `/family-space/members/${person.id}`,
                            children: "Open"
                        }, void 0, false, {
                            fileName: "[project]/app/tenant/workspace/sections/PersonSpotlight.tsx",
                            lineNumber: 72,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/tenant/workspace/sections/PersonSpotlight.tsx",
                    lineNumber: 70,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].profileCompactHeader,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].profileCompactAvatar,
                            children: person.photoUrl ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: person.photoUrl,
                                alt: person.fullName,
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].profileAvatarImage
                            }, void 0, false, {
                                fileName: "[project]/app/tenant/workspace/sections/PersonSpotlight.tsx",
                                lineNumber: 78,
                                columnNumber: 32
                            }, this) : person.fullName.slice(0, 1).toUpperCase()
                        }, void 0, false, {
                            fileName: "[project]/app/tenant/workspace/sections/PersonSpotlight.tsx",
                            lineNumber: 77,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: person.fullName
                                }, void 0, false, {
                                    fileName: "[project]/app/tenant/workspace/sections/PersonSpotlight.tsx",
                                    lineNumber: 81,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getRelationLabel"])(person)
                                }, void 0, false, {
                                    fileName: "[project]/app/tenant/workspace/sections/PersonSpotlight.tsx",
                                    lineNumber: 82,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/tenant/workspace/sections/PersonSpotlight.tsx",
                            lineNumber: 80,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/tenant/workspace/sections/PersonSpotlight.tsx",
                    lineNumber: 76,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].personRelationRows,
                    children: [
                        renderRelationRow(immediate.spouseLabel, immediate.spouses),
                        renderRelationRow("Father", immediate.fathers),
                        renderRelationRow("Mother", immediate.mothers),
                        renderRelationRow("Brother", immediate.brothers),
                        renderRelationRow("Sister", immediate.sisters),
                        renderRelationRow("Son", immediate.sons),
                        renderRelationRow("Daughter", immediate.daughters)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/tenant/workspace/sections/PersonSpotlight.tsx",
                    lineNumber: 85,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].profileCompactList,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: [
                                "Date of birth: ",
                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatDate"])(person.dateOfBirth)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/tenant/workspace/sections/PersonSpotlight.tsx",
                            lineNumber: 95,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: [
                                "Current city: ",
                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["asText"])(personal.currentCity)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/tenant/workspace/sections/PersonSpotlight.tsx",
                            lineNumber: 96,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: [
                                "Address: ",
                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["asText"])(personal.address)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/tenant/workspace/sections/PersonSpotlight.tsx",
                            lineNumber: 97,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: [
                                "Mobile: ",
                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["asText"])(personal.mobileNumber)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/tenant/workspace/sections/PersonSpotlight.tsx",
                            lineNumber: 98,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: [
                                "Occupation: ",
                                person.occupation || "Not added"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/tenant/workspace/sections/PersonSpotlight.tsx",
                            lineNumber: 99,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: [
                                "Status: ",
                                person.isDeceased ? "Deceased" : "Living"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/tenant/workspace/sections/PersonSpotlight.tsx",
                            lineNumber: 100,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/tenant/workspace/sections/PersonSpotlight.tsx",
                    lineNumber: 94,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/tenant/workspace/sections/PersonSpotlight.tsx",
            lineNumber: 69,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].panel,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].panelHeader,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        children: person.fullName
                    }, void 0, false, {
                        fileName: "[project]/app/tenant/workspace/sections/PersonSpotlight.tsx",
                        lineNumber: 109,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getRelationLabel"])(person)
                    }, void 0, false, {
                        fileName: "[project]/app/tenant/workspace/sections/PersonSpotlight.tsx",
                        lineNumber: 110,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/tenant/workspace/sections/PersonSpotlight.tsx",
                lineNumber: 108,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].storyBlock,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        children: "Relationship Context"
                    }, void 0, false, {
                        fileName: "[project]/app/tenant/workspace/sections/PersonSpotlight.tsx",
                        lineNumber: 113,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].relationshipList,
                        children: related.length ? related.map((relationship)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].relationshipChip,
                                children: [
                                    relationship.personOne.fullName,
                                    " ",
                                    relationship.relationshipType.replaceAll("_", " "),
                                    " ",
                                    relationship.personTwo.fullName
                                ]
                            }, relationship.id, true, {
                                fileName: "[project]/app/tenant/workspace/sections/PersonSpotlight.tsx",
                                lineNumber: 117,
                                columnNumber: 15
                            }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: "No relationships captured for this member yet."
                        }, void 0, false, {
                            fileName: "[project]/app/tenant/workspace/sections/PersonSpotlight.tsx",
                            lineNumber: 122,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/tenant/workspace/sections/PersonSpotlight.tsx",
                        lineNumber: 114,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/tenant/workspace/sections/PersonSpotlight.tsx",
                lineNumber: 112,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].personRelationRows,
                children: [
                    renderRelationRow(immediate.spouseLabel, immediate.spouses),
                    renderRelationRow("Father", immediate.fathers),
                    renderRelationRow("Mother", immediate.mothers),
                    renderRelationRow("Brother", immediate.brothers),
                    renderRelationRow("Sister", immediate.sisters),
                    renderRelationRow("Son", immediate.sons),
                    renderRelationRow("Daughter", immediate.daughters)
                ]
            }, void 0, true, {
                fileName: "[project]/app/tenant/workspace/sections/PersonSpotlight.tsx",
                lineNumber: 126,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].profileActions,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].inlineLink,
                    href: `/family-space/members/${person.id}`,
                    children: "Open full profile"
                }, void 0, false, {
                    fileName: "[project]/app/tenant/workspace/sections/PersonSpotlight.tsx",
                    lineNumber: 136,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/tenant/workspace/sections/PersonSpotlight.tsx",
                lineNumber: 135,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].profileGrid,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].profileBlock,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                children: "Personal"
                            }, void 0, false, {
                                fileName: "[project]/app/tenant/workspace/sections/PersonSpotlight.tsx",
                                lineNumber: 142,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: [
                                    "Gender: ",
                                    person.gender || "Not added"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/tenant/workspace/sections/PersonSpotlight.tsx",
                                lineNumber: 143,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: [
                                    "Date of birth: ",
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatDate"])(person.dateOfBirth)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/tenant/workspace/sections/PersonSpotlight.tsx",
                                lineNumber: 144,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: [
                                    "Status: ",
                                    person.isDeceased ? "Deceased" : "Living"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/tenant/workspace/sections/PersonSpotlight.tsx",
                                lineNumber: 145,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: [
                                    "Current city: ",
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["asText"])(personal.currentCity)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/tenant/workspace/sections/PersonSpotlight.tsx",
                                lineNumber: 146,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: [
                                    "Address: ",
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["asText"])(personal.address)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/tenant/workspace/sections/PersonSpotlight.tsx",
                                lineNumber: 147,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: [
                                    "Mobile: ",
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["asText"])(personal.mobileNumber)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/tenant/workspace/sections/PersonSpotlight.tsx",
                                lineNumber: 148,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: [
                                    "Email: ",
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["asText"])(personal.email)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/tenant/workspace/sections/PersonSpotlight.tsx",
                                lineNumber: 149,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: [
                                    "Marital status: ",
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["asText"])(personal.maritalStatus)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/tenant/workspace/sections/PersonSpotlight.tsx",
                                lineNumber: 150,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/tenant/workspace/sections/PersonSpotlight.tsx",
                        lineNumber: 141,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].profileBlock,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                children: "Family Identity"
                            }, void 0, false, {
                                fileName: "[project]/app/tenant/workspace/sections/PersonSpotlight.tsx",
                                lineNumber: 153,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: [
                                    "Village: ",
                                    person.nativeVillage || "Not added"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/tenant/workspace/sections/PersonSpotlight.tsx",
                                lineNumber: 154,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: [
                                    "Gotra: ",
                                    person.gotra || "Not added"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/tenant/workspace/sections/PersonSpotlight.tsx",
                                lineNumber: 155,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: [
                                    "Kuldevta: ",
                                    person.kuldevta || "Not added"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/tenant/workspace/sections/PersonSpotlight.tsx",
                                lineNumber: 156,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: [
                                    "Community: ",
                                    person.community || "Not added"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/tenant/workspace/sections/PersonSpotlight.tsx",
                                lineNumber: 157,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/tenant/workspace/sections/PersonSpotlight.tsx",
                        lineNumber: 152,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].profileBlock,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                children: "Education & Work"
                            }, void 0, false, {
                                fileName: "[project]/app/tenant/workspace/sections/PersonSpotlight.tsx",
                                lineNumber: 160,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: [
                                    "Education: ",
                                    person.education || "Not added"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/tenant/workspace/sections/PersonSpotlight.tsx",
                                lineNumber: 161,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: [
                                    "Occupation: ",
                                    person.occupation || "Not added"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/tenant/workspace/sections/PersonSpotlight.tsx",
                                lineNumber: 162,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: [
                                    "Languages: ",
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["asText"])(personal.languages)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/tenant/workspace/sections/PersonSpotlight.tsx",
                                lineNumber: 163,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/tenant/workspace/sections/PersonSpotlight.tsx",
                        lineNumber: 159,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/tenant/workspace/sections/PersonSpotlight.tsx",
                lineNumber: 140,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].storyBlock,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        children: "Story"
                    }, void 0, false, {
                        fileName: "[project]/app/tenant/workspace/sections/PersonSpotlight.tsx",
                        lineNumber: 167,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getBiography"])(person)
                    }, void 0, false, {
                        fileName: "[project]/app/tenant/workspace/sections/PersonSpotlight.tsx",
                        lineNumber: 168,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/tenant/workspace/sections/PersonSpotlight.tsx",
                lineNumber: 166,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].memoryEventGrid,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].storyBlock,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                children: "Memories"
                            }, void 0, false, {
                                fileName: "[project]/app/tenant/workspace/sections/PersonSpotlight.tsx",
                                lineNumber: 172,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].memoryList,
                                children: memories.length ? memories.map((memory)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].memoryCard,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].memoryMeta,
                                                children: memory.label
                                            }, void 0, false, {
                                                fileName: "[project]/app/tenant/workspace/sections/PersonSpotlight.tsx",
                                                lineNumber: 177,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: memory.title
                                            }, void 0, false, {
                                                fileName: "[project]/app/tenant/workspace/sections/PersonSpotlight.tsx",
                                                lineNumber: 178,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: memory.detail
                                            }, void 0, false, {
                                                fileName: "[project]/app/tenant/workspace/sections/PersonSpotlight.tsx",
                                                lineNumber: 179,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, memory.id, true, {
                                        fileName: "[project]/app/tenant/workspace/sections/PersonSpotlight.tsx",
                                        lineNumber: 176,
                                        columnNumber: 17
                                    }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: "No memories have been added for this member yet."
                                }, void 0, false, {
                                    fileName: "[project]/app/tenant/workspace/sections/PersonSpotlight.tsx",
                                    lineNumber: 183,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/tenant/workspace/sections/PersonSpotlight.tsx",
                                lineNumber: 173,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/tenant/workspace/sections/PersonSpotlight.tsx",
                        lineNumber: 171,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].storyBlock,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                children: "Events"
                            }, void 0, false, {
                                fileName: "[project]/app/tenant/workspace/sections/PersonSpotlight.tsx",
                                lineNumber: 188,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].eventList,
                                children: events.length ? events.map((event)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].eventItem,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].eventWhen,
                                                children: event.when
                                            }, void 0, false, {
                                                fileName: "[project]/app/tenant/workspace/sections/PersonSpotlight.tsx",
                                                lineNumber: 193,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: event.title
                                            }, void 0, false, {
                                                fileName: "[project]/app/tenant/workspace/sections/PersonSpotlight.tsx",
                                                lineNumber: 194,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: event.detail
                                            }, void 0, false, {
                                                fileName: "[project]/app/tenant/workspace/sections/PersonSpotlight.tsx",
                                                lineNumber: 195,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, event.id, true, {
                                        fileName: "[project]/app/tenant/workspace/sections/PersonSpotlight.tsx",
                                        lineNumber: 192,
                                        columnNumber: 17
                                    }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: "No events have been recorded for this member yet."
                                }, void 0, false, {
                                    fileName: "[project]/app/tenant/workspace/sections/PersonSpotlight.tsx",
                                    lineNumber: 199,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/tenant/workspace/sections/PersonSpotlight.tsx",
                                lineNumber: 189,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/tenant/workspace/sections/PersonSpotlight.tsx",
                        lineNumber: 187,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/tenant/workspace/sections/PersonSpotlight.tsx",
                lineNumber: 170,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/tenant/workspace/sections/PersonSpotlight.tsx",
        lineNumber: 107,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/tenant/workspace/sections/WorkspaceEmptyState.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WorkspaceEmptyState",
    ()=>WorkspaceEmptyState
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$LoadingState$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/LoadingState.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/app/tenant/workspace/workspace.module.css [app-ssr] (css module)");
;
;
;
;
function WorkspaceEmptyState({ title, message, isLoading = false, primaryLabel = "Open Family Access", primaryHref = "/platform/auth" }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].page,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].emptyState} ${isLoading ? __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].emptyStateLoading : ""}`,
            children: isLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$LoadingState$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LoadingState"], {
                title: title,
                message: message
            }, void 0, false, {
                fileName: "[project]/app/tenant/workspace/sections/WorkspaceEmptyState.tsx",
                lineNumber: 24,
                columnNumber: 11
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        children: title
                    }, void 0, false, {
                        fileName: "[project]/app/tenant/workspace/sections/WorkspaceEmptyState.tsx",
                        lineNumber: 27,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: message
                    }, void 0, false, {
                        fileName: "[project]/app/tenant/workspace/sections/WorkspaceEmptyState.tsx",
                        lineNumber: 28,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].topLinks,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].linkButton,
                                href: primaryHref,
                                children: primaryLabel
                            }, void 0, false, {
                                fileName: "[project]/app/tenant/workspace/sections/WorkspaceEmptyState.tsx",
                                lineNumber: 30,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].ghostButton,
                                href: "/create-family",
                                children: "Create Family Space"
                            }, void 0, false, {
                                fileName: "[project]/app/tenant/workspace/sections/WorkspaceEmptyState.tsx",
                                lineNumber: 31,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].ghostButton,
                                href: "/join-family",
                                children: "Join Family"
                            }, void 0, false, {
                                fileName: "[project]/app/tenant/workspace/sections/WorkspaceEmptyState.tsx",
                                lineNumber: 32,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/tenant/workspace/sections/WorkspaceEmptyState.tsx",
                        lineNumber: 29,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true)
        }, void 0, false, {
            fileName: "[project]/app/tenant/workspace/sections/WorkspaceEmptyState.tsx",
            lineNumber: 22,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/tenant/workspace/sections/WorkspaceEmptyState.tsx",
        lineNumber: 21,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/tenant/workspace/useTenantWorkspaceData.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useTenantWorkspaceData",
    ()=>useTenantWorkspaceData
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
const asRecord = (value)=>value && typeof value === "object" && !Array.isArray(value) ? value : {};
const normalize = (value)=>value.trim().toLowerCase();
const normalizeRelationshipType = (relationshipType)=>{
    if (relationshipType === "parent_of" || relationshipType === "guardian_of") {
        return "parent_of";
    }
    if (relationshipType === "spouse_of" || relationshipType === "divorced_from" || relationshipType === "separated_from" || relationshipType === "widowed_from") {
        return "spouse_of";
    }
    return null;
};
const isSymmetricType = (relationshipType)=>relationshipType === "spouse_of";
const hasRelationship = (relationships, personOneId, personTwoId, relationshipType)=>relationships.some((relationship)=>{
        const normalizedType = normalizeRelationshipType(relationship.relationshipType);
        if (normalizedType !== relationshipType) {
            return false;
        }
        if (relationship.personOne.id === personOneId && relationship.personTwo.id === personTwoId) {
            return true;
        }
        if (!isSymmetricType(relationshipType)) {
            return false;
        }
        return relationship.personOne.id === personTwoId && relationship.personTwo.id === personOneId;
    });
const inferMetadataRelationships = (people, relationships)=>{
    if (!people.length) {
        return relationships;
    }
    const byId = new Map(people.map((person)=>[
            person.id,
            person
        ]));
    const byName = new Map(people.map((person)=>[
            normalize(person.fullName),
            person
        ]));
    const inferred = [];
    const addInferred = (personOne, personTwo, relationshipType)=>{
        if (hasRelationship(relationships, personOne.id, personTwo.id, relationshipType) || hasRelationship(inferred, personOne.id, personTwo.id, relationshipType)) {
            return;
        }
        inferred.push({
            id: `inferred-${relationshipType}-${personOne.id}-${personTwo.id}`,
            relationshipType,
            status: "active",
            startDate: null,
            endDate: null,
            notes: "Derived from member relation mapping",
            metadata: {
                inferred: true,
                source: "person-metadata"
            },
            createdAt: new Date(0).toISOString(),
            personOne: {
                id: personOne.id,
                fullName: personOne.fullName
            },
            personTwo: {
                id: personTwo.id,
                fullName: personTwo.fullName
            }
        });
    };
    for (const person of people){
        const metadata = asRecord(person.metadata);
        const familyContext = asRecord(metadata.familyContext);
        const personal = asRecord(metadata.personal);
        const relationAnchorRaw = typeof familyContext.relationToAnchor === "string" ? familyContext.relationToAnchor.trim() : "";
        if (!relationAnchorRaw) {
            continue;
        }
        const anchor = byId.get(relationAnchorRaw) ?? byName.get(normalize(relationAnchorRaw));
        if (!anchor || anchor.id === person.id) {
            continue;
        }
        const relationTypeRaw = typeof familyContext.relationType === "string" ? familyContext.relationType : typeof personal.maritalStatus === "string" ? personal.maritalStatus : "";
        const relationType = relationTypeRaw.trim().toLowerCase();
        if (!relationType) {
            continue;
        }
        if ([
            "spouse",
            "husband",
            "wife"
        ].includes(relationType)) {
            addInferred(anchor, person, "spouse_of");
            continue;
        }
        if ([
            "son",
            "daughter",
            "child",
            "kid"
        ].includes(relationType)) {
            addInferred(anchor, person, "parent_of");
            continue;
        }
        if ([
            "father",
            "mother",
            "parent"
        ].includes(relationType)) {
            addInferred(person, anchor, "parent_of");
        }
    }
    return [
        ...relationships,
        ...inferred
    ];
};
const sanitizeRelationships = (relationships)=>relationships.flatMap((relationship)=>{
        const normalizedType = normalizeRelationshipType(relationship.relationshipType);
        if (!normalizedType) {
            return [];
        }
        return [
            {
                ...relationship,
                relationshipType: normalizedType
            }
        ];
    });
function useTenantWorkspaceData(initialPersonId) {
    const [session, setSession] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [activeWorkspaceId, setActiveWorkspaceId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [families, setFamilies] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [people, setPeople] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [relationships, setRelationships] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [selectedPersonId, setSelectedPersonId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(initialPersonId ?? "");
    const [message, setMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const load = async (targetPersonId)=>{
        setLoading(true);
        setMessage("");
        try {
            const [sessionResponse, activeWorkspaceResponse, familiesResponse] = await Promise.all([
                fetch("/api/auth/me", {
                    cache: "no-store"
                }),
                fetch("/api/auth/active-workspace", {
                    cache: "no-store"
                }),
                fetch("/api/families", {
                    cache: "no-store"
                })
            ]);
            if (!sessionResponse.ok || !familiesResponse.ok) {
                setMessage("Login and select an active Family Space to open the family home.");
                setLoading(false);
                return;
            }
            const sessionPayload = await sessionResponse.json();
            const activeWorkspacePayload = await activeWorkspaceResponse.json();
            const familiesPayload = await familiesResponse.json();
            const nextSession = sessionPayload.data ?? null;
            const nextFamilies = familiesPayload.data ?? [];
            const familyId = activeWorkspacePayload.data?.familyId && nextFamilies.some((family)=>family.id === activeWorkspacePayload.data?.familyId) ? activeWorkspacePayload.data.familyId : nextSession?.memberships[0]?.familyId ?? "";
            setSession(nextSession);
            setFamilies(nextFamilies);
            setActiveWorkspaceId(familyId);
            if (!familyId) {
                setMessage("No active Family Space found yet.");
                setLoading(false);
                return;
            }
            const [peopleResponse, relationshipsResponse] = await Promise.all([
                fetch(`/api/families/${familyId}/people`, {
                    cache: "no-store"
                }),
                fetch(`/api/families/${familyId}/relationships`, {
                    cache: "no-store"
                })
            ]);
            if (!peopleResponse.ok || !relationshipsResponse.ok) {
                setMessage("Unable to load Family Space details.");
                setLoading(false);
                return;
            }
            const peoplePayload = await peopleResponse.json();
            const relationshipPayload = await relationshipsResponse.json();
            const nextPeople = peoplePayload.data ?? [];
            const nextRelationships = sanitizeRelationships(relationshipPayload.data ?? []);
            const enrichedRelationships = inferMetadataRelationships(nextPeople, nextRelationships);
            setPeople(nextPeople);
            setRelationships(enrichedRelationships);
            setSelectedPersonId((current)=>{
                if (targetPersonId && nextPeople.some((person)=>person.id === targetPersonId)) {
                    return targetPersonId;
                }
                if (initialPersonId && nextPeople.some((person)=>person.id === initialPersonId)) {
                    return initialPersonId;
                }
                if (current && nextPeople.some((person)=>person.id === current)) {
                    return current;
                }
                return nextPeople[0]?.id ?? "";
            });
        } catch  {
            setMessage("Unable to load the Family Space right now.");
        } finally{
            setLoading(false);
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        void load();
    }, [
        initialPersonId
    ]);
    return {
        session,
        activeWorkspaceId,
        families,
        people,
        relationships,
        selectedPersonId,
        setSelectedPersonId,
        refresh: load,
        loading,
        message
    };
}
}),
"[project]/app/tenant/workspace/requests/workspace.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FamilyRequestsWorkspace",
    ()=>FamilyRequestsWorkspace
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$LoadingState$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/LoadingState.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$sections$2f$FamilyWorkspaceShell$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/tenant/workspace/sections/FamilyWorkspaceShell.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$sections$2f$PersonSpotlight$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/tenant/workspace/sections/PersonSpotlight.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$sections$2f$WorkspaceEmptyState$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/tenant/workspace/sections/WorkspaceEmptyState.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$useTenantWorkspaceData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/tenant/workspace/useTenantWorkspaceData.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/app/tenant/workspace/workspace.module.css [app-ssr] (css module)");
"use client";
;
;
;
;
;
;
;
;
const REQUEST_DATE_FORMATTER = new Intl.DateTimeFormat("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    timeZone: "Asia/Kolkata"
});
function FamilyRequestsWorkspace() {
    const { session, activeWorkspaceId, families, people, relationships, selectedPersonId, setSelectedPersonId, loading, message } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$useTenantWorkspaceData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTenantWorkspaceData"])();
    const [joinRequests, setJoinRequests] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [requestsLoading, setRequestsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [requestsMessage, setRequestsMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [submittingRequestId, setSubmittingRequestId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [undoingMergeAuditLogId, setUndoingMergeAuditLogId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [reviewState, setReviewState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    const formatRequestDate = (value)=>{
        const date = new Date(value);
        if (Number.isNaN(date.getTime())) {
            return value;
        }
        return REQUEST_DATE_FORMATTER.format(date);
    };
    const selectedFamily = families.find((family)=>family.id === activeWorkspaceId) ?? null;
    const selectedPerson = people.find((person)=>person.id === selectedPersonId) ?? people[0] ?? null;
    const activeMembership = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>session?.memberships.find((membership)=>membership.familyId === activeWorkspaceId) ?? null, [
        session,
        activeWorkspaceId
    ]);
    const isAdmin = activeMembership?.role === "admin";
    const loadJoinRequests = async ()=>{
        if (!selectedFamily || !isAdmin) {
            setJoinRequests([]);
            return;
        }
        setRequestsLoading(true);
        setRequestsMessage("");
        try {
            const response = await fetch(`/api/families/${selectedFamily.id}/join-requests`, {
                cache: "no-store"
            });
            const payload = await response.json();
            if (!response.ok) {
                throw new Error(payload.error ?? "Unable to load Family Requests.");
            }
            const rows = payload.data ?? [];
            setJoinRequests(rows);
            setReviewState((current)=>{
                const next = {
                    ...current
                };
                for (const request of rows){
                    const existing = next[request.id];
                    next[request.id] = {
                        role: existing?.role ?? request.requestedRole,
                        personId: request.targetPerson?.id ?? existing?.personId ?? people[0]?.id ?? "",
                        mappingMode: existing?.mappingMode ?? "relation",
                        relationType: existing?.relationType ?? "child",
                        primaryContactSource: existing?.primaryContactSource ?? "requester",
                        mergeConfirmed: existing?.mergeConfirmed ?? false
                    };
                }
                return next;
            });
        } catch (error) {
            setRequestsMessage(error instanceof Error ? error.message : "Unable to load Family Requests.");
        } finally{
            setRequestsLoading(false);
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        void loadJoinRequests();
    }, [
        selectedFamily?.id,
        isAdmin,
        people
    ]);
    const reviewRequest = async (requestId, decision)=>{
        if (!selectedFamily) {
            return;
        }
        setSubmittingRequestId(requestId);
        setRequestsMessage("");
        try {
            const state = reviewState[requestId];
            if (decision === "approved" && !state?.personId) {
                setRequestsMessage("Select a family member profile before approving this request.");
                return;
            }
            if (decision === "approved" && !state?.mappingMode) {
                setRequestsMessage("Choose mapping mode before approving this request.");
                return;
            }
            if (decision === "approved" && state?.mappingMode === "same_person" && !state.mergeConfirmed) {
                setRequestsMessage("Please confirm merge warning before approving.");
                return;
            }
            const response = await fetch(`/api/families/${selectedFamily.id}/join-requests/${requestId}/review`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    decision,
                    role: state?.role,
                    personId: state?.personId || undefined,
                    mappingMode: state?.mappingMode || undefined,
                    relationType: state?.mappingMode === "relation" ? state?.relationType : undefined,
                    primaryContactSource: state?.mappingMode === "same_person" ? state?.primaryContactSource : undefined
                })
            });
            const payload = await response.json();
            if (!response.ok) {
                throw new Error(payload.error ?? `Unable to ${decision === "approved" ? "approve" : "reject"} this request.`);
            }
            setRequestsMessage(decision === "approved" ? "Request approved." : "Request rejected.");
            await loadJoinRequests();
        } catch (error) {
            setRequestsMessage(error instanceof Error ? error.message : "Unable to update this request.");
        } finally{
            setSubmittingRequestId(null);
        }
    };
    const undoMerge = async (mergeAuditLogId)=>{
        if (!selectedFamily) {
            return;
        }
        setUndoingMergeAuditLogId(mergeAuditLogId);
        setRequestsMessage("");
        try {
            const response = await fetch(`/api/families/${selectedFamily.id}/person-merges/${mergeAuditLogId}/undo`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                }
            });
            const payload = await response.json();
            if (!response.ok) {
                throw new Error(payload.error ?? "Unable to undo merge.");
            }
            setRequestsMessage("Merge has been undone successfully.");
            await loadJoinRequests();
        } catch (error) {
            setRequestsMessage(error instanceof Error ? error.message : "Unable to undo merge.");
        } finally{
            setUndoingMergeAuditLogId(null);
        }
    };
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$sections$2f$WorkspaceEmptyState$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WorkspaceEmptyState"], {
            title: "Loading Family Requests",
            message: "We are gathering your Family Space context and incoming requests.",
            isLoading: true
        }, void 0, false, {
            fileName: "[project]/app/tenant/workspace/requests/workspace.tsx",
            lineNumber: 188,
            columnNumber: 7
        }, this);
    }
    if (!session || !selectedFamily) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$sections$2f$WorkspaceEmptyState$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WorkspaceEmptyState"], {
            title: "No Family Space Selected",
            message: message || "Select a Family Space first to review join requests and collaboration activity.",
            primaryLabel: "Open Family Space",
            primaryHref: "/family-space"
        }, void 0, false, {
            fileName: "[project]/app/tenant/workspace/requests/workspace.tsx",
            lineNumber: 198,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$sections$2f$FamilyWorkspaceShell$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FamilyWorkspaceShell"], {
        session: session,
        families: families,
        activeWorkspaceId: activeWorkspaceId,
        selectedFamily: selectedFamily,
        people: people,
        selectedPerson: selectedPerson,
        pageTitle: "Family Requests",
        pageSubtitle: "Review incoming join requests, decide roles, and grow this Family Space with the right boundaries.",
        activeView: "requests",
        canManageData: activeMembership?.role === "admin" || activeMembership?.role === "editor",
        onSwitchFamily: (familyId)=>{
            void fetch("/api/auth/active-workspace", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    familyId
                })
            }).then(()=>window.location.assign("/family-space/requests"));
        },
        topMessage: requestsMessage || message || undefined,
        rightRail: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$sections$2f$PersonSpotlight$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PersonSpotlight"], {
            person: selectedPerson,
            people: people,
            relationships: relationships,
            compact: true
        }, void 0, false, {
            fileName: "[project]/app/tenant/workspace/requests/workspace.tsx",
            lineNumber: 227,
            columnNumber: 18
        }, void 0),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].feedStack,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].panel,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].panelHeader,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                children: "Incoming Requests"
                            }, void 0, false, {
                                fileName: "[project]/app/tenant/workspace/requests/workspace.tsx",
                                lineNumber: 232,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: isAdmin ? "Approve or reject access requests for this Family Space. You can assign a final role and optionally connect the user to an existing member record." : "Family Requests are reviewed by Family Space admins. You can still join other families from the public join flow."
                            }, void 0, false, {
                                fileName: "[project]/app/tenant/workspace/requests/workspace.tsx",
                                lineNumber: 233,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/tenant/workspace/requests/workspace.tsx",
                        lineNumber: 231,
                        columnNumber: 11
                    }, this),
                    !isAdmin ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].treeEmpty,
                        children: [
                            "You currently have the ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                children: activeMembership?.role ?? "viewer"
                            }, void 0, false, {
                                fileName: "[project]/app/tenant/workspace/requests/workspace.tsx",
                                lineNumber: 242,
                                columnNumber: 38
                            }, this),
                            " role in this Family Space. Only admins can review incoming access requests."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/tenant/workspace/requests/workspace.tsx",
                        lineNumber: 241,
                        columnNumber: 13
                    }, this) : requestsLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].treeEmpty,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$LoadingState$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LoadingState"], {
                            compact: true,
                            title: "Loading Family Requests..."
                        }, void 0, false, {
                            fileName: "[project]/app/tenant/workspace/requests/workspace.tsx",
                            lineNumber: 246,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/tenant/workspace/requests/workspace.tsx",
                        lineNumber: 245,
                        columnNumber: 13
                    }, this) : joinRequests.length ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].requestList,
                        children: joinRequests.map((request)=>{
                            const state = reviewState[request.id] ?? {
                                role: request.requestedRole,
                                personId: "",
                                mappingMode: "relation",
                                relationType: "child",
                                primaryContactSource: "requester",
                                mergeConfirmed: false
                            };
                            const mappedPerson = people.find((person)=>person.id === state.personId);
                            const mappedMetadata = mappedPerson && typeof mappedPerson.metadata === "object" ? mappedPerson.metadata : {};
                            const mappedPersonal = mappedMetadata.personal && typeof mappedMetadata.personal === "object" ? mappedMetadata.personal : {};
                            const mappedContactMobile = typeof mappedPersonal.mobileNumber === "string" ? mappedPersonal.mobileNumber : "";
                            const requesterMobile = request.requestingUser.mobileNumber;
                            const numbersDiffer = Boolean(mappedContactMobile) && mappedContactMobile !== requesterMobile;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].requestCard,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].requestHeader,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                        children: request.requestingUser.fullName
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/tenant/workspace/requests/workspace.tsx",
                                                        lineNumber: 271,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: request.requestingUser.mobileNumber
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/tenant/workspace/requests/workspace.tsx",
                                                        lineNumber: 272,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/tenant/workspace/requests/workspace.tsx",
                                                lineNumber: 270,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].requestStatus} ${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"][`requestStatus${request.status[0].toUpperCase()}${request.status.slice(1)}`]}`,
                                                children: request.status
                                            }, void 0, false, {
                                                fileName: "[project]/app/tenant/workspace/requests/workspace.tsx",
                                                lineNumber: 274,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/tenant/workspace/requests/workspace.tsx",
                                        lineNumber: 269,
                                        columnNumber: 21
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].requestMeta,
                                        children: [
                                            "Requested role: ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: request.requestedRole
                                            }, void 0, false, {
                                                fileName: "[project]/app/tenant/workspace/requests/workspace.tsx",
                                                lineNumber: 279,
                                                columnNumber: 39
                                            }, this),
                                            " - Created ",
                                            formatRequestDate(request.createdAt)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/tenant/workspace/requests/workspace.tsx",
                                        lineNumber: 278,
                                        columnNumber: 21
                                    }, this),
                                    request.message ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].requestMessage,
                                        children: request.message
                                    }, void 0, false, {
                                        fileName: "[project]/app/tenant/workspace/requests/workspace.tsx",
                                        lineNumber: 281,
                                        columnNumber: 40
                                    }, this) : null,
                                    request.status === "pending" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].requestControls,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].field,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: "Final role"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/tenant/workspace/requests/workspace.tsx",
                                                                lineNumber: 287,
                                                                columnNumber: 29
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                value: state.role,
                                                                onChange: (event)=>setReviewState((current)=>({
                                                                            ...current,
                                                                            [request.id]: {
                                                                                ...state,
                                                                                role: event.target.value
                                                                            }
                                                                        })),
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        value: "viewer",
                                                                        children: "Viewer"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/tenant/workspace/requests/workspace.tsx",
                                                                        lineNumber: 300,
                                                                        columnNumber: 31
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        value: "contributor",
                                                                        children: "Contributor"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/tenant/workspace/requests/workspace.tsx",
                                                                        lineNumber: 301,
                                                                        columnNumber: 31
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        value: "editor",
                                                                        children: "Editor"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/tenant/workspace/requests/workspace.tsx",
                                                                        lineNumber: 302,
                                                                        columnNumber: 31
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        value: "admin",
                                                                        children: "Admin"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/tenant/workspace/requests/workspace.tsx",
                                                                        lineNumber: 303,
                                                                        columnNumber: 31
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/tenant/workspace/requests/workspace.tsx",
                                                                lineNumber: 288,
                                                                columnNumber: 29
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/tenant/workspace/requests/workspace.tsx",
                                                        lineNumber: 286,
                                                        columnNumber: 27
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].field,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: "Map to member profile"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/tenant/workspace/requests/workspace.tsx",
                                                                lineNumber: 307,
                                                                columnNumber: 29
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                value: state.personId,
                                                                onChange: (event)=>setReviewState((current)=>({
                                                                            ...current,
                                                                            [request.id]: {
                                                                                ...state,
                                                                                personId: event.target.value
                                                                            }
                                                                        })),
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        value: "",
                                                                        children: "Select member profile"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/tenant/workspace/requests/workspace.tsx",
                                                                        lineNumber: 320,
                                                                        columnNumber: 31
                                                                    }, this),
                                                                    people.map((person)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                            value: person.id,
                                                                            children: person.fullName
                                                                        }, person.id, false, {
                                                                            fileName: "[project]/app/tenant/workspace/requests/workspace.tsx",
                                                                            lineNumber: 322,
                                                                            columnNumber: 33
                                                                        }, this))
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/tenant/workspace/requests/workspace.tsx",
                                                                lineNumber: 308,
                                                                columnNumber: 29
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/tenant/workspace/requests/workspace.tsx",
                                                        lineNumber: 306,
                                                        columnNumber: 27
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].field,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: "Mapping mode"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/tenant/workspace/requests/workspace.tsx",
                                                                lineNumber: 329,
                                                                columnNumber: 29
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                value: state.mappingMode,
                                                                onChange: (event)=>setReviewState((current)=>({
                                                                            ...current,
                                                                            [request.id]: {
                                                                                ...state,
                                                                                mappingMode: event.target.value
                                                                            }
                                                                        })),
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        value: "relation",
                                                                        children: "Relation"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/tenant/workspace/requests/workspace.tsx",
                                                                        lineNumber: 342,
                                                                        columnNumber: 31
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        value: "same_person",
                                                                        children: "Same Person (Merge)"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/tenant/workspace/requests/workspace.tsx",
                                                                        lineNumber: 343,
                                                                        columnNumber: 31
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/tenant/workspace/requests/workspace.tsx",
                                                                lineNumber: 330,
                                                                columnNumber: 29
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/tenant/workspace/requests/workspace.tsx",
                                                        lineNumber: 328,
                                                        columnNumber: 27
                                                    }, this),
                                                    state.mappingMode === "relation" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].field,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: "Relationship"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/tenant/workspace/requests/workspace.tsx",
                                                                lineNumber: 348,
                                                                columnNumber: 31
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                value: state.relationType,
                                                                onChange: (event)=>setReviewState((current)=>({
                                                                            ...current,
                                                                            [request.id]: {
                                                                                ...state,
                                                                                relationType: event.target.value
                                                                            }
                                                                        })),
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        value: "spouse",
                                                                        children: "Spouse"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/tenant/workspace/requests/workspace.tsx",
                                                                        lineNumber: 361,
                                                                        columnNumber: 33
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        value: "child",
                                                                        children: "Child"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/tenant/workspace/requests/workspace.tsx",
                                                                        lineNumber: 362,
                                                                        columnNumber: 33
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        value: "parent",
                                                                        children: "Parent"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/tenant/workspace/requests/workspace.tsx",
                                                                        lineNumber: 363,
                                                                        columnNumber: 33
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/tenant/workspace/requests/workspace.tsx",
                                                                lineNumber: 349,
                                                                columnNumber: 31
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/tenant/workspace/requests/workspace.tsx",
                                                        lineNumber: 347,
                                                        columnNumber: 29
                                                    }, this) : null,
                                                    state.mappingMode === "same_person" && numbersDiffer ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].field,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: "Primary contact number"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/tenant/workspace/requests/workspace.tsx",
                                                                lineNumber: 369,
                                                                columnNumber: 31
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                value: state.primaryContactSource,
                                                                onChange: (event)=>setReviewState((current)=>({
                                                                            ...current,
                                                                            [request.id]: {
                                                                                ...state,
                                                                                primaryContactSource: event.target.value
                                                                            }
                                                                        })),
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        value: "requester",
                                                                        children: [
                                                                            "Requester (",
                                                                            requesterMobile,
                                                                            ")"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/tenant/workspace/requests/workspace.tsx",
                                                                        lineNumber: 382,
                                                                        columnNumber: 33
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        value: "approved",
                                                                        children: [
                                                                            "Approved profile (",
                                                                            mappedContactMobile,
                                                                            ")"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/tenant/workspace/requests/workspace.tsx",
                                                                        lineNumber: 383,
                                                                        columnNumber: 33
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/tenant/workspace/requests/workspace.tsx",
                                                                lineNumber: 370,
                                                                columnNumber: 31
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/tenant/workspace/requests/workspace.tsx",
                                                        lineNumber: 368,
                                                        columnNumber: 29
                                                    }, this) : null
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/tenant/workspace/requests/workspace.tsx",
                                                lineNumber: 285,
                                                columnNumber: 25
                                            }, this),
                                            state.mappingMode === "same_person" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].field,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "Merge warning"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/tenant/workspace/requests/workspace.tsx",
                                                        lineNumber: 390,
                                                        columnNumber: 29
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].requestMessage,
                                                                children: "Duplicate warning: this will merge requester profile into selected profile. Merge history is saved and can be undone."
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/tenant/workspace/requests/workspace.tsx",
                                                                lineNumber: 392,
                                                                columnNumber: 31
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        type: "checkbox",
                                                                        checked: state.mergeConfirmed,
                                                                        onChange: (event)=>setReviewState((current)=>({
                                                                                    ...current,
                                                                                    [request.id]: {
                                                                                        ...state,
                                                                                        mergeConfirmed: event.target.checked
                                                                                    }
                                                                                }))
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/tenant/workspace/requests/workspace.tsx",
                                                                        lineNumber: 396,
                                                                        columnNumber: 33
                                                                    }, this),
                                                                    " ",
                                                                    "I understand and want to merge these profiles"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/tenant/workspace/requests/workspace.tsx",
                                                                lineNumber: 395,
                                                                columnNumber: 31
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/tenant/workspace/requests/workspace.tsx",
                                                        lineNumber: 391,
                                                        columnNumber: 29
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/tenant/workspace/requests/workspace.tsx",
                                                lineNumber: 389,
                                                columnNumber: 27
                                            }, this) : null,
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].requestActions,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].primaryButton,
                                                        disabled: submittingRequestId === request.id || !state.personId || state.mappingMode === "same_person" && !state.mergeConfirmed,
                                                        onClick: ()=>void reviewRequest(request.id, "approved"),
                                                        children: submittingRequestId === request.id ? "Updating..." : "Approve"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/tenant/workspace/requests/workspace.tsx",
                                                        lineNumber: 416,
                                                        columnNumber: 27
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].secondaryButton,
                                                        disabled: submittingRequestId === request.id,
                                                        onClick: ()=>void reviewRequest(request.id, "rejected"),
                                                        children: "Reject"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/tenant/workspace/requests/workspace.tsx",
                                                        lineNumber: 424,
                                                        columnNumber: 27
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/tenant/workspace/requests/workspace.tsx",
                                                lineNumber: 415,
                                                columnNumber: 25
                                            }, this)
                                        ]
                                    }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].reviewOutcome,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: [
                                                    "Reviewed ",
                                                    request.reviewedAt ? formatRequestDate(request.reviewedAt) : "recently"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/tenant/workspace/requests/workspace.tsx",
                                                lineNumber: 436,
                                                columnNumber: 25
                                            }, this),
                                            request.targetPerson ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: [
                                                    "Linked member: ",
                                                    request.targetPerson.fullName
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/tenant/workspace/requests/workspace.tsx",
                                                lineNumber: 437,
                                                columnNumber: 49
                                            }, this) : null,
                                            request.status === "approved" && request.mergeAuditLogId ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].secondaryButton,
                                                disabled: undoingMergeAuditLogId === request.mergeAuditLogId,
                                                onClick: ()=>void undoMerge(request.mergeAuditLogId),
                                                children: undoingMergeAuditLogId === request.mergeAuditLogId ? "Undoing..." : "Undo Merge"
                                            }, void 0, false, {
                                                fileName: "[project]/app/tenant/workspace/requests/workspace.tsx",
                                                lineNumber: 439,
                                                columnNumber: 27
                                            }, this) : null
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/tenant/workspace/requests/workspace.tsx",
                                        lineNumber: 435,
                                        columnNumber: 23
                                    }, this)
                                ]
                            }, request.id, true, {
                                fileName: "[project]/app/tenant/workspace/requests/workspace.tsx",
                                lineNumber: 268,
                                columnNumber: 19
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/app/tenant/workspace/requests/workspace.tsx",
                        lineNumber: 249,
                        columnNumber: 13
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].treeEmpty,
                        children: "No incoming join requests yet for this Family Space."
                    }, void 0, false, {
                        fileName: "[project]/app/tenant/workspace/requests/workspace.tsx",
                        lineNumber: 455,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/tenant/workspace/requests/workspace.tsx",
                lineNumber: 230,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/tenant/workspace/requests/workspace.tsx",
            lineNumber: 229,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/tenant/workspace/requests/workspace.tsx",
        lineNumber: 208,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=_c6f1465f._.js.map