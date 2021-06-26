import styles from './Button.module.scss';

const defaultProps = { size: 'md' };

const Button = ({ children, size = defaultProps.size }) => {
  return (
    <button className={[styles.button, styles[size]].join(' ')}>
      {children}
    </button>
  );
};

export default Button;
