import styles from '../styles/Home.module.css';
import Header from '../components/Header';
import Books from '../components/Books';
import WrapperFlex from '../components/Layouts/WrapperFlex';

export default function Home() {
  return (
    <>
      <Header />
      <WrapperFlex>
        <div className={styles.award}>
          <h2>
            Winner of the <span className={styles.spanpink}>Royal Society</span>{' '}
            Young People's <span className={styles.spanpink}>Book Prize</span>{' '}
          </h2>
          <span className={styles.year}>2020</span>
        </div>
      </WrapperFlex>
      <Books />

      <footer className={styles.footer}></footer>
    </>
  );
}
