import styles from './Hero.module.scss';
import Button from '../../Button';

const Hero = () => {
  return (
    <div className={styles.herowrapper}>
      <div className={styles.heroimg}>
        <img src="izzi-presentation.png" alt="Izzi Howell" />
      </div>
      <div className={styles.intro}>
        <h2>Winner of the Royal Society Young People's Book Prize 2020</h2>
        <h1> Hi, I'm Izzi Howell</h1>
        <p>
          I'm an author and editor of children’s reference books. I’ve written
          over 100 books on many exciting topics, from space and volcanoes to
          the Ancient Greeks and electricity! I love to write about animals –
          did you know that crocodiles sometimes climb trees to sunbathe?!
        </p>
        <div className={styles.buttonwrapper}>
          <Button size="lg">Get in touch</Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
