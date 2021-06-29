import styles from '../styles/Home.module.css';
import Header from '../components/Header';
import Books from '../components/Books';

import WrapperFlex from '../components/Layouts/WrapperFlex';

export default function Home() {
  return (
    <>
      <Header />
      <WrapperFlex background="#f0f0f0" direction="row" justify="space-evenly">
        {/* <div className={styles.title}>
          Winner of the <span className={styles.spanpink}>Royal Society</span>{' '}
          Young People's <span className={styles.spanpink}>Book Prize</span>{' '}
        </div>
        <h1 className={styles.awardyear}>2020</h1> */}
        <div className={styles.imgbookcover}>
          <img
            className={styles.image}
            src="/books/cats-react-scient.png"
            alt="Cats react to scient facts"
          />
        </div>
        <div className={styles.royalsocietylogo}>
          <p className={styles.winnertext}>Winner of the </p>
          <img
            className={styles.winnerimg}
            src="royal-society-logo.png"
            alt=""
            width="180px"
          />
        </div>
      </WrapperFlex>
      <Books />

      <footer className={styles.footer}></footer>
    </>
  );
}
