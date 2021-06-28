import styles from './Wave.module.scss';

// Return a wave svg under the hero component
const Wave = () => {
  return (
    <div className={styles.waveWrapper}>
      <img className={styles.wave} src="wave.svg" alt="" />
    </div>
  );
};

export default Wave;
