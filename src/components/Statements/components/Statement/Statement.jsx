import React, { Component } from "react";
import PropTypes from "prop-types";

import "./Statement.scss";

const propTypes = {
  text: PropTypes.string.isRequired
};

class Statement extends React.Component {
  render() {
    return <div styleName="statement-message">{this.props.text}</div>;
  }
}

Statement.propTypes = propTypes;

export default Statement;
