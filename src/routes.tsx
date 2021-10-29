import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import LogoOnlyLayout from './layouts/LogoOnlyLayout';
import ChatLayout from './layouts/ChatLayout';
// pages
import Login from './pages/Login';
import Register from './pages/Register';
import NotFound from './pages/Page404';
import Chat from './pages/Chat';

// ----------------------------------------------------------------------

export default function Router() {
  return useRoutes([
    {
      path: '/dashboard',
      element: <ChatLayout />,
      children: [
        { path: '/', element: <Navigate to="/dashboard/chat" replace /> },
        { path: 'chat', element: <Chat /> },
        { path: 'chat/:conversationKey', element: <Chat /> }
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
