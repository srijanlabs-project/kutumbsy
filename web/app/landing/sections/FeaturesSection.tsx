import styles from "../../page.module.css";
import type { Feature, FeatureRow } from "../content";

type FeaturesProps = {
  rows: FeatureRow[];
  features: Feature[];
};

export function FeaturesSection({ rows, features }: FeaturesProps) {
  return (
    <section className={`${styles.section} ${styles.featuresSection}`} id="platform">
      <div className={styles.sectionInner}>
        <div className={styles.featuresLayout}>
          <div className={styles.featuresVisual}>
            <div className={styles.fvHeader}>
              <div className={`${styles.fvDot} ${styles.fvDotR}`} />
              <div className={`${styles.fvDot} ${styles.fvDotY}`} />
              <div className={`${styles.fvDot} ${styles.fvDotG}`} />
              <span className={styles.fvLabel}>Sharma Family | Family Graph</span>
            </div>
            <div className={styles.fvBody}>
              {rows.map(([label, badge, badgeClass]) => (
                <div key={label} className={styles.fvRow}>
                  <span className={styles.fvRowLabel}>{label}</span>
                  <span className={`${styles.fvRowBadge} ${styles[badgeClass]}`}>{badge}</span>
                </div>
              ))}
              <div className={styles.fvProfile}>
                <div className={styles.fvAvatar}>R</div>
                <div className={styles.fvProfileInfo}>
                  <div className={styles.fvProfileName}>Ramesh Sharma</div>
                  <div className={styles.fvProfileRel}>Patriarch | Born 1942 | Jaipur</div>
                </div>
                <div className={styles.fvProfileGen}>Gen I</div>
              </div>
            </div>
          </div>

          <div>
            <div className={styles.sectionOverline}>Platform Features</div>
            <h2 className={`${styles.sectionTitle} ${styles.sectionTitleCompact}`}>
              Built for how Indian<br />families <em>actually work.</em>
            </h2>
            <div className={styles.featuresList}>
              {features.map((feature) => (
                <div key={feature.title} className={styles.featItem}>
                  <div className={`${styles.featIconWrap} ${styles[feature.iconClass]}`}>{feature.icon}</div>
                  <div>
                    <div className={styles.featTitle}>{feature.title}</div>
                    <p className={styles.featDesc}>{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
