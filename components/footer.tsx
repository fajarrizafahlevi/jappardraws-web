import React from 'react';
import styles from '@/styles/Footer.module.css';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer>
      <p>Jappar Draws &copy; 2023</p>
      <Link href="/tos">Terms of Service</Link>
    </footer>
  );
}
