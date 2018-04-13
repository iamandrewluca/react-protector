import React from "react";
import createReactContext from "create-react-context";

const ProtectionContext = React.createContext
  ? React.createContext({})
  : createReactContext({});

export default ProtectionContext;
