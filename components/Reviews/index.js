import WrapperFlex from '../Layouts/WrapperFlex';
import styles from './Reviews.module.scss';

const Reviews = () => {
  return (
    <>
      <div className={styles.content}>
        <div className={styles.bookdivider}>
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M602.45,3.86h0S572.9,116.24,281.94,120H923C632,116.24,602.45,3.86,602.45,3.86Z"
              className={styles.shapefill}
            ></path>
          </svg>
        </div>
      </div>
    </>
  );
};

export default Reviews;
