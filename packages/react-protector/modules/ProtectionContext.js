import React from "react";
import PropTypes from "prop-types";
import createReactContext from "create-react-context";

const { Consumer: ProtectionConsumer, Provider } = createReactContext(
  "react-protector"
);

const ProtectionProvider = ({ children, ...rest }) => {
  return <Provider value={rest}>{React.Children.only(children)}</Provider>;
};

ProtectionProvider.propTypes = {
  protection: PropTypes.bool.isRequired,
  roles: PropTypes.array,
  children: PropTypes.node.isRequired
};

export { ProtectionConsumer, ProtectionProvider };
