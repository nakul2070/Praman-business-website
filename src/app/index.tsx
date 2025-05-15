import Head from 'next/head';
import Navbar from '@/components/Navbar';
import AboutSection from '@/components/AboutSection';

export default function Home() {
  return (
    <>
      <Head>
        <title>3D Scanning Company</title>
        <meta name="description" content="3D Scanning Services in India and Worldwide" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main>
        <AboutSection />
      </main>
    </>
  );
}
