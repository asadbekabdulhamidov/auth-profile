import { Outlet } from 'react-router-dom';

// components
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function MainLayout() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default MainLayout;
