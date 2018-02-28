import React, { Component } from "react";

import WelcomeMessage from "../../components/WelcomeMessage/WelcomeMessage.jsx";
import Statements from "../../components/Statements/Statements.jsx";
import SocialMediaBox from "../../components/SocialMediaBox/SocialMediaBox.jsx";

import "./ProfilePicture.scss";

class ProfilePicture extends React.Component {
  render() {
    const profile = this.props.profile;

    return (
      <div styleName="profile-picture">
        <div styleName="profile-layout">
          <WelcomeMessage name={profile.name} />
          <Statements statements={profile.statements} />
          <SocialMediaBox socials={profile.socials} />
        </div>
      </div>
    );
  }
}

export default ProfilePicture;
