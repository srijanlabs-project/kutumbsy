import { z } from "zod";

export const createFamilySchema = z.object({
  name: z.string().min(1),
  slug: z.string().optional(),
  description: z.string().optional(),
  nativePlace: z.string().optional(),
  createdByPhone: z.string().optional(),
  initialAdminName: z.string().min(2).optional(),
  initialAdminMobileNumber: z.string().trim().regex(/^[0-9]{10}$/).optional(),
});

export const personMetadataSchema = z.record(z.unknown());

export const createPersonSchema = z.object({
  fullName: z.string().min(1),
  gender: z.string().optional(),
  dateOfBirth: z.string().optional(),
  isDeceased: z.boolean().optional(),
  photoUrl: z.string().optional(),
  nativeVillage: z.string().optional(),
  gotra: z.string().optional(),
  kuldevta: z.string().optional(),
  community: z.string().optional(),
  education: z.string().optional(),
  occupation: z.string().optional(),
  notes: z.string().optional(),
  metadata: personMetadataSchema.optional(),
});

export const updatePersonSchema = createPersonSchema.partial().extend({
  fullName: z.string().min(1).optional(),
});

export const createRelationshipSchema = z.object({
  person1Id: z.string().uuid(),
  person2Id: z.string().uuid(),
  relationshipType: z.enum([
    "parent_of",
    "spouse_of",
  ]),
  status: z.enum(["active", "historical"]).default("active"),
  startDate: z.string().optional(),
  endDate: z.string().optional(),
  notes: z.string().optional(),
  metadata: personMetadataSchema.optional(),
});

export const createMemberLoginSchema = z.object({
  personId: z.string().uuid(),
  mobileNumber: z.string().trim().regex(/^[0-9]{10}$/),
  role: z.enum(["admin", "editor", "contributor", "viewer"]).default("editor"),
});

export const updateMemberLoginSchema = z.object({
  role: z.enum(["admin", "editor", "contributor", "viewer"]).optional(),
  status: z.enum(["active", "suspended"]).optional(),
  password: z.string().min(8).optional(),
  personId: z.string().uuid().optional(),
});

export const createJoinRequestSchema = z.object({
  workspaceIdentifier: z.string().min(1),
  requestedRole: z.enum(["editor", "contributor", "viewer"]).default("viewer"),
  message: z.string().max(1000).optional(),
});

export const reviewJoinRequestSchema = z.object({
  decision: z.enum(["approved", "rejected"]),
  role: z.enum(["admin", "editor", "contributor", "viewer"]).optional(),
  personId: z.string().uuid().optional(),
  mappingMode: z.enum(["same_person", "relation"]).optional(),
  relationType: z.enum(["spouse", "child", "parent"]).optional(),
  primaryContactSource: z.enum(["requester", "approved"]).optional(),
});
