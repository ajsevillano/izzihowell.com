import styles from '../styles/Home.module.css';
import Header from '../components/Header';
import Books from '../components/Books';

export default function Home() {
  return (
    <>
      <Header />

      <Books />

      <footer className={styles.footer}></footer>
    </>
  );
}
