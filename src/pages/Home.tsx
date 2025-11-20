import { Fragment } from 'react/jsx-runtime';
import Hero from '../components/Hero';
import Features from '../components/Features';
import CTAsection from '../components/CTAsection';

const Home = () => {
  return (
    <Fragment>
      <Hero />
      <Features />
      <CTAsection />
    </Fragment>
  );
};

export default Home;
