import Head from "next/head";
import Image from "next/image";

export default function Works() {
  const works = {
    colorSketch: [
      "1.jpg",
      "2.jpg",
      "3.jpg",
      "4.jpg",
      "5.jpg",
      "6.jpg",
      "7.jpg",
      "8.jpg",
      "9.jpg",
    ],
    celShade: ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg"],
    fullRender: ["1.jpg", "2.jpg", "3.jpg"],
  };

  return (
    <>
      <Head>
        <title>Works</title>
      </Head>

      <section>
        <h2>Commissioned Works</h2>

        {/* <h3 className="text-gray-500 font-bold text-xl">Coming Soon...</h3> */}

        <h3 className="font-bold text-2xl">Color Sketch</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {works.colorSketch.reverse().map((image, index) => (
            <div key={index} className="card container w-60 h-80">
              <Image
                src={`/images/works/colorSketch/${image}`}
                alt="sample"
                width={240}
                height={320}
                className="absolute w-full h-full object-cover object-top"
              />
            </div>
          ))}
        </div>

        <h3 className="font-bold text-2xl">Cel Shade</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {works.celShade.reverse().map((image, index) => (
            <div key={index} className="card container w-60 h-80">
              <Image
                src={`/images/works/celShade/${image}`}
                alt="sample"
                width={240}
                height={320}
                className="absolute w-full h-full object-cover object-top"
              />
            </div>
          ))}
        </div>

        <h3 className="font-bold text-2xl">Full Render</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {works.fullRender.reverse().map((image, index) => (
            <div key={index} className="card container w-60 h-80">
              <Image
                src={`/images/works/fullRender/${image}`}
                alt="sample"
                width={240}
                height={320}
                className="absolute w-full h-full object-cover object-top"
              />
            </div>
          ))}
        </div>

        {/* <p>
          Note:
          <br />
          Due to my art style update, I don&apos;t have enough samples to put it here yet. If
          you&apos;re curious with my previous works, you can check them{' '}
          <a
            href="https://gallery-jappardraws.carrd.co/"
            target="_blank"
            className="underline"
          >
            here
          </a>{' '}
          or on my social media instead.
        </p> */}
      </section>
    </>
  );
}
