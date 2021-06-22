import styles from './Section.module.scss';

// Section Wrapper
const Section = ({ children, background = '#ffffff', minheight = '10vh' }) => {
  return (
    <div
      className={styles.wrapper}
      style={{
        backgroundColor: background,
        minHeight: minheight,
      }}
    >
      {children}
    </div>
  );
};

export default Section;
