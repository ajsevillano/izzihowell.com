import styles from './Button.module.scss';

const defaultProps = { size: 'md', color: 'white' };

const Button = ({
  children,
  size = defaultProps.size,
  color = defaultProps.color,
}) => {
  return (
    <button className={[styles.button, styles[size], styles[color]].join(' ')}>
      {children}
    </button>
  );
};

export default Button;
