import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="px-6 py-4 flex justify-between bg-gray-900">
      <p>&copy; 2023 Jappar Draws. All rights reserved.</p>
      <div className="flex gap-8">
        <Link href="/do-and-dont">Do and Don&apos;t</Link>
        <Link href="/terms-of-service">Terms of Service</Link>
      </div>
    </footer>
  );
}
