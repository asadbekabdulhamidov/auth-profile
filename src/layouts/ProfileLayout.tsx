import { Outlet } from 'react-router-dom';
import ProfileSidebar from '../components/ProfileSidebar';

function ProfileLayout() {
  return (
    <div className="min-h-screen flex">
      <ProfileSidebar />
      <Outlet />
    </div>
  );
}

export default ProfileLayout;
