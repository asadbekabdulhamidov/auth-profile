import { Outlet } from 'react-router-dom';

function ProfileLayout() {
  return (
    <div className="min-h-screen">
      <Outlet />
    </div>
  );
}

export default ProfileLayout;
