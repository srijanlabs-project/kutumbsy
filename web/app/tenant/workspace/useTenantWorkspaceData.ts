"use client";

import { useEffect, useMemo, useState } from "react";
import type { Family, Person, Relationship, SessionData } from "../../platform/admin/data-capture/types";

type TenantWorkspaceState = {
  session: SessionData | null;
  activeWorkspaceId: string;
  families: Family[];
  people: Person[];
  relationships: Relationship[];
  selectedPersonId: string;
  setSelectedPersonId: (personId: string) => void;
  refresh: (targetPersonId?: string) => Promise<void>;
  loading: boolean;
  message: string;
};

const asRecord = (value: unknown): Record<string, unknown> =>
  value && typeof value === "object" && !Array.isArray(value) ? (value as Record<string, unknown>) : {};

const normalize = (value: string) => value.trim().toLowerCase();

const normalizeRelationshipType = (relationshipType: string): "parent_of" | "spouse_of" | null => {
  if (relationshipType === "parent_of" || relationshipType === "guardian_of") {
    return "parent_of";
  }

  if (
    relationshipType === "spouse_of" ||
    relationshipType === "divorced_from" ||
    relationshipType === "separated_from" ||
    relationshipType === "widowed_from"
  ) {
    return "spouse_of";
  }

  return null;
};

const isSymmetricType = (relationshipType: string) => relationshipType === "spouse_of";

const hasRelationship = (
  relationships: Relationship[],
  personOneId: string,
  personTwoId: string,
  relationshipType: string,
) =>
  relationships.some((relationship) => {
    const normalizedType = normalizeRelationshipType(relationship.relationshipType);
    if (normalizedType !== relationshipType) {
      return false;
    }

    if (
      relationship.personOne.id === personOneId &&
      relationship.personTwo.id === personTwoId
    ) {
      return true;
    }

    if (!isSymmetricType(relationshipType)) {
      return false;
    }

    return (
      relationship.personOne.id === personTwoId &&
      relationship.personTwo.id === personOneId
    );
  });

const inferMetadataRelationships = (people: Person[], relationships: Relationship[]): Relationship[] => {
  if (!people.length) {
    return relationships;
  }

  const byId = new Map(people.map((person) => [person.id, person]));
  const byName = new Map(people.map((person) => [normalize(person.fullName), person]));
  const inferred: Relationship[] = [];

  const addInferred = (personOne: Person, personTwo: Person, relationshipType: Relationship["relationshipType"]) => {
    if (
      hasRelationship(relationships, personOne.id, personTwo.id, relationshipType) ||
      hasRelationship(inferred, personOne.id, personTwo.id, relationshipType)
    ) {
      return;
    }

    inferred.push({
      id: `inferred-${relationshipType}-${personOne.id}-${personTwo.id}`,
      relationshipType,
      status: "active",
      startDate: null,
      endDate: null,
      notes: "Derived from member relation mapping",
      metadata: { inferred: true, source: "person-metadata" },
      createdAt: new Date(0).toISOString(),
      personOne: { id: personOne.id, fullName: personOne.fullName },
      personTwo: { id: personTwo.id, fullName: personTwo.fullName },
    });
  };

  for (const person of people) {
    const metadata = asRecord(person.metadata);
    const familyContext = asRecord(metadata.familyContext);
    const personal = asRecord(metadata.personal);

    const relationAnchorRaw =
      typeof familyContext.relationToAnchor === "string" ? familyContext.relationToAnchor.trim() : "";
    if (!relationAnchorRaw) {
      continue;
    }

    const anchor =
      byId.get(relationAnchorRaw) ??
      byName.get(normalize(relationAnchorRaw));
    if (!anchor || anchor.id === person.id) {
      continue;
    }

    const relationTypeRaw =
      typeof familyContext.relationType === "string"
        ? familyContext.relationType
        : typeof personal.maritalStatus === "string"
          ? personal.maritalStatus
          : "";
    const relationType = relationTypeRaw.trim().toLowerCase();

    if (!relationType) {
      continue;
    }

    if (["spouse", "husband", "wife"].includes(relationType)) {
      addInferred(anchor, person, "spouse_of");
      continue;
    }

    if (["son", "daughter", "child", "kid"].includes(relationType)) {
      addInferred(anchor, person, "parent_of");
      continue;
    }

    if (["father", "mother", "parent"].includes(relationType)) {
      addInferred(person, anchor, "parent_of");
    }
  }

  return [...relationships, ...inferred];
};

