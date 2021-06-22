import Head from 'next/head';
import styles from './Header.module.scss';
import WrapperFlex from '../Layouts/WrapperFlex';

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
        <h1 className={styles.logo}>Izzi Howell</h1>
        <nav className={styles.navigation}>
          <ul>
            <li>Home</li>
            <li>Books</li>
            <li>About</li>
            <li>Social</li>
          </ul>
        </nav>
      </WrapperFlex>
    </>
  );
};

export default Header;
