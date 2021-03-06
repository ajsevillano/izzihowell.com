import styles from './Books.module.scss';

import SectionContainer from '../Layouts/SectionContainer';
import WrapperFlex from '../Layouts/WrapperFlex/';
import WrapperGrid from '../Layouts/WrapperGrid';

import BookCard from './BookCard';
import Button from '../Button/index';

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
      <div className={styles.buttonwrapper}>
        <Button size="xl" variant="outline-blue">
          <a href=""> See more books</a>
        </Button>
      </div>
    </SectionContainer>
  );
};

export default Books;
