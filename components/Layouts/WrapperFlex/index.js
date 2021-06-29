import styles from './WrapperFlex.module.scss';

const defaultProps = {
  background: 'white',
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
      className={[
        styles.wrapper,
        styles[background],
        styles[direction],
        styles[justify],
      ].join(' ')}
    >
      {children}
    </div>
  );
};

export default WrapperFlex;
