import { books } from '../../../data/books';
import styles from './BookCard.module.scss';

const BookCard = () => {
  return (
    <div className={styles.gridwrapper}>
      {books.map((book) => (
        <div key={book.uid} className={styles.book}>
          <img src={book.img} alt={book.name} />
          <h3>{book.name}</h3>
        </div>
      ))}
    </div>
  );
};

export default BookCard;
