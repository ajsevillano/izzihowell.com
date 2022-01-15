import Header from '../components/Header';
import Books from '../components/Books';
import Award from '../components/Award';
import Instagram from '../components/Instagram';
import Footer from '../components/Footer';
import Reviews from '../components/Reviews';
import BookShape from '../components/Separators/BookShape';

//Need update to last version of the instagram API
export const getStaticProps = async () => {
  const api = {
    url: process.env.API_URL,
    userID: process.env.USER_ID,
    parameters: process.env.PARAMETERS,
    token: process.env.TOKEN,
  };

  const res = await fetch(
    `${api.url}/${api.userID}/${api.parameters}=${api.token}`
  );
  const feed = await res.json();

  return {
    props: {
      feedData: feed.data,
    },
  };
};

export default function Home({ feedData }) {
  return (
    <>
      <Header />
      <Award />
      <BookShape color="grey" />
      <Books />
      <BookShape color="white" />
      <Reviews />
      <Instagram feed={feedData} />
      <Footer />
    </>
  );
}
