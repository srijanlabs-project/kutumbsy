"use client";

import { FormEvent, useEffect, useState } from "react";
import Link from "next/link";
import styles from "./workspace.module.css";

const RESEND_COOLDOWN_SECONDS = 30;

type SessionData = {
  user: {
    id: string;
    fullName: string;
    mobileNumber: string;
  };
  memberships: Array<{
    familyId: string;
    familyName: string;
    familySlug: string;
    role: "admin" | "editor" | "contributor" | "viewer";
  }>;
};

type ApiPayload<T> = {
  data?: T;
  error?: string;
  retryAfterSeconds?: number;
};

const emptyRegisterForm = {
  fullName: "",
  mobileNumber: "",
};

const emptyOtpForm = {
  mobileNumber: "",
  otp: "",
};

const emptyFamilyForm = {
  name: "",
  nativePlace: "",
  privacy: "invite-only",
  description: "",
};

const emptyRootForm = {
  fullName: "",
  dateOfBirth: "",
  gender: "male",
  spouseName: "",
  spouseGender: "female",
};

function parseJson<T>(text: string): T {
  if (!text.trim()) {
    return {} as T;
  }

  return JSON.parse(text) as T;
}

function withPrivacyDescription(description: string, privacy: string): string {
  const trimmed = description.trim();
  const privacyLine = `Privacy setting: ${privacy}`;
  return trimmed ? `${trimmed}\n\n${privacyLine}` : privacyLine;
}

