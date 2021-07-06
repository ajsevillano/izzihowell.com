import styles from './WrapperFlex.module.scss';

const defaultProps = {
  background: 'white',
  direction: 'column',
  justify: 'center',
  align: 'align-center',
};

// Section Wrapper
const WrapperFlex = ({
  children,
  background = defaultProps.background,
  direction = defaultProps.direction,
  justify = defaultProps.justify,
  align = defaultProps.align,
}) => {
  return (
    <section
      className={[
        styles.wrapper,
        styles[background],
        styles[direction],
        styles[justify],
        styles[align],
      ].join(' ')}
    >
      {children}
    </section>
  );
};

export default WrapperFlex;
