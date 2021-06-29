import Head from 'next/head';
import WrapperFlex from '../Layouts/WrapperFlex';
import Hero from './Hero/index';
import Navigation from './Navigation';
import Wave from './Wave';

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
      <WrapperFlex background="yellow">
        <Navigation />
        <Hero />
      </WrapperFlex>
      <Wave />
    </>
  );
};

export default Header;
