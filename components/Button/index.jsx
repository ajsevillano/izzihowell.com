import styles from './Button.module.scss';

const defaultProps = { size: 'md', variant: 'primary' };

const Button = ({
  children,
  size = defaultProps.size,
  variant = defaultProps.variant,
}) => {
  return (
    <div className={[styles.button, styles[size], styles[variant]].join(' ')}>
      {children}
    </div>
  );
};

export default Button;
