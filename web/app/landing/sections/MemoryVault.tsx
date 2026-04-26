import styles from "../../page.module.css";
import type { MemoryType } from "../content";

type MemoryVaultProps = {
  types: MemoryType[];
};

export function MemoryVault({ types }: MemoryVaultProps) {
  return (
    <section className={styles.memorySection} id="memory">
      <div className={styles.memoryInner}>
        <div>
          <div className={styles.memoryOverline}>Memory Vault</div>
          <h2 className={styles.memoryTitle}>Preserve stories<br />before they <em>disappear.</em></h2>
          <p className={styles.memoryDesc}>
            Every Indian family has stories that live in the memory of one person. When that person is gone, the story is gone. Kutumbsy changes that permanently.
          </p>
          <div className={styles.memoryTypes}>
            {types.map(([icon, text, badge, badgeClass]) => (
              <div key={text} className={styles.memoryType}>
                <div className={styles.mtIcon}>{icon}</div>
                <div className={styles.mtText}>{text}</div>
                <span className={`${styles.mtBadge} ${styles[badgeClass]}`}>{badge}</span>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.vaultVisual}>
          <div className={`${styles.vaultCard} ${styles.tall}`}>
            <span className={styles.vcIcon}>Stories</span>
            <div className={styles.vcTitle}>Family Stories</div>
            <p className={styles.vcDesc}>Voices, memories, and narratives attached to real people in your tree.</p>
            <span className={styles.vcCount}>284</span>
            <div className={styles.vcMeta}>Memories preserved</div>
          </div>
          <div className={styles.vaultCard}>
            <span className={styles.vcIcon}>Photos</span>
            <div className={styles.vcTitle}>Photo Albums</div>
            <p className={styles.vcDesc}>Organized by person, event and decade.</p>
          </div>
          <div className={styles.vaultCard}>
            <span className={styles.vcIcon}>Voice</span>
            <div className={styles.vcTitle}>Voice Stories</div>
            <p className={styles.vcDesc}>Grandparents speaking to grandchildren not yet born.</p>
          </div>
          <div className={styles.vaultCard}>
            <span className={styles.vcIcon}>Docs</span>
            <div className={styles.vcTitle}>Documents</div>
            <p className={styles.vcDesc}>Letters, deeds, and records safe forever.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
