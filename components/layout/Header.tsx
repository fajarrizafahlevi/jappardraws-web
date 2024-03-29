import Link from "next/link";

export default function Header({ openMenu }: { openMenu: () => void }) {
  return (
    <header className="z-20 fixed top-0 w-full h-20 flex justify-between items-center px-6 py-4 rounded bg-gradient-to-b from-black">
      <h1 className="text-3xl font-bold">
        <Link href="/">
          jappar<span className="text-gray-500">draws</span>
          <span className="accent">.</span>
        </Link>
      </h1>
      <button className="menu sm:hidden text-3xl" onClick={openMenu}>
        &#9776;
      </button>
      <nav className="hidden sm:flex items-center gap-8">
        <ul className="flex gap-8">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/works">Works</Link>
          </li>
        </ul>
        <Link href="/contact">
          <button>Contact</button>
        </Link>
      </nav>
    </header>
  );
}
