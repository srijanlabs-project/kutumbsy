import { revealNullableText } from "../../security/crypto.js";

export const revealFamily = <T extends { createdByPhone: string | null }>(family: T): T => ({
  ...family,
  createdByPhone: revealNullableText(family.createdByPhone),
});

export const revealPerson = <
  T extends {
    fullName: string;
    photoUrl: string | null;
    nativeVillage: string | null;
    gotra: string | null;
    kuldevta: string | null;
    community: string | null;
    education: string | null;
    occupation: string | null;
    notes: string | null;
  },
>(
  person: T,
): T => ({
  ...person,
  fullName: revealNullableText(person.fullName) ?? "",
  photoUrl: revealNullableText(person.photoUrl),
  nativeVillage: revealNullableText(person.nativeVillage),
  gotra: revealNullableText(person.gotra),
  kuldevta: revealNullableText(person.kuldevta),
  community: revealNullableText(person.community),
  education: revealNullableText(person.education),
  occupation: revealNullableText(person.occupation),
  notes: revealNullableText(person.notes),
});
