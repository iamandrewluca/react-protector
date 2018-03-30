import React from "react";
import PropTypes from "prop-types";
import createReactContext from "create-react-context";

const { Consumer: ProtectionConsumer, Provider } = createReactContext(
  "react-protector"
);

const ProtectionProvider = ({ config, children }) => {
  return <Provider value={config}>{React.Children.only(children)}</Provider>;
};

ProtectionProvider.propTypes = {
  config: PropTypes.shape({
    // anything that is not null or undefined will give protection
    protection: PropTypes.any,

    // protection roles
    roles: PropTypes.array,

    // called if no `protection`
    protectCallback: PropTypes.func,

    // additional guard, will receive `protection`
    // returns null or path for redirect as string
    guard: PropTypes.func,

    // show when no `protection` and `callProtection`
    placeholder: PropTypes.func,

    // redirect from `PublicRoute` to `ProtectedRoute` route if has `protection`
    publicRedirect: PropTypes.string.isRequired,

    // redirect from `ProtectedRoute` to `PublicRoute` route if no `protection`
    protectedRedirect: PropTypes.string.isRequired,

    // redirect from `ProtectedRoute` with roles and/or guard to another `ProtectedRoute`
    privateRedirect: PropTypes.string.isRequired
  }).isRequired,
  children: PropTypes.node.isRequired
};

export { ProtectionConsumer, ProtectionProvider };
