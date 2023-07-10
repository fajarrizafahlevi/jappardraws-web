import Link from 'next/link';
import Image from 'next/image';
import hero from '@/public/images/hero.png';

export default function Hero() {
  return (
    <section
      className="relative px-8 md:px-16 lg:px-20 pb-0 bg-black landscape:flex-row-reverse justify-end md:justify-center items-center "
      style={{ height: '80vh' }}
    >
      <Image 
        src={hero}
        height={700}
        alt='Jappar Draws'
        className='absolute px-8 md:h-2/3 md:w-auto md:px-0 md:static'
      />
      <div className='absolute z-10 w-full h-full bg-gradient-to-t from-black md:hidden'/>
      <div className="static z-10 flex flex-col gap-3 portrait:text-center">
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
