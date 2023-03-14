import React from 'react';
import styles from '@/styles/Footer.module.css';

export default function Footer() {
  return (
    <footer>
      <section className={styles.container}>
        <div className={styles.item}>
          <div
            style={{
              width: '160px',
              height: '120px',
              borderRadius: '16px',
              backgroundColor: 'var(--background-primary)',
            }}
          />
          <h4>Jappar Draws</h4>
          <p>2D character illustration</p>
        </div>
      </section>
      <p>Jappar Draws &copy; 2023</p>
    </footer>
  );
}
