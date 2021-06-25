import styles from './Books.module.scss';
import WrapperFlex from '../Layouts/WrapperFlex/';

const Books = () => {
  return (
    <section>
      <WrapperFlex>
        <h1 className={styles.sectiontitle}>My books</h1>
        <p className={styles.sectionsubtitle}>A showcase of some of my books</p>
      </WrapperFlex>

      <div className={styles.gridwrapper}>
        <div className={styles.book}>
          <img
            src="books/cats-react-scient.png"
            alt="Cats react to scient facts"
          />
          <h3>Cats react to scient facts</h3>
        </div>
        <div className={styles.book}>
          <img
            src="books/cats-react-scient.png"
            alt="Cats react to scient facts"
          />
          <h3>Cats react to scient facts</h3>
        </div>
        <div className={styles.book}>
          <img
            src="books/cats-react-scient.png"
            alt="Cats react to scient facts"
          />
          <h3>Cats react to scient facts</h3>
        </div>
        <div className={styles.book}>
          <img
            src="books/cats-react-scient.png"
            alt="Cats react to scient facts"
          />
          <h3>Cats react to scient facts</h3>
        </div>
        <div className={styles.book}>
          <img
            src="books/cats-react-scient.png"
            alt="Cats react to scient facts"
          />
          <h3>Cats react to scient facts</h3>
        </div>
        <div className={styles.book}>
          <img
            src="books/cats-react-scient.png"
            alt="Cats react to scient facts"
          />
          <h3>Cats react to scient facts</h3>
        </div>
        <div className={styles.book}>
          <img
            src="books/cats-react-scient.png"
            alt="Cats react to scient facts"
          />
          <h3>Cats react to scient facts</h3>
        </div>
        <div className={styles.book}>
          <img
            src="books/cats-react-scient.png"
            alt="Cats react to scient facts"
          />
          <h3>Cats react to scient facts</h3>
        </div>
        <div className={styles.book}>
          <img
            src="books/cats-react-scient.png"
            alt="Cats react to scient facts"
          />
          <h3>Cats react to scient facts</h3>
        </div>
        <div className={styles.book}>
          <img
            src="books/cats-react-scient.png"
            alt="Cats react to scient facts"
          />
          <h3>Cats react to scient facts</h3>
        </div>
      </div>
    </section>
  );
};

export default Books;
