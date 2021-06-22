import styles from '../styles/Home.module.css';
import Header from '../components/Header';
import Hero from '../components/Hero';

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <Hero />
      <main className={styles.main}></main>

      <footer className={styles.footer}></footer>
    </div>
  );
}
