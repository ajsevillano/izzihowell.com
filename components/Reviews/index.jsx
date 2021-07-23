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

    if (direction === 'left') {
      switch (currentReview[0]) {
        case 2:
          const updateValue = reviews.map((element) =>
            element.id === currentReview[0] - 1
              ? { ...element, status: true }
              : { ...element, status: false }
          );
          setReviews(updateValue);

        case 3:
          const updateValue2 = reviews.map((element) =>
            element.id === currentReview[0] - 1
              ? { ...element, status: true }
              : { ...element, status: false }
          );
          setReviews(updateValue2);

        default:
          break;
      }
    }

    if (direction === 'right') {
      switch (currentReview[0]) {
        case 1:
          const updateValue = reviews.map((element) =>
            element.id === currentReview[0] + 1
              ? { ...element, status: true }
              : { ...element, status: false }
          );
          setReviews(updateValue);

        case 2:
          const updateValue2 = reviews.map((element) =>
            element.id === currentReview[0] + 1
              ? { ...element, status: true }
              : { ...element, status: false }
          );
          setReviews(updateValue2);

        default:
          break;
      }
    }
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
