import React, { useState } from 'react';
import Link from 'next/link';
import styles from '@/styles/components/Header.module.css';

export default function Header() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  function openMenu() {
    setIsOpen(!isOpen);
  }

  function closeMenu() {
    setIsOpen(false);
  }

  return (
    <header>
      <h1 className={styles.brand}>
        jappar<span style={{ color: 'gray' }}>draws</span>
        <span style={{ color: 'gold' }}>.</span>
      </h1>
      <button
        className={styles.menu}
        onClick={openMenu}
      >
        &#9776;
      </button>
      <nav className={`${styles.navigation} ${isOpen ? styles.open : ''}`}>
        <button
          className={styles.close}
          onClick={closeMenu}
        >
          &#10006;
        </button>
        <ul className={styles.links}>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/about">Works</Link>
          </li>
        </ul>
        <button className={styles.action}>Contact</button>
      </nav>
    </header>
  );
}
