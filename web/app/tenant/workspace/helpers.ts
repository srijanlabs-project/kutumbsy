import type { Person, Relationship } from "../../platform/admin/data-capture/types";
import { getKinshipLabel, isKinshipCode, type KinshipLanguage, normalizeKinshipLanguage } from "./kinship";

const DATE_FORMATTER = new Intl.DateTimeFormat("en-IN", {
  day: "2-digit",
  month: "short",
  year: "numeric",
  timeZone: "Asia/Kolkata",
});

export const formatDate = (value: string | null) => {
  if (!value) {
    return "Not added";
  }

  const date = new Date(value);
  if (Number.isNaN(date.getTime())) {
    return value;
  }

  return DATE_FORMATTER.format(date);
};

export const asRecord = (value: unknown): Record<string, unknown> =>
  value && typeof value === "object" && !Array.isArray(value) ? (value as Record<string, unknown>) : {};

export const asText = (value: unknown, fallback = "Not added") =>
  typeof value === "string" && value.trim() ? value : fallback;

export type ProfileMemory = {
  id: string;
  title: string;
  detail: string;
  label: string;
};

export type ProfileEvent = {
  id: string;
  title: string;
  detail: string;
  when: string;
};

export const getGenerationLabel = (person: Person) => {
  const metadata = asRecord(person.metadata);
  const familyContext = asRecord(metadata.familyContext);
  const label = asText(familyContext.generationLevel, "");
  return label.toLowerCase() === "unassigned" ? "" : label;
};

export const getRelationLabel = (person: Person, fallbackLanguage: KinshipLanguage = "en") => {
  const metadata = asRecord(person.metadata);
  const familyContext = asRecord(metadata.familyContext);
  const personal = asRecord(metadata.personal);
  const language = normalizeKinshipLanguage(personal.preferredLanguage ?? fallbackLanguage);
  const kinshipCode = asText(familyContext.kinshipCode, "");

  if (kinshipCode) {
    const normalizedCode = kinshipCode.toUpperCase();
    if (isKinshipCode(normalizedCode)) {
      return getKinshipLabel(normalizedCode, language);
    }
  }

  return asText(familyContext.relationToAnchor, "Family member");
};

export const getPersonalData = (person: Person) => {
  const metadata = asRecord(person.metadata);
  return asRecord(metadata.personal);
};

export const getBiography = (person: Person) => {
  const metadata = asRecord(person.metadata);
  return asText(metadata.biography, "No story added yet.");
};

const asRecordArray = (value: unknown): Record<string, unknown>[] =>
  Array.isArray(value) ? value.filter((item): item is Record<string, unknown> => !!item && typeof item === "object" && !Array.isArray(item)) : [];

const firstText = (...values: unknown[]) => {
  for (const value of values) {
    if (typeof value === "string" && value.trim()) {
      return value.trim();
    }
  }

  return "";
};

const normalizeDateLabel = (value: unknown) => {
  if (typeof value !== "string" || !value.trim()) {
    return "";
  }

  const date = new Date(value);
  if (Number.isNaN(date.getTime())) {
    return value;
  }

  return DATE_FORMATTER.format(date);
};

export const getProfileMemories = (person: Person): ProfileMemory[] => {
  const metadata = asRecord(person.metadata);
  const memorySources = [
    ...asRecordArray(metadata.memories),
    ...asRecordArray(metadata.memoryVault),
    ...asRecordArray(metadata.stories),
  ];

  const explicitMemories = memorySources
    .map((entry, index) => {
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
        label: normalizeDateLabel(label) || label,
      } satisfies ProfileMemory;
    })
    .filter((item): item is ProfileMemory => item !== null);

  if (explicitMemories.length > 0) {
    return explicitMemories;
  }

  const fallbackMemories: ProfileMemory[] = [];
  const biography = getBiography(person);
  if (biography !== "No story added yet.") {
    fallbackMemories.push({
      id: "bio-memory",
      title: "Life story",
      detail: biography,
      label: "Profile story",
    });
  }

  if (person.notes?.trim()) {
    fallbackMemories.push({
      id: "notes-memory",
      title: "Family notes",
      detail: person.notes.trim(),
      label: "Captured note",
    });
  }

  return fallbackMemories;
};

