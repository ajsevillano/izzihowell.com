import styles from './Instagram.module.scss';
import WrapperGrid from '../Layouts/WrapperGrid';
import WrapperFlex from '../Layouts/WrapperFlex';

const Instagram = () => {
  return (
    <>
      <WrapperFlex>
        <h1 className={styles.sectiontitle}>My books</h1>
        <p className={styles.sectionsubtitle}>A showcase of some of my books</p>
      </WrapperFlex>
      <WrapperGrid background="grey">
        <div className={styles.contentwrapper}>
          <h3>Instagram</h3>
        </div>
      </WrapperGrid>
    </>
  );
};

export default Instagram;
