export default function DoAndDont() {
  return (
    <section className="min-h-screen pb-0">
      <h2>Do and Don&apos;t</h2>
      <article className="flex flex-col text-left gap-6">
        <div>
          <p className="mb-2">I can draw a character based on:</p>
          <ul className="list-disc pl-6">
            <li>Yourself or another person (your friend, lover, idol, etc)</li>
            <li>Your Original Character (OC)</li>
            <li>Anime/Game Characters (Fan Arts)</li>
          </ul>
        </div>
        <div>
          <p className="mb-2">
            It <span className="font-bold text-lime-500">CAN</span> be a:
          </p>
          <ul className="list-disc pl-6">
            <li>Humanoid</li>
            <li>Furry</li>
          </ul>
        </div>
        <div>
          <p className="mb-2">
            But I <span className="font-bold text-red-500">DON&apos;T</span> draw any of:
          </p>
          <ul className="list-disc pl-6">
            <li>NSFW</li>
            <li>Mecha</li>
            <li>Animal</li>
          </ul>
        </div>
      </article>
    </section>
  );
}
