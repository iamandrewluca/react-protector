import React from "react";
import { ProtectionConsumer } from "./ProtectionContext";
import intersection from "lodash/intersection";
import { normalizeRoles } from "./normalizeRoles";
import { dynamicRender } from "./dynamicRender";

const Protected = props => {
  const { roles } = props;
  const componentRoles = normalizeRoles(roles);

  return (
    <ProtectionConsumer>
      {({ protection, roles: allRoles }) => {
        if (
          !protection ||
          (componentRoles.length &&
            intersection(allRoles, componentRoles).length === 0)
        ) {
          return null;
        }

        return dynamicRender(props);
      }}
    </ProtectionConsumer>
  );
};

export default Protected;
