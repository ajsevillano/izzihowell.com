import styles from './WrapperFlex.module.scss';

const defaultProps = {
  background: '#ffffff',
  direction: 'column',
  justify: 'center',
};

// Section Wrapper
const WrapperFlex = ({
  children,
  background = defaultProps.background,
  direction = defaultProps.direction,
  justify = defaultProps.justify,
}) => {
  return (
    <div
      className={styles.wrapper}
      style={{
        backgroundColor: background,
        flexDirection: direction,
        justifyContent: justify,
      }}
    >
      {children}
    </div>
  );
};

export default WrapperFlex;
