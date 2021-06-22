import styles from './Hero.module.scss';
import WrapperFlex from '../Layouts/WrapperFlex';

const Hero = () => {
  return (
    <WrapperFlex background="#fdcd07" minheight="50vh">
      <div className="text">Main text</div>
      <div className="picture">Picture</div>
    </WrapperFlex>
  );
};

export default Hero;
