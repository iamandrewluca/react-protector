import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { ProtectionProvider } from "react-protector";

export default withRouter(connect()(ProtectionProvider));
