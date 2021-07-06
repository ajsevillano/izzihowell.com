import styles from './Instagram.module.scss';
import WrapperGrid from '../Layouts/WrapperGrid';
import WrapperFlex from '../Layouts/WrapperFlex';

const Instagram = ({ feed }) => {
  const postsNumber = feed.filter((post, index) => index < 5);
  return (
    <section className={styles.container}>
      <WrapperFlex background="grey" align="left">
        <p className={styles.sectionsubtitle}>My latest posts</p>
        <h1 className={styles.sectiontitle}>Instagram</h1>
      </WrapperFlex>
      <WrapperGrid background="grey">
        {postsNumber.map((post, index) => (
          <div key={post.id} className={styles.post}>
            <img src={post.media_url} alt={post.id} />
          </div>
        ))}
      </WrapperGrid>
    </section>
  );
};

export default Instagram;
