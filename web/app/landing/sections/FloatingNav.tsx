import styles from "../../page.module.css";
import Link from "next/link";

type NavProps = {
  links: { label: string; href: string }[];
};

export function FloatingNav({ links }: NavProps) {
  return (
    <nav className={styles.knav}>
      <Link href="/" className={styles.navBrand}>
        <img src="/logo_1kutumb.png" alt="Kutumbsy" className={styles.brandLogoMark} />
        <div>
          <span className={styles.brandName}>Kutumbsy</span>
          <span className={styles.brandTagline}>Digital Family Legacy</span>
        </div>
      </Link>

      <ul className={styles.navLinks}>
        {links.map((link) => (
          <li key={link.href}>
            <a href={link.href}>{link.label}</a>
          </li>
        ))}
      </ul>

      <div className={styles.navRight}>
        <Link href="/platform/auth" className={`${styles.btnNav} ${styles.btnNavGhost}`}>Login</Link>
        <Link href="/join-family" className={`${styles.btnNav} ${styles.btnNavGhost}`}>Join Family</Link>
        <Link href="/create-family" className={`${styles.btnNav} ${styles.btnNavPrimary}`}>Start Your Family Tree -&gt;</Link>
      </div>
    </nav>
  );
}
