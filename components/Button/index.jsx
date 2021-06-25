import styles from './Button.module.scss';

const defaultSize = { size: 'md' };

const Button = ({ children, size = defaultSize }) => {
  return (
    <button className={[styles.button, styles[size]].join(' ')}>
      {children}
    </button>
  );
};

export default Button;
