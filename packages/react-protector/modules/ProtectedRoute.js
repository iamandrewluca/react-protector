import React from "react";
import PropTypes from "prop-types";
import ProtectionContext from "./ProtectionContext";

const isEmptyChildren = children => React.Children.count(children) === 0;

class ProtectedRoute extends React.Component {
  static propTypes = {
    guard: PropTypes.func
  };

  getChildContext() {
    const { guard } = this.props;
    return { guard };
  }

  renderChildren() {
    const { match } = this.state;
    const {
      children,
      component,
      render,
      router: { history, route, staticContext }
    } = this.props;
    const location = this.props.location || route.location;
    const props = { match, location, history, staticContext };

    if (component) return match ? React.createElement(component, props) : null;

    if (render) return match ? render(props) : null;

    if (typeof children === "function") return children(props);

    if (children && !isEmptyChildren(children))
      return React.Children.only(children);

    return null;
  }

  render() {
    return (
      <ProtectionContext.Consumer>
        {value => (
          <ProtectionContext.Provider value={this.getChildContext(value)}>
            {this.renderChildren()}
          </ProtectionContext.Provider>
        )}
      </ProtectionContext.Consumer>
    );
  }
}

export default ProtectedRoute;
