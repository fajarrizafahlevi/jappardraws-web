import styles from '@/styles/pages/home/Works.module.css';

export default function Works() {
  return (
    <section className={styles.works}>
      <h2>My Works</h2>
      <div className={styles.grid}>
        <div className={styles.sample} />
        <div className={styles.sample} />
        <div className={styles.sample} />
      </div>
    </section>
  );
}
