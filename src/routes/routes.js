import Home from "../pages/Home";
import Settings from "../pages/Settings";
import Todos from "../pages/Todos";

export default [
  {
    id: "home",
    component: Home,
    path: "/home"
  },
  {
    id: "settings",
    component: Settings,
    path: "/settings",
    routes: [
      {
        id: "user",
        path: "/settings/user",
        component: Settings.Pages.User
      },
      {
        id: "admin",
        path: "/settings/admin",
        component: Settings.Pages.Admin
      }
    ]
  },
  {
    id: "todos",
    component: Todos,
    path: "/todos"
  }
];
