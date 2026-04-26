import Link from "next/link";
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
            </div>
          </>
        )}
      </div>
    </main>
  );
}
