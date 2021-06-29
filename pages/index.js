import styles from '../styles/Home.module.css';
import Header from '../components/Header';
import Books from '../components/Books';
import Award from '../components/Award';

export default function Home() {
  return (
    <>
      <Header />
      <Award />
      <Books />
      <footer className={styles.footer}></footer>
    </>
  );
}
