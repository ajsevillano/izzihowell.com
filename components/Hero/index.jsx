import styles from './Hero.module.scss';
import Section from '../Layouts/Section';

const Hero = () => {
  return (
    <Section background="#fd9b07cc" minheight="50vh">
      <div className="text"></div>
      <div className="picture"></div>
    </Section>
  );
};

export default Hero;
