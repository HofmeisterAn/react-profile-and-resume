import React, { Component } from "react";

import { Container, Row, Col } from "reactstrap";

import FontAwesome from "@fortawesome/fontawesome";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import FontAwesomeBrands from "@fortawesome/fontawesome-free-brands";

import Introduction from "../scenes/Introduction/Introduction";
import Resume from "../scenes/Resume/Resume";

import "./App.scss";

import { profile } from "../store";

FontAwesome.library.add(FontAwesomeBrands);

class App extends React.Component {
  render() {
    return (
      <div>
        <div styleName="column1">
          <Introduction profile={profile} />
        </div>
        <div styleName="column2">
          <Resume profile={profile} />
        </div>
      </div>
    );
  }
}

export default App;
