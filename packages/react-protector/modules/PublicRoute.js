import React from "react";
import { ProtectionConsumer } from "./ProtectionContext";
import RestrictedRoute from "./RestrictedRoute";

const PublicRoute = () => (
  <ProtectionConsumer>
    {({ protection: isRestricted }) => {
      const redirectPath = "/";
      return (
        <RestrictedRoute
          isRestricted={isRestricted}
          redirectPath={redirectPath}
        />
      );
    }}
  </ProtectionConsumer>
);

export default PublicRoute;
