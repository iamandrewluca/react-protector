import React from "react";
import intersection from "lodash/intersection";
import { ProtectionConsumer } from "./ProtectionContext";
import RestrictedRoute from "./RestrictedRoute";
import { normalizeRoles } from "./normalizeRoles";
import { Route } from "react-router";
import { dynamicRender } from "./dynamicRender";

const ProtectedRoute = props => {
  const { roles, redirect, noGuard = false, callProtection } = props;

  const routeRoles = normalizeRoles(roles);

  return (
    <ProtectionConsumer>
      {config => {
        const {
          protection,
          roles: allRoles,
          protectCallback,
          placeholder: Placeholder,
          protectedRedirect,
          guard
        } = config;

        if (!protection && callProtection) {
          protectCallback();
          return <Route component={Placeholder} />;
        }

        if (protection && callProtection) {
          return dynamicRender(props);
        }

        if (!protection) {
          return (
            <RestrictedRoute
              isRestricted
              redirectPath={redirect || protectedRedirect}
              {...props}
            />
          );
        }

        const isRestricted =
          !!routeRoles.length &&
          intersection(allRoles, routeRoles).length === 0;
        const guarded = !noGuard && guard && guard(protection);
        const redirectPath = guarded || redirect || protectedRedirect;

        // console.warn('isRestricted', isRestricted)
        // console.warn('guarded', guarded)
        // console.warn('redirectPath', redirectPath)

        return (
          <RestrictedRoute
            isRestricted={isRestricted || guarded}
            redirectPath={redirectPath}
            {...props}
          />
        );
      }}
    </ProtectionConsumer>
  );
};

export default ProtectedRoute;
