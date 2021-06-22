import styles from './WrapperFlex.module.scss';

// Section Wrapper
const WrapperFlex = ({ children, background = '#ffffff', minheight }) => {
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

export default WrapperFlex;
