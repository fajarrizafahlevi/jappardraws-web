import Link from 'next/link';
import Image from 'next/image';
import hero from '@/public/images/hero.png';

export default function Hero() {
  return (
    <section
      className="px-8 md:px-16 lg:px-20 pb-0 bg-black md:flex-row-reverse items-center "
      style={{ height: '80vh' }}
    >
      <Image 
        src={hero}
        width={200}
        alt='Jappar Draws'
      />
      <div className="bg-gradient-to-t from-black flex flex-col gap-3">
        <article className="flex flex-col gap-2">
          <div>
            <h2 className="text-3xl sm:text-4xl">Manifest your</h2>
            <span className="font-bold text-4xl sm:text-5xl text-yellow-300">Imagination</span>
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
