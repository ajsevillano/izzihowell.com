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
  direction = defaultProps.direction,
  justify = defaultProps.justify,
  align = defaultProps.align,
}) => {
  return (
    <div
      className={[
        styles.wrapper,
        styles[direction],
        styles[justify],
        styles[align],
      ].join(' ')}
    >
      {children}
    </div>
  );
};

export default WrapperFlex;
