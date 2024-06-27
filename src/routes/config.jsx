import { Home } from "@mui/icons-material";
import { lazy } from "react";
const IndexPage = lazy(() => import("../pages/dashbaord/app"));
const ChangePassword = lazy(() => import("../sections/user/ChangePassword"));
const Account = lazy(() => import("../sections/user/Account"));
export const appRoutes = [
  {
    group: "Dashboard",
    title: "Home",
    path: "dashboard",
    element: <IndexPage />,
    icon: <Home />,
  },
  {
    group: "Account",
    title: "Manage Profile",
    path: "account",
    element: <Account />,
    icon: <Home />,
  },
  {
    group: "Account",
    title: "Change Password",
    path: "change-password",
    element: <ChangePassword />,
    icon: <Home />,
  },
];
