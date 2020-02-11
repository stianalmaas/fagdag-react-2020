import React from "react";
// import { useDispatch } from "react-redux";
// import "./app/App.css";
import { Router, Switch, Link } from "react-router-dom";
import { history, routes, RouteWithSubRoutes } from "./routes";

const App = () => {
  return (
    <Router history={history}>
      <aside>
        <span>Sidebar</span>
        <ul>
          {routes.map(r => (
            <li key={r.path}>
              <Link to={r.path}>{r.id}</Link>
            </li>
          ))}
        </ul>
      </aside>
      <main>
        <Switch>
          {routes.map(r => (
            <RouteWithSubRoutes key={r.path} {...r} />
          ))}
        </Switch>
      </main>
    </Router>
  );
};

export default App;
