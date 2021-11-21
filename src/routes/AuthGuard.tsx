import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { useAppSelector } from '../store/store';

interface AuthRouteProps {
  children: ReactNode;
}

function AuthRoute({ children }: AuthRouteProps) {
  const { isAuthenticated } = useAppSelector((state) => state.authentication);
  if (!isAuthenticated) {
    return <Navigate to="/auth/login" replace />;
  }
  return <>{children}</>;
}

export default AuthRoute;
