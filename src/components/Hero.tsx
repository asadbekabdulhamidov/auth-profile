import { Link } from 'react-router-dom';
import Button from './Button';

import ArrowR from '../assets/arrow-r.svg';

function Hero() {
  return (
    <section className="mt-32">
      <div className="w-full max-w-[1232px] px-2 mx-auto ">
        <p className="max-w-[343.86px] mb-8 bg-[#DBEAFE] text-[#155DFC] leading-6 rounded-[33.5px] py-2 text-center px-[18px] mx-auto whitespace-nowrap">
          ✨ Welcome to the future of authentication
        </p>
        <h1 className="text-center mt-8 leading-6 text-[#101828]">
          Welcome to Your Profile App
        </h1>

        <p className="text-[#4A5565] max-w-2xl text-center mx-auto mt-8">
          Experience seamless authentication and profile management with our
          modern, secure, and user-friendly platform. Built with the latest
          technologies to provide you with the best experience.
        </p>

        <div className="flex flex-col md:flex-row mt-8 items-center justify-center gap-4 ">
          <Link to={''}>
            <Button
              className="cursor-pointer "
              size="lg"
              fullWidth={false}
              variant="primary"
            >
              Get Started
              <img className="ml-2" src={ArrowR} alt="" />
            </Button>
          </Link>
          <Link to={'/login'}>
            <Button
              className="w-[159px] cursor-pointer"
              fullWidth={false}
              size="lg"
              variant="secondary"
            >
              Sign In
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Hero;
