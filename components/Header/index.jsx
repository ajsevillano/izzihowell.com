import Head from 'next/head';
import styles from './Header.module.scss';
import WrapperFlex from '../Layouts/WrapperFlex';
import Hero from './Hero/index';
import Navigation from './Navigation';

const Header = () => {
  return (
    <>
      <Head>
        <title>Izzi Howell - award winning children's books author</title>
        <meta
          name="description"
          content="Izzi Howell - children's books author"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <WrapperFlex background="#fdcd07">
        <Navigation />
        <Hero />
      </WrapperFlex>
      <div className={styles.waveWrapper}>
        <img className={styles.wave} src="wave.svg" alt="" />
      </div>
    </>
  );
};

export default Header;
