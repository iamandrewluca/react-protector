import React from "react";
import { ProtectionConsumer } from "./ProtectionContext";
import intersection from "lodash.intersection";
import { normalizeRoles } from "./normalizeRoles";

const Protected = ({ children, roles }) => {
  roles = normalizeRoles(roles);

  return (
    <ProtectionConsumer>
      {({ protection, roles: allRoles }) => {
        if (
          !protection ||
          (roles.length && intersection(allRoles, roles).length === 0)
        ) {
          return null;
        }

        return children;
      }}
    </ProtectionConsumer>
  );
};

export default Protected;
