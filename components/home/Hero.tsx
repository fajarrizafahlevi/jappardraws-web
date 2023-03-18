import Link from 'next/link';

export default function Hero() {
  return (
    <section
      className="px-8 md:px-16 lg:px-20 pb-0 bg-black items-start"
      style={{ height: '80vh' }}
    >
      <div className="flex flex-col gap-3">
        <article className="flex flex-col gap-2">
          <div>
            <h2 className="text-4xl">Manifest your</h2>
            <span className="font-bold text-5xl text-yellow-300">Imagination</span>
          </div>
          <p>Bring your favorite character into anime-styled 2D illustration</p>
        </article>
        <Link href="/contact">
          <button>Get started now</button>
        </Link>
      </div>
    </section>
  );
}
