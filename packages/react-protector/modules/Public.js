import React from "react";
import { ProtectionConsumer } from "./ProtectionContext";

const Public = ({ children }) => {
  return (
    <ProtectionConsumer>
      {({ protection }) => (protection ? null : children)}
    </ProtectionConsumer>
  );
};

export default Public;
