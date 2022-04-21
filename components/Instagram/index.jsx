import styles from './Instagram.module.scss';
import WrapperGrid from '../Layouts/WrapperGrid';
import WrapperFlex from '../Layouts/WrapperFlex';
import SectionContainer from '../Layouts/SectionContainer';
import Image from 'next/image';

const Instagram = ({ feed }) => {
  const postsNumber = feed.filter((post, index) => index < 10);
  return (
    <SectionContainer background="grey">
      <WrapperFlex>
        <h1 className={styles.sectiontitle}>Instagram</h1>
        <p className={styles.sectionsubtitle}>My latest posts</p>
      </WrapperFlex>
      <WrapperGrid bottomPadding>
        {postsNumber.map((post, index) => (
          <div key={post.id} className={styles.post}>
            <Image
              src={post.media_url}
              alt={post.id}
              width={178.78}
              height={178.78}
            />
            <p className={styles.instagramCaption}>{`${post.caption.slice(
              0,
              65
            )} ...`}</p>
          </div>
        ))}
      </WrapperGrid>
    </SectionContainer>
  );
};

export default Instagram;
