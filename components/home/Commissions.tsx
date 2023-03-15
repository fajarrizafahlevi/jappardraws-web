import styles from '@/styles/pages/home/Commissions.module.css';

export default function Commissions() {
  return (
    <section className={styles.commissions}>
      <h2>Commissions</h2>
      <p className={styles.description}>
        I will draw your desired bust up character in my style! You can choose the coloring style
        that you prefer and upgrade into half body or full body if you want to! You will get
        4000x5000 pixel, 300 dpi, .jpg and .png file.
      </p>
      <div className={styles.layout}>
        <div className={styles.item}>
          <div className={styles.image} />
          <div className={styles.text}>
            <h3>Color Sketch</h3>
            <p>Start from</p>
            <span>80K IDR / 15 USD</span>
          </div>
        </div>
        <div className={`${styles.item} ${styles.reverse}`}>
          <div className={styles.image} />
          <div className={styles.text}>
            <h3>Cel Shade</h3>
            <p>Start from</p>
            <span>80K IDR / 15 USD</span>
          </div>
        </div>
        <div className={styles.item}>
          <div className={styles.image} />
          <div className={styles.text}>
            <h3>Full Render</h3>
            <p>Start from</p>
            <span>80K IDR / 15 USD</span>
          </div>
        </div>
      </div>
    </section>
  );
}
