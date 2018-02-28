import React, { Component } from "react";
import PropTypes from "prop-types";

import { isNull } from "../../../../services/api/Common/index.js";

import "./Notes.scss";

const propTypes = {
  notes: PropTypes.array.isRequired
};

class Notes extends React.Component {
  render() {
    if (isNull(this.props.notes)) {
      return null;
    } else {
      return (
        <div styleName="notes">
          <ul>{this.props.notes.map((note, index) => <li key={index}>{note}</li>)}</ul>
        </div>
      );
    }
  }
}

Notes.propTypes = propTypes;

export default Notes;
