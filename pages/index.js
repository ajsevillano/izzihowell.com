import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Izzi Howell - award winning children's books author</title>
        <meta
          name="description"
          content="Izzi Howell - children's books author"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.header}>
        <div className="logo">Izzi Howell</div>
        <nav>Home etc</nav>
      </header>
      <div className="herobanner">
        <div className="text"></div>
        <div className="picture"></div>
      </div>

      <main className={styles.main}></main>

      <footer className={styles.footer}></footer>
    </div>
  );
}
