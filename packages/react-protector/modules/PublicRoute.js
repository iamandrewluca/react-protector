import React from "react";
import { ProtectionConsumer } from "./ProtectionContext";
import RestrictedRoute from "./RestrictedRoute";

const PublicRoute = props => (
  <ProtectionConsumer>
    {({ protection: isRestricted, publicRedirect }) => (
      <RestrictedRoute
        isRestricted={isRestricted}
        redirectPath={props.redirect || publicRedirect}
        {...props}
      />
    )}
  </ProtectionConsumer>
);

export default PublicRoute;
