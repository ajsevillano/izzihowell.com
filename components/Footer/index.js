import styles from './Footer.module.scss';
import WrapperFlex from '../Layouts/WrapperFlex';

const Footer = () => {
  return (
    <>
      <WrapperFlex background="pink">
        <h1 className={styles.title}>Follow me</h1>
      </WrapperFlex>
    </>
  );
};

export default Footer;
