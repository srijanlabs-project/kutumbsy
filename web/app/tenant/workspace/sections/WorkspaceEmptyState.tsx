"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { LoadingState } from "../../../../components/LoadingState";
import styles from "../workspace.module.css";

type WorkspaceEmptyStateProps = {
  title: string;
  message: string;
  isLoading?: boolean;
  primaryLabel?: string;
  primaryHref?: string;
};

export function WorkspaceEmptyState({
  title,
  message,
  isLoading = false,
  primaryLabel = "Open Family Home",
  primaryHref = "/family-space",
}: WorkspaceEmptyStateProps) {
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
      <div className={`${styles.emptyState} ${isLoading ? styles.emptyStateLoading : ""}`}>
        {isLoading ? (
          <LoadingState title={title} message={message} />
        ) : (
          <>
            <h1>{title}</h1>
            <p>{message}</p>
            <div className={styles.topLinks}>
              <Link className={styles.linkButton} href={primaryHref}>{primaryLabel}</Link>
              <Link className={styles.ghostButton} href="/create-family">Create Family Space</Link>
              <Link className={styles.ghostButton} href="/join-family">Join Family</Link>
              <button type="button" className={styles.ghostButton} onClick={handleLogout} disabled={isLoggingOut}>
                {isLoggingOut ? "Logging out..." : "Logout"}
              </button>
            </div>
          </>
        )}
      </div>
    </main>
  );
}
