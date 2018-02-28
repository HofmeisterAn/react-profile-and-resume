import React, { Component } from "react";

import Chapters from "../../components/Chapters/Chapters.jsx";

import "./Resume.scss";

class Resume extends React.Component {
  render() {
    const profile = this.props.profile;

    return (
      <div styleName="inner">
        <Chapters chapters={profile.resume.chapters} />
      </div>
    );
  }
}

export default Resume;
