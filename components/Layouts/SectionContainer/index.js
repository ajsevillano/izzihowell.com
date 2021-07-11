import styles from './SectionContainer.module.scss';

const defaultProps = {
  background: 'white',
  bgImage: 'none',
};

const SectionContainer = ({
  children,
  background = defaultProps.background,
  bgImage = defaultProps.bgImage,
}) => {
  return (
    <section
      className={[styles.container, styles[background], styles[bgImage]].join(
        ' '
      )}
    >
      {children}
    </section>
  );
};

export default SectionContainer;
