import styles from './WrapperGrid.module.scss';

const defaultProps = {
  background: 'white',
};

const WrapperGrid = ({ children, background = defaultProps.background }) => {
  console.log(background);
  return (
    <div className={[styles.gridwrapper, styles[background]].join(' ')}>
      {children}
    </div>
  );
};

export default WrapperGrid;
