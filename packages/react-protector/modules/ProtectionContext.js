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
    protection: PropTypes.bool.isRequired,
    roles: PropTypes.array,
    protectCallback: PropTypes.func,
    placeholder: PropTypes.node
  }).isRequired,
  children: PropTypes.node.isRequired
};

export { ProtectionConsumer, ProtectionProvider };
