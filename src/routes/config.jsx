import { Home, Chat, People } from '@mui/icons-material';
import { lazy } from 'react';
const Matches = lazy(() => import('../pages/Matches'));
const Dashboard = lazy(() => import('../pages/Dashboard'));
const Plan = lazy(() => import('../pages/plan'));
const Chats = lazy(() => import('../pages/Chats'));
export const appRoutes = [
  {
    title: 'Home',
    path: 'dashboard',
    element: <Dashboard />,
    icon: <Home />,
  },
  {
    title: 'Matches',
    path: 'matches',
    element: <Matches />,
    icon: <People />,
  },
  {
    title: 'Plan',
    path: 'plans',
    element: <Plan />,
    icon: <Home />,
  },
  {
    title: 'Chat',
    path: 'chat',
    element: <Chats />,
    icon: <Chat />,
  },
];
