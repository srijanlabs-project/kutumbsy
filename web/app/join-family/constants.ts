import { OtpForm, RegisterForm } from "./types";

export const RESEND_COOLDOWN_SECONDS = 30;

export const emptyRegisterForm: RegisterForm = {
  fullName: "",
  mobileNumber: "",
};

export const emptyOtpForm: OtpForm = {
  mobileNumber: "",
  otp: "",
};
