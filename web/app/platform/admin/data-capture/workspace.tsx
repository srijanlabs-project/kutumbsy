"use client";

import Link from "next/link";
import { ChangeEvent, FormEvent, useEffect, useMemo, useState } from "react";
import { BrandLogo } from "../../../../components/BrandLogo";
import { LoadingState } from "../../../../components/LoadingState";
import { PostLoginShell } from "../../../../components/PostLoginShell";
import styles from "./workspace.module.css";
import { asRecord, asText, formatDate, toMemberForm } from "./helpers";
import {
  emptyFilters,
  emptyJoinReviewForm,
  emptyMemberAccessUpdate,
  emptyMemberForm,
  emptyMemberLoginForm,
  emptyRelationshipForm,
} from "./state";
import type {
  AuditLog,
  Family,
  JoinRequest,
  JoinReviewFormState,
  MemberAccessUpdateState,
  MemberFormState,
  MemberLoginFormState,
  MembershipAccess,
  Person,
  Relationship,
  RelationshipFormState,
  SearchFilters,
  SessionData,
} from "./types";

const MEMBER_RELATION_OPTIONS = [
  "Self / Root member",
  "Spouse",
  "Child",
] as const;

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
  "Yajnavalkya",
] as const;

const SPOUSE_STATE_CONFIG = {
  married: { status: "active" as const, label: "Married", endDateLabel: "" },
  divorced: { status: "historical" as const, label: "Divorced", endDateLabel: "Divorce date" },
  separated: { status: "historical" as const, label: "Separated", endDateLabel: "Separation date" },
  widowed: { status: "historical" as const, label: "Widowed", endDateLabel: "Death anniversary date" },
};

type DataCaptureTab = "members" | "relationships" | "access" | "requests" | "audit";

function formatRelationshipSummary(relationship: Relationship): string {
  const spouseStatusMatch = relationship.notes?.match(/Spouse status:\s*([a-z]+)/i);
  const spouseStatus = spouseStatusMatch?.[1]?.toLowerCase() as keyof typeof SPOUSE_STATE_CONFIG | undefined;

  if (relationship.relationshipType === "parent_of") {
    return `${relationship.personOne.fullName} is parent of ${relationship.personTwo.fullName}`;
  }

  if (relationship.relationshipType === "spouse_of") {
    const statusLabel = spouseStatus ? SPOUSE_STATE_CONFIG[spouseStatus].label : relationship.status === "historical" ? "Past spouse relationship" : "Married";
    return `${relationship.personOne.fullName} and ${relationship.personTwo.fullName} (${statusLabel})`;
  }

  return `${relationship.personOne.fullName} ${relationship.relationshipType.replaceAll("_", " ")} ${relationship.personTwo.fullName}`;
}

function extractSpouseState(relationship: Relationship): RelationshipFormState["spouseState"] {
  const spouseStatusMatch = relationship.notes?.match(/Spouse status:\s*([a-z]+)/i);
  const fromNotes = spouseStatusMatch?.[1]?.toLowerCase();
  if (fromNotes === "divorced" || fromNotes === "separated" || fromNotes === "widowed") {
    return fromNotes;
  }

  if (relationship.status === "historical") {
    return "divorced";
  }

  return "married";
}

function extractMarriageDateFields(relationship: Relationship): {
  precision: RelationshipFormState["marriageDatePrecision"];
  day: string;
  month: string;
  year: string;
} {
  const precisionMatch = relationship.notes?.match(/Marriage date precision:\s*([A-Z/]+)/i);
  const valueMatch = relationship.notes?.match(/Marriage date value:\s*([0-9/]+)/i);
  const precisionRaw = precisionMatch?.[1]?.toUpperCase() ?? "";
  const value = valueMatch?.[1] ?? "";

  if (precisionRaw === "MM/YYYY" && value) {
    const [month, year] = value.split("/");
    if (month && year) {
      return {
        precision: "mm_yyyy",
        day: "",
        month: `${year}-${month.padStart(2, "0")}`,
        year,
      };
    }
  }

  if (precisionRaw === "YYYY" && value) {
    return {
      precision: "yyyy",
      day: "",
      month: "",
      year: value,
    };
  }

  if (precisionRaw === "DD/MM/YYYY" && value) {
    const [day, month, year] = value.split("/");
    if (day && month && year) {
      return {
        precision: "dd_mm_yyyy",
        day: `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`,
        month: `${year}-${month.padStart(2, "0")}`,
        year,
      };
    }
  }

  const legacyMarriageYearMatch = relationship.notes?.match(/Marriage year:\s*(\d{4})/i);
  if (legacyMarriageYearMatch?.[1]) {
    return {
      precision: "yyyy",
      day: "",
      month: "",
      year: legacyMarriageYearMatch[1],
    };
  }

  if (relationship.startDate) {
    const iso = String(relationship.startDate).slice(0, 10);
    const [year, month] = iso.split("-");
    return {
      precision: "dd_mm_yyyy",
      day: iso,
      month: year && month ? `${year}-${month}` : "",
      year: year ?? "",
    };
  }

  return {
    precision: "dd_mm_yyyy",
    day: "",
    month: "",
    year: "",
  };
}

