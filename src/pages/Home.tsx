import { Fragment } from 'react/jsx-runtime';
import Hero from '../components/Hero';
import Features from '../components/Features';

const Home = () => {
  return (
    <Fragment>
      <Hero />
      <Features />
    </Fragment>
  );
};

export default Home;
