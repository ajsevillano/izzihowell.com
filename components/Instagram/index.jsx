import styles from './Instagram.module.scss';
import WrapperGrid from '../Layouts/WrapperGrid';
import WrapperFlex from '../Layouts/WrapperFlex';
import SectionContainer from '../Layouts/SectionContainer';

const Instagram = ({ feed }) => {
  const postsNumber = feed.filter((post, index) => index < 6);
  return (
    <SectionContainer background="grey">
      <WrapperFlex>
        <h1 className={styles.sectiontitle}>Instagram</h1>
        <p className={styles.sectionsubtitle}>My latest posts</p>
      </WrapperFlex>
      <WrapperGrid>
        {postsNumber.map((post, index) => (
          <div key={post.id} className={styles.post}>
            <img src={post.media_url} alt={post.id} />
          </div>
        ))}
      </WrapperGrid>
    </SectionContainer>
  );
};

export default Instagram;
