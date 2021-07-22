import { useState } from 'react';
import SectionContainer from '../Layouts/SectionContainer';
import WrapperFlex from '../Layouts/WrapperFlex';
import styles from './Reviews.module.scss';
import { booksReviews } from '../../data/reviews';

const Reviews = () => {
  const [reviews, setReviews] = useState(booksReviews);

  return (
    <SectionContainer background="blue">
      <WrapperFlex direction="row">
        <div>
          <img src="arrow-left.svg" alt="Arrow left" />
        </div>

        {reviews.map(
          (data) =>
            data.id === 1 && (
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

        <div>
          <img src="arrow-right.svg" alt="Arrow right" />
        </div>
      </WrapperFlex>
    </SectionContainer>
  );
};

export default Reviews;
