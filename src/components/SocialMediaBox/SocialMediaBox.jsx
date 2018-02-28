import React, { Component } from "react";
import PropTypes from "prop-types";

import SocialMediaIcon from "./components/SocialMediaIcon/SocialMediaIcon.jsx";

import { isNull } from "../../services/api/Common/index.js";

import "./SocialMediaBox.scss";

const propTypes = {
  socials: PropTypes.array.isRequired
};

class SocialMediaBox extends React.Component {
  render() {
    if (isNull(this.props.socials)) {
      return null;
    } else {
      return <div>{this.props.socials.map((social, index) => <SocialMediaIcon key={index} url={social.url} iconName={social.iconName} />)}</div>;
    }
  }
}

SocialMediaBox.propTypes = propTypes;

export default SocialMediaBox;
