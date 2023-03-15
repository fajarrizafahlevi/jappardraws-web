import styles from '@/styles/pages/home/Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <article className={styles.intro}>
        <h2 className={styles.name}>Hello! I&apos;m Jappar, a</h2>
        <span className={styles.title}>2D Artist</span>
        <p className={styles.job}>
          A freelance artist specialized in <br />
          2D anime-styled character illustration
        </p>
      </article>
    </section>
  );
}
