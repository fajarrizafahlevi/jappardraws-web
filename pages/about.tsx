import React from 'react';
import styles from '@/styles/pages/About.module.css';

export default function about() {
  return (
    <section className={styles.container}>
      <div className={styles.image} />
      <div className={styles.text}>
        <h2>About me</h2>
        <p>
          I started learning character illustration seriously since 2017. Then, become a freelance
          artist at early 2020. So far, I completed more than +50 commission orders in various
          platform like Fiverr, Artist&Clients, Sketchmob and Facebook.
        </p>
      </div>
    </section>
  );
}
