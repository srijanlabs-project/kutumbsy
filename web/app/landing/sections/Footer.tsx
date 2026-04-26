import styles from "../../page.module.css";
import type { FooterColumn } from "../content";

type FooterProps = {
  columns: FooterColumn[];
};

export function Footer({ columns }: FooterProps) {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerInner}>
        <div className={styles.footerTop}>
          <div>
            <a href="#" className={styles.navBrand}>
              <img src="/logo_1kutumb.png" alt="Kutumbsy" className={`${styles.brandLogoMark} ${styles.footerLogoMark}`} />
              <div>
                <span className={`${styles.brandName} ${styles.footerBrandName}`}>Kutumbsy</span>
                <span className={`${styles.brandTagline} ${styles.footerBrandTagline}`}>Digital Family Legacy</span>
              </div>
            </a>
            <p className={styles.footerBrandDesc}>
              "A modern home for family history, memory, and identity built for Indian families by Srijan Labs."
            </p>
          </div>

          {columns.map((column) => (
            <div key={column.title} className={styles.footerCol}>
              <h4>{column.title}</h4>
              <ul>
                {column.links.map((link) => (
                  <li key={link}><a href="#">{link}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className={styles.footerBottom}>
          <span>(c) 2026 Srijan Labs | Kutumbsy is a product of Srijan Labs | Navi Mumbai, India</span>
          <div className={styles.footerBadges}>
            {["Privacy-First", "No Ads Ever", "Indian-Family Built", "Made in India"].map((item) => (
              <div key={item} className={styles.fBadge}>{item}</div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
