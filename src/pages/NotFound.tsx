import { GoHome } from 'react-icons/go';

import Button from '../components/Button';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="h-screen flex flex-col items-center justify-center max-w-[488px] mx-auto">
      <h1 className="leading-[300px] text-[200px] text-[#4F39F6] mb-8">404</h1>
      <div className="text-center max-w-[488px]">
        <h2 className="font-medium text-2xl leading-9 text-[#101828] mb-4">
          Page Not Found
        </h2>
        <p className="text-[#4A5565] leading-6">
          Oops! The page you're looking for doesn't exist. It might have been
          moved or deleted.
        </p>
      </div>

      <div className="flex gap-4 mt-8">
        <Link to={'/'}>
          {' '}
          <Button
            className="flex items-center gap-2"
            variant={'primary'}
            size="lg"
            fullWidth={false}
          >
            <GoHome className="text-white w-5 h-5" />
            Go Home
          </Button>
        </Link>
        <Link to={'/profile'}>
          <Button
            className="flex items-center gap-2"
            variant={'secondary'}
            size="lg"
            fullWidth={false}
          >
            Go to Profile
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
