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
    <section
      className={[
        styles.wrapper,
        styles[background],
        styles[direction],
        styles[justify],
      ].join(' ')}
    >
      {children}
    </section>
  );
};

export default WrapperFlex;
