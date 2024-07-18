import { Home } from '@mui/icons-material';
import { lazy } from 'react';
const IndexPage = lazy(() => import('../pages/dashbaord/app'));
const Plan = lazy(() => import('../pages/dashbaord/plan'));
const Account = lazy(() => import('../sections/user/Account'));
const Settings = lazy(() => import('../pages/dashbaord/Setting.jsx'));
const Preferences = lazy(() => import('../pages/dashbaord/Preferences'));
export const appRoutes = [
  {
    group: 'Dashboard',
    title: 'Dashboard',
    path: 'dashboard',
    element: <IndexPage />,
    icon: <Home />,
  },
  {
    group: 'Account',
    title: 'Profile',
    path: 'profile',
    element: <Account />,
    icon: <Home />,
  },
  {
    group: 'Account',
    title: 'Preferences',
    path: 'preferences',
    element: <Preferences />,
    icon: <Home />,
  },
  {
    group: 'Plan',
    title: 'Plan',
    path: 'plans',
    element: <Plan />,
    icon: <Home />,
  },
  {
    group: 'Settings',
    title: 'Settings',
    path: 'settings',
    element: <Settings />,
    icon: <Home />,
  },
];
