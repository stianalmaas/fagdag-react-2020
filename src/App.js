import React from "react";
// import { useDispatch } from "react-redux";
// import "./app/App.css";
import { Router, Switch, Link } from "react-router-dom";
import { history, routes, RouteWithSubroutes } from "./routes";

const App = () => {
  // const dispatch = useDispatch();
  return (
    <Router history={history}>
      <aside>
        <span>Sidebar</span>
        <ul>
          {routes.map(r => (
            <li>
              <Link to={r.path}>{r.id}</Link>
            </li>
          ))}
        </ul>
      </aside>
      <main>
        <Switch>
          {routes.map(r => (
            <RouteWithSubroutes {...r} />
          ))}
        </Switch>
      </main>
    </Router>
  );
};

export default App;
