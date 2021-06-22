import styles from '../styles/Home.module.css';
import Header from '../components/Header';

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}></main>

      <footer className={styles.footer}></footer>
    </div>
  );
}
