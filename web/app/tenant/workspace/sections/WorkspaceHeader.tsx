import styles from "../workspace.module.css";

type WorkspaceHeaderProps = {
  familyName: string;
  nativePlace: string | null;
  memberCount: number;
  relationshipCount: number;
  currentUser: string;
};

export function WorkspaceHeader({
  familyName,
  nativePlace,
  memberCount,
  relationshipCount,
  currentUser,
}: WorkspaceHeaderProps) {
  return (
    <section className={styles.hero}>
      <div>
        <p className={styles.eyebrow}>Family Space</p>
        <h1 className={styles.title}>{familyName}</h1>
        <p className={styles.subtitle}>
          Private family home for lineage, member context, and long-term memory building.
        </p>
        <div className={styles.heroMeta}>
          <span>{nativePlace || "Native place not added"}</span>
          <span>{memberCount} members</span>
          <span>{relationshipCount} relationships</span>
        </div>
      </div>
      <div className={styles.heroCard}>
        <span className={styles.heroLabel}>Signed in as</span>
        <strong>{currentUser}</strong>
        <span className={styles.heroHint}>This is the family-facing Family Space, not the platform setup panel.</span>
      </div>
    </section>
  );
}
