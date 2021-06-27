import styles from './Award.module.scss';

const Award = () => {
  return (
    <div className={styles.award}>
      <h2>
        Winner of the <span className={styles.spanpink}>Royal Society</span>{' '}
        Young People's <span className={styles.spanpink}>Book Prize</span>{' '}
      </h2>
      <span className={styles.year}>2020</span>
    </div>
  );
};

export default Award;