export function CreateFamilyWorkspace() {
  const [session, setSession] = useState<SessionData | null>(null);
  const [authMode, setAuthMode] = useState<"signup" | "otp">("signup");
  const [registerForm, setRegisterForm] = useState(emptyRegisterForm);
  const [otpForm, setOtpForm] = useState(emptyOtpForm);
  const [otpSent, setOtpSent] = useState(false);
  const [resendCountdown, setResendCountdown] = useState(0);
  const [familyForm, setFamilyForm] = useState(emptyFamilyForm);
  const [rootForm, setRootForm] = useState(emptyRootForm);
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);
  const [submitting, setSubmitting] = useState<string | null>(null);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const loadSession = async () => {
      try {
        const response = await fetch("/api/auth/me", { cache: "no-store" });
        const text = await response.text();
        const payload = parseJson<ApiPayload<SessionData>>(text);

        if (response.ok && payload.data) {
          setSession(payload.data);
          setStep(2);
        }
      } catch {
        // keep onboarding available without blocking the page
      }
    };

    void loadSession();
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

  const formatCountdown = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainder = seconds % 60;
    return minutes > 0 ? `${minutes}m ${remainder.toString().padStart(2, "0")}s` : `${remainder}s`;
  };

  const handleRegister = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitting("register");
    setMessage("");

    try {
      const response = await fetch("/api/auth/register-user", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(registerForm),
      });

      const payload = parseJson<ApiPayload<SessionData>>(await response.text());
      if (!response.ok || !payload.data) {
        throw new Error(payload.error ?? "Unable to create your account.");
      }

      setSession(payload.data);
      setStep(2);
      setRegisterForm(emptyRegisterForm);
      setMessage("Your account is ready. Now add the family profile.");
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
      const response = await fetch("/api/auth/send-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ mobileNumber: otpForm.mobileNumber }),
      });
      const payload = parseJson<ApiPayload<{ message?: string }>>(await response.text());
      if (!response.ok) {
        throw new Error(payload.error ?? "Unable to send OTP.");
      }

      setOtpSent(true);
      setResendCountdown(RESEND_COOLDOWN_SECONDS);
      setMessage(payload.data?.message ?? "OTP sent. Enter it to continue.");
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
      const response = await fetch("/api/auth/verify-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(otpForm),
      });
      const payload = parseJson<ApiPayload<SessionData>>(await response.text());
      if (!response.ok || !payload.data) {
        throw new Error(payload.error ?? "Unable to verify OTP.");
      }

      setSession(payload.data);
      setOtpForm(emptyOtpForm);
      setOtpSent(false);
      setResendCountdown(0);
      setStep(2);
      setMessage("Welcome back. Continue creating the family tree.");
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
      const response = await fetch("/api/auth/resend-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ mobileNumber: otpForm.mobileNumber }),
      });
      const payload = parseJson<ApiPayload<{ message?: string }>>(await response.text());
      if (!response.ok) {
        if (payload.retryAfterSeconds) {
          setResendCountdown(payload.retryAfterSeconds);
        }
        throw new Error(payload.error ?? "Unable to resend OTP.");
      }

      setResendCountdown(RESEND_COOLDOWN_SECONDS);
      setMessage(payload.data?.message ?? "OTP resent successfully.");
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "Unable to resend OTP.");
    } finally {
      setSubmitting(null);
    }
  };

  const handleCreateFamilyTree = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!session) {
      setStep(1);
      setMessage("Sign in first to create a family tree.");
      return;
    }

    setSubmitting("createFamilyTree");
    setMessage("");

    try {
      const familyResponse = await fetch("/api/families", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: familyForm.name,
          nativePlace: familyForm.nativePlace || undefined,
          description: withPrivacyDescription(familyForm.description, familyForm.privacy),
          createdByPhone: session.user.mobileNumber,
        }),
      });

      const familyPayload = parseJson<ApiPayload<{ id: string; name: string }>>(await familyResponse.text());
      if (!familyResponse.ok || !familyPayload.data?.id) {
        throw new Error(familyPayload.error ?? "Unable to create the family profile.");
      }

      const familyId = familyPayload.data.id;

      await fetch("/api/auth/active-workspace", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ familyId }),
      });

      const rootPersonResponse = await fetch(`/api/families/${familyId}/people`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: rootForm.fullName,
          gender: rootForm.gender,
          dateOfBirth: rootForm.dateOfBirth || undefined,
          metadata: {
            familyContext: {
              relationToAnchor: "Root person",
              generationLevel: "Generation I",
              role: "Founder",
            },
          },
        }),
      });

      const rootPersonPayload = parseJson<ApiPayload<{ id: string }>>(await rootPersonResponse.text());
      if (!rootPersonResponse.ok || !rootPersonPayload.data?.id) {
        throw new Error(rootPersonPayload.error ?? "Family was created, but the root person could not be added.");
      }

      if (rootForm.spouseName.trim()) {
        const spouseResponse = await fetch(`/api/families/${familyId}/people`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            fullName: rootForm.spouseName.trim(),
            gender: rootForm.spouseGender,
            metadata: {
              familyContext: {
                relationToAnchor: "Spouse",
                generationLevel: "Generation I",
                role: "Co-founder",
              },
            },
          }),
        });

        const spousePayload = parseJson<ApiPayload<{ id: string }>>(await spouseResponse.text());
        if (!spouseResponse.ok || !spousePayload.data?.id) {
          throw new Error(spousePayload.error ?? "The spouse record could not be created.");
        }

        const relationshipResponse = await fetch(`/api/families/${familyId}/relationships`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            person1Id: rootPersonPayload.data.id,
            person2Id: spousePayload.data.id,
            relationshipType: "spouse_of",
          }),
        });

        const relationshipPayload = parseJson<ApiPayload<unknown>>(await relationshipResponse.text());
        if (!relationshipResponse.ok) {
          throw new Error(relationshipPayload.error ?? "The spouse relationship could not be created.");
        }
      }

      setStep(4);
      setMessage("Your family tree is ready.");
      window.setTimeout(() => {
        window.location.assign("/family-space");
      }, 1200);
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "Unable to create the family tree.");
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
          <p className={styles.brandTag}>Create a family tree that feels lived-in, private, and ready for generations.</p>
          <ul className={styles.promiseList}>
            <li>Start with your family identity and root generation.</li>
            <li>Keep OTP auth for now with the working backend flow.</li>
            <li>Land directly in the family dashboard once the tree is initialized.</li>
          </ul>
        </aside>

        <section className={styles.panel}>
          <div className={styles.stepper}>
            {[
              { id: 1, label: "Login" },
              { id: 2, label: "Family Profile" },
              { id: 3, label: "Root Person" },
              { id: 4, label: "Dashboard" },
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
                <h1>Create Family Tree</h1>
                <p>Begin with OTP-backed access. New users can create an account in one step, and existing users can continue with OTP.</p>
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
                <h1>Create Family Profile</h1>
                <p>Set up the family space with its identity, origin, and privacy intention.</p>
              </div>
              <form
                className={styles.form}
                onSubmit={(event) => {
                  event.preventDefault();
                  setStep(3);
                }}
              >
                <label className={styles.field}>
                  <span>Family name</span>
                  <input
                    value={familyForm.name}
                    onChange={(event) => setFamilyForm((current) => ({ ...current, name: event.target.value }))}
                    placeholder="e.g. Verma Family"
                    required
                  />
                </label>
                <label className={styles.field}>
                  <span>Origin</span>
                  <input
                    value={familyForm.nativePlace}
                    onChange={(event) => setFamilyForm((current) => ({ ...current, nativePlace: event.target.value }))}
                    placeholder="e.g. Varanasi"
                  />
                </label>
                <label className={styles.field}>
                  <span>Privacy setting</span>
                  <select
                    value={familyForm.privacy}
                    onChange={(event) => setFamilyForm((current) => ({ ...current, privacy: event.target.value }))}
                  >
                    <option value="private">Private</option>
                    <option value="invite-only">Invite-only</option>
                    <option value="public">Public</option>
                  </select>
                </label>
                <label className={styles.field}>
                  <span>Family note</span>
                  <textarea
                    value={familyForm.description}
                    onChange={(event) => setFamilyForm((current) => ({ ...current, description: event.target.value }))}
                    placeholder="A short note about the family, branch, or purpose of this tree."
                    rows={4}
                  />
                </label>
                <div className={styles.actionRow}>
                  <Link href="/" className={styles.linkButton}>
                    Back to home
                  </Link>
                  <button className={styles.primaryButton} type="submit">
                    Continue to root person
                  </button>
                </div>
              </form>
            </div>
          ) : null}

          {step === 3 ? (
            <div className={styles.stage}>
              <div className={styles.stageHeader}>
                <h1>Create Root Person</h1>
                <p>Start the tree with the first person and optionally add their spouse so the dashboard opens with a meaningful base.</p>
              </div>
              <form className={styles.form} onSubmit={handleCreateFamilyTree}>
                <label className={styles.field}>
                  <span>Root person name</span>
                  <input
                    value={rootForm.fullName}
                    onChange={(event) => setRootForm((current) => ({ ...current, fullName: event.target.value }))}
                    required
                  />
                </label>
                <div className={styles.fieldRow}>
                  <label className={styles.field}>
                    <span>Date of birth</span>
                    <input
                      type="date"
                      value={rootForm.dateOfBirth}
                      onChange={(event) => setRootForm((current) => ({ ...current, dateOfBirth: event.target.value }))}
                    />
                  </label>
                  <label className={styles.field}>
                    <span>Gender</span>
                    <select
                      value={rootForm.gender}
                      onChange={(event) => setRootForm((current) => ({ ...current, gender: event.target.value }))}
                    >
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </select>
                  </label>
                </div>
                <div className={styles.divider} />
                <label className={styles.field}>
                  <span>Spouse name (optional)</span>
                  <input
                    value={rootForm.spouseName}
                    onChange={(event) => setRootForm((current) => ({ ...current, spouseName: event.target.value }))}
                    placeholder="Leave blank if you want to add this later"
                  />
                </label>
                <label className={styles.field}>
                  <span>Spouse gender</span>
                  <select
                    value={rootForm.spouseGender}
                    onChange={(event) => setRootForm((current) => ({ ...current, spouseGender: event.target.value }))}
                    disabled={!rootForm.spouseName.trim()}
                  >
                    <option value="female">Female</option>
                    <option value="male">Male</option>
                    <option value="other">Other</option>
                  </select>
                </label>
                <div className={styles.actionRow}>
                  <Link href="/" className={styles.linkButton}>
                    Back to home
                  </Link>
                  <button type="button" className={styles.secondaryButton} onClick={() => setStep(2)}>
                    Back
                  </button>
                  <button className={styles.primaryButton} type="submit" disabled={submitting === "createFamilyTree"}>
                    {submitting === "createFamilyTree" ? "Building..." : "Create family tree"}
                  </button>
                </div>
              </form>
            </div>
          ) : null}

          {step === 4 ? (
            <div className={styles.stage}>
              <div className={styles.stageHeader}>
                <h1>Your family tree is ready</h1>
                <p>We&apos;re opening the family dashboard now so you can start adding members, memories, and branches.</p>
              </div>
              <div className={styles.successCard}>
                <strong>{familyForm.name}</strong>
                <span>{familyForm.nativePlace || "Origin can be refined later."}</span>
                <span>{rootForm.fullName} has been added as the starting member.</span>
              </div>
            </div>
          ) : null}

          {message ? <p className={styles.message}>{message}</p> : null}
        </section>
      </div>
    </main>
  );
}
