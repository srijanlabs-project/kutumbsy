export type SessionData = {
  token: string;
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
    role: string;
  }>;
};

export type AuthResponse = {
  data?: SessionData;
  error?: string;
  retryAfterSeconds?: number;
};

export type ActiveWorkspaceResponse = {
  data?: {
    familyId?: string | null;
  };
  error?: string;
};

export type FamilySpaceResponse = {
  data?: {
    id: string;
    initialAdmin?: {
      userId: string;
      personId: string;
      fullName: string;
      mobileNumber: string;
    } | null;
  };
  error?: string;
};

export type RegisterForm = {
  fullName: string;
  mobileNumber: string;
};

export type OtpForm = {
  mobileNumber: string;
  otp: string;
};

export type WorkspaceForm = {
  name: string;
  nativePlace: string;
  description: string;
  initialAdminName: string;
  initialAdminMobileNumber: string;
};
