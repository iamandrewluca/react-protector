import React from "react";
import PropTypes from "prop-types";
import createReactContext from "create-react-context";

const { Consumer: ProtectionConsumer, Provider } = createReactContext(
  "react-protector"
);

const ProtectionProvider = ({ config, ...rest }) => {
  return <Provider value={config} {...rest} />;
};

ProtectionProvider.propTypes = {
  config: PropTypes.shape({
    protection: PropTypes.bool.isRequired,
    roles: PropTypes.array,
    protectCallback: PropTypes.func
  }).isRequired,
  children: PropTypes.node.isRequired
};

export { ProtectionConsumer, ProtectionProvider };
