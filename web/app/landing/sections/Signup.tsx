import styles from "../../page.module.css";
import type { PromiseItem } from "../content";
import Link from "next/link";

type SignupProps = {
  promiseItems: PromiseItem[];
};

export function Signup({ promiseItems }: SignupProps) {
  return (
    <section className={styles.signupSection} id="signup">
      <div className={styles.signupInner}>
        <div className={styles.signupGrid}>
          <div className={styles.signupLeft}>
            <h2 className={styles.signupQuote}>Login to your<br /><em>Kutumbsy workspace.</em></h2>
            <p className={styles.signupBody}>
              Access your family space, invite relatives, and continue building your family legacy from one secure place.
            </p>
            <div className={styles.promiseList}>
              {promiseItems.map((item) => (
                <div key={item.title} className={styles.promiseItem}>
                  <div className={`${styles.piIcon} ${styles[item.iconClass]}`}>{item.icon}</div>
                  <div>
                    <div className={styles.piTitle}>{item.title}</div>
                    <div className={styles.piDesc}>{item.description}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className={styles.contactLine}>
              <span>Questions?</span>
              <a href="mailto:Rahul@srijanlabs.in">Rahul@srijanlabs.in</a>
              <span>|</span>
              <a href="tel:9321471113">9321471113</a>
              <span>| Navi Mumbai</span>
            </div>
          </div>

          <div className={styles.signupFormWrap}>
            <div className={styles.formTitle}>Account & Family Actions</div>
            <p className={styles.formSubtitle}>
              Use one place to log in, register a new account, or start a new Family Space.
            </p>
            <div className={styles.ctaStack}>
              <Link href="/platform/auth" className={styles.formSubmit}>
                Login to Kutumbsy
              </Link>
              <Link href="/platform/auth?mode=register" className={styles.formGhostLink}>
                Register a New Account
              </Link>
              <Link href="/platform/auth" className={styles.formGhostLink}>
                Create Family Space
              </Link>
            </div>
            <p className={styles.formNote}>OTP-first login | Private by default | Family-owned records</p>
          </div>
        </div>
      </div>
    </section>
  );
}
