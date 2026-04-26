"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { ReactNode, useState } from "react";
import styles from "./PostLoginShell.module.css";

type ActiveNav = "platform" | "family-space" | "requests" | "data-capture" | "security";

type PostLoginShellProps = {
  title: string;
  subtitle: string;
  activeNav: ActiveNav;
  currentFamily?: string | null;
  currentFamilyCode?: string | null;
  currentUser?: string | null;
  children: ReactNode;
  rightRail?: ReactNode;
};

export function PostLoginShell({
  title,
  subtitle,
  activeNav,
  currentFamily,
  currentFamilyCode,
  currentUser,
  children,
  rightRail,
}: PostLoginShellProps) {
  const avatarInitial = (currentUser ?? "U").trim().charAt(0).toUpperCase() || "U";
  const [showFamilyCode, setShowFamilyCode] = useState(false);
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const router = useRouter();

  const handleLogout = async () => {
    if (isLoggingOut) {
      return;
    }
    setIsLoggingOut(true);
    try {
      await fetch("/api/auth/logout", {
        method: "POST",
        cache: "no-store",
      });
    } finally {
      router.replace("/platform/auth");
      router.refresh();
      setIsLoggingOut(false);
    }
  };

  return (
    <main className={styles.page}>
      <header className={styles.topNav}>
        <div className={styles.topNavInner}>
          <Link href="/family-space" className={styles.brandLink}>
            <img src="/logo_1kutumb.png" alt="Kutumbsy" className={styles.brandLogo} />
          </Link>
          <nav className={styles.topActions} aria-label="Primary">
            <Link href="/family-space" className={`${styles.topAction} ${activeNav === "family-space" ? styles.topActionActive : ""}`}>
              Family Home
            </Link>
            <Link href="/family-space/requests" className={`${styles.topAction} ${activeNav === "requests" ? styles.topActionActive : ""}`}>
              Requests
            </Link>
            <Link href="/family-space/data-capture" className={`${styles.topAction} ${activeNav === "data-capture" ? styles.topActionActive : ""}`}>
              Add Member
            </Link>
          </nav>
          <div className={styles.topNavTools}>
            <button type="button" className={styles.topLogoutLink} onClick={handleLogout} disabled={isLoggingOut}>
              {isLoggingOut ? "Logging out..." : "Logout"}
            </button>
            <div className={styles.navAvatar}>{avatarInitial}</div>
          </div>
        </div>
      </header>

      <div className={`${styles.shell} ${rightRail ? styles.shellWithRail : styles.shellNoRail}`}>
        <aside className={styles.sidebar}>
          <section className={styles.sidebarContext}>
            <p className={styles.sidebarLabel}>Current context</p>
            {currentFamilyCode && currentFamily ? (
              <button
                type="button"
                className={styles.sidebarFamilyButton}
                onClick={() => setShowFamilyCode((value) => !value)}
                title="Click to show family code"
              >
                <strong className={styles.sidebarValue}>{currentFamily}</strong>
              </button>
            ) : (
              <strong className={styles.sidebarValue}>{currentFamily || "No Family Space selected"}</strong>
            )}
            {currentFamilyCode && showFamilyCode ? <span className={styles.sidebarFamilyCode}>Code: {currentFamilyCode}</span> : null}
            <span className={styles.sidebarHint}>{currentUser || "No active user loaded"}</span>
          </section>

          <section className={styles.sidebarNav}>
            <p className={styles.sidebarLabel}>Navigate</p>
            <div className={styles.navList}>
              <Link href="/family-space" className={`${styles.navItem} ${activeNav === "family-space" ? styles.navItemActive : ""}`}>
                <span className={styles.navItemIcon}>O</span>
                Family Home
              </Link>
              <Link href="/join-family" className={styles.navItem}>
                <span className={styles.navItemIcon}>{">"}</span>
                Join Family
              </Link>
              <Link href="/family-space/requests" className={`${styles.navItem} ${activeNav === "requests" ? styles.navItemActive : ""}`}>
                <span className={styles.navItemIcon}>=</span>
                Family Requests
              </Link>
              <Link href="/family-space/data-capture" className={`${styles.navItem} ${activeNav === "data-capture" ? styles.navItemActive : ""}`}>
                <span className={styles.navItemIcon}>+</span>
                Family Data Capture
              </Link>
            </div>
          </section>

          <section className={styles.sidebarUser}>
            <div className={styles.sidebarUserAvatar}>{avatarInitial}</div>
            <div>
              <p className={styles.sidebarUserName}>{currentUser || "User"}</p>
              <p className={styles.sidebarUserRole}>{currentFamily ? `Family Admin - ${currentFamily}` : "Family context"}</p>
            </div>
            <button type="button" className={styles.logoutButton} onClick={handleLogout} disabled={isLoggingOut}>
              {isLoggingOut ? "Logging out..." : "Logout"}
            </button>
          </section>
        </aside>

        <section className={styles.main}>
          <section className={styles.pageTop}>
            <div>
              <p className={styles.eyebrow}>Family Workspace</p>
              <h1 className={styles.title}>{title}</h1>
              <p className={styles.subtitle}>{subtitle}</p>
            </div>
          </section>

          <section className={styles.contentGrid}>
            {children}
            <footer className={styles.footer}>
              <span>Kutumbsy family workspace</span>
              <span>Family-first navigation and data capture.</span>
            </footer>
          </section>
        </section>

        {rightRail ? <aside className={styles.rightRail}>{rightRail}</aside> : null}
      </div>
    </main>
  );
}
