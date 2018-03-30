import React from "react";

// copied from react-router Route.render
export function dynamicRender(props) {
  const { component, render, children } = props;

  if (component) return React.createElement(component, props);
  if (render) return render(props);
  if (typeof children === "function") return children(props);
  if (children && React.Children.count(children) !== 0)
    return React.Children.only(children);
  return null;
}
