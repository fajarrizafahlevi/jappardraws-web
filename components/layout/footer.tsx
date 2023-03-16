import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="p-4 flex justify-between items-center bg-black text-white">
      <p>Jappar Draws &copy; 2023</p>
      <Link href="/tos">Terms of Service</Link>
    </footer>
  );
}
