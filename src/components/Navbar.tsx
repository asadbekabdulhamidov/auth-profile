import { Link } from 'react-router-dom';
import Button from './Button';

function Navbar() {
  return (
    <nav className="py-3">
      <div className="w-full max-w-[1232px] px-2 mx-auto flex justify-between">
        {/* logo */}
        <Link className="flex items-center" to="/">
          <div className="rounded-[5px] w-10 h-10 flex items-center justify-center bg-gradient-to-b from-[#2B7FFF] to-[#4F39F6] mr-2">
            <span className="text-white ">P</span>
          </div>
          <span className="text-gray-900">ProfileApp</span>
        </Link>

        <div className="flex gap-4">
          <Button fullWidth={false} size="lg" variant="secondary">
            Login
          </Button>
          <Button fullWidth={false} size="lg" variant="primary">
            Register
          </Button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
