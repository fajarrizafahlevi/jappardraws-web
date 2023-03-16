export default function Hero() {
  return (
    <section
      className="pb-0 bg-black justify-center"
      style={{ height: '80vh' }}
    >
      <div className="flex flex-col gap-3">
        <article className="flex flex-col gap-3">
          <h2 className="text-4xl">Manifest your</h2>
          <span className="font-bold text-5xl text-yellow-300">Imagination</span>
          <p>Bring your favorite character into anime-styled 2D illustration</p>
        </article>
        <button className="border-none rounded px-3 py-2 w-fit bg-yellow-300 text-black">
          Get started now
        </button>
      </div>
    </section>
  );
}
