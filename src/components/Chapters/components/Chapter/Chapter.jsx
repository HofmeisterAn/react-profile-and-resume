import React, { Component } from "react";
import PropTypes from "prop-types";

import { Container, Row, Col } from "reactstrap";

import Sections from "../../../Sections/Sections";

import "./Chapter.scss";

const propTypes = {
  chapter: PropTypes.object.isRequired
};

class Chapter extends React.Component {
  render() {
    function Title({ title }) {
      return <h6 styleName="title">{title}</h6>;
    }

    return (
      <Container fluid={true}>
        <Row noGutters={true}>
          <Col xs={{ size: 3 }}>
            <Title title={this.props.chapter.title} />
          </Col>
          <Col xs={{ size: 9 }}>
            <Sections sections={this.props.chapter.sections} />
          </Col>
        </Row>
      </Container>
    );
  }
}

Chapter.propTypes = propTypes;

export default Chapter;
