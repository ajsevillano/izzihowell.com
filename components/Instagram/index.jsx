import styles from './Instagram.module.scss';
import WrapperGrid from '../Layouts/WrapperGrid';
import WrapperFlex from '../Layouts/WrapperFlex';

const Instagram = () => {
  return (
    <>
      <WrapperFlex background="grey">
        <h1 className={styles.sectiontitle}>Instagram</h1>
        <p className={styles.sectionsubtitle}>My latest posts</p>
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
