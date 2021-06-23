import styles from './Hero.module.scss';

const Hero = () => {
  return (
    <div className={styles.herowrapper}>
      <div className={styles.presentation}>
        <h2>Winner of the Royal Society Young People's Book Prize 2020</h2>
        <h1>Welcome!</h1>
        <p>
          Hi, I’m Izzi Howell. I’m an author and editor of children’s reference
          books. I’ve written over 100 books on many exciting topics, from space
          and volcanoes to the Ancient Greeks and electricity! I love to write
          about animals – did you know that crocodiles sometimes climb trees to
          sunbathe?!
        </p>
      </div>
      <div className={styles.picture}></div>
    </div>
  );
};

export default Hero;
