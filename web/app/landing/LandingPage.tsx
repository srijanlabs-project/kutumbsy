import styles from "./LandingPage.module.css";
import { AuthPanel } from "./AuthPanel";

export default function LandingPage() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.brandBlock}>
          <img src="/logo_1kutumb.png" alt="Kutumbsy" className={styles.brandLogo} />
          <p className={styles.brandSubtitle}>
            Connect every branch of your family. Preserve your heritage. Share your story.
          </p>
          <ul className={styles.benefitList}>
            <li>Build an interactive family tree across generations</li>
            <li>Invite relatives and grow your tree together</li>
            <li>Preserve photos, stories and timelines</li>
            <li>Celebrate birthdays and anniversaries</li>
            <li>Private and secure - you control who sees what</li>
          </ul>
        </div>

        <AuthPanel />
      </section>
    </main>
  );
}
