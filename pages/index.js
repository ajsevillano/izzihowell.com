import styles from '../styles/Home.module.css';
import Header from '../components/Header';
import Books from '../components/Books';

import WrapperFlex from '../components/Layouts/WrapperFlex';

export default function Home() {
  return (
    <>
      <Header />
      <WrapperFlex background="#f0f0f0" direction="row">
        {/* <div className={styles.title}>
          Winner of the <span className={styles.spanpink}>Royal Society</span>{' '}
          Young People's <span className={styles.spanpink}>Book Prize</span>{' '}
        </div>
        <h1 className={styles.awardyear}>2020</h1> */}
        <div className="image">
          <img src="/books/cats-react-scient.png" alt="" width="100px" />
        </div>
        <div className="text">
          Winner of the <span className={styles.spanpink}>Royal Society</span>
        </div>
      </WrapperFlex>
      <Books />

      <footer className={styles.footer}></footer>
    </>
  );
}
