import type {
  FamilyFormState,
  JoinRequestFormState,
  JoinReviewFormState,
  MemberAccessUpdateState,
  MemberFormState,
  MemberLoginFormState,
  RelationshipFormState,
  SearchFilters,
} from "./types";

export const emptyFamilyForm: FamilyFormState = {
  name: "",
  nativePlace: "",
  createdByPhone: "",
  description: "",
};

export const emptyMemberForm: MemberFormState = {
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
  notes: "",
};

export const emptyMemberLoginForm: MemberLoginFormState = {
  personId: "",
  mobileNumber: "",
  role: "editor",
};

export const emptyMemberAccessUpdate: MemberAccessUpdateState = {
  membershipId: "",
  personId: "",
  role: "editor",
  status: "active",
  password: "",
};

export const emptyRelationshipForm: RelationshipFormState = {
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
  notes: "",
};

export const emptyJoinRequestForm: JoinRequestFormState = {
  workspaceIdentifier: "",
  requestedRole: "viewer",
  message: "",
};

export const emptyJoinReviewForm: JoinReviewFormState = {
  requestId: "",
  decision: "approved",
  role: "viewer",
  personId: "",
  mappingMode: "relation",
  relationType: "child",
  primaryContactSource: "requester",
  mergeConfirmed: false,
};

export const emptyFilters: SearchFilters = {
  q: "",
  relation: "",
  generation: "",
  livingStatus: "",
};
