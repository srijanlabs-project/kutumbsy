import styles from "../../page.module.css";
import Link from "next/link";

type HeroProps = {
  phaseItems: string[];
};

export function Hero({ phaseItems }: HeroProps) {
  return (
    <section className={styles.heroShell}>
      <div className={styles.hero}>
        <div className={styles.heroLeft}>
          <div className={styles.heroPill}>
            <span className={styles.pillDot} />
            Preserve Lineage with Dignity
          </div>
          <h1 className={styles.heroTitle}>
            A modern home for
            <br />
            <em>family history,</em>
            <br />
            memory &amp; identity.
          </h1>
          <p className={styles.heroSub}>
            Built for Indian families to organize relationships, preserve stories, and carry emotional continuity across generations so no name, face, or voice is ever lost.
          </p>
          <div className={styles.heroActions}>
            <Link href="/create-family" className={styles.btnSaffron}>Begin Your Family Tree -&gt;</Link>
            <Link href="/join-family" className={styles.btnOutlineForest}>Join Family Tree</Link>
          </div>
          <div className={styles.statusRow}>
            <div className={styles.statusChip}>Backend Health: Active</div>
            <div className={styles.statusChip}>MVP Workspace Ready</div>
            <div className={styles.statusChip}>Privacy-First</div>
          </div>
        </div>

        <div className={styles.heroRight}>
          <div className={styles.phaseCard}>
            <div className={styles.phaseCardHeader}>
              <span className={styles.phaseCardTitle}>Phase 1 Focus</span>
              <span className={styles.phaseBadge}>Now Building</span>
            </div>
            <div className={styles.treeVisual}>
              <svg viewBox="0 0 380 160" xmlns="http://www.w3.org/2000/svg">
                <line x1="190" y1="40" x2="100" y2="90" className={styles.treeLinePrimary} />
                <line x1="190" y1="40" x2="280" y2="90" className={styles.treeLinePrimary} />
                <line x1="100" y1="90" x2="55" y2="135" className={styles.treeLineSecondary} />
                <line x1="100" y1="90" x2="145" y2="135" className={styles.treeLineSecondary} />
                <line x1="280" y1="90" x2="235" y2="135" className={styles.treeLineSecondary} />
                <line x1="280" y1="90" x2="325" y2="135" className={styles.treeLineSecondary} />
                <circle cx="182" cy="32" r="16" fill="#1e4a3a" />
                <text x="182" y="37" textAnchor="middle" className={styles.treeTextMain}>A</text>
                <circle cx="198" cy="32" r="16" fill="#285c48" />
                <text x="198" y="37" textAnchor="middle" className={styles.treeTextMain}>S</text>
                <text x="190" y="12" textAnchor="middle" className={styles.treeLabel}>GENERATION I</text>
                <circle cx="92" cy="88" r="13" fill="#3a7560" />
                <text x="92" y="93" textAnchor="middle" className={styles.treeTextSecondary}>R</text>
                <circle cx="108" cy="88" r="13" fill="#c8610a" />
                <text x="108" y="93" textAnchor="middle" className={styles.treeTextSecondary}>P</text>
                <circle cx="272" cy="88" r="13" fill="#3a7560" />
                <text x="272" y="93" textAnchor="middle" className={styles.treeTextSecondary}>V</text>
                <circle cx="288" cy="88" r="13" fill="#8b4a5c" />
                <text x="288" y="93" textAnchor="middle" className={styles.treeTextSecondary}>M</text>
                <text x="100" y="74" textAnchor="middle" className={styles.treeSmallLabel}>GEN II</text>
                <text x="280" y="74" textAnchor="middle" className={styles.treeSmallLabel}>GEN II</text>
                <circle cx="55" cy="133" r="11" fill="#a07828" />
                <text x="55" y="138" textAnchor="middle" className={styles.treeTextThird}>K</text>
                <circle cx="145" cy="133" r="11" fill="#a07828" />
                <text x="145" y="138" textAnchor="middle" className={styles.treeTextThird}>N</text>
                <circle cx="235" cy="133" r="11" fill="#a07828" />
                <text x="235" y="138" textAnchor="middle" className={styles.treeTextThird}>D</text>
                <circle cx="325" cy="133" r="11" fill="#a07828" />
                <text x="325" y="138" textAnchor="middle" className={styles.treeTextThird}>T</text>
                <text x="100" y="155" textAnchor="middle" className={styles.treeTinyLabel}>GEN III</text>
                <text x="280" y="155" textAnchor="middle" className={styles.treeTinyLabel}>GEN III</text>
              </svg>
            </div>
            <div className={styles.phaseFeatures}>
              {phaseItems.map((item) => (
                <div key={item} className={styles.phaseFeat}>
                  <div className={styles.phaseFeatDot} />
                  <div className={styles.phaseFeatText}>{item}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
