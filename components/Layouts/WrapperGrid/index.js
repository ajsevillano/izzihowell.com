// TODO: Add a prop to choose paddins

import styles from './WrapperGrid.module.scss';

const WrapperGrid = ({ children }) => {
  return <div className={styles.gridwrapper}>{children}</div>;
};

export default WrapperGrid;
