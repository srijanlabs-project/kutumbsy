import Image from "next/image";
import styles from "./launching-soon.module.css";

export default function Page() {
  return (
    <main className={styles.page}>
      <section className={styles.card}>
        <div className={styles.logoWrap}>
          <Image
            src="/logo_1kutumb.png"
            alt="Kutumbsy logo"
            width={72}
            height={72}
            priority
          />
        </div>
        <p className={styles.eyebrow}>Kutumbsy</p>
        <h1 className={styles.title}>Launching Soon</h1>
        <p className={styles.subtitle}>
          We are building a digital family legacy space for Indian families.
          The full application will be live soon.
        </p>
        <div className={styles.visualWrap}>
          <Image
            src="/kutumbsy-launching-visual.png"
            alt="Kutumbsy family legacy visual"
            width={1100}
            height={814}
            className={styles.visual}
          />
        </div>
        <p className={styles.note}>
          For updates, contact us at{" "}
          <a href="mailto:rahul@srijanlabs.in">rahul@srijanlabs.in</a>.
        </p>
      </section>
    </main>
  );
}
