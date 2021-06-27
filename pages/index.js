import styles from '../styles/Home.module.css';
import Header from '../components/Header';
import Books from '../components/Books';
import Award from '../components/Award';
import WrapperFlex from '../components/Layouts/WrapperFlex';

export default function Home() {
  return (
    <>
      <Header />
      <WrapperFlex>
        <Award />
      </WrapperFlex>
      <Books />

      <footer className={styles.footer}></footer>
    </>
  );
}
