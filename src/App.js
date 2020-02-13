import React from 'react';
import { Link, Router, Switch } from 'react-router-dom';
import { history, routes, RouteWithSubRoutes } from './routes';
import { MenuList, StyledMenuItem, StyledSideBar } from './app/app.styles';

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
      <main style={{ 'paddingLeft': '14rem' }}>
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
