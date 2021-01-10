import React from "react";
import { Redirect, Route } from "react-router-dom";

const PrivateRoute = ({ component: Component }) => {
  return (
    <Route
      render={(props) =>
        localStorage.getItem("auth") ? (
          <Component {...props} />
        ) : (
          <Redirect to="/" />
        )
      }
    />
  );
};
export default PrivateRoute;
