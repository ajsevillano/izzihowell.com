import styles from './WrapperFlex.module.scss';

const defaultBackground = { background: '#ffffff' };

// Section Wrapper
const WrapperFlex = ({
  children,
  background = defaultBackground.background,
}) => {
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
