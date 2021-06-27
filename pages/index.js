import styles from '../styles/Home.module.css';
import Header from '../components/Header';
import Books from '../components/Books';

import WrapperFlex from '../components/Layouts/WrapperFlex';

export default function Home() {
  return (
    <>
      <Header />
      <WrapperFlex></WrapperFlex>
      <Books />

      <footer className={styles.footer}></footer>
    </>
  );
}
