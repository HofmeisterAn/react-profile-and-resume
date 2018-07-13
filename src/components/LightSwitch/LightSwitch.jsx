import React, { Component } from "react";
import PropTypes from "prop-types";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./LightSwitch.scss";

const propTypes = {};

const defaultProps = {
  className: "moon"
};

class LightSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isDaylight: true };
    this.toggle = this.toggle.bind(this);
  }

  componentDidMount() {
    let hour = new Date().getHours();
    let isDaylight = hour >= 7 && hour <= 19;

    if (isDaylight != this.state.isDaylight) {
      //this.toggle();
    }
  }

  componentWillUnmount() {}

  toggle() {
    let isDaylight = !this.state.isDaylight;

    if (isDaylight) {
      document.body.classList.remove(this.props.className);
    } else {
      document.body.classList.add(this.props.className);
    }

    this.setState({ isDaylight: isDaylight });
  }

  render() {
    return (
      <span styleName="light-switch" onClick={this.toggle}>
        <FontAwesomeIcon icon={[this.state.isDaylight ? "fas" : "far", "lightbulb"]} />
      </span>
    );
  }
}

LightSwitch.propTypes = propTypes;
LightSwitch.defaultProps = defaultProps;

export default LightSwitch;
