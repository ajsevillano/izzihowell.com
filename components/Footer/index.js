import styles from './Footer.module.scss';
import WrapperFlex from '../Layouts/WrapperFlex';
import SectionContainer from '../Layouts/SectionContainer';

const Footer = () => {
  return (
    <SectionContainer background="dark-blue">
      <WrapperFlex align="align-left">
        <h1 className={styles.title}>Follow me</h1>
      </WrapperFlex>
    </SectionContainer>
  );
};

export default Footer;
