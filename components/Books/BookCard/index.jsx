//Data
import { books } from '../../../data/books';
//Styles
import styles from './BookCard.module.scss';

const BookCard = () => {
  return (
    <>
      {books.map((book) => (
        <div key={book.uid} className={styles.book}>
          <img src={book.img} alt={book.name} />
          <h3>{book.name}</h3>
        </div>
      ))}
    </>
  );
};

export default BookCard;
