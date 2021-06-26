import styles from './WrapperFlex.module.scss';

const defaultProps = { background: '#ffffff' };

// Section Wrapper
const WrapperFlex = ({ children, background = defaultProps.background }) => {
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

export default WrapperFlex;
