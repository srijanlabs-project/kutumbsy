import styles from "../../page.module.css";
import type { PrivacyCard } from "../content";

type PrivacyProps = {
  cards: PrivacyCard[];
};

export function Privacy({ cards }: PrivacyProps) {
  return (
    <section className={`${styles.section} ${styles.privacySection}`} id="privacy">
      <div className={styles.sectionInner}>
        <div className={styles.privacyIntro}>
          <div className={`${styles.sectionOverline} ${styles.sectionOverlineCentered}`}>Trust & Privacy</div>
          <h2 className={styles.sectionTitle}>Your family's story<br />belongs to <em>your family.</em></h2>
          <p className={`${styles.sectionDesc} ${styles.sectionDescCentered}`}>
            Sensitive family data handled with dignity, consent, and strict access controls always.
          </p>
        </div>
        <div className={styles.privacyGrid}>
          {cards.map((card) => (
            <div key={card.title} className={styles.privacyCard}>
              <span className={styles.pcIcon}>{card.icon}</span>
              <div className={styles.pcTitle}>{card.title}</div>
              <p className={styles.pcDesc}>{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
