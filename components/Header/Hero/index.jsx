import styles from './Hero.module.scss';
import Button from '../../Button';

const Hero = () => {
  return (
    <div className={styles.herowrapper}>
      <div className={styles.presentation}>
        <h2>Winner of the Royal Society Young People's Book Prize 2020</h2>
        <h1> Hi, I'm Izzi Howell</h1>
        <p>
          I'm an author and editor of children’s reference books. I’ve written
          over 100 books on many exciting topics, from space and volcanoes to
          the Ancient Greeks and electricity! I love to write about animals –
          did you know that crocodiles sometimes climb trees to sunbathe?!
        </p>
        <Button size="lg">Get in touch</Button>
      </div>
      <div className={styles.picture}>
        <img src="izzi-presentation.png" alt="Izzi Howell" />
      </div>
    </div>
  );
};

export default Hero;
