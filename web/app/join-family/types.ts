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

export type Family = {
  id: string;
  name: string;
  slug: string;
  familyCode: string;
  nativePlace: string | null;
  createdAt: string;
};

export type ApiPayload<T> = {
  data?: T;
  error?: string;
  retryAfterSeconds?: number;
};

export type RegisterForm = {
  fullName: string;
  mobileNumber: string;
};

export type OtpForm = {
  mobileNumber: string;
  otp: string;
};

export type RequestedRole = "viewer" | "contributor" | "editor";
