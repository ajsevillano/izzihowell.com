import styles from './Books.module.scss';
import WrapperFlex from '../Layouts/WrapperFlex/';
import BookCard from './BookCard';
import WrapperGrid from '../Layouts/WrapperGrid';
import SectionContainer from '../Layouts/SectionContainer';

const Books = () => {
  return (
    <SectionContainer>
      <WrapperFlex>
        <h1 className={styles.sectiontitle}>My books</h1>
        <p className={styles.sectionsubtitle}>A showcase of some of my books</p>
      </WrapperFlex>
      <WrapperGrid>
        <BookCard />
      </WrapperGrid>
    </SectionContainer>
  );
};

export default Books;
