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
          <img src="books/make-mistakes.png" alt="Cats react to scient facts" />
          <h3>Cats react to scient facts</h3>
        </div>
        <div className={styles.book}>
          <img src="books/pollution.png" alt="Cats react to scient facts" />
          <h3>Cats react to scient facts</h3>
        </div>
        <div className={styles.book}>
          <img src="books/stand.png" alt="Cats react to scient facts" />
          <h3>Cats react to scient facts</h3>
        </div>
        <div className={styles.book}>
          <img
            src="books/working-computers-robots.png"
            alt="Cats react to scient facts"
          />
          <h3>Cats react to scient facts</h3>
        </div>

        <div className={styles.book}>
          <img src="books/outer-space.png" alt="Cats react to scient facts" />
          <h3>Cats react to scient facts</h3>
        </div>
        <div className={styles.book}>
          <img src="books/dinosaurs.png" alt="Cats react to scient facts" />
          <h3>Cats react to scient facts</h3>
        </div>
        <div className={styles.book}>
          <img src="books/sports.png" alt="Cats react to scient facts" />
          <h3>Cats react to scient facts</h3>
        </div>
        <div className={styles.book}>
          <img src="books/science.png" alt="Cats react to scient facts" />
          <h3>Cats react to scient facts</h3>
        </div>
        <div className={styles.book}>
          <img src="books/human-body.png" alt="Cats react to scient facts" />
          <h3>Cats react to scient facts</h3>
        </div>
        <div className={styles.book}>
          <img src="books/around-world.png" alt="Cats react to scient facts" />
          <h3>Cats react to scient facts</h3>
        </div>
      </div>
    </section>
  );
};

export default Books;
