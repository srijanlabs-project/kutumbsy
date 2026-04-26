module.exports = [
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
const getRelationLabel = (person)=>{
    const metadata = asRecord(person.metadata);
    const familyContext = asRecord(metadata.familyContext);
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
"[project]/app/tenant/workspace/sections/FamilyTree.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FamilyTree",
    ()=>FamilyTree
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/app/tenant/workspace/workspace.module.css [app-ssr] (css module)");
"use client";
;
;
;
const MIN_ZOOM = 0.5;
const MAX_ZOOM = 2;
const ZOOM_STEP = 0.1;
const MAX_GENERATION_DEPTH = 3;
const VISIBLE_COLUMNS = 8;
const CARD_WIDTH = 200;
const CARD_GAP = 10;
const clamp = (value, min, max)=>Math.min(max, Math.max(min, value));
const escapeXml = (value)=>value.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;").replaceAll("'", "&apos;");
const isSpouseLikeRelationship = (relationshipType)=>relationshipType === "spouse_of" || relationshipType === "divorced_from" || relationshipType === "separated_from" || relationshipType === "widowed_from";
const addEdge = (graph, fromId, edge)=>{
    const edges = graph.get(fromId) ?? [];
    const exists = edges.some((current)=>current.toId === edge.toId && current.delta === edge.delta && current.label === edge.label);
    if (!exists) {
        edges.push(edge);
        graph.set(fromId, edges);
    }
};
const relationshipKey = (fromId, toId, relationshipType)=>`${fromId}|${toId}|${relationshipType}`;
const buildRelationshipGraph = (relationships)=>{
    const graph = new Map();
    const explicitRelationshipKeys = new Set();
    const parentToChildren = new Map();
    const spouseMap = new Map();
    for (const relationship of relationships){
        const sourceId = relationship.personOne.id;
        const targetId = relationship.personTwo.id;
        explicitRelationshipKeys.add(relationshipKey(sourceId, targetId, relationship.relationshipType));
        switch(relationship.relationshipType){
            case "parent_of":
                {
                    addEdge(graph, sourceId, {
                        toId: targetId,
                        delta: 1,
                        label: "Child"
                    });
                    addEdge(graph, targetId, {
                        toId: sourceId,
                        delta: -1,
                        label: "Parent"
                    });
                    const children = parentToChildren.get(sourceId) ?? new Set();
                    children.add(targetId);
                    parentToChildren.set(sourceId, children);
                    break;
                }
            case "sibling_of":
                {
                    addEdge(graph, sourceId, {
                        toId: targetId,
                        delta: 0,
                        label: "Sibling"
                    });
                    addEdge(graph, targetId, {
                        toId: sourceId,
                        delta: 0,
                        label: "Sibling"
                    });
                    break;
                }
            default:
                {
                    if (isSpouseLikeRelationship(relationship.relationshipType)) {
                        addEdge(graph, sourceId, {
                            toId: targetId,
                            delta: 0,
                            label: "Spouse"
                        });
                        addEdge(graph, targetId, {
                            toId: sourceId,
                            delta: 0,
                            label: "Spouse"
                        });
                        const sourceSpouses = spouseMap.get(sourceId) ?? new Set();
                        sourceSpouses.add(targetId);
                        spouseMap.set(sourceId, sourceSpouses);
                        const targetSpouses = spouseMap.get(targetId) ?? new Set();
                        targetSpouses.add(sourceId);
                        spouseMap.set(targetId, targetSpouses);
                    } else {
                        addEdge(graph, sourceId, {
                            toId: targetId,
                            delta: 0,
                            label: "Related"
                        });
                        addEdge(graph, targetId, {
                            toId: sourceId,
                            delta: 0,
                            label: "Related"
                        });
                    }
                }
        }
    }
    // Co-parent derivation without displaying "derived" wording.
    for (const [parentId, children] of parentToChildren.entries()){
        const spouses = spouseMap.get(parentId) ?? new Set();
        for (const spouseId of spouses){
            for (const childId of children){
                const hasExplicitParent = explicitRelationshipKeys.has(relationshipKey(spouseId, childId, "parent_of")) || explicitRelationshipKeys.has(relationshipKey(spouseId, childId, "guardian_of"));
                if (hasExplicitParent) {
                    continue;
                }
                addEdge(graph, spouseId, {
                    toId: childId,
                    delta: 1,
                    label: "Child"
                });
                addEdge(graph, childId, {
                    toId: spouseId,
                    delta: -1,
                    label: "Parent"
                });
            }
        }
    }
    return graph;
};
const buildTreeNodes = (selectedPersonId, relationships)=>{
    const graph = buildRelationshipGraph(relationships);
    const nodes = new Map();
    const queue = [
        {
            id: selectedPersonId,
            level: 0,
            hops: 0,
            viaLabel: "Self"
        }
    ];
    nodes.set(selectedPersonId, queue[0]);
    while(queue.length){
        const current = queue.shift();
        if (!current) {
            break;
        }
        const edges = graph.get(current.id) ?? [];
        for (const edge of edges){
            const nextLevel = current.level + edge.delta;
            if (Math.abs(nextLevel) > MAX_GENERATION_DEPTH) {
                continue;
            }
            const nextHops = current.hops + 1;
            const existing = nodes.get(edge.toId);
            const shouldReplace = !existing || nextHops < existing.hops || nextHops === existing.hops && Math.abs(nextLevel) < Math.abs(existing.level);
            if (!shouldReplace) {
                continue;
            }
            const nextNode = {
                id: edge.toId,
                level: nextLevel,
                hops: nextHops,
                viaLabel: edge.label
            };
            nodes.set(edge.toId, nextNode);
            queue.push(nextNode);
        }
    }
    return nodes;
};
const rowLabel = (level)=>{
    if (level === -3) return "Great Grandparents";
    if (level === -2) return "Grandparents";
    if (level === -1) return "Parents";
    if (level === 0) return "Selected Member and Spouse";
    if (level === 1) return "Children";
    if (level === 2) return "Grandchildren";
    if (level === 3) return "Great Grandchildren";
    return "Family";
};
const relationFromSelected = (person, node, selectedPerson)=>{
    if (node.hops === 0) {
        return "Self";
    }
    const gender = (person.gender ?? "").toLowerCase();
    const selectedGender = (selectedPerson?.gender ?? "").toLowerCase();
    if (node.hops === 1) {
        if (node.viaLabel === "Parent") {
            if (gender === "male") return "Father";
            if (gender === "female") return "Mother";
            return "Parent";
        }
        if (node.viaLabel === "Child") {
            if (gender === "male") return "Son";
            if (gender === "female") return "Daughter";
            return "Child";
        }
        if (node.viaLabel === "Sibling") {
            if (gender === "male") return "Brother";
            if (gender === "female") return "Sister";
            return "Sibling";
        }
        if (node.viaLabel === "Spouse") {
            if (selectedGender === "male") return "Wife";
            if (selectedGender === "female") return "Husband";
            return "Spouse";
        }
        return "Relative";
    }
    if (node.level === -2) {
        if (gender === "male") return "Grandfather";
        if (gender === "female") return "Grandmother";
        return "Grandparent";
    }
    if (node.level === -3) {
        if (gender === "male") return "Great Grandfather";
        if (gender === "female") return "Great Grandmother";
        return "Great Grandparent";
    }
    if (node.level === 2) {
        if (gender === "male") return "Grandson";
        if (gender === "female") return "Granddaughter";
        return "Grandchild";
    }
    if (node.level === 3) {
        if (gender === "male") return "Great Grandson";
        if (gender === "female") return "Great Granddaughter";
        return "Great Grandchild";
    }
    if (node.level < 0) {
        return "Family Elder";
    }
    if (node.level > 0) {
        return "Family Younger";
    }
    return "Same generation";
};
const rowCardsWidth = (count)=>{
    if (count <= 0) {
        return VISIBLE_COLUMNS * CARD_WIDTH + (VISIBLE_COLUMNS - 1) * CARD_GAP;
    }
    const cards = Math.max(VISIBLE_COLUMNS, count);
    return cards * CARD_WIDTH + (cards - 1) * CARD_GAP;
};
function FamilyTree({ people, relationships, selectedPersonId, onSelectPerson, memberCount, relationshipCount }) {
    const [zoom, setZoom] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(1);
    const [isModalOpen, setIsModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [exportMessage, setExportMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [dragState, setDragState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [pan, setPan] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        x: 24,
        y: 24
    });
    const viewportRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const peopleById = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>new Map(people.map((person)=>[
                person.id,
                person
            ])), [
        people
    ]);
    const selectedPerson = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>peopleById.get(selectedPersonId) ?? null, [
        peopleById,
        selectedPersonId
    ]);
    const treeNodes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>buildTreeNodes(selectedPersonId, relationships), [
        selectedPersonId,
        relationships
    ]);
    const levelRows = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const levels = new Map();
        for (const node of treeNodes.values()){
            const person = peopleById.get(node.id);
            if (!person) {
                continue;
            }
            const list = levels.get(node.level) ?? [];
            list.push({
                person,
                node
            });
            levels.set(node.level, list);
        }
        for (const list of levels.values()){
            list.sort((a, b)=>a.person.fullName.localeCompare(b.person.fullName));
        }
        const rows = [];
        for(let level = -MAX_GENERATION_DEPTH; level <= MAX_GENERATION_DEPTH; level += 1){
            const items = levels.get(level) ?? [];
            if (items.length) {
                rows.push({
                    level,
                    items
                });
            }
        }
        return rows;
    }, [
        treeNodes,
        peopleById
    ]);
    const maxRowItems = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>Math.max(VISIBLE_COLUMNS, ...levelRows.map((row)=>row.items.length)), [
        levelRows
    ]);
    const canvasWidth = rowCardsWidth(maxRowItems);
    const buildExportSvg = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        if (!selectedPerson) {
            return "";
        }
        const cardWidth = 208;
        const cardHeight = 72;
        const rowGap = 74;
        const margin = 36;
        const maxCols = Math.max(VISIBLE_COLUMNS, ...levelRows.map((row)=>row.items.length));
        const width = margin * 2 + maxCols * cardWidth + (maxCols - 1) * 10;
        const height = margin * 2 + levelRows.length * cardHeight + Math.max(0, levelRows.length - 1) * rowGap;
        const elements = [];
        levelRows.forEach((row, rowIndex)=>{
            const y = margin + rowIndex * (cardHeight + rowGap);
            const rowWidth = row.items.length * cardWidth + Math.max(0, row.items.length - 1) * 10;
            const startX = (width - rowWidth) / 2;
            elements.push(`<text x="${startX}" y="${y - 12}" fill="#5d4a35" font-size="12" font-family="Arial, sans-serif">${escapeXml(rowLabel(row.level))}</text>`);
            row.items.forEach((item, index)=>{
                const x = startX + index * (cardWidth + 10);
                const isSelected = item.person.id === selectedPerson.id;
                const fill = isSelected ? "#edf6ef" : "#fffdf8";
                const stroke = isSelected ? "#2d4a35" : "#cfdccb";
                elements.push(`<rect x="${x}" y="${y}" width="${cardWidth}" height="${cardHeight}" rx="12" ry="12" fill="${fill}" stroke="${stroke}" stroke-width="1.3"/>`);
                elements.push(`<text x="${x + 12}" y="${y + 30}" fill="#1e2420" font-size="14" font-weight="700" font-family="Arial, sans-serif">${escapeXml(item.person.fullName)}</text>`);
                elements.push(`<text x="${x + 12}" y="${y + 52}" fill="#5c6d60" font-size="12" font-family="Arial, sans-serif">${escapeXml(relationFromSelected(item.person, item.node, selectedPerson))}</text>`);
            });
        });
        return `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
      <rect x="0" y="0" width="${width}" height="${height}" fill="#f8f2e6"/>
      ${elements.join("")}
    </svg>`;
    }, [
        selectedPerson,
        levelRows
    ]);
    const applyZoomAroundCenter = (nextZoom)=>{
        const safeZoom = clamp(nextZoom, MIN_ZOOM, MAX_ZOOM);
        const viewport = viewportRef.current;
        if (!viewport) {
            setZoom(safeZoom);
            return;
        }
        setPan((current)=>{
            const centerX = viewport.clientWidth / 2;
            const centerY = viewport.clientHeight / 2;
            const worldX = (centerX - current.x) / zoom;
            const worldY = (centerY - current.y) / zoom;
            return {
                x: centerX - worldX * safeZoom,
                y: centerY - worldY * safeZoom
            };
        });
        setZoom(safeZoom);
    };
    const fitToScreen = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        const viewport = viewportRef.current;
        const canvas = canvasRef.current;
        if (!viewport || !canvas) {
            return;
        }
        const padding = 24;
        const widthScale = (viewport.clientWidth - padding * 2) / canvas.offsetWidth;
        const heightScale = (viewport.clientHeight - padding * 2) / canvas.offsetHeight;
        const nextZoom = clamp(Math.min(widthScale, heightScale), MIN_ZOOM, MAX_ZOOM);
        setZoom(nextZoom);
        setPan({
            x: (viewport.clientWidth - canvas.offsetWidth * nextZoom) / 2,
            y: (viewport.clientHeight - canvas.offsetHeight * nextZoom) / 2
        });
    }, []);
    const exportImage = ()=>{
        const svg = buildExportSvg();
        if (!svg) {
            setExportMessage("Select a member before exporting.");
            return;
        }
        const blob = new Blob([
            svg
        ], {
            type: "image/svg+xml;charset=utf-8"
        });
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = `kutumbsy-tree-${selectedPerson?.fullName?.replaceAll(" ", "-").toLowerCase() ?? "export"}.svg`;
        link.click();
        URL.revokeObjectURL(url);
        setExportMessage("Tree image exported as SVG.");
    };
    const exportPdf = ()=>{
        const svg = buildExportSvg();
        if (!svg) {
            setExportMessage("Select a member before exporting.");
            return;
        }
        const popup = window.open("", "_blank", "noopener,noreferrer,width=1280,height=900");
        if (!popup) {
            setExportMessage("Allow pop-ups to export PDF.");
            return;
        }
        popup.document.write(`
      <html>
        <head>
          <title>Kutumbsy Family Tree Export</title>
          <style>
            body { margin: 0; padding: 16px; background: #ffffff; font-family: Arial, sans-serif; }
            .wrap { display: flex; justify-content: center; }
            svg { width: 100%; height: auto; max-width: 1600px; border: 1px solid #ddd; }
            @page { size: landscape; margin: 10mm; }
          </style>
        </head>
        <body>
          <div class="wrap">${svg}</div>
        </body>
      </html>
    `);
        popup.document.close();
        popup.focus();
        popup.addEventListener("load", ()=>popup.print(), {
            once: true
        });
        setExportMessage("PDF print dialog opened.");
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        fitToScreen();
    }, [
        fitToScreen,
        selectedPersonId,
        relationships.length,
        isModalOpen,
        canvasWidth
    ]);
    const onViewportPointerDown = (event)=>{
        if (event.button !== 0) {
            return;
        }
        const element = event.target;
        if (element.closest("button, a, select, input, textarea, label")) {
            return;
        }
        event.currentTarget.setPointerCapture(event.pointerId);
        setDragState({
            pointerId: event.pointerId,
            startX: event.clientX,
            startY: event.clientY,
            startPanX: pan.x,
            startPanY: pan.y
        });
    };
    const onViewportPointerMove = (event)=>{
        if (!dragState || dragState.pointerId !== event.pointerId) {
            return;
        }
        setPan({
            x: dragState.startPanX + (event.clientX - dragState.startX),
            y: dragState.startPanY + (event.clientY - dragState.startY)
        });
    };
    const onViewportPointerUp = (event)=>{
        if (!dragState || dragState.pointerId !== event.pointerId) {
            return;
        }
        event.currentTarget.releasePointerCapture(event.pointerId);
        setDragState(null);
    };
    const renderPersonNode = (person, node)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "button",
            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].treePersonCard} ${person.id === selectedPersonId ? __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].treePersonCardPrimary : ""}`,
            onClick: ()=>onSelectPerson(person.id),
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].treePersonAvatarWrap,
                    children: person.photoUrl ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: person.photoUrl,
                        alt: person.fullName,
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].treePersonAvatarImage
                    }, void 0, false, {
                        fileName: "[project]/app/tenant/workspace/sections/FamilyTree.tsx",
                        lineNumber: 520,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].treePersonAvatarFallback,
                        children: person.fullName.slice(0, 1).toUpperCase()
                    }, void 0, false, {
                        fileName: "[project]/app/tenant/workspace/sections/FamilyTree.tsx",
                        lineNumber: 522,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/tenant/workspace/sections/FamilyTree.tsx",
                    lineNumber: 518,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].treePersonText,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                            children: person.fullName
                        }, void 0, false, {
                            fileName: "[project]/app/tenant/workspace/sections/FamilyTree.tsx",
                            lineNumber: 526,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: relationFromSelected(person, node, selectedPerson)
                        }, void 0, false, {
                            fileName: "[project]/app/tenant/workspace/sections/FamilyTree.tsx",
                            lineNumber: 527,
                            columnNumber: 9
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/tenant/workspace/sections/FamilyTree.tsx",
                    lineNumber: 525,
                    columnNumber: 7
                }, this)
            ]
        }, person.id, true, {
            fileName: "[project]/app/tenant/workspace/sections/FamilyTree.tsx",
            lineNumber: 512,
            columnNumber: 5
        }, this);
    const renderRowCards = (row)=>{
        if (row.level !== 0) {
            return row.items.map((item)=>renderPersonNode(item.person, item.node));
        }
        const selectedEntry = row.items.find((item)=>item.person.id === selectedPersonId);
        const spouseEntries = row.items.filter((item)=>item.node.hops === 1 && item.node.viaLabel === "Spouse");
        const spouseIds = new Set(spouseEntries.map((item)=>item.person.id));
        const remaining = row.items.filter((item)=>item.person.id !== selectedPersonId && !spouseIds.has(item.person.id));
        const rendered = [];
        if (selectedEntry) {
            rendered.push(renderPersonNode(selectedEntry.person, selectedEntry.node));
            for (const spouseEntry of spouseEntries){
                rendered.push(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].treePairJoin,
                    children: "+"
                }, `marriage-${selectedEntry.person.id}-${spouseEntry.person.id}`, false, {
                    fileName: "[project]/app/tenant/workspace/sections/FamilyTree.tsx",
                    lineNumber: 548,
                    columnNumber: 11
                }, this));
                rendered.push(renderPersonNode(spouseEntry.person, spouseEntry.node));
            }
        }
        for (const item of remaining){
            rendered.push(renderPersonNode(item.person, item.node));
        }
        return rendered;
    };
    const renderTreeCanvas = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].relationshipTree,
            children: selectedPerson ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: viewportRef,
                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].treeViewport} ${dragState ? __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].treeViewportDragging : ""}`,
                onPointerDown: onViewportPointerDown,
                onPointerMove: onViewportPointerMove,
                onPointerUp: onViewportPointerUp,
                onPointerCancel: onViewportPointerUp,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    ref: canvasRef,
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].treeCanvasInteractive,
                    style: {
                        transform: `translate(${pan.x}px, ${pan.y}px) scale(${zoom})`
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].treeCanvasStructured,
                        style: {
                            width: `${canvasWidth}px`
                        },
                        children: levelRows.map((row, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].treeRowSection,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].treeRowLabel,
                                        children: rowLabel(row.level)
                                    }, void 0, false, {
                                        fileName: "[project]/app/tenant/workspace/sections/FamilyTree.tsx",
                                        lineNumber: 582,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].treeRowCards,
                                        style: {
                                            justifyContent: row.items.length < VISIBLE_COLUMNS ? "center" : "flex-start"
                                        },
                                        children: renderRowCards(row)
                                    }, void 0, false, {
                                        fileName: "[project]/app/tenant/workspace/sections/FamilyTree.tsx",
                                        lineNumber: 583,
                                        columnNumber: 19
                                    }, this),
                                    index < levelRows.length - 1 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].treeStructuredConnector
                                    }, void 0, false, {
                                        fileName: "[project]/app/tenant/workspace/sections/FamilyTree.tsx",
                                        lineNumber: 589,
                                        columnNumber: 51
                                    }, this) : null
                                ]
                            }, row.level, true, {
                                fileName: "[project]/app/tenant/workspace/sections/FamilyTree.tsx",
                                lineNumber: 581,
                                columnNumber: 17
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/tenant/workspace/sections/FamilyTree.tsx",
                        lineNumber: 579,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/tenant/workspace/sections/FamilyTree.tsx",
                    lineNumber: 574,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/tenant/workspace/sections/FamilyTree.tsx",
                lineNumber: 566,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].treeEmpty,
                children: "Select a member to view the family tree."
            }, void 0, false, {
                fileName: "[project]/app/tenant/workspace/sections/FamilyTree.tsx",
                lineNumber: 596,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/tenant/workspace/sections/FamilyTree.tsx",
            lineNumber: 564,
            columnNumber: 5
        }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].panel} ${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].treePanel}`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].treeCta,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].treeCtaLabel,
                                children: "Relationship Tree"
                            }, void 0, false, {
                                fileName: "[project]/app/tenant/workspace/sections/FamilyTree.tsx",
                                lineNumber: 606,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].treeCtaTitle,
                                children: "3 up and 3 down around selected member"
                            }, void 0, false, {
                                fileName: "[project]/app/tenant/workspace/sections/FamilyTree.tsx",
                                lineNumber: 607,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].treeCtaSub,
                                children: [
                                    memberCount ?? people.length,
                                    " members - ",
                                    relationshipCount ?? relationships.length,
                                    " relationships",
                                    selectedPerson ? ` - centered on ${selectedPerson.fullName}` : ""
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/tenant/workspace/sections/FamilyTree.tsx",
                                lineNumber: 608,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].treeCtaActions,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].heroGhostButton,
                                    onClick: ()=>setIsModalOpen(true),
                                    children: "Open Full Screen Tree"
                                }, void 0, false, {
                                    fileName: "[project]/app/tenant/workspace/sections/FamilyTree.tsx",
                                    lineNumber: 613,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/tenant/workspace/sections/FamilyTree.tsx",
                                lineNumber: 612,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/tenant/workspace/sections/FamilyTree.tsx",
                        lineNumber: 605,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/tenant/workspace/sections/FamilyTree.tsx",
                    lineNumber: 604,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/tenant/workspace/sections/FamilyTree.tsx",
                lineNumber: 603,
                columnNumber: 7
            }, this),
            isModalOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].treeModalOverlay,
                role: "dialog",
                "aria-modal": "true",
                "aria-label": "Relationship Tree",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].panel} ${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].treePanel} ${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].treePanelFullscreen}`,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            "aria-label": "Close Relationship Tree",
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].treeModalClose,
                            onClick: ()=>setIsModalOpen(false),
                            children: "x"
                        }, void 0, false, {
                            fileName: "[project]/app/tenant/workspace/sections/FamilyTree.tsx",
                            lineNumber: 624,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].panelHeader,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    children: "Relationship Tree"
                                }, void 0, false, {
                                    fileName: "[project]/app/tenant/workspace/sections/FamilyTree.tsx",
                                    lineNumber: 634,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: "Showing up to 3 generations up and 3 down from selected member, with 8-person row viewport."
                                }, void 0, false, {
                                    fileName: "[project]/app/tenant/workspace/sections/FamilyTree.tsx",
                                    lineNumber: 635,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/tenant/workspace/sections/FamilyTree.tsx",
                            lineNumber: 633,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].treeToolbar,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].treeZoomGroup,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].secondaryButton,
                                            onClick: ()=>applyZoomAroundCenter(zoom - ZOOM_STEP),
                                            children: "Zoom Out"
                                        }, void 0, false, {
                                            fileName: "[project]/app/tenant/workspace/sections/FamilyTree.tsx",
                                            lineNumber: 642,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].secondaryButton,
                                            onClick: ()=>applyZoomAroundCenter(1),
                                            children: [
                                                Math.round(zoom * 100),
                                                "%"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/tenant/workspace/sections/FamilyTree.tsx",
                                            lineNumber: 649,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].secondaryButton,
                                            onClick: ()=>applyZoomAroundCenter(zoom + ZOOM_STEP),
                                            children: "Zoom In"
                                        }, void 0, false, {
                                            fileName: "[project]/app/tenant/workspace/sections/FamilyTree.tsx",
                                            lineNumber: 652,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/tenant/workspace/sections/FamilyTree.tsx",
                                    lineNumber: 641,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].secondaryButton,
                                    onClick: fitToScreen,
                                    children: "Fit to Screen"
                                }, void 0, false, {
                                    fileName: "[project]/app/tenant/workspace/sections/FamilyTree.tsx",
                                    lineNumber: 661,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].secondaryButton,
                                    onClick: exportImage,
                                    children: "Export Image"
                                }, void 0, false, {
                                    fileName: "[project]/app/tenant/workspace/sections/FamilyTree.tsx",
                                    lineNumber: 664,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].secondaryButton,
                                    onClick: exportPdf,
                                    children: "Export PDF"
                                }, void 0, false, {
                                    fileName: "[project]/app/tenant/workspace/sections/FamilyTree.tsx",
                                    lineNumber: 667,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/tenant/workspace/sections/FamilyTree.tsx",
                            lineNumber: 640,
                            columnNumber: 13
                        }, this),
                        exportMessage ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].inlineStatus,
                            children: exportMessage
                        }, void 0, false, {
                            fileName: "[project]/app/tenant/workspace/sections/FamilyTree.tsx",
                            lineNumber: 672,
                            columnNumber: 30
                        }, this) : null,
                        renderTreeCanvas()
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/tenant/workspace/sections/FamilyTree.tsx",
                    lineNumber: 623,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/tenant/workspace/sections/FamilyTree.tsx",
                lineNumber: 622,
                columnNumber: 9
            }, this) : null
        ]
    }, void 0, true);
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
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/app/tenant/workspace/workspace.module.css [app-ssr] (css module)");
;
;
;
function WorkspaceEmptyState({ title, message, primaryLabel = "Open Family Access", primaryHref = "/platform/auth" }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].page,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].emptyState,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    children: title
                }, void 0, false, {
                    fileName: "[project]/app/tenant/workspace/sections/WorkspaceEmptyState.tsx",
                    lineNumber: 20,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    children: message
                }, void 0, false, {
                    fileName: "[project]/app/tenant/workspace/sections/WorkspaceEmptyState.tsx",
                    lineNumber: 21,
                    columnNumber: 9
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
                            lineNumber: 23,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].ghostButton,
                            href: "/create-family",
                            children: "Create Family Space"
                        }, void 0, false, {
                            fileName: "[project]/app/tenant/workspace/sections/WorkspaceEmptyState.tsx",
                            lineNumber: 24,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/tenant/workspace/sections/WorkspaceEmptyState.tsx",
                    lineNumber: 22,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/tenant/workspace/sections/WorkspaceEmptyState.tsx",
            lineNumber: 19,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/tenant/workspace/sections/WorkspaceEmptyState.tsx",
        lineNumber: 18,
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
"[project]/app/tenant/workspace/members/[personId]/workspace.module.css [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "activeLink": "workspace-module__pGqFka__activeLink",
  "activeSidebarItem": "workspace-module__pGqFka__activeSidebarItem",
  "activeTab": "workspace-module__pGqFka__activeTab",
  "appLayout": "workspace-module__pGqFka__appLayout",
  "badgeChild": "workspace-module__pGqFka__badgeChild",
  "badgeFamily": "workspace-module__pGqFka__badgeFamily",
  "badgeSpouse": "workspace-module__pGqFka__badgeSpouse",
  "btn": "workspace-module__pGqFka__btn",
  "btnGhost": "workspace-module__pGqFka__btnGhost",
  "btnPrimary": "workspace-module__pGqFka__btnPrimary",
  "btnSecondary": "workspace-module__pGqFka__btnSecondary",
  "chipForest": "workspace-module__pGqFka__chipForest",
  "chipGold": "workspace-module__pGqFka__chipGold",
  "chipInk": "workspace-module__pGqFka__chipInk",
  "connArrow": "workspace-module__pGqFka__connArrow",
  "connAvatar": "workspace-module__pGqFka__connAvatar",
  "connDetail": "workspace-module__pGqFka__connDetail",
  "connInfo": "workspace-module__pGqFka__connInfo",
  "connName": "workspace-module__pGqFka__connName",
  "connRelBadge": "workspace-module__pGqFka__connRelBadge",
  "connectionRow": "workspace-module__pGqFka__connectionRow",
  "connectionsList": "workspace-module__pGqFka__connectionsList",
  "contentBody": "workspace-module__pGqFka__contentBody",
  "currentLineageNode": "workspace-module__pGqFka__currentLineageNode",
  "emptyText": "workspace-module__pGqFka__emptyText",
  "eventDays": "workspace-module__pGqFka__eventDays",
  "eventDaysLabel": "workspace-module__pGqFka__eventDaysLabel",
  "eventDaysNum": "workspace-module__pGqFka__eventDaysNum",
  "eventDetail": "workspace-module__pGqFka__eventDetail",
  "eventInfo": "workspace-module__pGqFka__eventInfo",
  "eventList": "workspace-module__pGqFka__eventList",
  "eventName": "workspace-module__pGqFka__eventName",
  "eventRow": "workspace-module__pGqFka__eventRow",
  "familyCard": "workspace-module__pGqFka__familyCard",
  "familyCardBadge": "workspace-module__pGqFka__familyCardBadge",
  "familyCardLoc": "workspace-module__pGqFka__familyCardLoc",
  "familyCardName": "workspace-module__pGqFka__familyCardName",
  "fullWidthBtn": "workspace-module__pGqFka__fullWidthBtn",
  "highlightValue": "workspace-module__pGqFka__highlightValue",
  "infoGrid": "workspace-module__pGqFka__infoGrid",
  "infoItemLabel": "workspace-module__pGqFka__infoItemLabel",
  "infoItemValue": "workspace-module__pGqFka__infoItemValue",
  "lineageArrow": "workspace-module__pGqFka__lineageArrow",
  "lineageAvatar": "workspace-module__pGqFka__lineageAvatar",
  "lineageBanner": "workspace-module__pGqFka__lineageBanner",
  "lineageName": "workspace-module__pGqFka__lineageName",
  "lineageNode": "workspace-module__pGqFka__lineageNode",
  "lineageRel": "workspace-module__pGqFka__lineageRel",
  "lineageStep": "workspace-module__pGqFka__lineageStep",
  "main": "workspace-module__pGqFka__main",
  "metaChip": "workspace-module__pGqFka__metaChip",
  "navAvatar": "workspace-module__pGqFka__navAvatar",
  "navBrand": "workspace-module__pGqFka__navBrand",
  "navBrandIcon": "workspace-module__pGqFka__navBrandIcon",
  "navLinks": "workspace-module__pGqFka__navLinks",
  "page": "workspace-module__pGqFka__page",
  "profileActions": "workspace-module__pGqFka__profileActions",
  "profileHeader": "workspace-module__pGqFka__profileHeader",
  "profileIdentity": "workspace-module__pGqFka__profileIdentity",
  "profileMeta": "workspace-module__pGqFka__profileMeta",
  "profileName": "workspace-module__pGqFka__profileName",
  "profilePhoto": "workspace-module__pGqFka__profilePhoto",
  "profilePhotoBadge": "workspace-module__pGqFka__profilePhotoBadge",
  "profilePhotoImage": "workspace-module__pGqFka__profilePhotoImage",
  "profileQuickFacts": "workspace-module__pGqFka__profileQuickFacts",
  "quickFact": "workspace-module__pGqFka__quickFact",
  "rightPanel": "workspace-module__pGqFka__rightPanel",
  "rpanelHeading": "workspace-module__pGqFka__rpanelHeading",
  "rpanelSection": "workspace-module__pGqFka__rpanelSection",
  "sectionCard": "workspace-module__pGqFka__sectionCard",
  "sectionCardBody": "workspace-module__pGqFka__sectionCardBody",
  "sectionCardHeader": "workspace-module__pGqFka__sectionCardHeader",
  "sectionCardTitle": "workspace-module__pGqFka__sectionCardTitle",
  "sectionMeta": "workspace-module__pGqFka__sectionMeta",
  "selectedAvatar": "workspace-module__pGqFka__selectedAvatar",
  "selectedBlock": "workspace-module__pGqFka__selectedBlock",
  "selectedCard": "workspace-module__pGqFka__selectedCard",
  "selectedDetails": "workspace-module__pGqFka__selectedDetails",
  "selectedHead": "workspace-module__pGqFka__selectedHead",
  "selectedName": "workspace-module__pGqFka__selectedName",
  "selectedSub": "workspace-module__pGqFka__selectedSub",
  "selectedTags": "workspace-module__pGqFka__selectedTags",
  "sidebar": "workspace-module__pGqFka__sidebar",
  "sidebarContext": "workspace-module__pGqFka__sidebarContext",
  "sidebarContextFamily": "workspace-module__pGqFka__sidebarContextFamily",
  "sidebarContextLabel": "workspace-module__pGqFka__sidebarContextLabel",
  "sidebarContextUser": "workspace-module__pGqFka__sidebarContextUser",
  "sidebarNavItem": "workspace-module__pGqFka__sidebarNavItem",
  "sidebarNavLabel": "workspace-module__pGqFka__sidebarNavLabel",
  "snapshotCell": "workspace-module__pGqFka__snapshotCell",
  "snapshotGrid": "workspace-module__pGqFka__snapshotGrid",
  "snapshotLabel": "workspace-module__pGqFka__snapshotLabel",
  "snapshotNum": "workspace-module__pGqFka__snapshotNum",
  "tab": "workspace-module__pGqFka__tab",
  "tabBar": "workspace-module__pGqFka__tabBar",
  "tabCount": "workspace-module__pGqFka__tabCount",
  "timeline": "workspace-module__pGqFka__timeline",
  "timelineDetail": "workspace-module__pGqFka__timelineDetail",
  "timelineItem": "workspace-module__pGqFka__timelineItem",
  "timelineTitle": "workspace-module__pGqFka__timelineTitle",
  "timelineWhen": "workspace-module__pGqFka__timelineWhen",
  "topnav": "workspace-module__pGqFka__topnav",
});
}),
"[project]/app/tenant/workspace/members/[personId]/workspace.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MemberProfileWorkspace",
    ()=>MemberProfileWorkspace
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/tenant/workspace/helpers.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$sections$2f$FamilyTree$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/tenant/workspace/sections/FamilyTree.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$sections$2f$WorkspaceEmptyState$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/tenant/workspace/sections/WorkspaceEmptyState.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$useTenantWorkspaceData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/tenant/workspace/useTenantWorkspaceData.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$members$2f5b$personId$5d2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/app/tenant/workspace/members/[personId]/workspace.module.css [app-ssr] (css module)");
"use client";
;
;
;
;
;
;
;
;
const initials = (fullName)=>fullName.split(" ").filter(Boolean).slice(0, 2).map((part)=>part[0]?.toUpperCase() ?? "").join("");
const getUpcomingBirthdays = (people)=>{
    const today = new Date();
    return people.filter((person)=>person.dateOfBirth).map((person)=>{
        const birth = new Date(person.dateOfBirth);
        const next = new Date(today.getFullYear(), birth.getMonth(), birth.getDate());
        if (next < today) {
            next.setFullYear(today.getFullYear() + 1);
        }
        const days = Math.ceil((next.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
        return {
            person,
            days
        };
    }).sort((a, b)=>a.days - b.days).slice(0, 4);
};
const findPersonById = (people, personId)=>people.find((person)=>person.id === personId) ?? null;
const buildLineage = (selectedPerson, people, relationships)=>{
    const chain = [
        selectedPerson
    ];
    let current = selectedPerson;
    const visited = new Set([
        selectedPerson.id
    ]);
    for(let depth = 0; depth < 3; depth += 1){
        const parentRel = relationships.find((relationship)=>relationship.relationshipType === "parent_of" && relationship.personTwo.id === current.id);
        if (!parentRel) {
            break;
        }
        const parent = findPersonById(people, parentRel.personOne.id);
        if (!parent || visited.has(parent.id)) {
            break;
        }
        chain.unshift(parent);
        visited.add(parent.id);
        current = parent;
    }
    return chain;
};
const birthdayLabel = (days)=>{
    if (days <= 0) {
        return "Today";
    }
    if (days === 1) {
        return "Tomorrow";
    }
    return `${days} days`;
};
const relationshipCountFor = (relationships, personId)=>relationships.filter((relationship)=>relationship.personOne.id === personId || relationship.personTwo.id === personId).length;
function MemberProfileWorkspace({ personId }) {
    const { session, activeWorkspaceId, families, people, relationships, selectedPersonId, setSelectedPersonId, loading, message } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$useTenantWorkspaceData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTenantWorkspaceData"])(personId);
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("overview");
    const selectedFamily = families.find((family)=>family.id === activeWorkspaceId) ?? null;
    const selectedPerson = people.find((person)=>person.id === selectedPersonId) ?? null;
    const peopleById = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>new Map(people.map((person)=>[
                person.id,
                person
            ])), [
        people
    ]);
    const immediate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>selectedPerson ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["buildImmediateFamilyRelations"])(people, relationships, selectedPerson.id, selectedPerson.gender) : null, [
        people,
        relationships,
        selectedPerson
    ]);
    const familyConnections = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (!selectedPerson || !immediate) {
            return [];
        }
        const all = [
            ...immediate.spouses.map((item)=>({
                    id: item.id,
                    relation: immediate.spouseLabel,
                    badge: immediate.spouseLabel,
                    badgeType: "spouse"
                })),
            ...immediate.fathers.map((item)=>({
                    id: item.id,
                    relation: "Father",
                    badge: "Parent",
                    badgeType: "family"
                })),
            ...immediate.mothers.map((item)=>({
                    id: item.id,
                    relation: "Mother",
                    badge: "Parent",
                    badgeType: "family"
                })),
            ...immediate.brothers.map((item)=>({
                    id: item.id,
                    relation: "Brother",
                    badge: "Sibling",
                    badgeType: "family"
                })),
            ...immediate.sisters.map((item)=>({
                    id: item.id,
                    relation: "Sister",
                    badge: "Sibling",
                    badgeType: "family"
                })),
            ...immediate.sons.map((item)=>({
                    id: item.id,
                    relation: "Son",
                    badge: "Child",
                    badgeType: "child"
                })),
            ...immediate.daughters.map((item)=>({
                    id: item.id,
                    relation: "Daughter",
                    badge: "Child",
                    badgeType: "child"
                }))
        ];
        const connections = [];
        for (const item of all){
            const person = peopleById.get(item.id);
            if (!person) {
                continue;
            }
            connections.push({
                ...item,
                person
            });
        }
        return connections.sort((a, b)=>a.person.fullName.localeCompare(b.person.fullName));
    }, [
        selectedPerson,
        immediate,
        peopleById
    ]);
    const related = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>selectedPerson ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["buildRelationshipSummary"])(relationships, selectedPerson.id) : [], [
        relationships,
        selectedPerson
    ]);
    const events = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>selectedPerson ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getProfileEvents"])(selectedPerson, relationships).slice(0, 10) : [], [
        selectedPerson,
        relationships
    ]);
    const lineage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>selectedPerson ? buildLineage(selectedPerson, people, relationships) : [], [
        selectedPerson,
        people,
        relationships
    ]);
    const upcomingBirthdays = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>getUpcomingBirthdays(people), [
        people
    ]);
    const personal = selectedPerson ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPersonalData"])(selectedPerson) : {};
    const generationLabel = selectedPerson ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getGenerationLabel"])(selectedPerson) : "";
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$sections$2f$WorkspaceEmptyState$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WorkspaceEmptyState"], {
            title: "Loading member profile",
            message: "We are gathering the family member record and their relationship context."
        }, void 0, false, {
            fileName: "[project]/app/tenant/workspace/members/[personId]/workspace.tsx",
            lineNumber: 168,
            columnNumber: 7
        }, this);
    }
    if (!session || !selectedFamily || !selectedPerson || !immediate) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$sections$2f$WorkspaceEmptyState$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WorkspaceEmptyState"], {
            title: "Member profile not ready",
            message: message || "This family member could not be loaded in the active workspace."
        }, void 0, false, {
            fileName: "[project]/app/tenant/workspace/members/[personId]/workspace.tsx",
            lineNumber: 177,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$members$2f5b$personId$5d2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].page,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$members$2f5b$personId$5d2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].topnav,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$members$2f5b$personId$5d2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].navBrand,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$members$2f5b$personId$5d2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].navBrandIcon,
                                children: "T"
                            }, void 0, false, {
                                fileName: "[project]/app/tenant/workspace/members/[personId]/workspace.tsx",
                                lineNumber: 188,
                                columnNumber: 11
                            }, this),
                            "Kutumbsy"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/tenant/workspace/members/[personId]/workspace.tsx",
                        lineNumber: 187,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$members$2f5b$personId$5d2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].navLinks,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/platform/auth",
                                    children: "Dashboard"
                                }, void 0, false, {
                                    fileName: "[project]/app/tenant/workspace/members/[personId]/workspace.tsx",
                                    lineNumber: 192,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/tenant/workspace/members/[personId]/workspace.tsx",
                                lineNumber: 192,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/family-space",
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$members$2f5b$personId$5d2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].activeLink,
                                    children: "Family Space"
                                }, void 0, false, {
                                    fileName: "[project]/app/tenant/workspace/members/[personId]/workspace.tsx",
                                    lineNumber: 193,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/tenant/workspace/members/[personId]/workspace.tsx",
                                lineNumber: 193,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/family-space/requests",
                                    children: "Requests"
                                }, void 0, false, {
                                    fileName: "[project]/app/tenant/workspace/members/[personId]/workspace.tsx",
                                    lineNumber: 194,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/tenant/workspace/members/[personId]/workspace.tsx",
                                lineNumber: 194,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/platform/admin/data-capture",
                                    children: "Add Member"
                                }, void 0, false, {
                                    fileName: "[project]/app/tenant/workspace/members/[personId]/workspace.tsx",
                                    lineNumber: 195,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/tenant/workspace/members/[personId]/workspace.tsx",
                                lineNumber: 195,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/platform/admin/security",
                                    children: "Security"
                                }, void 0, false, {
                                    fileName: "[project]/app/tenant/workspace/members/[personId]/workspace.tsx",
                                    lineNumber: 196,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/tenant/workspace/members/[personId]/workspace.tsx",
                                lineNumber: 196,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/tenant/workspace/members/[personId]/workspace.tsx",
                        lineNumber: 191,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$members$2f5b$personId$5d2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].navAvatar,
                        children: initials(session.user.fullName) || "U"
                    }, void 0, false, {
                        fileName: "[project]/app/tenant/workspace/members/[personId]/workspace.tsx",
                        lineNumber: 198,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/tenant/workspace/members/[personId]/workspace.tsx",
                lineNumber: 186,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$members$2f5b$personId$5d2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].appLayout,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$members$2f5b$personId$5d2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].sidebar,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$members$2f5b$personId$5d2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].sidebarContext,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$members$2f5b$personId$5d2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].sidebarContextLabel,
                                        children: "Current Context"
                                    }, void 0, false, {
                                        fileName: "[project]/app/tenant/workspace/members/[personId]/workspace.tsx",
                                        lineNumber: 204,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$members$2f5b$personId$5d2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].sidebarContextFamily,
                                        children: selectedFamily.name
                                    }, void 0, false, {
                                        fileName: "[project]/app/tenant/workspace/members/[personId]/workspace.tsx",
                                        lineNumber: 205,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$members$2f5b$personId$5d2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].sidebarContextUser,
                                        children: session.user.fullName
                                    }, void 0, false, {
                                        fileName: "[project]/app/tenant/workspace/members/[personId]/workspace.tsx",
                                        lineNumber: 206,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/tenant/workspace/members/[personId]/workspace.tsx",
                                lineNumber: 203,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$members$2f5b$personId$5d2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].sidebarNavLabel,
                                children: "Navigate"
                            }, void 0, false, {
                                fileName: "[project]/app/tenant/workspace/members/[personId]/workspace.tsx",
                                lineNumber: 208,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$members$2f5b$personId$5d2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].sidebarNavItem,
                                href: "/platform/auth",
                                children: "Platform Dashboard"
                            }, void 0, false, {
                                fileName: "[project]/app/tenant/workspace/members/[personId]/workspace.tsx",
                                lineNumber: 209,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$members$2f5b$personId$5d2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].sidebarNavItem,
                                href: "/family-space",
                                children: "Family Space Home"
                            }, void 0, false, {
                                fileName: "[project]/app/tenant/workspace/members/[personId]/workspace.tsx",
                                lineNumber: 210,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$members$2f5b$personId$5d2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].sidebarNavItem} ${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$members$2f5b$personId$5d2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].activeSidebarItem}`,
                                href: `/family-space/members/${selectedPerson.id}`,
                                children: "Member Profile"
                            }, void 0, false, {
                                fileName: "[project]/app/tenant/workspace/members/[personId]/workspace.tsx",
                                lineNumber: 211,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$members$2f5b$personId$5d2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].sidebarNavItem,
                                href: "/platform/admin/data-capture",
                                children: "Data Capture"
                            }, void 0, false, {
                                fileName: "[project]/app/tenant/workspace/members/[personId]/workspace.tsx",
                                lineNumber: 214,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$members$2f5b$personId$5d2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].sidebarNavItem,
                                href: "/family-space/requests",
                                children: "Join Requests"
                            }, void 0, false, {
                                fileName: "[project]/app/tenant/workspace/members/[personId]/workspace.tsx",
                                lineNumber: 215,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/tenant/workspace/members/[personId]/workspace.tsx",
                        lineNumber: 202,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$members$2f5b$personId$5d2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].main,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$members$2f5b$personId$5d2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].lineageBanner,
                                children: lineage.map((person, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$members$2f5b$personId$5d2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].lineageStep,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$members$2f5b$personId$5d2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].lineageNode} ${person.id === selectedPerson.id ? __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$members$2f5b$personId$5d2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].currentLineageNode : ""}`,
                                                onClick: ()=>setSelectedPersonId(person.id),
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$members$2f5b$personId$5d2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].lineageAvatar,
                                                        children: initials(person.fullName)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/tenant/workspace/members/[personId]/workspace.tsx",
                                                        lineNumber: 227,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$members$2f5b$personId$5d2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].lineageName,
                                                                children: person.fullName
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/tenant/workspace/members/[personId]/workspace.tsx",
                                                                lineNumber: 229,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$members$2f5b$personId$5d2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].lineageRel,
                                                                children: person.id === selectedPerson.id ? "Selected" : "Ancestor"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/tenant/workspace/members/[personId]/workspace.tsx",
                                                                lineNumber: 230,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/tenant/workspace/members/[personId]/workspace.tsx",
                                                        lineNumber: 228,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/tenant/workspace/members/[personId]/workspace.tsx",
                                                lineNumber: 222,
                                                columnNumber: 17
                                            }, this),
                                            index < lineage.length - 1 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$members$2f5b$personId$5d2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].lineageArrow,
                                                children: ">"
                                            }, void 0, false, {
                                                fileName: "[project]/app/tenant/workspace/members/[personId]/workspace.tsx",
                                                lineNumber: 233,
                                                columnNumber: 47
                                            }, this) : null
                                        ]
                                    }, person.id, true, {
                                        fileName: "[project]/app/tenant/workspace/members/[personId]/workspace.tsx",
                                        lineNumber: 221,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/app/tenant/workspace/members/[personId]/workspace.tsx",
                                lineNumber: 219,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$members$2f5b$personId$5d2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].profileHeader,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$members$2f5b$personId$5d2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].profilePhoto,
                                        children: [
                                            selectedPerson.photoUrl ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                src: selectedPerson.photoUrl,
                                                alt: selectedPerson.fullName,
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$members$2f5b$personId$5d2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].profilePhotoImage
                                            }, void 0, false, {
                                                fileName: "[project]/app/tenant/workspace/members/[personId]/workspace.tsx",
                                                lineNumber: 241,
                                                columnNumber: 17
                                            }, this) : initials(selectedPerson.fullName),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$members$2f5b$personId$5d2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].profilePhotoBadge,
                                                children: "✓"
                                            }, void 0, false, {
                                                fileName: "[project]/app/tenant/workspace/members/[personId]/workspace.tsx",
                                                lineNumber: 245,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/tenant/workspace/members/[personId]/workspace.tsx",
                                        lineNumber: 239,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$members$2f5b$personId$5d2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].profileIdentity,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$members$2f5b$personId$5d2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].profileName,
                                                children: selectedPerson.fullName
                                            }, void 0, false, {
                                                fileName: "[project]/app/tenant/workspace/members/[personId]/workspace.tsx",
                                                lineNumber: 249,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$members$2f5b$personId$5d2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].profileMeta,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$members$2f5b$personId$5d2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].metaChip} ${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$members$2f5b$personId$5d2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].chipForest}`,
                                                        children: selectedPerson.gender || "Unspecified"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/tenant/workspace/members/[personId]/workspace.tsx",
                                                        lineNumber: 251,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$members$2f5b$personId$5d2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].metaChip} ${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$members$2f5b$personId$5d2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].chipGold}`,
                                                        children: selectedPerson.isDeceased ? "Deceased" : "Living"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/tenant/workspace/members/[personId]/workspace.tsx",
                                                        lineNumber: 252,
                                                        columnNumber: 17
                                                    }, this),
                                                    generationLabel ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$members$2f5b$personId$5d2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].metaChip} ${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$members$2f5b$personId$5d2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].chipInk}`,
                                                        children: generationLabel
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/tenant/workspace/members/[personId]/workspace.tsx",
                                                        lineNumber: 253,
                                                        columnNumber: 36
                                                    }, this) : null
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/tenant/workspace/members/[personId]/workspace.tsx",
                                                lineNumber: 250,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$members$2f5b$personId$5d2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].profileQuickFacts,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$members$2f5b$personId$5d2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].quickFact,
                                                        children: [
                                                            "DOB: ",
                                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatDate"])(selectedPerson.dateOfBirth)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/tenant/workspace/members/[personId]/workspace.tsx",
                                                        lineNumber: 256,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$members$2f5b$personId$5d2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].quickFact,
                                                        children: [
                                                            "City: ",
                                                            typeof personal.currentCity === "string" && personal.currentCity ? personal.currentCity : "Not added"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/tenant/workspace/members/[personId]/workspace.tsx",
                                                        lineNumber: 257,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$members$2f5b$personId$5d2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].quickFact,
                                                        children: [
                                                            "Origin: ",
                                                            selectedPerson.nativeVillage || "Not added"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/tenant/workspace/members/[personId]/workspace.tsx",
                                                        lineNumber: 258,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$members$2f5b$personId$5d2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].quickFact,
                                                        children: [
                                                            "Linked: ",
                                                            relationshipCountFor(relationships, selectedPerson.id),
                                                            " relationship",
                                                            relationshipCountFor(relationships, selectedPerson.id) === 1 ? "" : "s"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/tenant/workspace/members/[personId]/workspace.tsx",
                                                        lineNumber: 259,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/tenant/workspace/members/[personId]/workspace.tsx",
                                                lineNumber: 255,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/tenant/workspace/members/[personId]/workspace.tsx",
                                        lineNumber: 248,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$members$2f5b$personId$5d2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].profileActions,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$members$2f5b$personId$5d2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].btn} ${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$members$2f5b$personId$5d2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].btnPrimary}`,
                                                href: "/platform/admin/data-capture",
                                                children: "Edit Profile"
                                            }, void 0, false, {
                                                fileName: "[project]/app/tenant/workspace/members/[personId]/workspace.tsx",
                                                lineNumber: 266,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$members$2f5b$personId$5d2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].btn} ${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$members$2f5b$personId$5d2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].btnSecondary}`,
                                                onClick: ()=>setActiveTab("tree"),
                                                children: "Open in Tree"
                                            }, void 0, false, {
                                                fileName: "[project]/app/tenant/workspace/members/[personId]/workspace.tsx",
                                                lineNumber: 267,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/tenant/workspace/members/[personId]/workspace.tsx",
                                        lineNumber: 265,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/tenant/workspace/members/[personId]/workspace.tsx",
                                lineNumber: 238,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$members$2f5b$personId$5d2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].tabBar,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$members$2f5b$personId$5d2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].tab} ${activeTab === "overview" ? __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$members$2f5b$personId$5d2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].activeTab : ""}`,
                                        onClick: ()=>setActiveTab("overview"),
                                        children: "Overview"
                                    }, void 0, false, {
                                        fileName: "[project]/app/tenant/workspace/members/[personId]/workspace.tsx",
                                        lineNumber: 272,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$members$2f5b$personId$5d2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].tab} ${activeTab === "family" ? __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$members$2f5b$personId$5d2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].activeTab : ""}`,
                                        onClick: ()=>setActiveTab("family"),
                                        children: [
                                            "Family ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$members$2f5b$personId$5d2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].tabCount,
                                                children: familyConnections.length
                                            }, void 0, false, {
                                                fileName: "[project]/app/tenant/workspace/members/[personId]/workspace.tsx",
                                                lineNumber: 274,
                                                columnNumber: 22
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/tenant/workspace/members/[personId]/workspace.tsx",
                                        lineNumber: 273,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$members$2f5b$personId$5d2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].tab} ${activeTab === "tree" ? __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$members$2f5b$personId$5d2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].activeTab : ""}`,
                                        onClick: ()=>setActiveTab("tree"),
                                        children: "Relationship Tree"
                                    }, void 0, false, {
                                        fileName: "[project]/app/tenant/workspace/members/[personId]/workspace.tsx",
                                        lineNumber: 276,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$members$2f5b$personId$5d2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].tab} ${activeTab === "timeline" ? __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$members$2f5b$personId$5d2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].activeTab : ""}`,
                                        onClick: ()=>setActiveTab("timeline"),
                                        children: "Timeline"
                                    }, void 0, false, {
                                        fileName: "[project]/app/tenant/workspace/members/[personId]/workspace.tsx",
                                        lineNumber: 277,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/tenant/workspace/members/[personId]/workspace.tsx",
                                lineNumber: 271,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$members$2f5b$personId$5d2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].contentBody,
                                children: [
                                    activeTab === "overview" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$members$2f5b$personId$5d2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].sectionCard,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$members$2f5b$personId$5d2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].sectionCardHeader,
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$members$2f5b$personId$5d2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].sectionCardTitle,
                                                            children: "Personal Information"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/tenant/workspace/members/[personId]/workspace.tsx",
                                                            lineNumber: 285,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/tenant/workspace/members/[personId]/workspace.tsx",
                                                        lineNumber: 284,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$members$2f5b$personId$5d2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].sectionCardBody,
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$members$2f5b$personId$5d2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].infoGrid,
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$members$2f5b$personId$5d2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].infoItemLabel,
                                                                            children: "Full Name"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/tenant/workspace/members/[personId]/workspace.tsx",
                                                                            lineNumber: 289,
                                                                            columnNumber: 28
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$members$2f5b$personId$5d2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].infoItemValue,
                                                                            children: selectedPerson.fullName
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/tenant/workspace/members/[personId]/workspace.tsx",
                                                                            lineNumber: 289,
                                                                            columnNumber: 81
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/tenant/workspace/members/[personId]/workspace.tsx",
                                                                    lineNumber: 289,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$members$2f5b$personId$5d2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].infoItemLabel,
                                                                            children: "Date of Birth"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/tenant/workspace/members/[personId]/workspace.tsx",
                                                                            lineNumber: 290,
                                                                            columnNumber: 28
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$members$2f5b$personId$5d2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].infoItemValue,
                                                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatDate"])(selectedPerson.dateOfBirth)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/tenant/workspace/members/[personId]/workspace.tsx",
                                                                            lineNumber: 290,
                                                                            columnNumber: 85
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/tenant/workspace/members/[personId]/workspace.tsx",
                                                                    lineNumber: 290,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$members$2f5b$personId$5d2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].infoItemLabel,
                                                                            children: "Gender"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/tenant/workspace/members/[personId]/workspace.tsx",
                                                                            lineNumber: 291,
                                                                            columnNumber: 28
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$members$2f5b$personId$5d2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].infoItemValue,
                                                                            children: selectedPerson.gender || "Not added"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/tenant/workspace/members/[personId]/workspace.tsx",
                                                                            lineNumber: 291,
                                                                            columnNumber: 78
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/tenant/workspace/members/[personId]/workspace.tsx",
                                                                    lineNumber: 291,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$members$2f5b$personId$5d2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].infoItemLabel,
                                                                            children: "Current City"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/tenant/workspace/members/[personId]/workspace.tsx",
                                                                            lineNumber: 292,
                                                                            columnNumber: 28
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$members$2f5b$personId$5d2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].infoItemValue} ${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$members$2f5b$personId$5d2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].highlightValue}`,
                                                                            children: typeof personal.currentCity === "string" && personal.currentCity ? personal.currentCity : "Not added"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/tenant/workspace/members/[personId]/workspace.tsx",
                                                                            lineNumber: 292,
                                                                            columnNumber: 84
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/tenant/workspace/members/[personId]/workspace.tsx",
                                                                    lineNumber: 292,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$members$2f5b$personId$5d2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].infoItemLabel,
                                                                            children: "Occupation"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/tenant/workspace/members/[personId]/workspace.tsx",
                                                                            lineNumber: 293,
                                                                            columnNumber: 28
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$members$2f5b$personId$5d2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].infoItemValue,
                                                                            children: selectedPerson.occupation || "Not added"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/tenant/workspace/members/[personId]/workspace.tsx",
                                                                            lineNumber: 293,
                                                                            columnNumber: 82
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/tenant/workspace/members/[personId]/workspace.tsx",
                                                                    lineNumber: 293,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$members$2f5b$personId$5d2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].infoItemLabel,
                                                                            children: "Mobile"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/tenant/workspace/members/[personId]/workspace.tsx",
                                                                            lineNumber: 294,
                                                                            columnNumber: 28
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$members$2f5b$personId$5d2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].infoItemValue,
                                                                            children: typeof personal.mobileNumber === "string" && personal.mobileNumber ? personal.mobileNumber : "Not added"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/tenant/workspace/members/[personId]/workspace.tsx",
                                                                            lineNumber: 294,
                                                                            columnNumber: 78
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/tenant/workspace/members/[personId]/workspace.tsx",
                                                                    lineNumber: 294,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$members$2f5b$personId$5d2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].infoItemLabel,
                                                                            children: "Address"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/tenant/workspace/members/[personId]/workspace.tsx",
                                                                            lineNumber: 295,
                                                                            columnNumber: 28
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$members$2f5b$personId$5d2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].infoItemValue,
                                                                            children: typeof personal.address === "string" && personal.address ? personal.address : "Not added"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/tenant/workspace/members/[personId]/workspace.tsx",
                                                                            lineNumber: 295,
                                                                            columnNumber: 79
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/tenant/workspace/members/[personId]/workspace.tsx",
                                                                    lineNumber: 295,
                                                                    columnNumber: 23
                                                                }, this),
                                                                generationLabel ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$members$2f5b$personId$5d2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].infoItemLabel,
                                                                            children: "Generation"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/tenant/workspace/members/[personId]/workspace.tsx",
                                                                            lineNumber: 296,
                                                                            columnNumber: 47
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$members$2f5b$personId$5d2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].infoItemValue,
                                                                            children: generationLabel
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/tenant/workspace/members/[personId]/workspace.tsx",
                                                                            lineNumber: 296,
                                                                            columnNumber: 101
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/tenant/workspace/members/[personId]/workspace.tsx",
                                                                    lineNumber: 296,
                                                                    columnNumber: 42
                                                                }, this) : null
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/tenant/workspace/members/[personId]/workspace.tsx",
                                                            lineNumber: 288,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/tenant/workspace/members/[personId]/workspace.tsx",
                                                        lineNumber: 287,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/tenant/workspace/members/[personId]/workspace.tsx",
                                                lineNumber: 283,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$members$2f5b$personId$5d2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].sectionCard,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$members$2f5b$personId$5d2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].sectionCardHeader,
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$members$2f5b$personId$5d2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].sectionCardTitle,
                                                            children: "Family Connections"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/tenant/workspace/members/[personId]/workspace.tsx",
                                                            lineNumber: 303,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/tenant/workspace/members/[personId]/workspace.tsx",
                                                        lineNumber: 302,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$members$2f5b$personId$5d2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].sectionCardBody,
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$members$2f5b$personId$5d2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].connectionsList,
                                                            children: familyConnections.length ? familyConnections.map((connection)=>{
                                                                const city = typeof (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPersonalData"])(connection.person).currentCity === "string" ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPersonalData"])(connection.person).currentCity : "";
                                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    type: "button",
                                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$members$2f5b$personId$5d2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].connectionRow,
                                                                    onClick: ()=>setSelectedPersonId(connection.id),
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$members$2f5b$personId$5d2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].connAvatar,
                                                                            children: initials(connection.person.fullName)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/tenant/workspace/members/[personId]/workspace.tsx",
                                                                            lineNumber: 314,
                                                                            columnNumber: 31
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$members$2f5b$personId$5d2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].connInfo,
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$members$2f5b$personId$5d2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].connName,
                                                                                    children: connection.person.fullName
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/tenant/workspace/members/[personId]/workspace.tsx",
                                                                                    lineNumber: 316,
                                                                                    columnNumber: 33
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$members$2f5b$personId$5d2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].connDetail,
                                                                                    children: [
                                                                                        connection.relation,
                                                                                        city ? ` · ${city}` : "",
                                                                                        " · ",
                                                                                        connection.person.isDeceased ? "Deceased" : "Living"
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/app/tenant/workspace/members/[personId]/workspace.tsx",
                                                                                    lineNumber: 317,
                                                                                    columnNumber: 33
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/app/tenant/workspace/members/[personId]/workspace.tsx",
                                                                            lineNumber: 315,
                                                                            columnNumber: 31
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$members$2f5b$personId$5d2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].connRelBadge} ${connection.badgeType === "spouse" ? __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$members$2f5b$personId$5d2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].badgeSpouse : connection.badgeType === "child" ? __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$members$2f5b$personId$5d2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].badgeChild : __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$members$2f5b$personId$5d2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].badgeFamily}`,
                                                                            children: connection.badge
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/tenant/workspace/members/[personId]/workspace.tsx",
                                                                            lineNumber: 319,
                                                                            columnNumber: 31
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$members$2f5b$personId$5d2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].connArrow,
                                                                            children: ">"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/tenant/workspace/members/[personId]/workspace.tsx",
                                                                            lineNumber: 320,
                                                                            columnNumber: 31
                                                                        }, this)
                                                                    ]
                                                                }, connection.id, true, {
                                                                    fileName: "[project]/app/tenant/workspace/members/[personId]/workspace.tsx",
                                                                    lineNumber: 313,
                                                                    columnNumber: 29
                                                                }, this);
                                                            }) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$members$2f5b$personId$5d2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].emptyText,
                                                                children: "No mapped family connections yet."
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/tenant/workspace/members/[personId]/workspace.tsx",
                                                                lineNumber: 325,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/tenant/workspace/members/[personId]/workspace.tsx",
                                                            lineNumber: 306,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/tenant/workspace/members/[personId]/workspace.tsx",
                                                        lineNumber: 305,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/tenant/workspace/members/[personId]/workspace.tsx",
                                                lineNumber: 301,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true) : null,
                                    activeTab === "family" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$members$2f5b$personId$5d2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].sectionCard,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$members$2f5b$personId$5d2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].sectionCardHeader,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$members$2f5b$personId$5d2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].sectionCardTitle,
                                                    children: "All Family Members"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/tenant/workspace/members/[personId]/workspace.tsx",
                                                    lineNumber: 336,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/tenant/workspace/members/[personId]/workspace.tsx",
                                                lineNumber: 335,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$members$2f5b$personId$5d2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].sectionCardBody,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$members$2f5b$personId$5d2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].connectionsList,
                                                    children: familyConnections.length ? familyConnections.map((connection)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            type: "button",
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$members$2f5b$personId$5d2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].connectionRow,
                                                            onClick: ()=>setSelectedPersonId(connection.id),
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$members$2f5b$personId$5d2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].connAvatar,
                                                                    children: initials(connection.person.fullName)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/tenant/workspace/members/[personId]/workspace.tsx",
                                                                    lineNumber: 342,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$members$2f5b$personId$5d2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].connInfo,
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$members$2f5b$personId$5d2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].connName,
                                                                            children: connection.person.fullName
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/tenant/workspace/members/[personId]/workspace.tsx",
                                                                            lineNumber: 344,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$members$2f5b$personId$5d2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].connDetail,
                                                                            children: [
                                                                                connection.relation,
                                                                                " · ",
                                                                                connection.person.occupation || "Family member"
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/app/tenant/workspace/members/[personId]/workspace.tsx",
                                                                            lineNumber: 345,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/tenant/workspace/members/[personId]/workspace.tsx",
                                                                    lineNumber: 343,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$members$2f5b$personId$5d2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].connRelBadge} ${connection.badgeType === "spouse" ? __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$members$2f5b$personId$5d2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].badgeSpouse : connection.badgeType === "child" ? __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$members$2f5b$personId$5d2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].badgeChild : __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$members$2f5b$personId$5d2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].badgeFamily}`,
                                                                    children: connection.badge
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/tenant/workspace/members/[personId]/workspace.tsx",
                                                                    lineNumber: 347,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$members$2f5b$personId$5d2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].connArrow,
                                                                    children: ">"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/tenant/workspace/members/[personId]/workspace.tsx",
                                                                    lineNumber: 348,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, connection.id, true, {
                                                            fileName: "[project]/app/tenant/workspace/members/[personId]/workspace.tsx",
                                                            lineNumber: 341,
                                                            columnNumber: 23
                                                        }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$members$2f5b$personId$5d2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].emptyText,
                                                        children: "No mapped family members yet."
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/tenant/workspace/members/[personId]/workspace.tsx",
                                                        lineNumber: 350,
                                                        columnNumber: 26
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/tenant/workspace/members/[personId]/workspace.tsx",
                                                    lineNumber: 339,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/tenant/workspace/members/[personId]/workspace.tsx",
                                                lineNumber: 338,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/tenant/workspace/members/[personId]/workspace.tsx",
                                        lineNumber: 334,
                                        columnNumber: 15
                                    }, this) : null,
                                    activeTab === "tree" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$members$2f5b$personId$5d2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].sectionCard,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$members$2f5b$personId$5d2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].sectionCardHeader,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$members$2f5b$personId$5d2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].sectionCardTitle,
                                                        children: "Relationship Tree"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/tenant/workspace/members/[personId]/workspace.tsx",
                                                        lineNumber: 359,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$members$2f5b$personId$5d2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].sectionMeta,
                                                        children: [
                                                            people.length,
                                                            " members · ",
                                                            relationships.length,
                                                            " relationships"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/tenant/workspace/members/[personId]/workspace.tsx",
                                                        lineNumber: 360,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/tenant/workspace/members/[personId]/workspace.tsx",
                                                lineNumber: 358,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$members$2f5b$personId$5d2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].sectionCardBody,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$sections$2f$FamilyTree$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FamilyTree"], {
                                                    people: people,
                                                    relationships: relationships,
                                                    selectedPersonId: selectedPerson.id,
                                                    onSelectPerson: setSelectedPersonId,
                                                    memberCount: people.length,
                                                    relationshipCount: relationships.length
                                                }, void 0, false, {
                                                    fileName: "[project]/app/tenant/workspace/members/[personId]/workspace.tsx",
                                                    lineNumber: 363,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/tenant/workspace/members/[personId]/workspace.tsx",
                                                lineNumber: 362,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/tenant/workspace/members/[personId]/workspace.tsx",
                                        lineNumber: 357,
                                        columnNumber: 15
                                    }, this) : null,
                                    activeTab === "timeline" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$members$2f5b$personId$5d2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].sectionCard,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$members$2f5b$personId$5d2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].sectionCardHeader,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$members$2f5b$personId$5d2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].sectionCardTitle,
                                                    children: "Life Timeline"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/tenant/workspace/members/[personId]/workspace.tsx",
                                                    lineNumber: 378,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/tenant/workspace/members/[personId]/workspace.tsx",
                                                lineNumber: 377,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$members$2f5b$personId$5d2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].sectionCardBody,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$members$2f5b$personId$5d2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].timeline,
                                                    children: events.length ? events.map((event)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$members$2f5b$personId$5d2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].timelineItem,
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$members$2f5b$personId$5d2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].timelineWhen,
                                                                    children: event.when
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/tenant/workspace/members/[personId]/workspace.tsx",
                                                                    lineNumber: 384,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$members$2f5b$personId$5d2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].timelineTitle,
                                                                    children: event.title
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/tenant/workspace/members/[personId]/workspace.tsx",
                                                                    lineNumber: 385,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$members$2f5b$personId$5d2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].timelineDetail,
                                                                    children: event.detail
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/tenant/workspace/members/[personId]/workspace.tsx",
                                                                    lineNumber: 386,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, event.id, true, {
                                                            fileName: "[project]/app/tenant/workspace/members/[personId]/workspace.tsx",
                                                            lineNumber: 383,
                                                            columnNumber: 23
                                                        }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$members$2f5b$personId$5d2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].emptyText,
                                                        children: "No timeline events captured yet."
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/tenant/workspace/members/[personId]/workspace.tsx",
                                                        lineNumber: 388,
                                                        columnNumber: 26
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/tenant/workspace/members/[personId]/workspace.tsx",
                                                    lineNumber: 381,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/tenant/workspace/members/[personId]/workspace.tsx",
                                                lineNumber: 380,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/tenant/workspace/members/[personId]/workspace.tsx",
                                        lineNumber: 376,
                                        columnNumber: 15
                                    }, this) : null
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/tenant/workspace/members/[personId]/workspace.tsx",
                                lineNumber: 280,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/tenant/workspace/members/[personId]/workspace.tsx",
                        lineNumber: 218,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$members$2f5b$personId$5d2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].rightPanel,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$members$2f5b$personId$5d2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].rpanelSection,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$members$2f5b$personId$5d2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].rpanelHeading,
                                        children: "Family Snapshot"
                                    }, void 0, false, {
                                        fileName: "[project]/app/tenant/workspace/members/[personId]/workspace.tsx",
                                        lineNumber: 398,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$members$2f5b$personId$5d2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].snapshotGrid,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$members$2f5b$personId$5d2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].snapshotCell,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$members$2f5b$personId$5d2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].snapshotNum,
                                                        children: people.length
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/tenant/workspace/members/[personId]/workspace.tsx",
                                                        lineNumber: 400,
                                                        columnNumber: 52
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$members$2f5b$personId$5d2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].snapshotLabel,
                                                        children: "Members"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/tenant/workspace/members/[personId]/workspace.tsx",
                                                        lineNumber: 400,
                                                        columnNumber: 109
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/tenant/workspace/members/[personId]/workspace.tsx",
                                                lineNumber: 400,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$members$2f5b$personId$5d2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].snapshotCell,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$members$2f5b$personId$5d2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].snapshotNum,
                                                        children: selectedFamily.nativePlace ? 1 : 0
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/tenant/workspace/members/[personId]/workspace.tsx",
                                                        lineNumber: 401,
                                                        columnNumber: 52
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$members$2f5b$personId$5d2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].snapshotLabel,
                                                        children: "Origins"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/tenant/workspace/members/[personId]/workspace.tsx",
                                                        lineNumber: 401,
                                                        columnNumber: 130
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/tenant/workspace/members/[personId]/workspace.tsx",
                                                lineNumber: 401,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$members$2f5b$personId$5d2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].snapshotCell,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$members$2f5b$personId$5d2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].snapshotNum,
                                                        children: session.memberships.length
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/tenant/workspace/members/[personId]/workspace.tsx",
                                                        lineNumber: 402,
                                                        columnNumber: 52
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$members$2f5b$personId$5d2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].snapshotLabel,
                                                        children: "Roles"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/tenant/workspace/members/[personId]/workspace.tsx",
                                                        lineNumber: 402,
                                                        columnNumber: 122
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/tenant/workspace/members/[personId]/workspace.tsx",
                                                lineNumber: 402,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$members$2f5b$personId$5d2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].snapshotCell,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$members$2f5b$personId$5d2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].snapshotNum,
                                                        children: upcomingBirthdays.length
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/tenant/workspace/members/[personId]/workspace.tsx",
                                                        lineNumber: 403,
                                                        columnNumber: 52
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$members$2f5b$personId$5d2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].snapshotLabel,
                                                        children: "Upcoming"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/tenant/workspace/members/[personId]/workspace.tsx",
                                                        lineNumber: 403,
                                                        columnNumber: 120
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/tenant/workspace/members/[personId]/workspace.tsx",
                                                lineNumber: 403,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/tenant/workspace/members/[personId]/workspace.tsx",
                                        lineNumber: 399,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/tenant/workspace/members/[personId]/workspace.tsx",
                                lineNumber: 397,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$members$2f5b$personId$5d2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].rpanelSection,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$members$2f5b$personId$5d2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].rpanelHeading,
                                        children: "Your Family"
                                    }, void 0, false, {
                                        fileName: "[project]/app/tenant/workspace/members/[personId]/workspace.tsx",
                                        lineNumber: 408,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$members$2f5b$personId$5d2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].familyCard,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$members$2f5b$personId$5d2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].familyCardBadge,
                                                children: initials(selectedFamily.name).slice(0, 1)
                                            }, void 0, false, {
                                                fileName: "[project]/app/tenant/workspace/members/[personId]/workspace.tsx",
                                                lineNumber: 410,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$members$2f5b$personId$5d2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].familyCardName,
                                                        children: selectedFamily.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/tenant/workspace/members/[personId]/workspace.tsx",
                                                        lineNumber: 412,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$members$2f5b$personId$5d2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].familyCardLoc,
                                                        children: [
                                                            selectedFamily.nativePlace || "Family Space",
                                                            " · ",
                                                            people.length,
                                                            " members"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/tenant/workspace/members/[personId]/workspace.tsx",
                                                        lineNumber: 413,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/tenant/workspace/members/[personId]/workspace.tsx",
                                                lineNumber: 411,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/tenant/workspace/members/[personId]/workspace.tsx",
                                        lineNumber: 409,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$members$2f5b$personId$5d2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].btn} ${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$members$2f5b$personId$5d2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].btnGhost} ${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$members$2f5b$personId$5d2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].fullWidthBtn}`,
                                        onClick: ()=>{
                                            const fallbackFamilyId = families.find((family)=>family.id !== selectedFamily.id)?.id;
                                            if (!fallbackFamilyId) {
                                                return;
                                            }
                                            void fetch("/api/auth/active-workspace", {
                                                method: "POST",
                                                headers: {
                                                    "Content-Type": "application/json"
                                                },
                                                body: JSON.stringify({
                                                    familyId: fallbackFamilyId
                                                })
                                            }).then(()=>window.location.assign("/family-space"));
                                        },
                                        children: "Switch Family"
                                    }, void 0, false, {
                                        fileName: "[project]/app/tenant/workspace/members/[personId]/workspace.tsx",
                                        lineNumber: 416,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/tenant/workspace/members/[personId]/workspace.tsx",
                                lineNumber: 407,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$members$2f5b$personId$5d2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].rpanelSection,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$members$2f5b$personId$5d2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].rpanelHeading,
                                        children: "Upcoming Events"
                                    }, void 0, false, {
                                        fileName: "[project]/app/tenant/workspace/members/[personId]/workspace.tsx",
                                        lineNumber: 436,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$members$2f5b$personId$5d2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].eventList,
                                        children: upcomingBirthdays.length ? upcomingBirthdays.map((entry)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$members$2f5b$personId$5d2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].eventRow,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$members$2f5b$personId$5d2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].eventDays,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$members$2f5b$personId$5d2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].eventDaysNum,
                                                                children: entry.days
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/tenant/workspace/members/[personId]/workspace.tsx",
                                                                lineNumber: 441,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$members$2f5b$personId$5d2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].eventDaysLabel,
                                                                children: "days"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/tenant/workspace/members/[personId]/workspace.tsx",
                                                                lineNumber: 442,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/tenant/workspace/members/[personId]/workspace.tsx",
                                                        lineNumber: 440,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$members$2f5b$personId$5d2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].eventInfo,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$members$2f5b$personId$5d2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].eventName,
                                                                children: entry.person.fullName
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/tenant/workspace/members/[personId]/workspace.tsx",
                                                                lineNumber: 445,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$members$2f5b$personId$5d2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].eventDetail,
                                                                children: [
                                                                    "Birthday · ",
                                                                    birthdayLabel(entry.days)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/tenant/workspace/members/[personId]/workspace.tsx",
                                                                lineNumber: 446,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/tenant/workspace/members/[personId]/workspace.tsx",
                                                        lineNumber: 444,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, entry.person.id, true, {
                                                fileName: "[project]/app/tenant/workspace/members/[personId]/workspace.tsx",
                                                lineNumber: 439,
                                                columnNumber: 17
                                            }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$members$2f5b$personId$5d2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].emptyText,
                                            children: "No upcoming birthdays."
                                        }, void 0, false, {
                                            fileName: "[project]/app/tenant/workspace/members/[personId]/workspace.tsx",
                                            lineNumber: 449,
                                            columnNumber: 20
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/tenant/workspace/members/[personId]/workspace.tsx",
                                        lineNumber: 437,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/tenant/workspace/members/[personId]/workspace.tsx",
                                lineNumber: 435,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$members$2f5b$personId$5d2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].rpanelSection,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$members$2f5b$personId$5d2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].rpanelHeading,
                                        children: "Selected Member"
                                    }, void 0, false, {
                                        fileName: "[project]/app/tenant/workspace/members/[personId]/workspace.tsx",
                                        lineNumber: 454,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$members$2f5b$personId$5d2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].selectedCard,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$members$2f5b$personId$5d2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].selectedHead,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$members$2f5b$personId$5d2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].selectedAvatar,
                                                        children: initials(selectedPerson.fullName)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/tenant/workspace/members/[personId]/workspace.tsx",
                                                        lineNumber: 457,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$members$2f5b$personId$5d2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].selectedName,
                                                                children: selectedPerson.fullName
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/tenant/workspace/members/[personId]/workspace.tsx",
                                                                lineNumber: 459,
                                                                columnNumber: 19
                                                            }, this),
                                                            generationLabel ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$members$2f5b$personId$5d2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].selectedSub,
                                                                children: generationLabel
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/tenant/workspace/members/[personId]/workspace.tsx",
                                                                lineNumber: 460,
                                                                columnNumber: 38
                                                            }, this) : null
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/tenant/workspace/members/[personId]/workspace.tsx",
                                                        lineNumber: 458,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/tenant/workspace/members/[personId]/workspace.tsx",
                                                lineNumber: 456,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$members$2f5b$personId$5d2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].selectedDetails,
                                                children: [
                                                    immediate.spouses[0] ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: "Spouse: "
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/tenant/workspace/members/[personId]/workspace.tsx",
                                                                lineNumber: 464,
                                                                columnNumber: 46
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                children: immediate.spouses[0].fullName
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/tenant/workspace/members/[personId]/workspace.tsx",
                                                                lineNumber: 464,
                                                                columnNumber: 67
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/tenant/workspace/members/[personId]/workspace.tsx",
                                                        lineNumber: 464,
                                                        columnNumber: 41
                                                    }, this) : null,
                                                    immediate.sons[0] ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: "Son: "
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/tenant/workspace/members/[personId]/workspace.tsx",
                                                                lineNumber: 465,
                                                                columnNumber: 43
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                children: immediate.sons[0].fullName
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/tenant/workspace/members/[personId]/workspace.tsx",
                                                                lineNumber: 465,
                                                                columnNumber: 61
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/tenant/workspace/members/[personId]/workspace.tsx",
                                                        lineNumber: 465,
                                                        columnNumber: 38
                                                    }, this) : null,
                                                    immediate.daughters[0] ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: "Daughter: "
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/tenant/workspace/members/[personId]/workspace.tsx",
                                                                lineNumber: 466,
                                                                columnNumber: 48
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                children: immediate.daughters[0].fullName
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/tenant/workspace/members/[personId]/workspace.tsx",
                                                                lineNumber: 466,
                                                                columnNumber: 71
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/tenant/workspace/members/[personId]/workspace.tsx",
                                                        lineNumber: 466,
                                                        columnNumber: 43
                                                    }, this) : null,
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$members$2f5b$personId$5d2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].selectedBlock,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    "Date of birth: ",
                                                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatDate"])(selectedPerson.dateOfBirth)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/tenant/workspace/members/[personId]/workspace.tsx",
                                                                lineNumber: 468,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    "Current city: ",
                                                                    typeof personal.currentCity === "string" && personal.currentCity ? personal.currentCity : "Not added"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/tenant/workspace/members/[personId]/workspace.tsx",
                                                                lineNumber: 469,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    "Occupation: ",
                                                                    selectedPerson.occupation || "Not added"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/tenant/workspace/members/[personId]/workspace.tsx",
                                                                lineNumber: 470,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    "Status: ",
                                                                    selectedPerson.isDeceased ? "Deceased" : "Living"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/tenant/workspace/members/[personId]/workspace.tsx",
                                                                lineNumber: 471,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/tenant/workspace/members/[personId]/workspace.tsx",
                                                        lineNumber: 467,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/tenant/workspace/members/[personId]/workspace.tsx",
                                                lineNumber: 463,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$members$2f5b$personId$5d2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].selectedTags,
                                                children: related.slice(0, 3).map((relationship)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$members$2f5b$personId$5d2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].metaChip} ${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tenant$2f$workspace$2f$members$2f5b$personId$5d2f$workspace$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].chipForest}`,
                                                        children: relationship.relationshipType === "spouse_of" ? "Spouse of" : "Parent/Child"
                                                    }, relationship.id, false, {
                                                        fileName: "[project]/app/tenant/workspace/members/[personId]/workspace.tsx",
                                                        lineNumber: 476,
                                                        columnNumber: 19
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/app/tenant/workspace/members/[personId]/workspace.tsx",
                                                lineNumber: 474,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/tenant/workspace/members/[personId]/workspace.tsx",
                                        lineNumber: 455,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/tenant/workspace/members/[personId]/workspace.tsx",
                                lineNumber: 453,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/tenant/workspace/members/[personId]/workspace.tsx",
                        lineNumber: 396,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/tenant/workspace/members/[personId]/workspace.tsx",
                lineNumber: 201,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/tenant/workspace/members/[personId]/workspace.tsx",
        lineNumber: 185,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=app_tenant_workspace_7ed61deb._.js.map