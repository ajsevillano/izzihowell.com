import styles from './Hero.module.scss';
import WrapperFlex from '../../Layouts/WrapperFlex';

const Hero = () => {
  return (
    <>
      <div className={styles.presentation}>
        <h2>Winner of the Royal Society Young People's Book Prize 2020</h2>
        <h1>Welcome!</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
          suscipit expedita sint, quia in obcaecati cumque, saepe maiores nemo
          fuga libero quaerat porro non laboriosam cupiditate, quas quod.
        </p>
      </div>
      <div className={styles.picture}>Picture</div>
    </>
  );
};

export default Hero;
