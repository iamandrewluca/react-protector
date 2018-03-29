import React from "react";
import { Spinner } from "../components/Spinner";
import { Route } from "react-router";
import { ProtectionConsumer } from "./ProtectionContext";

const ProtectedRoutes = ({ children }) => (
  <ProtectionConsumer>
    {({ protection, roles, protectCallback }) => {
      if (protection) {
        return children;
      }

      protectCallback();
      return <Route component={Spinner} />;
    }}
  </ProtectionConsumer>
);

export default ProtectedRoutes;
