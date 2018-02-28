import React, { Component } from "react";

import ProfilePicture from "../ProfilePicture/ProfilePicture.jsx";

import "./Introduction.scss";

class Introduction extends React.Component {
  render() {
    const profile = this.props.profile;

    return <ProfilePicture profile={profile} />;
  }
}

export default Introduction;
