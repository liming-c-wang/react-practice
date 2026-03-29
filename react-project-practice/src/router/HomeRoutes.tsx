import { Home } from "../components/pages/Home";
import { Setting } from "../components/pages/Setting";
import { UserManagement } from "../components/pages/UserManagement";

export const homeRoutes = [
  {
    index: true,
    path: "",
    element: <Home />,
  },
  {
    index: false,
    path: "user_management",
    element: <UserManagement />,
  },
  {
    index: false,
    path: "setting",
    element: <Setting />,
  },
];
