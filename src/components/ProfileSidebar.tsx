import ProfileImage from './ProfileImage';
import Button from './Button';
import { Link } from 'react-router-dom';

import { useAuth } from '../context/AuthContext';

import HomeIcon from '../assets/home-icon.svg';
import SettingIcon from '../assets/setting-icon.svg';
import UserIcon from '../assets/user-white.svg';
import LogOutIcon from '../assets/logout.svg';

function ProfileSidebar() {
  const { user, logOut } = useAuth();

  const email = user?.email || 'No email';
  const name = user?.displayName || 'No name';
  const avatar = user?.photoURL;

  return (
    <aside className="w-full max-w-[360px] shadow-lg p-6">
      <div className="flex gap-2 items-center mb-8 ">
        <ProfileImage />
        <p className="leading-6">ProfileApp </p>
      </div>

      <div className="flex  gap-3 p-4  bg-[#F9FAFB] mb-8">
        {/* Avatar */}
        {avatar ? (
          <img
            src={avatar}
            alt={name}
            className="w-20 h-20 rounded-full object-cover mb-3"
          />
        ) : (
          <div className="w-12 h-12 rounded-full bg-blue-500 text-white flex items-center justify-center text-2xl font-semibold mb-3">
            {name[0].toUpperCase()}
          </div>
        )}

        <div>
          {/* Name */}
          <p className="leading-6 text-[#101828]">{name}</p>

          {/* Email */}
          <p className="text-[#4A5565] leading-6">{email}</p>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <Link to="/">
          <Button
            className="text-left flex justify-start gap-3"
            size="lg"
            fullWidth={true}
            variant=""
          >
            <img src={HomeIcon} alt="" />
            Home
          </Button>
        </Link>
        <Button
          className="text-left flex justify-start gap-3"
          size="lg"
          fullWidth={true}
          variant="primary"
        >
          <img src={UserIcon} alt="" />
          Profile
        </Button>
        <Button
          className="text-left flex justify-start gap-3"
          size="lg"
          fullWidth={true}
          variant="primary"
        >
          <img src={SettingIcon} alt="" />
          Settings
        </Button>
      </div>
      <div className="absolute bottom-2.5 ">
        <Button
          className="text-red-600 flex justify-start gap-3 leading-6"
          size="lg"
          variant=""
          fullWidth={true}
          onClick={logOut}
        >
          <img src={LogOutIcon} alt="" />
          Logout
        </Button>
      </div>
    </aside>
  );
}

export default ProfileSidebar;
