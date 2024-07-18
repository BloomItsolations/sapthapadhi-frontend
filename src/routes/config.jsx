import { Home, Chat, People } from '@mui/icons-material';
import { lazy } from 'react';
const Matches = lazy(() => import('../pages/dashbaord/Matches'));
const IndexPage = lazy(() => import('../pages/dashbaord/app'));
const Plan = lazy(() => import('../pages/dashbaord/plan'));
const Chats = lazy(() => import('../pages/dashbaord/Chats'));
export const appRoutes = [
  {
    title: 'Home',
    path: 'dashboard',
    element: <IndexPage />,
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
    path: 'Chat',
    element: <Chats />,
    icon: <Chat />,
  },
];
