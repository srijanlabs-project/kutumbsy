"use client";

import { FormEvent, useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { RESEND_COOLDOWN_SECONDS, emptyOtpForm, emptyRegisterForm } from "./constants";
import { filterFamilies, formatCountdown } from "./helpers";
import {
  loadJoinFamilyBootstrap,
  registerJoinUser,
  requestJoinAccess,
  resendJoinOtp,
  sendJoinOtp,
  verifyJoinOtp,
} from "./services";
import { Family, RequestedRole, SessionData } from "./types";
import styles from "./workspace.module.css";

export function JoinFamilyWorkspace() {
  const [session, setSession] = useState<SessionData | null>(null);
  const [families, setFamilies] = useState<Family[]>([]);
  const [query, setQuery] = useState("");
  const [selectedFamilyId, setSelectedFamilyId] = useState("");
  const [requestedRole, setRequestedRole] = useState<RequestedRole>("viewer");
  const [joinMessage, setJoinMessage] = useState("");
  const [authMode, setAuthMode] = useState<"signup" | "otp">("signup");
  const [registerForm, setRegisterForm] = useState(emptyRegisterForm);
  const [otpForm, setOtpForm] = useState(emptyOtpForm);
  const [otpSent, setOtpSent] = useState(false);
  const [resendCountdown, setResendCountdown] = useState(0);
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [submitting, setSubmitting] = useState<string | null>(null);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const load = async () => {
      try {
        const payload = await loadJoinFamilyBootstrap();

        if (payload.session.data) {
          setSession(payload.session.data);
          setStep(2);
        }

        setFamilies(payload.families.data ?? []);
      } catch {
        // keep screen usable even if preload fails
      }
    };

    void load();
  }, []);

  const reloadFamilies = async () => {
    try {
      const response = await fetch("/api/families?scope=discover", { cache: "no-store" });
      if (!response.ok) {
        return;
      }
      const payload = (await response.json()) as { data?: Family[] };
      setFamilies(payload.data ?? []);
    } catch {
      // keep screen usable even if family directory refresh fails
    }
  };

  useEffect(() => {
    if (!otpSent || resendCountdown <= 0) {
      return;
    }

    const timer = window.setTimeout(() => {
      setResendCountdown((current) => Math.max(0, current - 1));
    }, 1000);

    return () => window.clearTimeout(timer);
  }, [otpSent, resendCountdown]);

  const filteredFamilies = useMemo(() => {
    return filterFamilies(families, query);
  }, [families, query]);

  const selectedFamily = filteredFamilies.find((family) => family.id === selectedFamilyId) ?? families.find((family) => family.id === selectedFamilyId) ?? null;

  const handleRegister = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitting("register");
    setMessage("");

    try {
      const result = await registerJoinUser(registerForm);
      if (!result.ok || !result.payload.data) {
        throw new Error(result.payload.error ?? "Unable to create your account.");
      }

      setSession(result.payload.data);
      setStep(2);
      setRegisterForm(emptyRegisterForm);
      await reloadFamilies();
      setMessage("Your account is ready. Now choose a family tree to join.");
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "Unable to create your account.");
    } finally {
      setSubmitting(null);
    }
  };

  const handleSendOtp = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitting("sendOtp");
    setMessage("");

    try {
      const result = await sendJoinOtp(otpForm.mobileNumber);
      if (!result.ok) {
        throw new Error(result.payload.error ?? "Unable to send OTP.");
      }

      setOtpSent(true);
      setResendCountdown(RESEND_COOLDOWN_SECONDS);
      setMessage(result.payload.data?.message ?? "OTP sent. Enter it to continue.");
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "Unable to send OTP.");
    } finally {
      setSubmitting(null);
    }
  };

  const handleVerifyOtp = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitting("verifyOtp");
    setMessage("");

    try {
      const result = await verifyJoinOtp(otpForm);
      if (!result.ok || !result.payload.data) {
        throw new Error(result.payload.error ?? "Unable to verify OTP.");
      }

      setSession(result.payload.data);
      setOtpForm(emptyOtpForm);
      setOtpSent(false);
      setResendCountdown(0);
      setStep(2);
      await reloadFamilies();
      setMessage("Welcome back. Choose the family tree you want to join.");
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "Unable to verify OTP.");
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
      const result = await resendJoinOtp(otpForm.mobileNumber);
      if (!result.ok) {
        if (result.payload.retryAfterSeconds) {
          setResendCountdown(result.payload.retryAfterSeconds);
        }
        throw new Error(result.payload.error ?? "Unable to resend OTP.");
      }

      setResendCountdown(RESEND_COOLDOWN_SECONDS);
      setMessage(result.payload.data?.message ?? "OTP resent successfully.");
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "Unable to resend OTP.");
    } finally {
      setSubmitting(null);
    }
  };

  const handleRequestAccess = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!selectedFamily) {
      setMessage("Choose a family tree first.");
      return;
    }

    setSubmitting("join");
    setMessage("");

    try {
      const result = await requestJoinAccess({
        workspaceIdentifier: selectedFamily.familyCode,
        requestedRole,
        message: joinMessage || undefined,
      });
      if (!result.ok) {
        throw new Error(result.payload.error ?? "Unable to request access.");
      }

      setStep(3);
      setMessage(`Access request sent to ${selectedFamily.name}.`);
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "Unable to request access.");
    } finally {
      setSubmitting(null);
    }
  };

  return (
    <main className={styles.page}>
      <div className={styles.shell}>
        <aside className={styles.brandPanel}>
          <div className={styles.brandTop}>
            <Link href="/" className={styles.homeLink}>
              Back to Home
            </Link>
            <Link href="/" className={styles.brand}>
              Kutumb<b>sy</b>
            </Link>
          </div>
          <p className={styles.brandTag}>Join an existing family tree, preview its identity, and request the right level of access.</p>
          <ul className={styles.promiseList}>
            <li>Use the existing OTP-backed login flow.</li>
            <li>Search by family name, family code, slug, or origin.</li>
            <li>Send a join request that admins can review from the family side.</li>
          </ul>
        </aside>

        <section className={styles.panel}>
          <div className={styles.stepper}>
            {[
              { id: 1, label: "Login" },
              { id: 2, label: "Preview Family" },
              { id: 3, label: "Request Sent" },
            ].map((item) => (
              <div key={item.id} className={styles.stepItem}>
                <span className={`${styles.stepCircle} ${step >= item.id ? styles.stepCircleActive : ""}`}>{item.id}</span>
                <span className={`${styles.stepLabel} ${step >= item.id ? styles.stepLabelActive : ""}`}>{item.label}</span>
              </div>
            ))}
          </div>

          {step === 1 ? (
            <div className={styles.stage}>
              <div className={styles.stageHeader}>
                <h1>Join Family Tree</h1>
                <p>Create an account or log in with OTP first, then choose the family tree you want to join.</p>
              </div>

              <div className={styles.modeRow}>
                <button
                  type="button"
                  className={`${styles.modeButton} ${authMode === "signup" ? styles.modeButtonActive : ""}`}
                  onClick={() => setAuthMode("signup")}
                >
                  New to Kutumbsy
                </button>
                <button
                  type="button"
                  className={`${styles.modeButton} ${authMode === "otp" ? styles.modeButtonActive : ""}`}
                  onClick={() => setAuthMode("otp")}
                >
                  Existing user
                </button>
              </div>

              {authMode === "signup" ? (
                <form className={styles.form} onSubmit={handleRegister}>
                  <label className={styles.field}>
                    <span>Full name</span>
                    <input
                      value={registerForm.fullName}
                      onChange={(event) => setRegisterForm((current) => ({ ...current, fullName: event.target.value }))}
                      required
                    />
                  </label>
                  <label className={styles.field}>
                    <span>Mobile number</span>
                    <input
                      value={registerForm.mobileNumber}
                      onChange={(event) => setRegisterForm((current) => ({ ...current, mobileNumber: event.target.value }))}
                      placeholder="10 digits"
                      required
                    />
                  </label>
                  <button className={styles.primaryButton} type="submit" disabled={submitting === "register"}>
                    {submitting === "register" ? "Creating..." : "Create my account"}
                  </button>
                </form>
              ) : (
                <form className={styles.form} onSubmit={otpSent ? handleVerifyOtp : handleSendOtp}>
                  <label className={styles.field}>
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
                    <label className={styles.field}>
                      <span>OTP</span>
                      <input
                        value={otpForm.otp}
                        onChange={(event) => setOtpForm((current) => ({ ...current, otp: event.target.value }))}
                        placeholder="Enter OTP"
                        required
                      />
                    </label>
                  ) : null}
                  <div className={styles.actionRow}>
                    <button className={styles.primaryButton} type="submit" disabled={submitting === "sendOtp" || submitting === "verifyOtp"}>
                      {otpSent
                        ? submitting === "verifyOtp"
                          ? "Verifying..."
                          : "Verify OTP"
                        : submitting === "sendOtp"
                          ? "Sending..."
                          : "Send OTP"}
                    </button>
                    {otpSent ? (
                      <button
                        type="button"
                        className={styles.secondaryButton}
                        onClick={() => {
                          setOtpSent(false);
                          setResendCountdown(0);
                          setOtpForm((current) => ({ ...current, otp: "" }));
                        }}
                      >
                        Change number
                      </button>
                    ) : null}
                  </div>
                  {otpSent ? (
                    <div className={styles.resendRow}>
                      {resendCountdown > 0 ? (
                        <span className={styles.resendHint}>Resend SMS in {formatCountdown(resendCountdown)}</span>
                      ) : (
                        <button type="button" className={styles.linkButton} onClick={() => void handleResendOtp()}>
                          {submitting === "resendOtp" ? "Resending..." : "Resend SMS"}
                        </button>
                      )}
                    </div>
                  ) : null}
                </form>
              )}
            </div>
          ) : null}

          {step === 2 ? (
            <div className={styles.stage}>
              <div className={styles.stageHeader}>
                <h1>Preview Family</h1>
                <p>Search by family name, family code, slug, or origin. Then request the access level you need.</p>
              </div>
              <label className={styles.field}>
                <span>Search family tree</span>
                <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="e.g. A7K2M9Q, Verma, verma-family, Varanasi" />
              </label>

              <div className={styles.familyList}>
                {filteredFamilies.length ? (
                  filteredFamilies.map((family) => (
                    <button
                      key={family.id}
                      type="button"
                      className={`${styles.familyCard} ${selectedFamilyId === family.id ? styles.familyCardActive : ""}`}
                      onClick={() => setSelectedFamilyId(family.id)}
                    >
                      <strong>{family.name}</strong>
                      <span>{family.nativePlace || "Origin not added"}</span>
                      <small>Code: {family.familyCode} | Slug: {family.slug}</small>
                    </button>
                  ))
                ) : (
                  <div className={styles.emptyCard}>No matching family trees found yet.</div>
                )}
              </div>

              {selectedFamily ? (
                <form className={styles.form} onSubmit={handleRequestAccess}>
                  <div className={styles.previewCard}>
                    <strong>{selectedFamily.name}</strong>
                    <span>{selectedFamily.nativePlace || "Origin not added"}</span>
                    <span>Family Code: {selectedFamily.familyCode}</span>
                    <span>This is a limited preview. Access is granted after an admin reviews your request.</span>
                  </div>

                  <label className={styles.field}>
                    <span>Requested role</span>
                    <select value={requestedRole} onChange={(event) => setRequestedRole(event.target.value as typeof requestedRole)}>
                      <option value="viewer">Viewer</option>
                      <option value="contributor">Contributor</option>
                      <option value="editor">Editor</option>
                    </select>
                  </label>
                  <label className={styles.field}>
                    <span>Why do you want to join?</span>
                    <textarea
                      value={joinMessage}
                      onChange={(event) => setJoinMessage(event.target.value)}
                      rows={4}
                      placeholder="Optional note for the family admins reviewing your request."
                    />
                  </label>
                  <div className={styles.actionRow}>
                  <button className={styles.primaryButton} type="submit" disabled={submitting === "join"}>
                      {submitting === "join" ? "Sending..." : "Request access"}
                    </button>
                    <Link href="/" className={styles.linkButton}>
                      Back to home
                    </Link>
                  </div>
                </form>
              ) : null}
            </div>
          ) : null}

          {step === 3 ? (
            <div className={styles.stage}>
              <div className={styles.stageHeader}>
                <h1>Request sent</h1>
                <p>Your access request is now waiting for family admin review. Once approved, this family tree will appear in your family dashboard.</p>
              </div>
              {selectedFamily ? (
                <div className={styles.previewCard}>
                  <strong>{selectedFamily.name}</strong>
                  <span>Requested role: {requestedRole}</span>
                  <span>Admins can review this in the family-side requests flow.</span>
                </div>
              ) : null}
              <div className={styles.actionRow}>
                <Link href="/family-space" className={styles.secondaryButton}>
                  Open Family Home
                </Link>
                <Link href="/" className={styles.linkButton}>
                  Back to home
                </Link>
              </div>
            </div>
          ) : null}

          {message ? <p className={styles.message}>{message}</p> : null}
        </section>
      </div>
    </main>
  );
}
