import styles from './Section.module.scss';

// Section Wrapper
const Section = ({ children, background = '#ffffff' }) => {
  return (
    <div
      className={styles.wrapper}
      style={{
        backgroundColor: background,
      }}
    >
      {children}
    </div>
  );
};

export default Section;
