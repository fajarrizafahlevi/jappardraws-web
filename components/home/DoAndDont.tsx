import styles from '@/styles/pages/home/DoAndDont.module.css';

export default function DoAndDont() {
  return (
    <section className={styles.do_and_dont}>
      <h2>Do and Don&apos;t</h2>
      <article className={styles.article}>
        <div className={styles.container}>
          <p>I can draw a character based on:</p>
          <ul className={styles.list}>
            <li>Yourself or another person (your friend, lover, idol, etc)</li>
            <li>Your Original Character (OC)</li>
            <li>Anime/Game Characters (Fan Arts)</li>
          </ul>
        </div>
        <div className={styles.container}>
          <p>
            It <span className={styles.can}>CAN</span> be a:
          </p>
          <ul className={styles.list}>
            <li>Humanoid</li>
            <li>Furry</li>
          </ul>
        </div>
        <div className={styles.container}>
          <p>
            But I <span className={styles.dont}>DON&apos;T</span> draw any of:
          </p>
          <ul className={styles.list}>
            <li>Yourself or another person (your friend, lover, idol, etc)</li>
            <li>Your Original Character (OC)</li>
            <li>Anime/Game Characters (Fan Arts)</li>
          </ul>
        </div>
      </article>
    </section>
  );
}
