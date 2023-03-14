import React from 'react';
import Link from 'next/link';
import styles from '@/styles/Header.module.css';

export default function Header() {
  return (
    <header>
      <h1 className={styles.brand}>Jappar Draws</h1>
      <nav className={styles.navigation}>
        <ul className={styles.links}>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/">About</Link>
          </li>
        </ul>
        <button className={styles.action}>Contact</button>
      </nav>
    </header>
  );
}
