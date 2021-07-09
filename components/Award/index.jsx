import styles from './Award.module.scss';
import WrapperFlex from '../Layouts/WrapperFlex';
import SectionContainer from '../Layouts/SectionContainer';
import Button from '../Button';

const Award = () => {
  return (
    <SectionContainer background="grey">
      <WrapperFlex>
        <div className={styles.contentwrapper}>
          <div className={styles.imgbookcover}>
            <img
              className={styles.bookimage}
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
        </div>
        <div className={styles.buttonwrapper}>
          <Button size="xl" variant="outline">
            Read more about the award
          </Button>
        </div>
      </WrapperFlex>
    </SectionContainer>
  );
};

export default Award;
