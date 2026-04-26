"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { BrandLogo } from "../../../components/BrandLogo";
import { PostLoginShell } from "../../../components/PostLoginShell";
import { RESEND_COOLDOWN_SECONDS, emptyOtpForm, emptyRegisterForm, emptyWorkspaceForm } from "./constants";
import {
  createFamilySpace,
  loadSessionAndActiveWorkspace,
  logout,
  registerUser,
  resendOtp,
  sendOtp,
  setActiveWorkspace,
  verifyOtp,
} from "./services";
import { SessionData } from "./types";
import styles from "./workspace.module.css";

export function AuthWorkspace() {
  const [authMode, setAuthMode] = useState<"login" | "register">("login");
  const [registerForm, setRegisterForm] = useState(emptyRegisterForm);
  const [otpForm, setOtpForm] = useState(emptyOtpForm);
  const [otpSent, setOtpSent] = useState(false);
  const [resendCountdown, setResendCountdown] = useState(0);
  const [submitting, setSubmitting] = useState<"register" | "sendOtp" | "resendOtp" | "verifyOtp" | "workspace" | null>(null);
  const [registerMessage, setRegisterMessage] = useState("");
  const [loginMessage, setLoginMessage] = useState("");
  const [workspaceForm, setWorkspaceForm] = useState(emptyWorkspaceForm);
  const [workspaceMessage, setWorkspaceMessage] = useState("");
  const [session, setSession] = useState<SessionData | null>(null);
  const [sessionChecked, setSessionChecked] = useState(false);
  const [activeWorkspaceId, setActiveWorkspaceId] = useState<string>("");
  const createFormRef = useRef<HTMLElement | null>(null);

  const formatCountdown = (seconds: number): string => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;

    if (minutes <= 0) {
      return `${remainingSeconds}s`;
    }

    return `${minutes}m ${remainingSeconds.toString().padStart(2, "0")}s`;
  };

  const reloadSession = async () => {
    const payload = await loadSessionAndActiveWorkspace();
    if (payload.session.data) {
      setSession(payload.session.data);
    }
    setActiveWorkspaceId(payload.activeWorkspace.data?.familyId ?? "");
  };

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const mode = params.get("mode");
    if (mode === "register") {
      setAuthMode("register");
    }
  }, []);

  useEffect(() => {
    const loadSession = async () => {
      try {
        await reloadSession();
      } catch {
        // keep page usable even if session lookup fails
      } finally {
        setSessionChecked(true);
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

  const handleRegister = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitting("register");
    setRegisterMessage("");

    try {
      const payload = await registerUser(registerForm);
      if (!payload.data) {
        throw new Error(payload.error ?? "Unable to create family account");
      }

      setSession(payload.data);
      setRegisterForm(emptyRegisterForm);
      setRegisterMessage("Family account created. You can now create or join a Family Space.");
    } catch (error) {
      setRegisterMessage(error instanceof Error ? error.message : "Unable to create family account");
    } finally {
      setSubmitting(null);
    }
  };

  const handleSendOtp = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitting("sendOtp");
    setLoginMessage("");

    try {
      const payload = await sendOtp(otpForm.mobileNumber);
      if (payload.error) {
        throw new Error(payload.error ?? "Unable to send OTP");
      }

      setOtpSent(true);
      setResendCountdown(RESEND_COOLDOWN_SECONDS);
      setOtpForm((current) => ({ ...current, otp: "" }));
      setLoginMessage(payload.data?.message ?? "OTP sent. Enter it to complete login.");
    } catch (error) {
      setOtpSent(false);
      setLoginMessage(error instanceof Error ? error.message : "Unable to send OTP");
    } finally {
      setSubmitting(null);
    }
  };

  const handleResendOtp = async () => {
    if (!otpForm.mobileNumber || resendCountdown > 0) {
      return;
    }

    setSubmitting("resendOtp");
    setLoginMessage("");

    try {
      const result = await resendOtp(otpForm.mobileNumber);
      if (!result.ok) {
        if (result.payload.retryAfterSeconds) {
          setResendCountdown(result.payload.retryAfterSeconds);
        }
        throw new Error(result.payload.error ?? "Unable to resend OTP");
      }

      setResendCountdown(RESEND_COOLDOWN_SECONDS);
      setLoginMessage(result.payload.data?.message ?? "OTP resent successfully.");
    } catch (error) {
      setLoginMessage(error instanceof Error ? error.message : "Unable to resend OTP");
    } finally {
      setSubmitting(null);
    }
  };

  const handleVerifyOtp = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitting("verifyOtp");
    setLoginMessage("");

    try {
      const payload = await verifyOtp(otpForm);
      if (!payload.data) {
        throw new Error(payload.error ?? "Unable to verify OTP");
      }

      setSession(payload.data);
      const firstWorkspaceId = payload.data.memberships[0]?.familyId ?? "";
      if (firstWorkspaceId) {
        await setActiveWorkspace(firstWorkspaceId);
        setActiveWorkspaceId(firstWorkspaceId);
      }
      setOtpForm(emptyOtpForm);
      setOtpSent(false);
      setResendCountdown(0);
      setLoginMessage("Login successful.");
    } catch (error) {
      setLoginMessage(error instanceof Error ? error.message : "Unable to verify OTP");
    } finally {
      setSubmitting(null);
    }
  };

  const handleCreateWorkspace = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitting("workspace");
    setWorkspaceMessage("");

    try {
      const payload = await createFamilySpace(workspaceForm);
      if (!payload.data?.id) {
        throw new Error(payload.error ?? "Unable to create Family Space");
      }

      setWorkspaceForm(emptyWorkspaceForm);
      setWorkspaceMessage(
        payload.data.initialAdmin
          ? `Family Space created. ${payload.data.initialAdmin.fullName} can now log in with OTP using ${payload.data.initialAdmin.mobileNumber}.`
          : "Family Space created successfully.",
      );
    } catch (error) {
      setWorkspaceMessage(error instanceof Error ? error.message : "Unable to create Family Space");
    } finally {
      setSubmitting(null);
    }
  };

  const handleLogout = async () => {
    await logout();
    setSession(null);
    setActiveWorkspaceId("");
    setRegisterMessage("");
    setLoginMessage("Logged out.");
  };

  const handleWorkspaceSwitch = async (familyId: string) => {
    await setActiveWorkspace(familyId);
    setActiveWorkspaceId(familyId);
  };

  if (!sessionChecked) {
    return (
      <main className={styles.authPage}>
        <section className={styles.authShell}>
          <aside className={styles.authBrandPanel}>
            <BrandLogo className={styles.logoWrap} imageClassName={styles.logoImage} fallbackClassName={styles.logoFallback} />
            <p className={styles.brandQuote}>Checking secure session...</p>
          </aside>
        </section>
      </main>
    );
  }

  if (!session) {
    return (
      <main className={styles.authPage}>
        <section className={styles.authShell}>
          <aside className={styles.authBrandPanel}>
            <BrandLogo
              className={styles.logoWrap}
              imageClassName={styles.logoImage}
              fallbackClassName={styles.logoFallback}
            />
            <p className={styles.brandQuote}>
              Connect every branch of your family. Preserve your heritage. Share your story.
            </p>
            <ul className={styles.brandList}>
              <li>Build an interactive family tree across generations</li>
              <li>Invite relatives and grow your tree together</li>
              <li>Preserve photos, stories and timelines</li>
              <li>Celebrate birthdays and anniversaries</li>
              <li>Private and secure - you control who sees what</li>
            </ul>
          </aside>

          <article className={styles.authCard}>
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

            {authMode === "login" ? (
              <>
                <div className={styles.authHeader}>
                  <h1>Welcome Back</h1>
                  <p>Sign in to continue your family journey.</p>
                </div>
                <div className={styles.authSocialStack}>
                  <button type="button" className={styles.authSocialButton}>
                    Continue with Google
                  </button>
                  <button type="button" className={styles.authSocialButton}>
                    Continue with Facebook
                  </button>
                </div>
                <div className={styles.authDivider}>
                  <span>OR</span>
                </div>
                <form className={styles.authForm} onSubmit={otpSent ? handleVerifyOtp : handleSendOtp}>
                  <label className={styles.authField}>
                    <span>Mobile number</span>
                    <input
                      value={otpForm.mobileNumber}
                      onChange={(event) =>
                        setOtpForm((current) => ({
                          ...current,
                          mobileNumber: event.target.value,
                        }))
                      }
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
                        placeholder="Enter the OTP"
                        required
                      />
                    </label>
                  ) : null}
                  <button
                    className={styles.authPrimaryButton}
                    type="submit"
                    disabled={submitting === "sendOtp" || submitting === "verifyOtp"}
                  >
                    {otpSent
                      ? submitting === "verifyOtp"
                        ? "Verifying..."
                        : "Verify OTP"
                      : submitting === "sendOtp"
                        ? "Sending..."
                        : "Send OTP"}
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
                          setLoginMessage("");
                        }}
                      >
                        Change number
                      </button>
                      {resendCountdown > 0 ? (
                        <span className={styles.authHint}>Resend SMS in {formatCountdown(resendCountdown)}</span>
                      ) : (
                        <button
                          type="button"
                          className={styles.authTextButton}
                          onClick={() => void handleResendOtp()}
                          disabled={submitting === "resendOtp"}
                        >
                          {submitting === "resendOtp" ? "Resending..." : "Resend SMS"}
                        </button>
                      )}
                    </div>
                  ) : null}
                  {loginMessage ? <p className={styles.authMessage}>{loginMessage}</p> : null}
                </form>
              </>
            ) : (
              <>
                <div className={styles.authHeader}>
                  <h1>Create Account</h1>
                  <p>Join thousands of families preserving their legacy.</p>
                </div>
                <div className={styles.authSocialStack}>
                  <button type="button" className={styles.authSocialButton}>
                    Sign up with Google
                  </button>
                </div>
                <div className={styles.authDivider}>
                  <span>OR</span>
                </div>
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
                  <button className={styles.authGoldButton} type="submit" disabled={submitting === "register"}>
                    {submitting === "register" ? "Creating..." : "Create My Account"}
                  </button>
                  {registerMessage ? <p className={styles.authMessage}>{registerMessage}</p> : null}
                </form>
              </>
            )}
          </article>
        </section>
      </main>
    );
  }

  const activeMembership = session.memberships.find((membership) => membership.familyId === activeWorkspaceId) ?? session.memberships[0] ?? null;
  const membershipCount = session.memberships.length;
  const familyMembersStat = membershipCount;

  return (
    <PostLoginShell
      title="Family Space Administration"
      subtitle="Manage your family session, switch Family Spaces, and open the areas where members and relationships are maintained."
      activeNav="family-space"
      currentFamily={activeMembership?.familyName ?? null}
      currentFamilyCode={activeMembership?.familyCode ?? null}
      currentUser={session.user.fullName}
    >
      <section className={styles.dashboardGrid}>
        <div className={styles.dashboardTopRow}>
          <article className={`${styles.panel} ${styles.activeFamilyCard}`}>
            <p className={styles.activeFamilyTag}>● Active Family Space</p>
            <h2 className={styles.activeFamilyName}>{activeMembership?.familyName ?? "No Family Space selected"}</h2>
            <p className={styles.activeFamilyRoleLine}>
              <span className={styles.roleBadge}>{activeMembership?.role ?? "No active role"}</span>
              {activeMembership?.familyName ? "Motihari · Est. 1947" : "Select a family space to continue"}
            </p>
            <div className={styles.actionRow}>
              <Link href="/family-space" className={styles.primaryButton}>
                🌳 Enter Family Space
              </Link>
              {activeMembership ? (
                <button type="button" className={styles.secondaryButton} onClick={() => void handleWorkspaceSwitch(activeMembership.familyId)}>
                  ⇄ Switch
                </button>
              ) : null}
              <Link href="/family-space/requests" className={styles.ghostButton}>
                Requests
              </Link>
            </div>
            <div className={styles.activeFamilyStats}>
              <div>
                <strong>{familyMembersStat}</strong>
                <span>Members</span>
              </div>
            </div>
          </article>

          <article className={`${styles.panel} ${styles.profileCard}`}>
            <span className={styles.sessionLabel}>Current session</span>
            <strong className={styles.sessionUserName}>{session.user.fullName}</strong>
            <span className={styles.sessionPhone}>📱 {session.user.mobileNumber}</span>
            <div className={styles.sessionStatus}>
              <span className={styles.sessionStatusDot} />
              Active session · {activeMembership?.familyName ?? "Family Space"}
            </div>
            <div className={styles.profileCardActions}>
              <Link href="/family-space" className={styles.secondaryButton}>
                🚪 Open Family Space
              </Link>
              <button type="button" className={`${styles.secondaryButton} ${styles.logoutButton}`} onClick={handleLogout}>
                ↩ Logout
              </button>
            </div>
            <p className={styles.sessionFooterNote}>
              You are logged in as admin. Session is active and secured with OTP verification.
            </p>
          </article>
        </div>

        <div className={styles.dashboardMiddleRow}>
          <article className={styles.panel}>
            <div className={styles.cardHeader}>
              <h2>Quick Actions</h2>
              <span className={styles.cardHeaderMeta}>Jump to any section</span>
            </div>
            <div className={styles.navGrid}>
              <Link href="/family-space" className={styles.navCard}>
                <span className={styles.navCardIcon}>🌳</span>
                <strong>Family Space</strong>
                <span>View members, tree &amp; events</span>
              </Link>
              <Link href="/family-space/data-capture" className={styles.navCard}>
                <span className={styles.navCardIcon}>📸</span>
                <strong>Data Capture</strong>
                <span>Photos, events, milestones</span>
              </Link>
              <Link href="/family-space/data-capture" className={styles.navCard}>
                <span className={styles.navCardIcon}>➕</span>
                <strong>Add Member</strong>
                <span>Invite or create a profile</span>
              </Link>
              <Link href="/family-space/requests" className={styles.navCard}>
                <span className={styles.navCardIcon}>📋</span>
                <strong>Family Requests</strong>
                <span>Review pending join requests</span>
              </Link>
            </div>
          </article>

          <article className={styles.panel}>
            <div className={styles.cardHeader}>
              <h2>Your Family Spaces</h2>
              <span className={styles.cardHeaderMeta}>{session.memberships.length} space</span>
            </div>
            {session.memberships.length ? (
              <>
                <ul className={styles.membershipList}>
                  {session.memberships.map((membership) => (
                    <li key={`${membership.familyId}-${membership.role}`} className={styles.membershipItem}>
                      <span className={styles.membershipBadge}>{membership.familyName.slice(0, 1).toUpperCase()}</span>
                      <div className={styles.membershipMeta}>
                        <strong>{membership.familyName}</strong>
                        <span>{membership.role}</span>
                      </div>
                      <div className={styles.membershipActions}>
                        <button
                          type="button"
                          className={styles.switchButton}
                          onClick={() => void handleWorkspaceSwitch(membership.familyId)}
                        >
                          {activeWorkspaceId === membership.familyId ? "Active" : "Enter"}
                        </button>
                      </div>
                    </li>
                  ))}
                </ul>
                <button
                  type="button"
                  className={styles.addFamilyButton}
                  onClick={() => createFormRef.current?.scrollIntoView({ behavior: "smooth", block: "start" })}
                >
                  + Create a new Family Space
                </button>
              </>
            ) : (
              <p className={styles.empty}>No Family Space memberships yet.</p>
            )}
          </article>
        </div>

        <article ref={createFormRef} className={`${styles.panel} ${styles.createCard}`}>
          <h2>Create Family Space</h2>
          <form className={styles.form} onSubmit={handleCreateWorkspace}>
            <label className={styles.field}>
              <span>Family Space name</span>
              <input
                value={workspaceForm.name}
                onChange={(event) => setWorkspaceForm((current) => ({ ...current, name: event.target.value }))}
                placeholder="e.g. Sharma Family"
                required
                disabled={!session}
              />
            </label>
            <label className={styles.field}>
              <span>Initial Family admin name</span>
              <input
                value={workspaceForm.initialAdminName}
                onChange={(event) => setWorkspaceForm((current) => ({ ...current, initialAdminName: event.target.value }))}
                placeholder="e.g. Rahul Prakash"
                required
                disabled={!session}
              />
            </label>
            <label className={styles.field}>
              <span>Initial Family admin mobile number</span>
              <input
                value={workspaceForm.initialAdminMobileNumber}
                onChange={(event) =>
                  setWorkspaceForm((current) => ({ ...current, initialAdminMobileNumber: event.target.value }))
                }
                placeholder="10 digits"
                required
                disabled={!session}
              />
            </label>
            <label className={styles.field}>
              <span>Native place</span>
              <input
                value={workspaceForm.nativePlace}
                onChange={(event) => setWorkspaceForm((current) => ({ ...current, nativePlace: event.target.value }))}
                placeholder="Optional"
                disabled={!session}
              />
            </label>
            <label className={styles.field}>
              <span>Description</span>
              <input
                value={workspaceForm.description}
                onChange={(event) => setWorkspaceForm((current) => ({ ...current, description: event.target.value }))}
                placeholder="Optional purpose or branch note"
                disabled={!session}
              />
            </label>
            <p className={styles.privacyNote}>
              This Family Space remains private by default. Only invited members can access it.
            </p>
            <button className={styles.primaryButton} type="submit" disabled={submitting === "workspace" || !session}>
              {submitting === "workspace" ? "Creating..." : "Create Family Space"}
            </button>
            {workspaceMessage ? <p className={styles.message}>{workspaceMessage}</p> : null}
          </form>
        </article>
      </section>
    </PostLoginShell>
  );
}
