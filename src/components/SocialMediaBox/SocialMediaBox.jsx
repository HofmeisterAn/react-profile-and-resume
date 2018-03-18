import React, { Component } from "react";
import PropTypes from "prop-types";

import SocialMediaIcon from "./components/SocialMediaIcon/SocialMediaIcon";

import { isNull } from "../../services/api/Common/index";

import "./SocialMediaBox.scss";

const propTypes = {
  socials: PropTypes.array.isRequired
};

class SocialMediaBox extends React.Component {
  render() {
    if (isNull(this.props.socials)) {
      return null;
    } else {
      return (
        <div>
          {this.props.socials.map((social, index) => (
            <SocialMediaIcon key={index} url={social.url} prefix={social.prefix} iconName={social.iconName} />
          ))}
        </div>
      );
    }
  }
}

SocialMediaBox.propTypes = propTypes;

export default SocialMediaBox;