export const getProfileEvents = (person: Person, relationships: Relationship[]): ProfileEvent[] => {
  const metadata = asRecord(person.metadata);
  const eventSources = [
    ...asRecordArray(metadata.events),
    ...asRecordArray(metadata.lifeEvents),
    ...asRecordArray(metadata.timeline),
    ...asRecordArray(metadata.milestones),
  ];

  const explicitEvents = eventSources
    .map((entry, index) => {
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
        when: normalizeDateLabel(when) || when || "Timeline",
      } satisfies ProfileEvent;
    })
    .filter((item): item is ProfileEvent => item !== null);

  const inferredEvents: ProfileEvent[] = [];

  if (person.dateOfBirth) {
    inferredEvents.push({
      id: "birth-event",
      title: "Birth",
      detail: `${person.fullName} was born.`,
      when: formatDate(person.dateOfBirth),
    });
  }

  if (person.isDeceased) {
    inferredEvents.push({
      id: "legacy-event",
      title: "Remembered in family record",
      detail: `${person.fullName} is marked as deceased in the family profile.`,
      when: "Family archive",
    });
  }

  const relationshipEvents = relationships
    .filter((relationship) => relationship.personOne.id === person.id || relationship.personTwo.id === person.id)
    .filter((relationship) => relationship.startDate || relationship.endDate)
    .map((relationship) => {
      const otherPerson = relationship.personOne.id === person.id ? relationship.personTwo.fullName : relationship.personOne.fullName;
      const when = relationship.startDate ?? relationship.endDate;
      const marker = relationship.startDate ? "Started" : "Ended";
      return {
        id: `relationship-${relationship.id}`,
        title: `${relationship.relationshipType.replaceAll("_", " ")} with ${otherPerson}`,
        detail: `${marker} relationship record for ${person.fullName} and ${otherPerson}.`,
        when: normalizeDateLabel(when) || "Relationship timeline",
      } satisfies ProfileEvent;
    });

  return [...explicitEvents, ...inferredEvents, ...relationshipEvents];
};

export const buildGenerationGroups = (people: Person[]) => {
  const groups = new Map<string, Person[]>();

  for (const person of people) {
    const generation = getGenerationLabel(person);
    const list = groups.get(generation) ?? [];
    list.push(person);
    groups.set(generation, list);
  }

  return Array.from(groups.entries()).sort(([left], [right]) => left.localeCompare(right));
};

export const buildRelationshipSummary = (relationships: Relationship[], selectedPersonId: string) =>
  relationships.filter(
    (relationship) =>
      relationship.personOne.id === selectedPersonId || relationship.personTwo.id === selectedPersonId,
  );

type ImmediateFamilyItem = {
  id: string;
  fullName: string;
  linkable: boolean;
};

export type ImmediateFamilyRelations = {
  spouseLabel: "Husband" | "Wife" | "Spouse";
  spouses: ImmediateFamilyItem[];
  fathers: ImmediateFamilyItem[];
  mothers: ImmediateFamilyItem[];
  brothers: ImmediateFamilyItem[];
  sisters: ImmediateFamilyItem[];
  sons: ImmediateFamilyItem[];
  daughters: ImmediateFamilyItem[];
};

const isSpouseLikeRelationship = (relationshipType: string) =>
  relationshipType === "spouse_of" ||
  relationshipType === "divorced_from" ||
  relationshipType === "separated_from" ||
  relationshipType === "widowed_from";

const pushUnique = (target: Map<string, ImmediateFamilyItem>, value: ImmediateFamilyItem) => {
  if (!target.has(value.id)) {
    target.set(value.id, value);
  }
};

const sortedItems = (items: Map<string, ImmediateFamilyItem>) =>
  Array.from(items.values()).sort((left, right) => left.fullName.localeCompare(right.fullName));

