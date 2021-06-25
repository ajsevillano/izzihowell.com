import styles from '../styles/Home.module.css';
import Header from '../components/Header';
import Books from '../components/Books';

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <Books />
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
}
