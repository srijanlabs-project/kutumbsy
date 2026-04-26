"use client";

import { FormEvent, useEffect, useState } from "react";
import Link from "next/link";
import {
  RESEND_COOLDOWN_SECONDS,
  emptyOtpForm,
  emptyRegisterForm,
} from "../platform/auth/constants";
import {
  loadSessionAndActiveWorkspace,
  registerUser,
  resendOtp,
  sendOtp,
  setActiveWorkspace,
  verifyOtp,
} from "../platform/auth/services";
import type { SessionData } from "../platform/auth/types";
import styles from "./LandingPage.module.css";

export function AuthPanel() {
  const [authMode, setAuthMode] = useState<"login" | "register">("login");
  const [registerForm, setRegisterForm] = useState(emptyRegisterForm);
  const [otpForm, setOtpForm] = useState(emptyOtpForm);
  const [otpSent, setOtpSent] = useState(false);
  const [resendCountdown, setResendCountdown] = useState(0);
  const [submitting, setSubmitting] = useState<"register" | "sendOtp" | "resendOtp" | "verifyOtp" | null>(null);
  const [message, setMessage] = useState("");
  const [session, setSession] = useState<SessionData | null>(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const auth = params.get("auth");
    if (auth === "register") {
      setAuthMode("register");
    }
  }, []);

  useEffect(() => {
    const load = async () => {
      try {
        const payload = await loadSessionAndActiveWorkspace();
        if (payload.session.data) {
          setSession(payload.session.data);
        }
      } catch {
        // keep auth panel usable
      }
    };
    void load();
  }, []);

  useEffect(() => {
    if (!otpSent || resendCountdown <= 0) {
      return;
    }

    const timer = window.setTimeout(() => {
      setResendCountdown((current) => Math.max(0, current - 1));
    }, 1000);

    return () => window.clearTimeout(timer);
  }, [otpSent, resendCountdown]);

  const formatCountdown = (seconds: number) => (seconds > 60 ? `${Math.floor(seconds / 60)}m ${String(seconds % 60).padStart(2, "0")}s` : `${seconds}s`);

  const handleRegister = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitting("register");
    setMessage("");
    try {
      const payload = await registerUser(registerForm);
      if (!payload.data) {
        throw new Error(payload.error ?? "Unable to create account");
      }
      setSession(payload.data);
      setRegisterForm(emptyRegisterForm);
      setMessage("Account created successfully. Continue to dashboard.");
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "Unable to create account");
    } finally {
      setSubmitting(null);
    }
  };

  const handleSendOtp = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitting("sendOtp");
    setMessage("");
    try {
      const payload = await sendOtp(otpForm.mobileNumber);
      setOtpSent(true);
      setResendCountdown(RESEND_COOLDOWN_SECONDS);
      setOtpForm((current) => ({ ...current, otp: "" }));
      setMessage(payload.data?.message ?? "OTP sent. Enter it to continue.");
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "Unable to send OTP");
    } finally {
      setSubmitting(null);
    }
  };

  const handleVerifyOtp = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitting("verifyOtp");
    setMessage("");
    try {
      const payload = await verifyOtp(otpForm);
      if (!payload.data) {
        throw new Error(payload.error ?? "Unable to verify OTP");
      }
      setSession(payload.data);
      const firstWorkspaceId = payload.data.memberships[0]?.familyId ?? "";
      if (firstWorkspaceId) {
        await setActiveWorkspace(firstWorkspaceId);
      }
      setOtpForm(emptyOtpForm);
      setOtpSent(false);
      setResendCountdown(0);
      setMessage("Login successful. Continue to dashboard.");
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "Unable to verify OTP");
    } finally {
      setSubmitting(null);
    }
  };

  const handleResendOtp = async () => {
    if (!otpForm.mobileNumber || resendCountdown > 0) {
      return;
    }
    setSubmitting("resendOtp");
    setMessage("");
    try {
      const result = await resendOtp(otpForm.mobileNumber);
      if (!result.ok) {
        if (result.payload.retryAfterSeconds) {
          setResendCountdown(result.payload.retryAfterSeconds);
        }
        throw new Error(result.payload.error ?? "Unable to resend OTP");
      }
      setResendCountdown(RESEND_COOLDOWN_SECONDS);
      setMessage(result.payload.data?.message ?? "OTP resent successfully.");
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "Unable to resend OTP");
    } finally {
      setSubmitting(null);
    }
  };

  if (session) {
    return (
      <aside className={styles.card}>
        <h2 className={styles.cardTitle}>You are logged in</h2>
        <p className={styles.cardText}>Continue managing your family workspace.</p>
        <Link href="/platform/auth" className={styles.primaryButton}>
          Open Dashboard
        </Link>
      </aside>
    );
  }

  return (
    <aside className={styles.card}>
      <div className={styles.authModeRow}>
        <button
          type="button"
          className={`${styles.authModeButton} ${authMode === "login" ? styles.authModeButtonActive : ""}`}
          onClick={() => setAuthMode("login")}
        >
          Welcome Back
        </button>
        <button
          type="button"
          className={`${styles.authModeButton} ${authMode === "register" ? styles.authModeButtonActive : ""}`}
          onClick={() => setAuthMode("register")}
        >
          Create Account
        </button>
      </div>

      <h2 className={styles.cardTitle}>{authMode === "login" ? "Welcome Back" : "Create Account"}</h2>
      <p className={styles.cardText}>
        {authMode === "login" ? "Sign in to continue your family journey." : "Join thousands of families preserving their legacy."}
      </p>

      {authMode === "login" ? (
        <form className={styles.authForm} onSubmit={otpSent ? handleVerifyOtp : handleSendOtp}>
          <label className={styles.authField}>
            <span>Mobile number</span>
            <input
              value={otpForm.mobileNumber}
              onChange={(event) => setOtpForm((current) => ({ ...current, mobileNumber: event.target.value }))}
              placeholder="10 digits"
              required
              disabled={otpSent}
            />
          </label>
          {otpSent ? (
            <label className={styles.authField}>
              <span>OTP</span>
              <input
                value={otpForm.otp}
                onChange={(event) => setOtpForm((current) => ({ ...current, otp: event.target.value }))}
                placeholder="Enter OTP"
                required
              />
            </label>
          ) : null}

          <button className={styles.primaryButton} type="submit" disabled={submitting === "sendOtp" || submitting === "verifyOtp"}>
            {otpSent ? (submitting === "verifyOtp" ? "Verifying..." : "Verify OTP") : submitting === "sendOtp" ? "Sending..." : "Send OTP"}
          </button>
          {otpSent ? (
            <div className={styles.authUtilityRow}>
              <button
                type="button"
                className={styles.authTextButton}
                onClick={() => {
                  setOtpSent(false);
                  setResendCountdown(0);
                  setOtpForm((current) => ({ ...current, otp: "" }));
                  setMessage("");
                }}
              >
                Change number
              </button>
              {resendCountdown > 0 ? (
                <span className={styles.authHint}>Resend SMS in {formatCountdown(resendCountdown)}</span>
              ) : (
                <button type="button" className={styles.authTextButton} onClick={() => void handleResendOtp()} disabled={submitting === "resendOtp"}>
                  {submitting === "resendOtp" ? "Resending..." : "Resend SMS"}
                </button>
              )}
            </div>
          ) : null}
        </form>
      ) : (
        <form className={styles.authForm} onSubmit={handleRegister}>
          <label className={styles.authField}>
            <span>Full name</span>
            <input
              value={registerForm.fullName}
              onChange={(event) => setRegisterForm((current) => ({ ...current, fullName: event.target.value }))}
              placeholder="e.g. Rahul Prakash"
              required
            />
          </label>
          <label className={styles.authField}>
            <span>Mobile number</span>
            <input
              value={registerForm.mobileNumber}
              onChange={(event) => setRegisterForm((current) => ({ ...current, mobileNumber: event.target.value }))}
              placeholder="10 digits"
              required
            />
          </label>
          <button className={styles.primaryButton} type="submit" disabled={submitting === "register"}>
            {submitting === "register" ? "Creating..." : "Create My Account"}
          </button>
        </form>
      )}

      {message ? <p className={styles.authMessage}>{message}</p> : null}
    </aside>
  );
}
