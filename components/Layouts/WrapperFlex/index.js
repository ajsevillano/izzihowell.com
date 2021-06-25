import styles from './WrapperFlex.module.scss';

const defaultBackground = { background: '#ffffff' };

// Section Wrapper
const WrapperFlex = ({
  children,
  background = defaultBackground,
  minheight,
}) => {
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
