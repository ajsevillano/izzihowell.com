import { useState } from 'react';
import SectionContainer from '../Layouts/SectionContainer';
import WrapperFlex from '../Layouts/WrapperFlex';
import styles from './Reviews.module.scss';
import { booksReviews } from '../../data/reviews';

const Reviews = () => {
  const [reviews, setReviews] = useState(booksReviews);

  const changeReview = (direction) => {
    console.log(direction);
  };

  return (
    <SectionContainer background="blue">
      <WrapperFlex direction="row">
        <img
          onClick={(e) => changeReview('left')}
          src="arrow-left.svg"
          alt="Arrow left"
        />

        {reviews.map(
          (data) =>
            data.status === true && (
              <div className={styles.reviewwrapper} key={data.id}>
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
              </div>
            )
        )}

        <img
          onClick={(e) => changeReview('right')}
          src="arrow-right.svg"
          alt="Arrow right"
        />
      </WrapperFlex>
    </SectionContainer>
  );
};

export default Reviews;
