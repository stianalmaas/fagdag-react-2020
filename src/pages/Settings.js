import React from "react";
import Admin from "./settings/Admin";
import User from "./settings/User";
import { Switch, Link } from "react-router-dom";
import { RouteWithSubRoutes } from "../routes";

const Settings = ({ routes = [] }) => (
  <div>
    <h1>Settings</h1>
    <ul>
      {routes.map(r => (
        <li key={r.path}>
          <Link to={r.path}>{r.id}</Link>
        </li>
      ))}
    </ul>
    <Switch>
      {routes.map(r => (
        <RouteWithSubRoutes key={r.path} {...r} />
      ))}
    </Switch>
  </div>
);

Settings.Pages = {
  User,
  Admin,
};

export default Settings;
