export type Family = {
  id: string;
  name: string;
  slug: string;
  familyCode: string;
  nativePlace: string | null;
  createdByPhone: string | null;
  createdAt: string;
};

export type Person = {
  id: string;
  familyId: string;
  fullName: string;
  photoUrl: string | null;
  gender: string | null;
  dateOfBirth: string | null;
  isDeceased: boolean;
  nativeVillage: string | null;
  gotra: string | null;
  kuldevta: string | null;
  community: string | null;
  education: string | null;
  occupation: string | null;
  notes: string | null;
  metadata: Record<string, unknown>;
};

export type Relationship = {
  id: string;
  relationshipType: string;
  status: string;
  startDate: string | null;
  endDate: string | null;
  notes: string | null;
  metadata: Record<string, unknown>;
  createdAt: string;
  personOne: { id: string; fullName: string };
  personTwo: { id: string; fullName: string };
};

export type MembershipAccess = {
  id: string;
  role: "admin" | "editor" | "contributor" | "viewer";
  status: "active" | "suspended";
  createdAt: string;
  user: {
    id: string;
    fullName: string;
    mobileNumber: string;
    status: string;
  };
  person: {
    id: string;
    fullName: string;
  } | null;
};

export type JoinRequest = {
  id: string;
  requestedRole: "editor" | "contributor" | "viewer";
  status: "pending" | "approved" | "rejected";
  message: string | null;
  mergeAuditLogId?: string | null;
  createdAt: string;
  reviewedAt: string | null;
  requestingUser: {
    id: string;
    fullName: string;
    mobileNumber: string;
  };
  reviewedByUser: {
    id: string;
    fullName: string;
  } | null;
  targetPerson: {
    id: string;
    fullName: string;
  } | null;
};

export type AuditLog = {
  id: string;
  action: string;
  entityType: string;
  entityId: string;
  metadata: Record<string, unknown>;
  createdAt: string;
  actorUser: {
    id: string;
    fullName: string;
    mobileNumber: string;
  } | null;
};

export type SessionData = {
  user: {
    id: string;
    fullName: string;
    mobileNumber: string;
  };
  memberships: Array<{
    familyId: string;
    familyName: string;
    familySlug: string;
    familyCode?: string;
    role: "admin" | "editor" | "contributor" | "viewer";
  }>;
};

export type FamilyFormState = {
  name: string;
  nativePlace: string;
  createdByPhone: string;
  description: string;
};

export type MemberFormState = {
  fullName: string;
  photoUrl: string;
  gender: string;
  dateOfBirth: string;
  isDeceased: boolean;
  nativeVillage: string;
  gotra: string;
  kuldevta: string;
  community: string;
  education: string;
  occupation: string;
  mobileNumber: string;
  email: string;
  currentCity: string;
  address: string;
  maritalStatus: string;
  relationToAnchor: string;
  generationLevel: string;
  hobbies: string;
  languages: string;
  biography: string;
  notes: string;
};

export type MemberLoginFormState = {
  personId: string;
  mobileNumber: string;
  role: "admin" | "editor" | "contributor" | "viewer";
};

export type MemberAccessUpdateState = {
  membershipId: string;
  personId: string;
  role: "admin" | "editor" | "contributor" | "viewer";
  status: "active" | "suspended";
  password: string;
};

export type RelationshipFormState = {
  person1Id: string;
  person2Id: string;
  relationshipType: "parent_of" | "spouse_of";
  spouseState: "married" | "divorced" | "separated" | "widowed";
  startDate: string;
  marriageDatePrecision: "dd_mm_yyyy" | "mm_yyyy" | "yyyy";
  marriageDateDay: string;
  marriageDateMonth: string;
  marriageDateYear: string;
  endDate: string;
  notes: string;
};

export type JoinRequestFormState = {
  workspaceIdentifier: string;
  requestedRole: "editor" | "contributor" | "viewer";
  message: string;
};

export type JoinReviewFormState = {
  requestId: string;
  decision: "approved" | "rejected";
  role: "admin" | "editor" | "contributor" | "viewer";
  personId: string;
  mappingMode: "same_person" | "relation";
  relationType: "spouse" | "child" | "parent";
  primaryContactSource: "requester" | "approved";
  mergeConfirmed: boolean;
};

export type SearchFilters = {
  q: string;
  relation: string;
  generation: string;
  livingStatus: "" | "living" | "deceased";
};
