import { Outlet } from 'react-router-dom';

// components
import Navbar from '../components/Navbar';

function MainLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default MainLayout;
