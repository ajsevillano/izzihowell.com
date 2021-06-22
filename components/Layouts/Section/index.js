// Section Wrapper
import styles from './Section.module.scss';

const Section = ({ children }) => {
  return <div className={styles.wrapper}>{children}</div>;
};

export default Section;
