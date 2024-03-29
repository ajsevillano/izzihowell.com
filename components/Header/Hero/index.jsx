import styles from './Hero.module.scss';
import Button from '../../Button';
import Image from 'next/image';

const Hero = () => {
  return (
    <div className={styles.herowrapper}>
      <div className={styles.img}>
        <Image
          src="/izzi-presentation.png"
          alt="Izzi Howell"
          width="100%"
          height="100%"
          layout="responsive"
          objectFit="contain"
        />
      </div>
      <div className={styles.intro}>
        <h1> Hi, I&rsquo;m Izzi Howell, </h1>
        <h1>Children&apos;s book author</h1>
        <p className={styles.firstparagraph}>
          I&rsquo;m an author and editor of children’s reference books.
        </p>
        <p>
          I’ve written over 100 books on many exciting topics, from space 🚀 and
          volcanoes 🌋 to the Ancient Greeks 🎭 and electricity ⚡!
        </p>
        <p className={styles.secondparagraph}>
          I love to write about animals – did you know that crocodiles sometimes
          climb trees to sunbathe?! 🐊🌳
        </p>
        <div className={styles.buttonwrapper}>
          <Button size="lg" variant="secundary">
            Get in touch
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
