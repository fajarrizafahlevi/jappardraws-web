import Link from 'next/link';
import React from 'react';

export default function Header() {
  return (
    <header>
      <h1>Jappar Draws</h1>
      <nav>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
