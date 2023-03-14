import Head from 'next/head';
import styles from '@/styles/Home.module.css';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <Head>
        <title>Jappar Draws</title>
        <meta
          name="description"
          content="Generated by create next app"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
        <link
          rel="icon"
          href="/favicon.ico"
        />
      </Head>
      <main>
        <section className={styles.hero}>
          <article className={styles.intro}>
            <p className={styles.name}>Hello, I&apos;m Jappar!</p>
            <span className={styles.title}>2D Artist</span>
            <p>Specialized in 2D illustration</p>
          </article>
        </section>
        <section className={styles.works}>
          <h2>My Works</h2>
          <div className={styles.grid}>
            <div className={styles.sample} />
            <div className={styles.sample} />
            <div className={styles.sample} />
          </div>
        </section>
        <section className={styles.commission}>
          <h2>Commission Menu</h2>
          <div className={styles.list}>
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
      </main>
    </>
  );
}
