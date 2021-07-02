import styles from './Instagram.module.scss';
import WrapperGrid from '../Layouts/WrapperGrid';
import WrapperFlex from '../Layouts/WrapperFlex';

const Instagram = ({ feed }) => {
  return (
    <section className={styles.container}>
      <WrapperFlex background="grey">
        <h1 className={styles.sectiontitle}>Instagram</h1>
        <p className={styles.sectionsubtitle}>My latest posts</p>
      </WrapperFlex>
      <WrapperGrid background="grey">
        {feed.map((post) => (
          <div key={post.id} className={styles.post}>
            <img src={post.media_url} alt={post.id} />
          </div>
        ))}
      </WrapperGrid>
    </section>
  );
};

export default Instagram;
