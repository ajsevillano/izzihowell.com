import styles from './Footer.module.scss';
import WrapperFlex from '../Layouts/WrapperFlex';
import SectionContainer from '../Layouts/SectionContainer';

const Footer = () => {
  return (
    <SectionContainer background="dark-blue">
      <WrapperFlex align="align-center">
        <h1 className={styles.title}>Contact me</h1>
        <h1 className={styles.logo}>Izzi Howell</h1>
        <p className={styles.email}>hi@izzihowell.com</p>
        <div>
          <img src="./instagram.svg" alt="Instagram logo" />
          <img src="./linkedin.svg" alt="Linkedin logo" />
        </div>
        <p className={styles.copyright}>
          © Copyright 2021 Izzi Howell - Children's book author. All rights
          reserved Trademarks and brands are the property of their respective
          owners.
        </p>
      </WrapperFlex>
    </SectionContainer>
  );
};

export default Footer;
