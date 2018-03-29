import React from "react";
import { Redirect, Route } from "react-router";

/**
 * Will not allow this route if user is restricted
 * @param isRestricted
 * @param redirectPath
 * @param Component
 * @param rest
 * @returns {*}
 * @constructor
 */
const RestrictedRoute = ({
  isRestricted,
  redirectPath,
  component: Component,
  ...rest
}) => (
  <Route
    {...rest}
    render={props =>
      !isRestricted ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: redirectPath,
            state: { from: props.location }
          }}
        />
      )
    }
  />
);

export default RestrictedRoute;
