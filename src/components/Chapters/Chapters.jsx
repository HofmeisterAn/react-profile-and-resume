import React, { Component } from "react";
import PropTypes from "prop-types";

import Chapter from "./components/Chapter/Chapter.jsx";

import "./Chapters.scss";

const propTypes = {
  chapters: PropTypes.array.isRequired
};

class Chapters extends React.Component {
  render() {
    return <div>{this.props.chapters.map((chapter, index) => <Chapter key={index} chapter={chapter} />)}</div>;
  }
}

Chapters.propTypes = propTypes;

export default Chapters;
