import styles from './Hero.module.scss';
import Button from '../../Button';

const Hero = () => {
  return (
    <div className={styles.herowrapper}>
      <div className={styles.heroimg}>
        <img src="izzi-presentation.png" alt="Izzi Howell" />
      </div>
      <div className={styles.intro}>
        <h1> Hi, I'm </h1>
        <h1>Izzi Howell</h1>
        <p className={styles.firstparagraph}>
          I'm an author and editor of children’s reference books. I’ve written
          over 100 books on many exciting topics, from space 🚀 and volcanoes 🌋
          to the Ancient Greeks 🎭 and electricity ⚡!
        </p>
        <p className={styles.secondparagraph}>
          I love to write about animals – did you know that crocodiles sometimes
          climb trees to sunbathe?!
        </p>
        <div className={styles.buttonwrapper}>
          <Button size="lg">Get in touch</Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
