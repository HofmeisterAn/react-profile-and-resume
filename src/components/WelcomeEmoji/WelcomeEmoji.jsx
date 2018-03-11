import React, { Component } from "react";
import PropTypes from "prop-types";

import Emoji from "../Emoji/Emoji";

import "./WelcomeEmoji.scss";

const propTypes = {};

const defaultProps = {
  unicode: "\uD83D\uDC4B" // waving hand emoji
};

class WelcomeEmoji extends React.Component {
  constructor(props) {
    super(props);
    this.state = { active: false };
    this.active = this.active.bind(this);
  }

  componentDidMount() {
    setTimeout(() => this.active(), 1000);
  }

  componentWillUnmount() {}

  active() {
    if (this.state.active) {
      return;
    } else {
      this.setState({ active: true }, function() {
        setTimeout(() => this.setState({ active: false }), 2000);
      });
    }
  }
  render() {
    return (
      <span onMouseEnter={this.active} styleName={this.state.active ? "emoji animated wave" : "emoji animated"}>
        <Emoji id={"welcome-emoji"} unicode={this.props.unicode} />
      </span>
    );
  }
}

WelcomeEmoji.propTypes = propTypes;
WelcomeEmoji.defaultProps = defaultProps;

export default WelcomeEmoji;
