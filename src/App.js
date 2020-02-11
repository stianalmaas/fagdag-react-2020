import React from "react";
import { Router, Switch, Link } from "react-router-dom";

import { history, routes, RouteWithSubRoutes } from "./routes";

import { AppContainer,GlobalStyle,StyledSideBar,MenuList, StyledMenuItem} from './app/app.styles';


const App = () => {
  return (
    <Router history={history}>
      <StyledSideBar>
        <span>Sidebar</span>
        <MenuList>
          {routes.map(r => (
            <StyledMenuItem key={r.id}>
              <Link  to={r.path}>{r.id}</Link>
            </StyledMenuItem>
          ))}
        </MenuList>
      </StyledSideBar>
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
