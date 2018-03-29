import React from "react";
import { Route } from "react-router";
import { ProtectionConsumer } from "./ProtectionContext";

const ProtectedRoutes = ({ children }) => (
  <ProtectionConsumer>
    {({ protection, roles, protectCallback, placeholder: Placeholder }) => {
      if (protection) {
        return children;
      }

      protectCallback();
      return <Route component={Placeholder} />;
    }}
  </ProtectionConsumer>
);

export default ProtectedRoutes;
