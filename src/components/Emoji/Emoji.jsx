import React, { Component } from "react";
import PropTypes from "prop-types";

import "./Emoji.scss";

const propTypes = {
  id: PropTypes.string.isRequired,
  unicode: PropTypes.string.isRequired
};

class Emoji extends React.Component {
  render() {
    return <span id={this.props.id}>{this.props.unicode}</span>;
  }
}

Emoji.propTypes = propTypes;

export default Emoji;
