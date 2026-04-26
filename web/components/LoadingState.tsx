"use client";

import { BrandLogo } from "./BrandLogo";
import styles from "./LoadingState.module.css";

type LoadingStateProps = {
  title?: string;
  message?: string;
  compact?: boolean;
  className?: string;
};

export function LoadingState({
  title = "Loading...",
  message,
  compact = false,
  className,
}: LoadingStateProps) {
  const classes = [styles.root, compact ? styles.compact : "", className ?? ""].filter(Boolean).join(" ");

  return (
    <div className={classes} role="status" aria-live="polite">
      <BrandLogo
        className={styles.logoWrap}
        imageClassName={styles.logoImage}
        fallbackClassName={styles.logoFallback}
        alt="Kutumbsy"
      />
      <div className={styles.dots} aria-hidden="true">
        {[0, 1, 2, 3, 4, 5].map((item) => (
          <span key={item} className={styles.dot} />
        ))}
      </div>
      <p className={styles.title}>{title}</p>
      {message ? <p className={styles.message}>{message}</p> : null}
    </div>
  );
}
