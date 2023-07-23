import Image from "next/image";

export default function Portfolio() {
  const works = {
    latest: ["1.jpg", "2.jpg", "3.jpg", "4.jpg"],
  };

  return (
    <section>
      <h2>Latest Works</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {works.latest.map((image, index) => (
          <div
            key={index}
            className="relative container w-60 h-60 rounded bg-gray-900 overflow-hidden"
          >
            <Image
              src={`/images/latest/${image}`}
              alt="sample"
              width={240}
              height={240}
              className="absolute w-full h-full object-cover object-top"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
