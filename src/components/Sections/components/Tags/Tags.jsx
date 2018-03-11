import React, { Component } from "react";
import PropTypes from "prop-types";

import { isNull } from "../../../../services/api/Common/index";

import "./Tags.scss";

const propTypes = {
  tags: PropTypes.array.isRequired
};

class Tags extends React.Component {
  render() {
    if (isNull(this.props.tags)) {
      return null;
    } else {
      return (
        <div styleName="tags">
          <ul>{this.props.tags.map((tag, index) => <li key={index}>{tag}</li>)}</ul>
        </div>
      );
    }
  }
}

Tags.propTypes = propTypes;

export default Tags;
