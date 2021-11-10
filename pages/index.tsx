import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Bookie</title>
        <meta name="description" content="Your personal library" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Bookie</h1>
      </main>
    </div>
  );
};

export default Home;
