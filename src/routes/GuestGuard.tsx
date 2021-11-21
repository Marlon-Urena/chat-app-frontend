import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { useAppSelector } from '../store/store';

interface GuestGuardProps {
  children: ReactNode;
}

function GuestGuard({ children }: GuestGuardProps) {
  const { isAuthenticated } = useAppSelector((state) => state.authentication);
  if (isAuthenticated) {
    return <Navigate to="/dashboard" />;
  }
  return <>{children}</>;
}

export default GuestGuard;
