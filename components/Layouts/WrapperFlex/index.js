import styles from './WrapperFlex.module.scss';

const defaultProps = { background: '#ffffff', direction: 'column' };

// Section Wrapper
const WrapperFlex = ({
  children,
  background = defaultProps.background,
  direction = defaultProps.direction,
}) => {
  return (
    <div
      className={styles.wrapper}
      style={{
        backgroundColor: background,
        flexDirection: direction,
      }}
    >
      {children}
    </div>
  );
};

export default WrapperFlex;
