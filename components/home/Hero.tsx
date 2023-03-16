import styles from '@/styles/pages/home/Hero.module.css';

export default function Hero() {
  return (
    <section
      className="pb-0 mw-100% bg-black"
      style={{ height: '80vh' }}
    >
      <article className="flex flex-col gap-3 text-white">
        <h2 className="text-3xl">Hello! I&apos;m Jappar</h2>
        <span className="font-bold text-5xl text-yellow-300">2D Artist</span>
        <p>
          A freelance artist specialized in <br />
          2D anime-styled character illustration
        </p>
      </article>
    </section>
  );
}
