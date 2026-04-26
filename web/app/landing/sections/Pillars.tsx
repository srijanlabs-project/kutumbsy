import styles from "../../page.module.css";
import type { PillarCard } from "../content";

type PillarsProps = {
  cards: PillarCard[];
};

export function Pillars({ cards }: PillarsProps) {
  return (
    <section className={styles.section} id="features">
      <div className={styles.sectionInner}>
        <div className={styles.sectionHeader}>
          <div>
            <div className={styles.sectionOverline}>Three Pillars</div>
            <h2 className={styles.sectionTitle}>Everything your family<br />story <em>deserves.</em></h2>
          </div>
          <p className={styles.sectionDesc}>
            A complete platform where Indian families organize, preserve, and share who they are for themselves, and for every generation that follows.
          </p>
        </div>

        <div className={styles.pillarsGrid}>
          {cards.map((card) => (
            <div key={card.title} className={`${styles.pillarCard} ${styles[card.tone]}`}>
              <div className={`${styles.pillarIconWrap} ${styles[card.iconClass]}`}>{card.icon}</div>
              <div className={styles.pillarTitle}>{card.title}</div>
              <p className={styles.pillarDesc}>{card.description}</p>
              <ul className={styles.pillarList}>
                {card.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
