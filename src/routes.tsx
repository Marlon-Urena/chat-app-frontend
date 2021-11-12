import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import LogoOnlyLayout from './layouts/LogoOnlyLayout';
import AppLayout from './layouts/AppLayout';
// pages
import Login from './pages/Login';
import Register from './pages/Register';
import NotFound from './pages/Page404';
import Chat from './pages/Chat';
import UserAccount from './pages/UserAccount';

// ----------------------------------------------------------------------

export default function Router() {
  return useRoutes([
    {
      path: '/dashboard',
      element: <AppLayout />,
      children: [
        { path: '/', element: <Navigate to="/dashboard/chat" replace /> },
        { path: 'chat', element: <Chat /> },
        { path: 'chat/:conversationKey', element: <Chat /> },
        { path: 'account', element: <UserAccount /> }
      ]
    },
    {
      path: '/',
      element: <LogoOnlyLayout />,
      children: [
        { path: 'login', element: <Login /> },
        { path: 'register', element: <Register /> },
        { path: '404', element: <NotFound /> },
        { path: '/', element: <Navigate to="/dashboard" /> },
        { path: '*', element: <Navigate to="/404" /> }
      ]
    },

    { path: '*', element: <Navigate to="/404" replace /> }
  ]);
}