const sanitizeRelationships = (relationships: Relationship[]): Relationship[] =>
  relationships.flatMap((relationship) => {
    const normalizedType = normalizeRelationshipType(relationship.relationshipType);
    if (!normalizedType) {
      return [];
    }

    return [{ ...relationship, relationshipType: normalizedType }];
  });

export function useTenantWorkspaceData(initialPersonId?: string): TenantWorkspaceState {
  const [session, setSession] = useState<SessionData | null>(null);
  const [activeWorkspaceId, setActiveWorkspaceId] = useState("");
  const [families, setFamilies] = useState<Family[]>([]);
  const [people, setPeople] = useState<Person[]>([]);
  const [relationships, setRelationships] = useState<Relationship[]>([]);
  const [selectedPersonId, setSelectedPersonId] = useState(initialPersonId ?? "");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(true);

  const load = async (targetPersonId?: string) => {
    setLoading(true);
    setMessage("");

    try {
      const [sessionResponse, activeWorkspaceResponse, familiesResponse] = await Promise.all([
        fetch("/api/auth/me", { cache: "no-store" }),
        fetch("/api/auth/active-workspace", { cache: "no-store" }),
        fetch("/api/families", { cache: "no-store" }),
      ]);

      if (!sessionResponse.ok || !familiesResponse.ok) {
        setMessage("Login and select an active Family Space to open the family home.");
        setLoading(false);
        return;
      }

      const sessionPayload = (await sessionResponse.json()) as { data?: SessionData };
      const activeWorkspacePayload = (await activeWorkspaceResponse.json()) as { data?: { familyId?: string | null } };
      const familiesPayload = (await familiesResponse.json()) as { data?: Family[] };

      const nextSession = sessionPayload.data ?? null;
      const nextFamilies = familiesPayload.data ?? [];
      const familyId =
        activeWorkspacePayload.data?.familyId &&
        nextFamilies.some((family) => family.id === activeWorkspacePayload.data?.familyId)
          ? activeWorkspacePayload.data.familyId
          : nextSession?.memberships[0]?.familyId ?? "";

      setSession(nextSession);
      setFamilies(nextFamilies);
      setActiveWorkspaceId(familyId);

      if (!familyId) {
        setMessage("No active Family Space found yet.");
        setLoading(false);
        return;
      }

      const [peopleResponse, relationshipsResponse] = await Promise.all([
        fetch(`/api/families/${familyId}/people`, { cache: "no-store" }),
        fetch(`/api/families/${familyId}/relationships`, { cache: "no-store" }),
      ]);

      if (!peopleResponse.ok || !relationshipsResponse.ok) {
        setMessage("Unable to load Family Space details.");
        setLoading(false);
        return;
      }

      const peoplePayload = (await peopleResponse.json()) as { data?: Person[] };
      const relationshipPayload = (await relationshipsResponse.json()) as { data?: Relationship[] };
      const nextPeople = peoplePayload.data ?? [];
      const nextRelationships = sanitizeRelationships(relationshipPayload.data ?? []);
      const enrichedRelationships = inferMetadataRelationships(nextPeople, nextRelationships);

      setPeople(nextPeople);
      setRelationships(enrichedRelationships);
      setSelectedPersonId((current) => {
        if (targetPersonId && nextPeople.some((person) => person.id === targetPersonId)) {
          return targetPersonId;
        }
        if (initialPersonId && nextPeople.some((person) => person.id === initialPersonId)) {
          return initialPersonId;
        }
        if (current && nextPeople.some((person) => person.id === current)) {
          return current;
        }
        return nextPeople[0]?.id ?? "";
      });
    } catch {
      setMessage("Unable to load the Family Space right now.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    void load();
  }, [initialPersonId]);

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
    message,
  };
}
