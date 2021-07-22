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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-arrow-big-left"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#ffffff"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M20 15h-8v3.586a1 1 0 0 1 -1.707 .707l-6.586 -6.586a1 1 0 0 1 0 -1.414l6.586 -6.586a1 1 0 0 1 1.707 .707v3.586h8a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1z" />
          </svg>
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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-arrow-big-right"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#ffffff"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M4 9h8v-3.586a1 1 0 0 1 1.707 -.707l6.586 6.586a1 1 0 0 1 0 1.414l-6.586 6.586a1 1 0 0 1 -1.707 -.707v-3.586h-8a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1z" />
          </svg>
        </div>
      </WrapperFlex>
      {/*  */}
    </SectionContainer>
  );
};

export default Reviews;
