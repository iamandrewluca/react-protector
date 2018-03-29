import React from "react";
import intersection from "lodash.intersection";
import { ProtectionConsumer } from "./ProtectionContext";
import RestrictedRoute from "./RestrictedRoute";
import { normalizeRoles } from "./normalizeRoles";

const ProtectedRoute = ({ roles, ...rest }) => {
  roles = normalizeRoles(roles);

  return (
    <ProtectionConsumer>
      {({ protection, roles: allRoles }) => {
        const isRestricted =
          roles.length && intersection(allRoles, roles).length === 0;
        const redirectPath = "/";
        return (
          <RestrictedRoute
            isRestricted={isRestricted}
            redirectPath={redirectPath}
            {...rest}
          />
        );
      }}
    </ProtectionConsumer>
  );
};

export default ProtectedRoute;
