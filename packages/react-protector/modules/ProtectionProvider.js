import React from "react";
import PropTypes from "prop-types";
import invariant from "invariant";
import ProtectionContext from "./ProtectionContext";

class ProtectionProvider extends React.Component {
  static propTypes = {
    protection: PropTypes.object,
    guard: PropTypes.func,
    children: PropTypes.node
  };

  getChildContext() {
    const { protection, guard } = this.props;
    return { protection, guard };
  }

  componentWillMount() {
    const { children } = this.props;

    invariant(
      children == null || React.Children.count(children) === 1,
      "A <Router> may have only one child element"
    );
  }

  render() {
    const { children } = this.props;
    return (
      <ProtectionContext.Provider value={this.getChildContext()}>
        {children ? React.Children.only(children) : null}
      </ProtectionContext.Provider>
    );
  }
}

export default ProtectionProvider;
