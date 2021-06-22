import styles from './Hero.module.scss';
import WrapperFlex from '../Layouts/WrapperFlex';

const Hero = () => {
  return (
    <WrapperFlex background="#fdcd07" minheight="50vh">
      <div className={styles.presentation}>
        <h1>Welcome!</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
          suscipit expedita sint, quia in obcaecati cumque, saepe maiores nemo
          fuga libero quaerat porro non laboriosam cupiditate, quas quod.
          Distinctio, voluptatem. Lorem, ipsum dolor sit amet consectetur
          adipisicing elit. Voluptatibus suscipit expedita sint, quia in
          obcaecati cumque, saepe maiores nemo fuga libero quaerat porro non
          laboriosam cupiditate, quas quod. Distinctio, voluptatem.
        </p>
      </div>
      <div className={styles.picture}>Picture</div>
    </WrapperFlex>
  );
};

export default Hero;
