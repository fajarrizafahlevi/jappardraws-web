import styles from '@/styles/pages/home/Summary.module.css';

export default function Summary() {
  return (
    <section className={styles.summary}>
      <h2>Quick Summary</h2>
      <p className={styles.history}>
        I started learning character illustration seriously since 2017. Then, become a freelance
        artist at early 2020. So far, I completed more than +50 commission orders in various
        platform like Fiverr, Artist&Clients, Sketchmob and Facebook.
      </p>
    </section>
  );
}
