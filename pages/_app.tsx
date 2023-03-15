import type { AppProps } from 'next/app';
import { Comfortaa } from 'next/font/google';
import Layout from '@/components/layout';
import '@/styles/globals.css';

const comfortaa = Comfortaa({
  weight: '400',
  subsets: ['latin'],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={comfortaa.className}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </main>
  );
}
