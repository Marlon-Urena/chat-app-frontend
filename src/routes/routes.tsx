import { lazy } from 'react';
import { Navigate, useRoutes } from 'react-router-dom';
import AuthRoute from './AuthGuard';
import GuestGuard from './GuestGuard';
import { useAppSelector } from '../store/store';

// ----------------------------------------------------------------------

// pages
const Register = lazy(() => import('../pages/Register'));
const NotFound = lazy(() => import('../pages/Page404'));
const Chat = lazy(() => import('../pages/Chat'));
const UserAccount = lazy(() => import('../pages/UserAccount'));
const Login = lazy(() => import('../pages/Login'));

// layouts
const AppLayout = lazy(() => import('../layouts/AppLayout'));
const LogoOnlyLayout = lazy(() => import('../layouts/LogoOnlyLayout'));

// ----------------------------------------------------------------------

export default function Router() {
  const { checkingSession } = useAppSelector((state) => state.authentication);
  return useRoutes([
    {
      path: '/dashboard',
      element: !checkingSession && (
        <AuthRoute>
          <AppLayout />
        </AuthRoute>
      ),
      children: [
        { path: '', element: <Navigate to="/dashboard/chat" replace /> },
        { path: 'chat', element: <Chat /> },
        { path: 'chat/:conversationKey', element: <Chat /> },
        { path: 'account', element: <UserAccount /> }
      ]
    },
    {
      path: '/auth',
      element: !checkingSession && (
        <GuestGuard>
          <LogoOnlyLayout />
        </GuestGuard>
      ),
      children: [
        {
          path: 'login',
          element: <Login />
        },
        {
          path: 'register',
          element: <Register />
        }
      ]
    },
    {
      path: '/',
      element: <LogoOnlyLayout />,
      children: [
        { path: '404', element: <NotFound /> },
        { path: '/', element: <Navigate to="/dashboard" /> },
        { path: '*', element: <Navigate to="/404" /> }
      ]
    },
    { path: '*', element: <Navigate to="/404" replace /> }
  ]);
}
