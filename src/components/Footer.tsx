import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className="w-full max-w-[1232px] px-2 mx-auto py-8 mt-20">
      <Link
        className="text-center block text-[#4A5565] "
        target="_blank"
        to="https://github.com/asadbekabdulhamidov/auth-profile"
      >
        with Asadbek Abdulhamidov
      </Link>
    </div>
  );
}

export default Footer;
