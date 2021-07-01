import styles from '../styles/Home.module.css';
import Header from '../components/Header';
import Books from '../components/Books';
import Award from '../components/Award';
import Instagram from '../components/Instagram';

export default function Home() {
  return (
    <>
      <Header />
      <Award />
      <Books />
      <Instagram />
      <footer className={styles.footer}></footer>
    </>
  );
}
