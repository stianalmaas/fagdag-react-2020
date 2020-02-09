import { Route } from "react-router-dom";
import React from "react";

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