export const buildImmediateFamilyRelations = (
  people: Person[],
  relationships: Relationship[],
  selectedPersonId: string,
  selectedPersonGender: string | null,
): ImmediateFamilyRelations => {
  const peopleById = new Map(people.map((person) => [person.id, person]));
  const spouseMap = new Map<string, Set<string>>();
  const parentToChildren = new Map<string, Set<string>>();

  const directSpouseIds = new Set<string>();
  const directParentIds = new Set<string>();
  const directChildIds = new Set<string>();
  const directSiblingIds = new Set<string>();

  for (const relationship of relationships) {
    const sourceId = relationship.personOne.id;
    const targetId = relationship.personTwo.id;

    if (relationship.relationshipType === "parent_of") {
      const children = parentToChildren.get(sourceId) ?? new Set<string>();
      children.add(targetId);
      parentToChildren.set(sourceId, children);
    }

    if (isSpouseLikeRelationship(relationship.relationshipType)) {
      const sourceSpouses = spouseMap.get(sourceId) ?? new Set<string>();
      sourceSpouses.add(targetId);
      spouseMap.set(sourceId, sourceSpouses);

      const targetSpouses = spouseMap.get(targetId) ?? new Set<string>();
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
  for (const parentId of directParentIds) {
    const parentSpouses = spouseMap.get(parentId) ?? new Set<string>();
    for (const spouseId of parentSpouses) {
      if (spouseId !== selectedPersonId) {
        directParentIds.add(spouseId);
      }
    }
  }

  // Derived child via selected spouse's parent links.
  for (const spouseId of directSpouseIds) {
    const spouseChildren = parentToChildren.get(spouseId) ?? new Set<string>();
    for (const childId of spouseChildren) {
      if (childId !== selectedPersonId) {
        directChildIds.add(childId);
      }
    }
  }

  // Derived siblings via shared parents.
  for (const parentId of directParentIds) {
    const siblings = parentToChildren.get(parentId) ?? new Set<string>();
    for (const siblingId of siblings) {
      if (siblingId !== selectedPersonId) {
        directSiblingIds.add(siblingId);
      }
    }
  }

  const spouses = new Map<string, ImmediateFamilyItem>();
  const fathers = new Map<string, ImmediateFamilyItem>();
  const mothers = new Map<string, ImmediateFamilyItem>();
  const brothers = new Map<string, ImmediateFamilyItem>();
  const sisters = new Map<string, ImmediateFamilyItem>();
  const sons = new Map<string, ImmediateFamilyItem>();
  const daughters = new Map<string, ImmediateFamilyItem>();

  const asItem = (id: string): ImmediateFamilyItem => ({
    id,
    fullName: peopleById.get(id)?.fullName ?? relationships.find((rel) => rel.personOne.id === id)?.personOne.fullName ?? relationships.find((rel) => rel.personTwo.id === id)?.personTwo.fullName ?? "Unknown member",
    linkable: peopleById.has(id),
  });

  const lowerGender = (id: string) => (peopleById.get(id)?.gender ?? "").toLowerCase();

  for (const id of directSpouseIds) {
    pushUnique(spouses, asItem(id));
  }

  for (const id of directParentIds) {
    const gender = lowerGender(id);
    if (gender === "male") {
      pushUnique(fathers, asItem(id));
    } else {
      pushUnique(mothers, asItem(id));
    }
  }

  for (const id of directSiblingIds) {
    const gender = lowerGender(id);
    if (gender === "male") {
      pushUnique(brothers, asItem(id));
    } else {
      pushUnique(sisters, asItem(id));
    }
  }

  for (const id of directChildIds) {
    const gender = lowerGender(id);
    if (gender === "male") {
      pushUnique(sons, asItem(id));
    } else {
      pushUnique(daughters, asItem(id));
    }
  }

  const selectedGender = (selectedPersonGender ?? "").toLowerCase();
  const spouseLabel: "Husband" | "Wife" | "Spouse" =
    selectedGender === "male" ? "Wife" : selectedGender === "female" ? "Husband" : "Spouse";

  return {
    spouseLabel,
    spouses: sortedItems(spouses),
    fathers: sortedItems(fathers),
    mothers: sortedItems(mothers),
    brothers: sortedItems(brothers),
    sisters: sortedItems(sisters),
    sons: sortedItems(sons),
    daughters: sortedItems(daughters),
  };
};

type RelatedGroup = {
  label: string;
  items: Array<{ id: string; fullName: string; descriptor: string }>;
};

export const buildRelationshipTree = (relationships: Relationship[], selectedPersonId: string) => {
  const parents = new Map<string, { id: string; fullName: string; descriptor: string }>();
  const guardians = new Map<string, { id: string; fullName: string; descriptor: string }>();
  const spouses = new Map<string, { id: string; fullName: string; descriptor: string }>();
  const formerPartners = new Map<string, { id: string; fullName: string; descriptor: string }>();
  const siblings = new Map<string, { id: string; fullName: string; descriptor: string }>();
  const children = new Map<string, { id: string; fullName: string; descriptor: string }>();

  for (const relationship of relationships) {
    const isPersonOne = relationship.personOne.id === selectedPersonId;
    const isPersonTwo = relationship.personTwo.id === selectedPersonId;

    if (!isPersonOne && !isPersonTwo) {
      continue;
    }

    const other = isPersonOne ? relationship.personTwo : relationship.personOne;

    switch (relationship.relationshipType) {
      case "parent_of":
        if (isPersonOne) {
          children.set(other.id, { id: other.id, fullName: other.fullName, descriptor: "Child" });
        } else {
          parents.set(other.id, { id: other.id, fullName: other.fullName, descriptor: "Parent" });
        }
        break;
      case "guardian_of":
        if (isPersonOne) {
          children.set(other.id, { id: other.id, fullName: other.fullName, descriptor: "Ward" });
        } else {
          guardians.set(other.id, { id: other.id, fullName: other.fullName, descriptor: "Guardian" });
        }
        break;
      case "spouse_of":
        spouses.set(other.id, { id: other.id, fullName: other.fullName, descriptor: "Spouse" });
        break;
      case "divorced_from":
        formerPartners.set(other.id, { id: other.id, fullName: other.fullName, descriptor: "Divorced" });
        break;
      case "separated_from":
        formerPartners.set(other.id, { id: other.id, fullName: other.fullName, descriptor: "Separated" });
        break;
      case "widowed_from":
        formerPartners.set(other.id, { id: other.id, fullName: other.fullName, descriptor: "Past spouse" });
        break;
      case "sibling_of":
        siblings.set(other.id, { id: other.id, fullName: other.fullName, descriptor: "Sibling" });
        break;
      default:
        break;
    }
  }

  const groups: RelatedGroup[] = [
    { label: "Parents", items: Array.from(parents.values()) },
    { label: "Guardians", items: Array.from(guardians.values()) },
    { label: "Spouses", items: Array.from(spouses.values()) },
    { label: "Former Partners", items: Array.from(formerPartners.values()) },
    { label: "Siblings", items: Array.from(siblings.values()) },
    { label: "Children", items: Array.from(children.values()) },
  ];

  return groups.filter((group) => group.items.length > 0);
};
