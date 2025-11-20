import { Link } from 'react-router-dom';
import Button from './Button';
import { IoMdArrowForward } from 'react-icons/io';

function CTAsection() {
  return (
    <section className="w-full max-w-[1232px] mx-auto px-2 bg-linear-to-b rounded-3xl shadow-2xl from-[#2B7FFF] to-[#4F39F6]">
      <div className="p-12">
        <p className="text-[#DBEAFE] text-center leading-6 mb-4 ">
          Ready to get started?
        </p>
        <p className="text-[#DBEAFE] text-center leading-6 mb-8">
          Join thousands of users who trust our platform for their
          authentication needs.
        </p>
        <Link to={'/register'}>
          <Button
            fullWidth={false}
            size="lg"
            className="text-[#101828] flex gap-3 bg-white"
          >
            Create Your Account
            <IoMdArrowForward className="text-[#101828] w-5 h-5 " />
          </Button>
        </Link>
      </div>
    </section>
  );
}

export default CTAsection;
