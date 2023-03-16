import Link from 'next/link';
import React from 'react';

export default function Sidebar({ isOpen, closeMenu }: { isOpen: boolean; closeMenu: () => void }) {
  return (
    <nav
      className={`fixed inset-y-0 z-50 right-0 w-full p-8 flex flex-col gap-8 bg-black text-white transform transition-transform ease-in-out duration-300 ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      <button
        className="border-none rounded px-3 py-2 bg-gray-900 text-xl"
        onClick={closeMenu}
      >
        &#10006;
      </button>
      <ul className="flex flex-col gap-3">
        <li>
          <Link
            href="/"
            onClick={closeMenu}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            onClick={closeMenu}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            href="/works"
            onClick={closeMenu}
          >
            Works
          </Link>
        </li>
        <li>
          <Link
            href="/contact"
            onClick={closeMenu}
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}
