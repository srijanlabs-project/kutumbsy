import styles from "../../page.module.css";

type TrustStripProps = {
  items: string[];
};

export function TrustStrip({ items }: TrustStripProps) {
  return (
    <div className={styles.trustStrip}>
      {items.map((item) => (
        <div key={item} className={styles.tsItem}>{item}</div>
      ))}
    </div>
  );
}
