import React from "react";
import { ProtectionConsumer } from "./ProtectionContext";
import RestrictedRoute from "./RestrictedRoute";

const PublicRoute = props => (
  <ProtectionConsumer>
    {({ protection: isRestricted }) => {
      const redirectPath = "/";
      return (
        <RestrictedRoute
          isRestricted={isRestricted}
          redirectPath={redirectPath}
          {...props}
        />
      );
    }}
  </ProtectionConsumer>
);

export default PublicRoute;
