import type { MemberFormState, Person } from "./types";

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

export const asText = (value: unknown): string => (typeof value === "string" && value.trim() ? value : "Not added");

export const asRecord = (value: unknown): Record<string, unknown> =>
  value && typeof value === "object" && !Array.isArray(value) ? (value as Record<string, unknown>) : {};

export const toMemberForm = (person: Person): MemberFormState => {
  const metadata = asRecord(person.metadata);
  const personal = asRecord(metadata.personal);
  const familyContext = asRecord(metadata.familyContext);
  const interests = asRecord(metadata.interests);

  return {
    fullName: person.fullName,
    photoUrl: person.photoUrl ?? "",
    gender: person.gender ?? "",
    dateOfBirth: person.dateOfBirth ? person.dateOfBirth.slice(0, 10) : "",
    isDeceased: person.isDeceased,
    nativeVillage: person.nativeVillage ?? "",
    gotra: person.gotra ?? "",
    kuldevta: person.kuldevta ?? "",
    community: person.community ?? "",
    education: person.education ?? "",
    occupation: person.occupation ?? "",
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
    notes: person.notes ?? "",
  };
};
