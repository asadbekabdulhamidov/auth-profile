import { Link } from 'react-router-dom';
import Button from './Button';
import ProfileImage from './ProfileImage';

function Navbar() {
  return (
    <nav className="py-3 bg-[##E5E7EB] shadow-sm">
      <div className="align-center  flex justify-between">
        {/* logo */}
        <Link className="flex items-center" to="/">
          <ProfileImage />
          <span className="text-gray-900">ProfileApp</span>
        </Link>

        <div className="flex gap-4">
          <Link to={'/login'}>
            <Button
              className="w-[107px] cursor-pointer"
              fullWidth={false}
              size="lg"
              variant="secondary"
            >
              Login
            </Button>
          </Link>
          <Link to={'/register'}>
            <Button
              className="w-[107px] cursor-pointer"
              fullWidth={false}
              size="lg"
              variant="primary"
            >
              Register
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
