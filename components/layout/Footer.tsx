import React from "react";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="flex flex-col text-white">
      <div className="pt-20 pb-8 px-8 flex flex-col items-center flex-col-reverse gap-8 sm:flex-row sm:justify-center sm:gap-20">
        <div className="flex flex-col items-center text-center sm:items-start sm:text-left gap-4">
          <h1 className="text-3xl font-bold">
            <Link href="/">
              jappar<span className="text-gray-500">draws</span>
              <span className="accent">.</span>
            </Link>
          </h1>
          <p className="max-w-xs text-sm">Draws 2D anime-styled character.</p>
          <div className="flex gap-4 text-xl">
            <Link href="https://facebook.com/jappardraws" target="_blank">
              <FaFacebook />
            </Link>
            <Link href="https://instagram.com/jappardraws" target="_blank">
              <FaInstagram />
            </Link>
            <Link href="https://twitter.com/jappardraws" target="_blank">
              <FaTwitter />
            </Link>
          </div>
        </div>
        <div className="flex flex-col items-center sm:items-start">
          <h3 className="font-bold mb-3 text-xl">Links</h3>
          <Link href="/do-and-dont">Do and Don&apos;t</Link>
          <Link href="/terms-of-service">Terms of Service</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </div>
      <p className="px-8 py-4 text-center">
        &copy; 2023 Jappar Draws. All rights
      </p>
    </footer>
  );
}
