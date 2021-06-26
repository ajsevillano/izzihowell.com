import styles from './Books.module.scss';
import WrapperFlex from '../Layouts/WrapperFlex/';
import BookCard from './BookCard';

const Books = () => {
  return (
    <section>
      <WrapperFlex>
        <h1 className={styles.sectiontitle}>My books</h1>
        <p className={styles.sectionsubtitle}>A showcase of some of my books</p>
      </WrapperFlex>
      <BookCard />
    </section>
  );
};

export default Books;
