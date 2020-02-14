
import React from "react";
import { Router, Switch, Link } from "react-router-dom";

import { history, routes, RouteWithSubRoutes } from "./routes";

import {
  AppContainer,
  GlobalStyle,
  StyledSideBar,
  MenuList,
  StyledMenuItem,
  StyledMain
} from "./app/app.styles";


const App = () => {
  return (
    <Router history={history}>
        <StyledSideBar>
          <span>Sidebar</span>
          <MenuList>
            {routes.map(r => (
              <StyledMenuItem key={r.id}>
                <Link to={r.path}>{r.id}</Link>
              </StyledMenuItem>
            ))}
          </MenuList>
        </StyledSideBar>

        <StyledMain>
          <Switch>
            {routes.map(r => (
              <RouteWithSubRoutes key={r.path} {...r} />
            ))}
          </Switch>
        </StyledMain>
    </Router>
  );
};

export default App;
