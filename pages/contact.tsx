import Head from "next/head";

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact</title>
      </Head>

      <section className="min-h-screen">
        <h2>Ready to order?</h2>
        <ol className="list-disc pl-4">
          <li>
            Email me at{" "}
            <span className="text-lime-400">jappardraws@gmail.com</span>, tell
            me what I need to draw about your character
          </li>
          <li>
            Provide the references of your character, including the pose and the
            outfit
          </li>
          <li>
            When all the requirements above are met, I will start working from
            the sketch
          </li>
        </ol>
      </section>
    </>
  );
}
