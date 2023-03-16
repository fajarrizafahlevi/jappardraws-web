import React from 'react';
import Link from 'next/link';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="flex flex-col bg-gray-900 text-white">
      <div className="py-8 flex flex-col items-center flex-col-reverse sm:flex-row sm:justify-center gap-8">
        <div className="flex flex-col items-center text-center sm:items-start sm:text-left gap-4">
          <h1 className="text-3xl font-bold">
            <Link href="/">
              jappar<span className="text-gray-500">draws</span>
              <span className="text-yellow-500">.</span>
            </Link>
          </h1>
          <p className="max-w-xs text-sm">Draw 2D anime-styled character.</p>
          <div className="flex gap-4 text-xl">
            <Link href="https://facebook.com/jappardraws">
              <FaFacebook />
            </Link>
            <Link href="https://instagram.com/jappardraws">
              <FaInstagram />
            </Link>
            <Link href="https://twitter.com/jappardraws">
              <FaTwitter />
            </Link>
          </div>
        </div>
        <div className="flex gap-8">
          <div className="flex flex-col">
            <h3 className="font-bold mb-3">Pages</h3>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/works">Works</Link>
          </div>

          <div className="flex flex-col">
            <h3 className="font-bold mb-3">Order</h3>
            <Link href="/do-and-dont">Do and Don&apos;t</Link>
            <Link href="/terms-of-service">Terms of Service</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>
      </div>
      <p className="px-6 py-4 text-center">&copy; 2023 Jappar Draws. All rights</p>
    </footer>
  );
}
