import styles from './SectionContainer.module.scss';

const SectionContainer = ({ children }) => {
  return <section className={styles.container}>{children}</section>;
};

export default SectionContainer;
