import React from "react";
import { ProtectionConsumer } from "./ProtectionContext";
import { dynamicRender } from "./dynamicRender";

const Public = props => {
  return (
    <ProtectionConsumer>
      {({ protection }) => (protection ? null : dynamicRender(props))}
    </ProtectionConsumer>
  );
};

export default Public;
