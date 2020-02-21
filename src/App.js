import React, { useState } from "react";
import { Router, Switch, Link } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { history, routes, RouteWithSubRoutes } from "./routes";

import {
  StyledSideBar,
  MenuList,
  StyledMenuItem,
  StyledMain
} from "./app/app.styles";

const darkTheme = {
    backgroundColor: 'black',
    color: 'yellow'
};

const lightTheme = {
    backgroundColor: 'white',
    color: 'blue'
};



const App = () => {
  const [theme, setTheme] = useState("light");

    const handleToggleThemeClick = () => {
        if (theme === 'light') {
            setTheme('dark');
        } else {
            setTheme('light');
        }
    };

  return (
    <Router history={history}>
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        <StyledSideBar>
            <button onClick={handleToggleThemeClick}>Toggle theme</button>
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
      </ThemeProvider>
    </Router>
  );
};

export default App;
