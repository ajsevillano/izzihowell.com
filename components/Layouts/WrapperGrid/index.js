// TODO: Add a prop to choose paddins

import styles from './WrapperGrid.module.scss';

const WrapperGrid = ({ children, bottomPadding }) => {
  return (
    <div
      className={`${styles.gridwrapper} ${
        bottomPadding ? styles.bottomPadding : ''
      }  `}
    >
      {children}
    </div>
  );
};

export default WrapperGrid;
