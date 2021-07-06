import styles from './BookShape.module.scss';

const BookShape = () => {
  return (
    <>
      <div className={styles.content}>
        <div className={styles.bookdivider}>
          <svg
            data-name="Book shape separator"
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

export default BookShape;
