import { useAuth } from '../context/AuthContext';
import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
type GuestRouteProps = {
  children: ReactNode;
};
function GuestRoute({ children }: GuestRouteProps) {
  const { user, loading } = useAuth();

  if (loading) {
    return <p>Checking authentication...</p>;
  }
  if (user) {
    return <Navigate to={'/profile'} />;
  }
  return <>{children}</>;
}

export default GuestRoute;
