import React, { Component } from "react";

import Chapters from "../../components/Chapters/Chapters";

import LightSwitch from "../../components/LightSwitch/LightSwitch";

import "./Resume.scss";

class Resume extends React.Component {
  render() {
    const profile = this.props.profile;

    return (
      <div>
        <div styleName="action-bar">
          <LightSwitch />
        </div>
        <div styleName="inner">
          <Chapters chapters={profile.resume.chapters} />
        </div>
      </div>
    );
  }
}

export default Resume;
