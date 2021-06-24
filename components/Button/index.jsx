import styles from './Button.module.scss';

const Button = ({ children, size = 'md' }) => {
  return (
    <button className={[styles.button, styles[size]].join(' ')}>
      {children}
    </button>
  );
};

export default Button;
