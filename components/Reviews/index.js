import WrapperFlex from '../Layouts/WrapperFlex';
import styles from './Reviews.module.scss';

const Reviews = () => {
  return (
    <WrapperFlex background="blue">
      <h1 className={styles.title}>Some reviews about my books</h1>
      <img
        className={styles.reviewimages}
        src="ros_rickaby.jpg"
        alt="Professor Rosalind Rickaby"
      />
      <p className={styles.subtitle}>
        “<span className={styles.bold}> Cats reacts to scient facts</span> makes
        science fun and engaging by breaking down difficult information in a
        relatable way. The book introduces topics like forces, energy and
        climate change — the real fundamentals — in a fun and engaging way. It
        was thoroughly road tested in my house, it wasn’t a quick scan, this was
        the book my kids wanted to take to bed with them and flick through.”
      </p>
      <p className={styles.reviewname}>
        Professor Rosalind Rickaby,Judge and Royal Society Research
      </p>
    </WrapperFlex>
  );
};

export default Reviews;
