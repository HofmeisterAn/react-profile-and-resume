import React, { Component } from "react";
import PropTypes from "prop-types";

import Section from "./components/Section/Section.jsx";

import "./Sections.scss";

const propTypes = {
  sections: PropTypes.array.isRequired
};

class Sections extends React.Component {
  render() {
    return <div>{this.props.sections.map((section, index) => <Section key={index} section={section} />)}</div>;
  }
}

Sections.propTypes = propTypes;

export default Sections;
