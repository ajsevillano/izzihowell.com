import styles from './SectionContainer.module.scss';

const defaultProps = {
  background: 'white',
};

const SectionContainer = ({
  children,
  background = defaultProps.background,
}) => {
  return (
    <section className={[styles.container, styles[background].join(' ')]}>
      {children}
    </section>
  );
};

export default SectionContainer;
