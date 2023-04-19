import Head from 'next/head';
import Hero from '@/components/home/Hero';
import About from '@/components/home/About';
import Portfolio from '@/components/home/Portfolio';
import Service from '@/components/home/Services';
import CallToAction from '@/components/home/CallToAction';
import Testimonies from '@/components/home/Testimonies';

export default function Home() {
  return (
    <>
      <Head>
        <title>Jappar Draws</title>
      </Head>

      <Hero />
      <About />
      <Service />
      <Portfolio />
      <Testimonies />
      <CallToAction />
    </>
  );
}