export function DataCaptureWorkspace() {
  const [families, setFamilies] = useState<Family[]>([]);
  const [selectedFamilyId, setSelectedFamilyId] = useState<string>("");
  const [people, setPeople] = useState<Person[]>([]);
  const [relationships, setRelationships] = useState<Relationship[]>([]);
  const [memberAccessList, setMemberAccessList] = useState<MembershipAccess[]>([]);
  const [joinRequests, setJoinRequests] = useState<JoinRequest[]>([]);
  const [auditLogs, setAuditLogs] = useState<AuditLog[]>([]);
  const [memberForm, setMemberForm] = useState<MemberFormState>(emptyMemberForm);
  const [memberLoginForm, setMemberLoginForm] = useState<MemberLoginFormState>(emptyMemberLoginForm);
  const [memberAccessUpdate, setMemberAccessUpdate] = useState<MemberAccessUpdateState>(emptyMemberAccessUpdate);
  const [relationshipForm, setRelationshipForm] = useState<RelationshipFormState>(emptyRelationshipForm);
  const [joinReviewForm, setJoinReviewForm] = useState<JoinReviewFormState>(emptyJoinReviewForm);
  const [filters, setFilters] = useState<SearchFilters>(emptyFilters);
  const [editingPersonId, setEditingPersonId] = useState<string>("");
  const [memberSubmitting, setMemberSubmitting] = useState(false);
  const [memberLoginSubmitting, setMemberLoginSubmitting] = useState(false);
  const [memberAccessSubmitting, setMemberAccessSubmitting] = useState(false);
  const [relationshipSubmitting, setRelationshipSubmitting] = useState(false);
  const [editingRelationshipId, setEditingRelationshipId] = useState("");
  const [joinReviewSubmitting, setJoinReviewSubmitting] = useState(false);
  const [memberMessage, setMemberMessage] = useState("");
  const [photoUploadMessage, setPhotoUploadMessage] = useState("");
  const [memberLoginMessage, setMemberLoginMessage] = useState("");
  const [memberAccessMessage, setMemberAccessMessage] = useState("");
  const [relationshipMessage, setRelationshipMessage] = useState("");
  const [joinReviewMessage, setJoinReviewMessage] = useState("");
  const [loadingFamilies, setLoadingFamilies] = useState(true);
  const [loadingPeople, setLoadingPeople] = useState(false);
  const [loadingRelatedData, setLoadingRelatedData] = useState(false);
  const [session, setSession] = useState<SessionData | null>(null);
  const [sessionMessage, setSessionMessage] = useState("");
  const [activeWorkspaceId, setActiveWorkspaceId] = useState("");
  const [activeTab, setActiveTab] = useState<DataCaptureTab>("members");

  const selectedFamily = families.find((family) => family.id === selectedFamilyId) ?? null;
  const selectedMembership = session?.memberships.find((membership) => membership.familyId === selectedFamilyId) ?? null;
  const canCreateMemberLogin = selectedMembership?.role === "admin";
  const canManageWorkspace = selectedMembership?.role === "admin";
  const isWorkspaceLoading = loadingFamilies || loadingPeople || loadingRelatedData;

  const availablePersonOptions = useMemo(
    () =>
      people.map((person) => ({
        id: person.id,
        label: person.fullName,
      })),
    [people],
  );
  const availableLoginPersonOptions = useMemo(() => {
    const linkedPersonIds = new Set(
      memberAccessList
        .map((item) => item.person?.id)
        .filter((id): id is string => Boolean(id)),
    );

    return availablePersonOptions.filter((person) => !linkedPersonIds.has(person.id));
  }, [availablePersonOptions, memberAccessList]);

  const gotraOptions = useMemo(
    () =>
      Array.from(
        new Set(
          [...DEFAULT_GOTRA_OPTIONS, ...people.map((person) => person.gotra ?? "").filter(Boolean)].filter(Boolean),
        ),
      ),
    [people],
  );

  const spouseStateMeta = SPOUSE_STATE_CONFIG[relationshipForm.spouseState];
  const relationshipStartDateLabel =
    relationshipForm.relationshipType === "parent_of" ? "Birth / adoption date" : "Marriage date (optional)";
  const relationshipEndDateLabel =
    relationshipForm.relationshipType === "spouse_of" ? spouseStateMeta.endDateLabel : "";
  const relationshipStatusText =
    relationshipForm.relationshipType === "parent_of"
      ? "Use only child links here. Parent labels are derived automatically from direction and gender."
      : spouseStateMeta.status === "active"
        ? "Use only spouse links here. Marriage date becomes the primary relationship date."
        : `${spouseStateMeta.label} spouse relationship. Use the matching status date.`;

  const syncSelectedDefaults = (nextPeople: Person[], nextAccessList: MembershipAccess[] = memberAccessList) => {
    setMemberLoginForm((current) => ({
      ...current,
      personId:
        current.personId && nextPeople.some((person) => person.id === current.personId)
          ? current.personId
          : nextPeople[0]?.id ?? "",
    }));

    setRelationshipForm((current) => ({
      ...current,
      person1Id:
        current.person1Id && nextPeople.some((person) => person.id === current.person1Id)
          ? current.person1Id
          : nextPeople[0]?.id ?? "",
      person2Id:
        current.person2Id && nextPeople.some((person) => person.id === current.person2Id)
          ? current.person2Id
          : nextPeople[1]?.id ?? nextPeople[0]?.id ?? "",
    }));

    setMemberAccessUpdate((current) => ({
      ...current,
      personId:
        current.personId && nextPeople.some((person) => person.id === current.personId)
          ? current.personId
          : nextAccessList.find((item) => item.id === current.membershipId)?.person?.id ?? nextPeople[0]?.id ?? "",
    }));

    setJoinReviewForm((current) => ({
      ...current,
      personId:
        current.personId && nextPeople.some((person) => person.id === current.personId)
          ? current.personId
          : nextPeople[0]?.id ?? "",
    }));
  };

  const loadSession = async () => {
    try {
      const [sessionResponse, activeWorkspaceResponse] = await Promise.all([
        fetch("/api/auth/me", { cache: "no-store" }),
        fetch("/api/auth/active-workspace", { cache: "no-store" }),
      ]);

      if (!sessionResponse.ok) {
        setSession(null);
        setSessionMessage("Login as a workspace user to enforce role-based actions.");
      } else {
        const payload = (await sessionResponse.json()) as { data?: SessionData };
        setSession(payload.data ?? null);
        setSessionMessage("");
      }

      if (activeWorkspaceResponse.ok) {
        const payload = (await activeWorkspaceResponse.json()) as { data?: { familyId?: string | null } };
        setActiveWorkspaceId(payload.data?.familyId ?? "");
      }
    } catch {
      setSession(null);
      setSessionMessage("Unable to load session details.");
    }
  };

  const loadFamilies = async () => {
    setLoadingFamilies(true);
    try {
      const response = await fetch("/api/families", { cache: "no-store" });
      const payload = (await response.json()) as { data?: Family[]; error?: string };

      if (!response.ok) {
        throw new Error(payload.error ?? "Unable to load families");
      }

      const nextFamilies = payload.data ?? [];
      setFamilies(nextFamilies);
      setSelectedFamilyId((current) => {
        if (activeWorkspaceId && nextFamilies.some((family) => family.id === activeWorkspaceId)) {
          return activeWorkspaceId;
        }
        if (current && nextFamilies.some((family) => family.id === current)) {
          return current;
        }
        return nextFamilies[0]?.id ?? "";
      });
    } catch (error) {
      setSessionMessage(error instanceof Error ? error.message : "Unable to load families");
    } finally {
      setLoadingFamilies(false);
    }
  };

  const loadPeople = async (familyId: string, nextFilters: SearchFilters) => {
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

      const response = await fetch(`/api/families/${familyId}/people${params.toString() ? `?${params.toString()}` : ""}`, {
        cache: "no-store",
      });
      const payload = (await response.json()) as { data?: Person[]; error?: string };

      if (!response.ok) {
        throw new Error(payload.error ?? "Unable to load family members");
      }

      const nextPeople = payload.data ?? [];
      setPeople(nextPeople);
      syncSelectedDefaults(nextPeople);
    } catch (error) {
      setMemberMessage(error instanceof Error ? error.message : "Unable to load family members");
    } finally {
      setLoadingPeople(false);
    }
  };

  const loadWorkspaceDetail = async (familyId: string) => {
    if (!familyId) {
      setRelationships([]);
      setMemberAccessList([]);
      setJoinRequests([]);
      setAuditLogs([]);
      return;
    }

    setLoadingRelatedData(true);
    try {
      const requests: Promise<Response>[] = [
        fetch(`/api/families/${familyId}/relationships`, { cache: "no-store" }),
      ];

      if (canManageWorkspace) {
        requests.push(
          fetch(`/api/families/${familyId}/member-logins`, { cache: "no-store" }),
          fetch(`/api/families/${familyId}/join-requests`, { cache: "no-store" }),
          fetch(`/api/families/${familyId}/audit-logs`, { cache: "no-store" }),
        );
      }

      const responses = await Promise.all(requests);
      const payloads = await Promise.all(responses.map((response) => response.json()));

      if (!responses[0].ok) {
        throw new Error((payloads[0] as { error?: string }).error ?? "Unable to load relationships");
      }

      setRelationships((payloads[0] as { data?: Relationship[] }).data ?? []);

      if (canManageWorkspace) {
        if (!responses[1].ok) {
          throw new Error((payloads[1] as { error?: string }).error ?? "Unable to load member access");
        }
        if (!responses[2].ok) {
          throw new Error((payloads[2] as { error?: string }).error ?? "Unable to load join requests");
        }
        if (!responses[3].ok) {
          throw new Error((payloads[3] as { error?: string }).error ?? "Unable to load audit logs");
        }

        const nextAccessList = (payloads[1] as { data?: MembershipAccess[] }).data ?? [];
        setMemberAccessList(nextAccessList);
        setJoinRequests((payloads[2] as { data?: JoinRequest[] }).data ?? []);
        setAuditLogs((payloads[3] as { data?: AuditLog[] }).data ?? []);

        setMemberAccessUpdate((current) => {
          const selected = nextAccessList.find((item) => item.id === current.membershipId) ?? nextAccessList[0];
          return selected
            ? {
                membershipId: selected.id,
                role: selected.role,
                status: selected.status,
                password: "",
                personId: selected.person?.id ?? "",
              }
            : emptyMemberAccessUpdate;
        });

        setJoinReviewForm((current) => {
          const selected = ((payloads[2] as { data?: JoinRequest[] }).data ?? []).find((item) => item.id === current.requestId)
            ?? ((payloads[2] as { data?: JoinRequest[] }).data ?? []).find((item) => item.status === "pending")
            ?? (payloads[2] as { data?: JoinRequest[] }).data?.[0];

          return selected
            ? {
                requestId: selected.id,
                decision: "approved",
                role: selected.requestedRole,
                personId: selected.targetPerson?.id ?? people[0]?.id ?? "",
                mappingMode: "relation",
                relationType: "child",
                primaryContactSource: "requester",
                mergeConfirmed: false,
              }
            : emptyJoinReviewForm;
        });

        syncSelectedDefaults(people, nextAccessList);
      } else {
        setMemberAccessList([]);
        setJoinRequests([]);
        setAuditLogs([]);
      }
    } catch (error) {
      setRelationshipMessage(error instanceof Error ? error.message : "Unable to load workspace details");
    } finally {
      setLoadingRelatedData(false);
    }
  };

  useEffect(() => {
    void loadSession();
  }, [activeWorkspaceId]);

  useEffect(() => {
    void loadFamilies();
  }, []);

  useEffect(() => {
    void loadPeople(selectedFamilyId, filters);
  }, [selectedFamilyId, filters]);

  useEffect(() => {
    void loadWorkspaceDetail(selectedFamilyId);
  }, [selectedFamilyId, canManageWorkspace]);

  useEffect(() => {
    if (!selectedFamilyId) {
      return;
    }

    const syncActiveWorkspace = async () => {
      await fetch("/api/auth/active-workspace", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ familyId: selectedFamilyId }),
      });
      setActiveWorkspaceId(selectedFamilyId);
    };

    void syncActiveWorkspace();
  }, [selectedFamilyId]);

  useEffect(() => {
    if (!canManageWorkspace && (activeTab === "requests" || activeTab === "audit")) {
      setActiveTab("members");
    }
  }, [activeTab, canManageWorkspace]);

  useEffect(() => {
    setMemberLoginForm((current) => {
      if (current.personId && availableLoginPersonOptions.some((person) => person.id === current.personId)) {
        return current;
      }

      return {
        ...current,
        personId: availableLoginPersonOptions[0]?.id ?? "",
      };
    });
  }, [availableLoginPersonOptions]);

  const buildMemberPayload = () => ({
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
        languages: memberForm.languages,
      },
      familyContext: {
        relationToAnchor: memberForm.relationToAnchor,
        generationLevel: memberForm.generationLevel,
      },
      interests: {
        hobbies: memberForm.hobbies,
      },
      biography: memberForm.biography,
    },
  });

  const loadImageDataUrl = (file: File) =>
    new Promise<string>((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(typeof reader.result === "string" ? reader.result : "");
      reader.onerror = () => reject(new Error("Unable to read selected photo."));
      reader.readAsDataURL(file);
    });

  const resizePhotoDataUrl = (dataUrl: string, maxSize = 960) =>
    new Promise<string>((resolve, reject) => {
      const img = new Image();
      img.onload = () => {
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
      img.onerror = () => reject(new Error("Unable to process selected photo."));
      img.src = dataUrl;
    });

  const onUploadPhoto = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
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
      setMemberForm((current) => ({ ...current, photoUrl: optimized }));
      setPhotoUploadMessage("Photo added.");
    } catch (error) {
      setPhotoUploadMessage(error instanceof Error ? error.message : "Unable to upload photo.");
    }
  };

  const onSubmitMember = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!selectedFamilyId) {
      setMemberMessage("Create or select a family workspace first.");
      return;
    }

    setMemberSubmitting(true);
    setMemberMessage("");

    try {
      const url = editingPersonId
        ? `/api/families/${selectedFamilyId}/people/${editingPersonId}`
        : `/api/families/${selectedFamilyId}/people`;
      const method = editingPersonId ? "PATCH" : "POST";

      const response = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(buildMemberPayload()),
      });

      const payload = (await response.json()) as { error?: string };
      if (!response.ok) {
        throw new Error(payload.error ?? "Unable to save family member");
      }

      setMemberForm(emptyMemberForm);
      setEditingPersonId("");
      setMemberMessage(editingPersonId ? "Family member updated successfully." : "Family member captured successfully.");
      await loadPeople(selectedFamilyId, filters);
    } catch (error) {
      setMemberMessage(error instanceof Error ? error.message : "Unable to save family member");
    } finally {
      setMemberSubmitting(false);
    }
  };

  const startEditingPerson = (person: Person) => {
    setEditingPersonId(person.id);
    setMemberForm(toMemberForm(person));
    setMemberMessage(`Editing ${person.fullName}. Save to update this record.`);
  };

  const cancelEditingPerson = () => {
    setEditingPersonId("");
    setMemberForm(emptyMemberForm);
    setMemberMessage("");
  };

  const onCreateMemberLogin = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!selectedFamilyId) {
      setMemberLoginMessage("Select a family workspace first.");
      return;
    }

    setMemberLoginSubmitting(true);
    setMemberLoginMessage("");

    try {
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

      const response = await fetch(`/api/families/${selectedFamilyId}/member-logins`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          personId: memberLoginForm.personId,
          role: memberLoginForm.role,
          mobileNumber: sanitizedMobile,
        }),
      });

      const payload = (await response.json()) as {
        data?: { reusedExistingUser?: boolean; user?: { mobileNumber: string } };
        error?: string;
      };

      if (!response.ok) {
        throw new Error(payload.error ?? "Unable to create member login");
      }

      setMemberLoginMessage(
        payload.data?.reusedExistingUser
          ? `Existing user ${payload.data.user?.mobileNumber ?? ""} added to this workspace.`
          : "Login created and workspace access granted.",
      );
      setMemberLoginForm((current) => ({ ...emptyMemberLoginForm, personId: current.personId }));
      await loadWorkspaceDetail(selectedFamilyId);
    } catch (error) {
      setMemberLoginMessage(error instanceof Error ? error.message : "Unable to create member login");
    } finally {
      setMemberLoginSubmitting(false);
    }
  };

  const onUpdateMemberAccess = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!selectedFamilyId || !memberAccessUpdate.membershipId) {
      setMemberAccessMessage("Select a workspace access record first.");
      return;
    }

    setMemberAccessSubmitting(true);
    setMemberAccessMessage("");

    try {
      const response = await fetch(
        `/api/families/${selectedFamilyId}/member-logins/${memberAccessUpdate.membershipId}`,
        {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            role: memberAccessUpdate.role,
            status: memberAccessUpdate.status,
            password: memberAccessUpdate.password || undefined,
            personId: memberAccessUpdate.personId || undefined,
          }),
        },
      );

      const payload = (await response.json()) as { error?: string };
      if (!response.ok) {
        throw new Error(payload.error ?? "Unable to update member access");
      }

      setMemberAccessMessage("Workspace access updated successfully.");
      setMemberAccessUpdate((current) => ({ ...current, password: "" }));
      await loadWorkspaceDetail(selectedFamilyId);
    } catch (error) {
      setMemberAccessMessage(error instanceof Error ? error.message : "Unable to update member access");
    } finally {
      setMemberAccessSubmitting(false);
    }
  };

  const onCreateRelationship = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!selectedFamilyId) {
      setRelationshipMessage("Select a family workspace first.");
      return;
    }

    setRelationshipSubmitting(true);
    setRelationshipMessage("");

    try {
      const buildMarriageDatePayload = () => {
        if (relationshipForm.relationshipType !== "spouse_of") {
          return { startDate: relationshipForm.startDate || undefined, precisionLabel: "", valueLabel: "" };
        }

        if (relationshipForm.marriageDatePrecision === "dd_mm_yyyy" && relationshipForm.marriageDateDay) {
          const [year, month, day] = relationshipForm.marriageDateDay.split("-");
          return {
            startDate: relationshipForm.marriageDateDay,
            precisionLabel: "DD/MM/YYYY",
            valueLabel: `${day}/${month}/${year}`,
          };
        }

        if (relationshipForm.marriageDatePrecision === "mm_yyyy" && relationshipForm.marriageDateMonth) {
          const [year, month] = relationshipForm.marriageDateMonth.split("-");
          return {
            startDate: `${year}-${month}-01`,
            precisionLabel: "MM/YYYY",
            valueLabel: `${month}/${year}`,
          };
        }

        if (relationshipForm.marriageDatePrecision === "yyyy" && relationshipForm.marriageDateYear) {
          return {
            startDate: `${relationshipForm.marriageDateYear}-01-01`,
            precisionLabel: "YYYY",
            valueLabel: relationshipForm.marriageDateYear,
          };
        }

        return { startDate: undefined, precisionLabel: "", valueLabel: "" };
      };

      const marriageDatePayload = buildMarriageDatePayload();
      const isEditing = Boolean(editingRelationshipId);
      const response = await fetch(
        isEditing
          ? `/api/families/${selectedFamilyId}/relationships/${editingRelationshipId}`
          : `/api/families/${selectedFamilyId}/relationships`,
        {
        method: isEditing ? "PATCH" : "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          person1Id: relationshipForm.person1Id,
          person2Id: relationshipForm.person2Id,
          relationshipType: relationshipForm.relationshipType,
          status: relationshipForm.relationshipType === "parent_of" ? "active" : spouseStateMeta.status,
          startDate: marriageDatePayload.startDate,
          endDate:
            relationshipForm.relationshipType === "spouse_of" && spouseStateMeta.endDateLabel
              ? relationshipForm.endDate || undefined
              : undefined,
          notes: [
            relationshipForm.relationshipType === "spouse_of" ? `Spouse status: ${relationshipForm.spouseState}` : "",
            relationshipForm.relationshipType === "spouse_of" && marriageDatePayload.precisionLabel
              ? `Marriage date precision: ${marriageDatePayload.precisionLabel}`
              : "",
            relationshipForm.relationshipType === "spouse_of" && marriageDatePayload.valueLabel
              ? `Marriage date value: ${marriageDatePayload.valueLabel}`
              : "",
            relationshipForm.notes,
          ]
            .filter(Boolean)
            .join("\n"),
        }),
      });

      const payload = (await response.json()) as { error?: string };
      if (!response.ok) {
        throw new Error(payload.error ?? (isEditing ? "Unable to update relationship" : "Unable to create relationship"));
      }

      setRelationshipMessage(isEditing ? "Relationship updated successfully." : "Relationship captured successfully.");
      setRelationshipForm((current) => ({
        ...emptyRelationshipForm,
        person1Id: current.person1Id,
        person2Id: current.person2Id,
      }));
      setEditingRelationshipId("");
      await loadWorkspaceDetail(selectedFamilyId);
    } catch (error) {
      setRelationshipMessage(error instanceof Error ? error.message : "Unable to save relationship");
    } finally {
      setRelationshipSubmitting(false);
    }
  };

  const onReviewJoinRequest = async (event: FormEvent<HTMLFormElement>) => {
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
      const response = await fetch(
        `/api/families/${selectedFamilyId}/join-requests/${joinReviewForm.requestId}/review`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            decision: joinReviewForm.decision,
            role: joinReviewForm.decision === "approved" ? joinReviewForm.role : undefined,
            personId: joinReviewForm.decision === "approved" ? joinReviewForm.personId || undefined : undefined,
            mappingMode: joinReviewForm.decision === "approved" ? joinReviewForm.mappingMode : undefined,
            relationType:
              joinReviewForm.decision === "approved" && joinReviewForm.mappingMode === "relation"
                ? joinReviewForm.relationType
                : undefined,
            primaryContactSource:
              joinReviewForm.decision === "approved" && joinReviewForm.mappingMode === "same_person"
                ? joinReviewForm.primaryContactSource
                : undefined,
          }),
        },
      );

      const payload = (await response.json()) as { error?: string };
      if (!response.ok) {
        throw new Error(payload.error ?? "Unable to review join request");
      }

      setJoinReviewMessage(`Join request ${joinReviewForm.decision}.`);
      await loadWorkspaceDetail(selectedFamilyId);
    } catch (error) {
      setJoinReviewMessage(error instanceof Error ? error.message : "Unable to review join request");
    } finally {
      setJoinReviewSubmitting(false);
    }
  };

  return (
    <PostLoginShell
      title="Add a Family Member"
      subtitle="Every branch of the tree begins with a name and a story."
      activeNav="data-capture"
      currentFamily={selectedFamily?.name ?? null}
      currentFamilyCode={selectedFamily?.familyCode ?? null}
      currentUser={session?.user.fullName ?? null}
      rightRail={
        <>
          <div className={styles.panel}>
            <div className={styles.panelHeader}>
              <h2>Available Families</h2>
              <p>Select which family workspace you want to manage in data capture.</p>
            </div>
            <div className={styles.familyList}>
              {families.map((family) => (
                <button
                  key={family.id}
                  type="button"
                  className={`${styles.familyCard} ${family.id === selectedFamilyId ? styles.familyCardActive : ""}`}
                  onClick={() => setSelectedFamilyId(family.id)}
                >
                  <strong>{family.name}</strong>
                  <span>{family.nativePlace || "Native place not added"}</span>
                  <span>Code: {family.familyCode} | Slug: {family.slug}</span>
                </button>
              ))}
              {!families.length && !loadingFamilies ? <p className={styles.empty}>No families created yet.</p> : null}
            </div>
            <div className={styles.form}>
              <p className={styles.message}>
                For cleaner UX, family creation stays on onboarding and workspace access requests stay on join flow.
              </p>
              <div className={styles.actionRow}>
                <Link href="/family-space" className={styles.secondaryButton}>
                  Create Family Space
                </Link>
                <Link href="/join-family" className={styles.secondaryButton}>
                  Request Access
                </Link>
              </div>
            </div>
          </div>
        </>
      }
    >
      {sessionMessage ? <p className={styles.sessionNotice}>{sessionMessage}</p> : null}
      {isWorkspaceLoading ? (
        <div className={styles.loadingBanner}>
          <LoadingState compact title="Loading workspace data" message="Syncing families, members, and relationships." />
        </div>
      ) : null}
      <section className={styles.hero}>
        <div className={styles.metrics}>
          <div className={styles.metricCard}>
            <span className={styles.metricLabel}>Family Workspaces</span>
            <strong className={styles.metricValue}>{loadingFamilies ? "--" : families.length}</strong>
          </div>
          <div className={styles.metricCard}>
            <span className={styles.metricLabel}>Captured Members</span>
            <strong className={styles.metricValue}>{loadingPeople ? "--" : people.length}</strong>
          </div>
          <div className={styles.metricCard}>
            <span className={styles.metricLabel}>Relationships</span>
            <strong className={styles.metricValue}>{loadingRelatedData ? "--" : relationships.length}</strong>
          </div>
          <div className={styles.metricCard}>
            <span className={styles.metricLabel}>Logged-in user</span>
            <strong className={styles.metricValueSmall}>{session?.user.fullName ?? "Guest"}</strong>
            <span className={styles.metricSubtext}>{selectedMembership?.role ?? "No workspace role selected"}</span>
          </div>
        </div>
      </section>

      <section className={styles.mainPanel}>
        <div className={styles.tabBar}>
          <button type="button" className={`${styles.tabButton} ${activeTab === "members" ? styles.tabButtonActive : ""}`} onClick={() => setActiveTab("members")}>
            Members
          </button>
          <button type="button" className={`${styles.tabButton} ${activeTab === "relationships" ? styles.tabButtonActive : ""}`} onClick={() => setActiveTab("relationships")}>
            Relationships
          </button>
          <button type="button" className={`${styles.tabButton} ${activeTab === "access" ? styles.tabButtonActive : ""}`} onClick={() => setActiveTab("access")}>
            Access
          </button>
          {canManageWorkspace ? (
            <button type="button" className={`${styles.tabButton} ${activeTab === "requests" ? styles.tabButtonActive : ""}`} onClick={() => setActiveTab("requests")}>
              Requests
            </button>
          ) : null}
          {canManageWorkspace ? (
            <button type="button" className={`${styles.tabButton} ${activeTab === "audit" ? styles.tabButtonActive : ""}`} onClick={() => setActiveTab("audit")}>
              Audit
            </button>
          ) : null}
        </div>

        {activeTab === "members" ? (
          <>
            <div className={styles.panel}>
              <div className={styles.panelHeader}>
                <h2>{editingPersonId ? "Edit Family Member" : "Add Family Member"}</h2>
                <p>{selectedFamily ? `Working inside ${selectedFamily.name}.` : "Select a family workspace first."}</p>
              </div>
              <form className={styles.memberForm} onSubmit={onSubmitMember}>
                <section className={styles.memberSection}>
                  <div className={styles.memberSectionHeader}>Personal Information</div>
                  <div className={styles.memberSectionBody}>
                    <div className={styles.grid}>
                      <label className={styles.field}><span>First name</span><input value={memberForm.fullName.split(" ")[0] ?? ""} onChange={(event) => {
                        const rest = memberForm.fullName.split(" ").slice(1).join(" ");
                        setMemberForm((current) => ({ ...current, fullName: `${event.target.value}${rest ? ` ${rest}` : ""}`.trim() }));
                      }} placeholder="e.g. Priya" required /></label>
                      <label className={styles.field}><span>Last name</span><input value={memberForm.fullName.split(" ").slice(1).join(" ")} onChange={(event) => {
                        const first = memberForm.fullName.split(" ")[0] ?? "";
                        setMemberForm((current) => ({ ...current, fullName: `${first} ${event.target.value}`.trim() }));
                      }} placeholder="e.g. Sharma" /></label>
                      <label className={styles.field}><span>Middle / maiden name</span><input value={memberForm.community} onChange={(event) => setMemberForm((current) => ({ ...current, community: event.target.value }))} placeholder="Optional" /></label>
                      <label className={styles.field}><span>Gender</span><select value={memberForm.gender} onChange={(event) => setMemberForm((current) => ({ ...current, gender: event.target.value }))}><option value="">Select</option><option value="male">Male</option><option value="female">Female</option><option value="other">Other</option></select></label>
                      <label className={styles.field}><span>Date of birth</span><input type="date" value={memberForm.dateOfBirth} onChange={(event) => setMemberForm((current) => ({ ...current, dateOfBirth: event.target.value }))} /></label>
                      <label className={styles.field}><span>Birthplace</span><input value={memberForm.nativeVillage} onChange={(event) => setMemberForm((current) => ({ ...current, nativeVillage: event.target.value }))} placeholder="City, State" /></label>
                      <label className={styles.field}><span>Mobile number</span><input value={memberForm.mobileNumber} onChange={(event) => setMemberForm((current) => ({ ...current, mobileNumber: event.target.value }))} placeholder="10 digits" /></label>
                      <label className={styles.field}><span>Email</span><input type="email" value={memberForm.email} onChange={(event) => setMemberForm((current) => ({ ...current, email: event.target.value }))} placeholder="name@example.com" /></label>
                    </div>
                  </div>
                </section>

                <section className={styles.memberSection}>
                  <div className={styles.memberSectionHeader}>Family Connection</div>
                  <div className={styles.memberSectionBody}>
                    <p className={styles.sectionHint}>
                      Use these dropdowns to place the member correctly in the tree. Extended relations are inferred later from parent and spouse links.
                    </p>
                    <div className={styles.grid}>
                      <label className={styles.field}><span>Related to</span><select value={memberForm.relationToAnchor} onChange={(event) => setMemberForm((current) => ({ ...current, relationToAnchor: event.target.value }))}><option value="">Select a family member</option>{availablePersonOptions.map((person) => <option key={person.id} value={person.label}>{person.label}</option>)}</select></label>
                      <label className={styles.field}><span>Relationship type</span><select value={memberForm.maritalStatus} onChange={(event) => setMemberForm((current) => ({ ...current, maritalStatus: event.target.value }))}><option value="">Select relationship</option>{MEMBER_RELATION_OPTIONS.map((option) => <option key={option} value={option}>{option}</option>)}</select></label>
                      <label className={styles.field}>
                        <span>Gotra / Lineage</span>
                        <input
                          list="gotra-options"
                          value={memberForm.gotra}
                          onChange={(event) => setMemberForm((current) => ({ ...current, gotra: event.target.value }))}
                          placeholder="Type to search gotra"
                        />
                      </label>
                    </div>
                    <datalist id="gotra-options">
                      {gotraOptions.map((option) => <option key={option} value={option} />)}
                    </datalist>
                  </div>
                </section>

                <section className={styles.memberSection}>
                  <div className={styles.memberSectionHeader}>Life Details</div>
                  <div className={styles.memberSectionBody}>
                    <div className={styles.grid}>
                      <label className={styles.field}><span>Occupation</span><input value={memberForm.occupation} onChange={(event) => setMemberForm((current) => ({ ...current, occupation: event.target.value }))} placeholder="e.g. Engineer, Teacher" /></label>
                      <label className={styles.field}><span>Current city</span><input value={memberForm.currentCity} onChange={(event) => setMemberForm((current) => ({ ...current, currentCity: event.target.value }))} placeholder="e.g. Mumbai" /></label>
                      <label className={styles.field}><span>Address</span><input value={memberForm.address} onChange={(event) => setMemberForm((current) => ({ ...current, address: event.target.value }))} placeholder="Street, area, city, state" /></label>
                    </div>
                    <label className={styles.field}><span>Biography / Notes</span><textarea value={memberForm.biography || memberForm.notes} onChange={(event) => {
                      setMemberForm((current) => ({ ...current, biography: event.target.value, notes: event.target.value }));
                    }} placeholder="A brief note about this person - their personality, what they're remembered for..." rows={4} /></label>
                  </div>
                </section>

                <section className={styles.memberSection}>
                  <div className={styles.memberSectionHeader}>Photo</div>
                  <div className={styles.memberSectionBody}>
                    <div className={styles.photoUploadRow}>
                      <label className={styles.secondaryButton}>
                        Upload photo
                        <input type="file" accept="image/*" onChange={onUploadPhoto} className={styles.photoUploadInput} />
                      </label>
                      {memberForm.photoUrl ? (
                        <button
                          type="button"
                          className={styles.secondaryButton}
                          onClick={() => setMemberForm((current) => ({ ...current, photoUrl: "" }))}
                        >
                          Remove photo
                        </button>
                      ) : null}
                    </div>
                    {photoUploadMessage ? <p className={styles.photoUploadMessage}>{photoUploadMessage}</p> : null}
                    <label className={styles.field}>
                      <span>Photo URL</span>
                      <input
                        type="url"
                        value={memberForm.photoUrl}
                        onChange={(event) => setMemberForm((current) => ({ ...current, photoUrl: event.target.value }))}
                        placeholder="https://.../member-photo.jpg"
                      />
                    </label>
                    {memberForm.photoUrl ? (
                      <div className={styles.photoPreview}>
                        {/* Keep preview lightweight: backend stores URL string */}
                        <img src={memberForm.photoUrl} alt="Member preview" />
                      </div>
                    ) : null}
                  </div>
                </section>

                <div className={styles.memberFormActions}>
                  {editingPersonId ? (
                    <button className={styles.secondaryButton} type="button" onClick={cancelEditingPerson}>
                      Cancel
                    </button>
                  ) : null}
                  <button className={styles.primaryButton} type="submit" disabled={memberSubmitting || !selectedFamilyId}>
                    {memberSubmitting ? "Saving..." : editingPersonId ? "Update Member" : "Save Member"}
                  </button>
                </div>
                {memberMessage ? <p className={styles.message}>{memberMessage}</p> : null}
              </form>
            </div>

            <div className={styles.panel}>
              <div className={styles.panelHeader}>
                <h2>Captured Members</h2>
                <p>Search, filter, and edit the family records already captured in this workspace.</p>
              </div>
              <div className={styles.toolbar}>
                <input value={filters.q} onChange={(event) => setFilters((current) => ({ ...current, q: event.target.value }))} placeholder="Search by name, occupation, village..." />
                <input value={filters.relation} onChange={(event) => setFilters((current) => ({ ...current, relation: event.target.value }))} placeholder="Relation filter" />
                <select value={filters.livingStatus} onChange={(event) => setFilters((current) => ({ ...current, livingStatus: event.target.value as SearchFilters["livingStatus"] }))}>
                  <option value="">All records</option>
                  <option value="living">Living</option>
                  <option value="deceased">Deceased</option>
                </select>
              </div>
              {!selectedFamily ? (
                <p className={styles.empty}>No family selected yet.</p>
              ) : !people.length && !loadingPeople ? (
                <p className={styles.empty}>No members match this workspace or filter set yet.</p>
              ) : (
                <div className={styles.memberList}>
                  {people.map((person) => {
                    const personal = asRecord(asRecord(person.metadata).personal);
                    const familyContext = asRecord(asRecord(person.metadata).familyContext);

                    return (
                      <article key={person.id} className={styles.memberCard}>
                        <div className={styles.memberHeader}>
                          <div className={styles.memberIdentity}>
                            <div className={styles.memberAvatarWrap}>
                              {person.photoUrl ? (
                                <img src={person.photoUrl} alt={person.fullName} className={styles.memberAvatarImage} />
                              ) : (
                                <span className={styles.memberAvatarFallback}>{person.fullName.slice(0, 1).toUpperCase()}</span>
                              )}
                            </div>
                            <div>
                            <h3>{person.fullName}</h3>
                            <p>{person.gender || "Gender not set"} | {formatDate(person.dateOfBirth)}</p>
                            </div>
                          </div>
                          <div className={styles.actionRow}>
                            <span className={styles.memberTag}>{person.isDeceased ? "Deceased" : "Living"}</span>
                            <button className={styles.secondaryButton} type="button" onClick={() => startEditingPerson(person)}>Edit</button>
                          </div>
                        </div>
                        <div className={styles.memberMeta}>
                          <span>Relation: {asText(familyContext.relationToAnchor)}</span>
                          <span>Village: {person.nativeVillage || "Not added"}</span>
                          <span>Occupation: {person.occupation || "Not added"}</span>
                          <span>Phone: {asText(personal.mobileNumber)}</span>
                          <span>Address: {asText(personal.address)}</span>
                          <span>Email: {asText(personal.email)}</span>
                        </div>
                        {person.notes ? <p className={styles.memberNotes}>{person.notes}</p> : null}
                      </article>
                    );
                  })}
                </div>
              )}
            </div>
          </>
        ) : null}

        {activeTab === "relationships" ? (
          <div className={styles.panel}>
            <div className={styles.panelHeader}>
              <h2>Relationships</h2>
              <p>Only create Child or Spouse links here. All other relationships are derived automatically.</p>
            </div>
            <form className={styles.form} onSubmit={onCreateRelationship}>
              {editingRelationshipId ? (
                <p className={styles.sectionHint}>Edit mode is active for the selected relationship.</p>
              ) : null}
              <p className={styles.sectionHint}>{relationshipStatusText}</p>
              <div className={styles.grid}>
                <label className={styles.field}><span>Relationship</span><select value={relationshipForm.relationshipType} onChange={(event) => setRelationshipForm((current) => ({ ...current, relationshipType: event.target.value as RelationshipFormState["relationshipType"], endDate: event.target.value === "parent_of" ? "" : current.endDate, marriageDateDay: event.target.value === "parent_of" ? "" : current.marriageDateDay, marriageDateMonth: event.target.value === "parent_of" ? "" : current.marriageDateMonth, marriageDateYear: event.target.value === "parent_of" ? "" : current.marriageDateYear }))}><option value="parent_of">Child</option><option value="spouse_of">Spouse</option></select></label>
                <label className={styles.field}><span>{relationshipForm.relationshipType === "parent_of" ? "Parent" : "Spouse one"}</span><select value={relationshipForm.person1Id} onChange={(event) => setRelationshipForm((current) => ({ ...current, person1Id: event.target.value }))}>{availablePersonOptions.map((person) => <option key={person.id} value={person.id}>{person.label}</option>)}</select></label>
                <label className={styles.field}><span>{relationshipForm.relationshipType === "parent_of" ? "Child" : "Spouse two"}</span><select value={relationshipForm.person2Id} onChange={(event) => setRelationshipForm((current) => ({ ...current, person2Id: event.target.value }))}>{availablePersonOptions.map((person) => <option key={person.id} value={person.id}>{person.label}</option>)}</select></label>
                {relationshipForm.relationshipType === "spouse_of" ? (
                  <label className={styles.field}><span>Spouse status</span><select value={relationshipForm.spouseState} onChange={(event) => setRelationshipForm((current) => ({ ...current, spouseState: event.target.value as RelationshipFormState["spouseState"], endDate: event.target.value === "married" ? "" : current.endDate }))}><option value="married">Married</option><option value="divorced">Divorced</option><option value="separated">Separated</option><option value="widowed">Widowed</option></select></label>
                ) : null}
                {relationshipForm.relationshipType === "spouse_of" ? (
                  <label className={styles.field}>
                    <span>Marriage date format</span>
                    <select
                      value={relationshipForm.marriageDatePrecision}
                      onChange={(event) =>
                        setRelationshipForm((current) => ({
                          ...current,
                          marriageDatePrecision: event.target.value as RelationshipFormState["marriageDatePrecision"],
                        }))
                      }
                    >
                      <option value="dd_mm_yyyy">DD/MM/YYYY</option>
                      <option value="mm_yyyy">MM/YYYY</option>
                      <option value="yyyy">YYYY</option>
                    </select>
                  </label>
                ) : null}
                {relationshipForm.relationshipType === "spouse_of" && relationshipForm.marriageDatePrecision === "dd_mm_yyyy" ? (
                  <label className={styles.field}><span>Marriage date</span><input type="date" value={relationshipForm.marriageDateDay} onChange={(event) => setRelationshipForm((current) => ({ ...current, marriageDateDay: event.target.value }))} /></label>
                ) : null}
                {relationshipForm.relationshipType === "spouse_of" && relationshipForm.marriageDatePrecision === "mm_yyyy" ? (
                  <label className={styles.field}><span>Marriage month</span><input type="month" value={relationshipForm.marriageDateMonth} onChange={(event) => setRelationshipForm((current) => ({ ...current, marriageDateMonth: event.target.value }))} /></label>
                ) : null}
                {relationshipForm.relationshipType === "spouse_of" && relationshipForm.marriageDatePrecision === "yyyy" ? (
                  <label className={styles.field}><span>Marriage year</span><input type="number" min="1800" max="2200" placeholder="e.g. 2008" value={relationshipForm.marriageDateYear} onChange={(event) => setRelationshipForm((current) => ({ ...current, marriageDateYear: event.target.value }))} /></label>
                ) : null}
                {relationshipForm.relationshipType === "parent_of" ? (
                  <label className={styles.field}><span>{relationshipStartDateLabel}</span><input type="date" value={relationshipForm.startDate} onChange={(event) => setRelationshipForm((current) => ({ ...current, startDate: event.target.value }))} /></label>
                ) : null}
                {relationshipEndDateLabel ? (
                  <label className={styles.field}><span>{relationshipEndDateLabel}</span><input type="date" value={relationshipForm.endDate} onChange={(event) => setRelationshipForm((current) => ({ ...current, endDate: event.target.value }))} /></label>
                ) : null}
              </div>
              <label className={styles.field}><span>Notes</span><textarea value={relationshipForm.notes} onChange={(event) => setRelationshipForm((current) => ({ ...current, notes: event.target.value }))} placeholder="Optional relationship context" rows={3} /></label>
              <div className={styles.actionRow}>
                {editingRelationshipId ? (
                  <button
                    className={styles.secondaryButton}
                    type="button"
                    onClick={() => {
                      setEditingRelationshipId("");
                      setRelationshipForm((current) => ({
                        ...emptyRelationshipForm,
                        person1Id: current.person1Id,
                        person2Id: current.person2Id,
                      }));
                      setRelationshipMessage("");
                    }}
                  >
                    Cancel Edit
                  </button>
                ) : null}
                <button className={styles.primaryButton} type="submit" disabled={relationshipSubmitting || !selectedFamilyId}>
                  {relationshipSubmitting ? "Saving..." : editingRelationshipId ? "Update Relationship" : "Save Relationship"}
                </button>
              </div>
              {relationshipMessage ? <p className={styles.message}>{relationshipMessage}</p> : null}
            </form>
            <div className={styles.compactList}>
              {relationships.map((relationship) => (
                <div key={relationship.id} className={styles.compactCard}>
                  <strong>{formatRelationshipSummary(relationship)}</strong>
                  <span>{formatDate(relationship.startDate)}{relationship.endDate ? ` - ${formatDate(relationship.endDate)}` : ""}</span>
                  {(relationship.relationshipType === "parent_of" || relationship.relationshipType === "spouse_of") ? (
                    <div className={styles.actionRow}>
                      <button
                        type="button"
                        className={styles.secondaryButton}
                        onClick={() => {
                          const marriageDateFields = extractMarriageDateFields(relationship);
                          setEditingRelationshipId(relationship.id);
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
                            notes: relationship.notes
                              ?.replace(/Spouse status:\s*[a-z]+\s*/i, "")
                              .replace(/Marriage date precision:\s*[A-Z/]+\s*/i, "")
                              .replace(/Marriage date value:\s*[0-9/]+\s*/i, "")
                              .replace(/Marriage year:\s*\d{4}\s*/i, "")
                              .trim() ?? "",
                          });
                          setRelationshipMessage("");
                        }}
                      >
                        Edit
                      </button>
                    </div>
                  ) : null}
                </div>
              ))}
              {!relationships.length ? <p className={styles.empty}>No relationships recorded yet.</p> : null}
            </div>
          </div>
        ) : null}

        {activeTab === "access" ? (
          <div className={styles.stackGrid}>
            <div className={styles.panel}>
              <div className={styles.panelHeader}>
                <h2>Create Login Access</h2>
                <p>Admins can create OTP login access for family members.</p>
              </div>
              <form className={styles.form} onSubmit={onCreateMemberLogin}>
                <div className={styles.grid}>
                  <label className={styles.field}><span>Family member</span><select value={memberLoginForm.personId} onChange={(event) => setMemberLoginForm((current) => ({ ...current, personId: event.target.value }))} required disabled={!availableLoginPersonOptions.length}>{availableLoginPersonOptions.map((person) => <option key={person.id} value={person.id}>{person.label}</option>)}</select></label>
                  <label className={styles.field}><span>Role</span><select value={memberLoginForm.role} onChange={(event) => setMemberLoginForm((current) => ({ ...current, role: event.target.value as MemberLoginFormState["role"] }))}><option value="admin">Admin</option><option value="editor">Editor</option><option value="contributor">Contributor</option><option value="viewer">Viewer</option></select></label>
                  <label className={styles.field}><span>Mobile number</span><input value={memberLoginForm.mobileNumber} onChange={(event) => setMemberLoginForm((current) => ({ ...current, mobileNumber: event.target.value }))} placeholder="10 digits" required /></label>
                </div>
                <button className={styles.primaryButton} type="submit" disabled={memberLoginSubmitting || !selectedFamilyId || !availableLoginPersonOptions.length || !canCreateMemberLogin}>
                  {memberLoginSubmitting ? "Creating..." : "Create Member Login"}
                </button>
                {!availableLoginPersonOptions.length && selectedFamilyId ? <p className={styles.message}>All members already have login access in this family.</p> : null}
                {!canCreateMemberLogin && selectedFamilyId ? <p className={styles.message}>Admin role is required in this workspace to create member login access.</p> : null}
                {memberLoginMessage ? <p className={styles.message}>{memberLoginMessage}</p> : null}
              </form>
            </div>

            {canManageWorkspace ? (
              <div className={styles.panel}>
                <div className={styles.panelHeader}>
                  <h2>Access Management</h2>
                  <p>Adjust role, suspend access, reset passwords, and remap users to the right person record.</p>
                </div>
                <div className={styles.compactList}>
                  {memberAccessList.map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      className={`${styles.compactCard} ${memberAccessUpdate.membershipId === item.id ? styles.compactCardActive : ""}`}
                      onClick={() =>
                        setMemberAccessUpdate({
                          membershipId: item.id,
                          role: item.role,
                          status: item.status,
                          password: "",
                          personId: item.person?.id ?? "",
                        })
                      }
                    >
                      <strong>{item.user.fullName} ({item.role})</strong>
                      <span>{item.user.mobileNumber} | {item.status} | {item.person?.fullName ?? "No person linked"}</span>
                    </button>
                  ))}
                </div>
                <form className={styles.form} onSubmit={onUpdateMemberAccess}>
                  <div className={styles.grid}>
                    <label className={styles.field}><span>Linked person</span><select value={memberAccessUpdate.personId} onChange={(event) => setMemberAccessUpdate((current) => ({ ...current, personId: event.target.value }))}><option value="">No person link</option>{availablePersonOptions.map((person) => <option key={person.id} value={person.id}>{person.label}</option>)}</select></label>
                    <label className={styles.field}><span>Role</span><select value={memberAccessUpdate.role} onChange={(event) => setMemberAccessUpdate((current) => ({ ...current, role: event.target.value as MemberAccessUpdateState["role"] }))}><option value="admin">Admin</option><option value="editor">Editor</option><option value="contributor">Contributor</option><option value="viewer">Viewer</option></select></label>
                    <label className={styles.field}><span>Status</span><select value={memberAccessUpdate.status} onChange={(event) => setMemberAccessUpdate((current) => ({ ...current, status: event.target.value as MemberAccessUpdateState["status"] }))}><option value="active">Active</option><option value="suspended">Suspended</option></select></label>
                    <label className={styles.field}><span>Reset password</span><input type="password" value={memberAccessUpdate.password} onChange={(event) => setMemberAccessUpdate((current) => ({ ...current, password: event.target.value }))} placeholder="Leave blank to keep current password" /></label>
                  </div>
                  <button className={styles.primaryButton} type="submit" disabled={memberAccessSubmitting || !memberAccessUpdate.membershipId}>
                    {memberAccessSubmitting ? "Updating..." : "Update Access"}
                  </button>
                  {memberAccessMessage ? <p className={styles.message}>{memberAccessMessage}</p> : null}
                </form>
              </div>
            ) : null}
          </div>
        ) : null}

        {activeTab === "requests" ? (
          canManageWorkspace ? (
            <div className={styles.panel}>
              <div className={styles.panelHeader}>
                <h2>Join Requests</h2>
                <p>Approve or reject multi-workspace access requests and map the user to the right family member profile.</p>
              </div>
              <div className={styles.compactList}>
                {joinRequests.map((request) => (
                  <button
                    key={request.id}
                    type="button"
                    className={`${styles.compactCard} ${joinReviewForm.requestId === request.id ? styles.compactCardActive : ""}`}
                    onClick={() =>
                      setJoinReviewForm({
                        requestId: request.id,
                        decision: "approved",
                        role: request.requestedRole,
                        personId: request.targetPerson?.id ?? people[0]?.id ?? "",
                        mappingMode: "relation",
                        relationType: "child",
                        primaryContactSource: "requester",
                        mergeConfirmed: false,
                      })
                    }
                  >
                    <strong>{request.requestingUser.fullName} requested {request.requestedRole}</strong>
                    <span>{request.requestingUser.mobileNumber} | {request.status} | {request.message || "No message"}</span>
                  </button>
                ))}
              </div>
              <form className={styles.form} onSubmit={onReviewJoinRequest}>
                <div className={styles.grid}>
                  <label className={styles.field}><span>Decision</span><select value={joinReviewForm.decision} onChange={(event) => setJoinReviewForm((current) => ({ ...current, decision: event.target.value as JoinReviewFormState["decision"] }))}><option value="approved">Approve</option><option value="rejected">Reject</option></select></label>
                  <label className={styles.field}><span>Role on approval</span><select value={joinReviewForm.role} onChange={(event) => setJoinReviewForm((current) => ({ ...current, role: event.target.value as JoinReviewFormState["role"] }))} disabled={joinReviewForm.decision !== "approved"}><option value="admin">Admin</option><option value="editor">Editor</option><option value="contributor">Contributor</option><option value="viewer">Viewer</option></select></label>
                  <label className={styles.field}><span>Map to member profile</span><select value={joinReviewForm.personId} onChange={(event) => setJoinReviewForm((current) => ({ ...current, personId: event.target.value }))} disabled={joinReviewForm.decision !== "approved"}><option value="">Select member profile</option>{availablePersonOptions.map((person) => <option key={person.id} value={person.id}>{person.label}</option>)}</select></label>
                  <label className={styles.field}><span>Mapping mode</span><select value={joinReviewForm.mappingMode} onChange={(event) => setJoinReviewForm((current) => ({ ...current, mappingMode: event.target.value as JoinReviewFormState["mappingMode"], mergeConfirmed: false }))} disabled={joinReviewForm.decision !== "approved"}><option value="relation">Relation</option><option value="same_person">Same Person (Merge)</option></select></label>
                  {joinReviewForm.mappingMode === "relation" ? (
                    <label className={styles.field}><span>Relationship</span><select value={joinReviewForm.relationType} onChange={(event) => setJoinReviewForm((current) => ({ ...current, relationType: event.target.value as JoinReviewFormState["relationType"] }))} disabled={joinReviewForm.decision !== "approved"}><option value="spouse">Spouse</option><option value="child">Child</option><option value="parent">Parent</option></select></label>
                  ) : null}
                  {joinReviewForm.mappingMode === "same_person" ? (
                    <label className={styles.field}><span>Primary contact number</span><select value={joinReviewForm.primaryContactSource} onChange={(event) => setJoinReviewForm((current) => ({ ...current, primaryContactSource: event.target.value as JoinReviewFormState["primaryContactSource"] }))} disabled={joinReviewForm.decision !== "approved"}><option value="requester">Requester number</option><option value="approved">Approved profile number</option></select></label>
                  ) : null}
                </div>
                {joinReviewForm.mappingMode === "same_person" ? (
                  <label className={styles.field}>
                    <span>Merge warning</span>
                    <div>
                      <p className={styles.message}>Duplicate warning: this action merges requester profile into selected profile. Merge history is saved and can be undone.</p>
                      <label>
                        <input
                          type="checkbox"
                          checked={joinReviewForm.mergeConfirmed}
                          onChange={(event) => setJoinReviewForm((current) => ({ ...current, mergeConfirmed: event.target.checked }))}
                          disabled={joinReviewForm.decision !== "approved"}
                        />{" "}
                        I understand and confirm this merge
                      </label>
                    </div>
                  </label>
                ) : null}
                <button className={styles.primaryButton} type="submit" disabled={joinReviewSubmitting || !joinReviewForm.requestId || (joinReviewForm.decision === "approved" && joinReviewForm.mappingMode === "same_person" && !joinReviewForm.mergeConfirmed)}>
                  {joinReviewSubmitting ? "Saving..." : "Submit Review"}
                </button>
                {joinReviewMessage ? <p className={styles.message}>{joinReviewMessage}</p> : null}
              </form>
            </div>
          ) : (
            <div className={styles.panel}>
              <p className={styles.empty}>Only workspace admins can review join requests.</p>
            </div>
          )
        ) : null}

        {activeTab === "audit" ? (
          canManageWorkspace ? (
            <div className={styles.panel}>
              <div className={styles.panelHeader}>
                <h2>Audit Trail</h2>
                <p>Latest sensitive actions inside this family workspace.</p>
              </div>
              <div className={styles.compactList}>
                {auditLogs.map((log) => (
                  <div key={log.id} className={styles.compactCard}>
                    <strong>{log.action}</strong>
                    <span>{formatDate(log.createdAt)} | {log.actorUser?.fullName ?? "System"} | {log.entityType}</span>
                  </div>
                ))}
                {!auditLogs.length ? <p className={styles.empty}>No audit log entries yet.</p> : null}
              </div>
            </div>
          ) : (
            <div className={styles.panel}>
              <p className={styles.empty}>Only workspace admins can view audit trail entries.</p>
            </div>
          )
        ) : null}
      </section>
    </PostLoginShell>
  );
}
