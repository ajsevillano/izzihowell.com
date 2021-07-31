import { useState } from 'react';
import SectionContainer from '../Layouts/SectionContainer';
import WrapperFlex from '../Layouts/WrapperFlex';
import styles from './Reviews.module.scss';
import { booksReviews } from '../../data/reviews';

const Reviews = () => {
  const [reviews, setReviews] = useState(booksReviews);

  const changeReview = (direction) => {
    const currentReview = reviews
      .filter((data) => data.status === true)
      .map((data) => data.id);

    if ((currentReview[0] > 1) & (direction === 'left')) {
      const updateValue = reviews.map((element) =>
        element.id === currentReview[0] - 1
          ? { ...element, status: true }
          : { ...element, status: false }
      );
      setReviews(updateValue);
    }

    if ((currentReview[0] < 3) & (direction === 'right')) {
      const updateValue = reviews.map((element) =>
        element.id === currentReview[0] + 1
          ? { ...element, status: true }
          : { ...element, status: false }
      );
      setReviews(updateValue);
    }
  };

  return (
    <SectionContainer background="blue">
      <WrapperFlex direction="row">
        <img
          className={styles.arrow}
          onClick={(e) => changeReview('left')}
          src="arrow-left.svg"
          alt="Arrow left"
        />
<div>
<h1 className={styles.title}>Some reviews about my books</h1>
        {reviews.map(
          (data) =>
            data.status === true && (
              <div className={styles.reviewwrapper} key={data.id}>
             
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
</div>
        <img
          className={styles.arrow}
          onClick={(e) => changeReview('right')}
          src="arrow-right.svg"
          alt="Arrow right"
        />
      </WrapperFlex>
    </SectionContainer>
  );
};

export default Reviews;
