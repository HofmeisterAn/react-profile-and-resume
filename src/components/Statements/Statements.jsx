import React, { Component } from "react";
import PropTypes from "prop-types";

import Statement from "./components/Statement/Statement.jsx";

import { isNull } from "../../services/api/Common/index.js";

import "./Statements.scss";

const propTypes = {
  statements: PropTypes.array.isRequired
};

class Statements extends React.Component {
  render() {
    if (isNull(this.props.statements)) {
      return null;
    } else {
      return <div styleName="statements">{this.props.statements.map((statement, index) => <Statement key={index} text={statement.text} />)}</div>;
    }
  }
}

Statements.propTypes = propTypes;

export default Statements;
