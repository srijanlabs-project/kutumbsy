import { env } from "../config/env.js";

type SendOtpResult = {
  ok: boolean;
  message: string;
};

type VerifyOtpResult = {
  ok: boolean;
  message: string;
};

type Msg91Response = {
  type?: string;
  message?: string;
  error?: string;
};

const otpProvider = env.otpProvider;
const defaultCountryCode = env.msg91CountryCode;

const normalizeMobileForProvider = (mobileNumber: string): string => {
  const digitsOnly = mobileNumber.replace(/\D/g, "");
  if (!digitsOnly) {
    return digitsOnly;
  }

  if (digitsOnly.startsWith(defaultCountryCode)) {
    return digitsOnly;
  }

  return `${defaultCountryCode}${digitsOnly}`;
};

const parseJsonSafely = async <T>(response: Response): Promise<T | null> => {
  const raw = await response.text();
  if (!raw.trim()) {
    return null;
  }

  try {
    return JSON.parse(raw) as T;
  } catch {
    return null;
  }
};

const buildMsg91BaseUrl = (): URL => {
  return new URL(env.msg91BaseUrl);
};

const sendViaMsg91 = async (mobileNumber: string): Promise<SendOtpResult> => {
  const authKey = env.msg91AuthKey;
  const templateId = env.msg91OtpTemplateId;

  if (!authKey || !templateId) {
    throw new Error("MSG91_AUTH_KEY and MSG91_OTP_TEMPLATE_ID are required when OTP_PROVIDER=msg91");
  }

  const url = new URL("otp", buildMsg91BaseUrl());
  url.searchParams.set("mobile", normalizeMobileForProvider(mobileNumber));
  url.searchParams.set("template_id", templateId);
  url.searchParams.set("authkey", authKey);

  const response = await fetch(url, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });

  const payload = await parseJsonSafely<Msg91Response>(response);
  if (!response.ok) {
    return {
      ok: false,
      message: payload?.message || payload?.error || "Unable to send OTP",
    };
  }

  return {
    ok: (payload?.type ?? "").toLowerCase() !== "error",
    message: payload?.message || "OTP sent",
  };
};

const verifyViaMsg91 = async (mobileNumber: string, otp: string): Promise<VerifyOtpResult> => {
  const authKey = env.msg91AuthKey;
  if (!authKey) {
    throw new Error("MSG91_AUTH_KEY is required when OTP_PROVIDER=msg91");
  }

  const url = new URL("otp/verify", buildMsg91BaseUrl());
  url.searchParams.set("mobile", normalizeMobileForProvider(mobileNumber));
  url.searchParams.set("otp", otp);

  const response = await fetch(url, {
    method: "GET",
    headers: {
      Accept: "application/json",
      authkey: authKey,
    },
  });

  const payload = await parseJsonSafely<Msg91Response>(response);
  const message = payload?.message || payload?.error || "OTP verification failed";
  const normalizedMessage = message.toLowerCase();

  return {
    ok:
      response.ok &&
      (normalizedMessage.includes("verified") || (payload?.type ?? "").toLowerCase() === "success"),
    message,
  };
};

const sendViaMock = async (): Promise<SendOtpResult> => ({
  ok: true,
  message: "Mock OTP sent. Use 123456 to verify in local development.",
});

const verifyViaMock = async (_mobileNumber: string, otp: string): Promise<VerifyOtpResult> => ({
  ok: otp === "123456",
  message: otp === "123456" ? "Mock OTP verified" : "Invalid OTP",
});

export const sendOtp = async (mobileNumber: string): Promise<SendOtpResult> => {
  if (otpProvider === "msg91") {
    return sendViaMsg91(mobileNumber);
  }

  return sendViaMock();
};

export const verifyOtp = async (mobileNumber: string, otp: string): Promise<VerifyOtpResult> => {
  if (otpProvider === "msg91") {
    return verifyViaMsg91(mobileNumber, otp);
  }

  return verifyViaMock(mobileNumber, otp);
};

export const isOtpProviderConfigured = (): boolean => {
  if (otpProvider !== "msg91") {
    return true;
  }

  return Boolean(env.msg91AuthKey && env.msg91OtpTemplateId);
};
