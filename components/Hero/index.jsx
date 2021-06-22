import styles from './Hero.module.scss';
import Section from '../Layouts/Section';

const Hero = () => {
  return (
    <Section background="#fdcd07" minheight="50vh">
      <div className="text">Main text</div>
      <div className="picture">Picture</div>
    </Section>
  );
};

export default Hero;
