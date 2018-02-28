import React, { Component } from "react";
import PropTypes from "prop-types";

import FontAwesomeIcon from "@fortawesome/react-fontawesome";

import "./SocialMediaIcon.scss";

const propTypes = {
  url: PropTypes.string.isRequired,
  iconName: PropTypes.string.isRequired
};

class SocialMediaIcon extends React.Component {
  render() {
    return (
      <a styleName="social-media-icon" href={this.props.url}>
        <FontAwesomeIcon icon={["fab", this.props.iconName]} />
      </a>
    );
  }
}

SocialMediaIcon.propTypes = propTypes;

export default SocialMediaIcon;
