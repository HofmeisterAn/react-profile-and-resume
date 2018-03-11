import React, { Component } from "react";
import PropTypes from "prop-types";

import WelcomeEmoji from "../WelcomeEmoji/WelcomeEmoji";

import { isNull } from "../../services/api/Common/index";

import "./WelcomeMessage.scss";

const propTypes = {
  name: PropTypes.string.isRequired
};

class WelcomeMessage extends React.Component {
  render() {
    if (isNull(this.props.name)) {
      return null;
    } else {
      return (
        <div>
          <h4 styleName="welcome-message">Hey, I'm {this.props.name}</h4>
        </div>
      );
    }
  }
}

WelcomeMessage.propTypes = propTypes;

export default WelcomeMessage;
