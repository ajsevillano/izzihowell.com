import { useState } from 'react';
import SectionContainer from '../Layouts/SectionContainer';
import WrapperFlex from '../Layouts/WrapperFlex';
import styles from './Reviews.module.scss';
import { booksReviews } from '../../data/reviews';

const Reviews = () => {
  const [reviews, setReviews] = useState(booksReviews);

  return (
    <SectionContainer background="blue">
      {reviews.map(
        (data) =>
          data.id === 1 && (
            <WrapperFlex key={data.id}>
              <h1 className={styles.title}>Some reviews about my books</h1>
              <img
                className={styles.reviewimages}
                src={data.img}
                alt={data.author}
              />
              <p className={styles.subtitle}>
                “<span className={styles.bold}>{data.title}</span>
                {data.text}
              </p>
              <p className={styles.reviewname}>{data.author}</p>
            </WrapperFlex>
          )
      )}
    </SectionContainer>
  );
};

export default Reviews;
