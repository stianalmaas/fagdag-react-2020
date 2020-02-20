import React from "react";
import { Route } from "react-router-dom";

export default props => (
  <Route
    exact={props.exact}
    path={props.path}
    render={prps => (
      <props.component
        {...prps}
        children={props.children}
        routes={props.routes}
      />
    )}
  />
);
