import styles from './Award.module.scss';
import WrapperFlex from '../Layouts/WrapperFlex';

const Award = () => {
  return (
    <WrapperFlex background="#f0f0f0" direction="row" justify="space-evenly">
      <div className={styles.imgbookcover}>
        <img
          className={styles.image}
          src="/books/cats-react-scient.png"
          alt="Cats react to scient facts"
        />
      </div>
      <div className={styles.royalsocietylogo}>
        <p className={styles.winnertext}>Winner of the </p>
        <img
          className={styles.winnerimg}
          src="royal-society-logo.png"
          alt="Royal society Logo"
          width="180px"
        />
      </div>
    </WrapperFlex>
  );
};

export default Award;
