import React, { Component } from "react";
import PropTypes from "prop-types";

import { Container, Row, Col } from "reactstrap";

import Categories from "../Categories/Categories";
import Notes from "../Notes/Notes";
import Tags from "../Tags/Tags";

import { isNull, toShortDate, timeSince } from "../../../../services/api/Common/index";

import "./Section.scss";

const propTypes = {
  section: PropTypes.object.isRequired
};

class Section extends React.Component {
  render() {
    function Title({ title }) {
      if (isNull(title)) {
        return null;
      } else {
        return <h6 styleName="title">{title}</h6>;
      }
    }

    function Date({ from, to }) {
      if (isNull(from) && isNull(to)) {
        return null;
      } else {
        return (
          <div>
            <span styleName="date">
              {toShortDate(from)}&nbsp;-&nbsp;{toShortDate(to)}
            </span>
            <span styleName="time-since">{timeSince(from, to)}</span>
          </div>
        );
      }
    }

    function Text({ text }) {
      if (isNull(text)) {
        return null;
      } else {
        return <div styleName="content">{text}</div>;
      }
    }

    return (
      <Container fluid={true}>
        <Row>
          <Col>
            <Title title={this.props.section.title} />
          </Col>
          <Col>
            <Date from={this.props.section.from} to={this.props.section.to} />
          </Col>
        </Row>
        <Row>
          <Col>
            <Text text={this.props.section.text} />
          </Col>
        </Row>
        <Row>
          <Col>
            <Categories categories={this.props.section.categories} />
          </Col>
        </Row>
        <Row>
          <Col>
            <Notes notes={this.props.section.notes} />
          </Col>
        </Row>
        <Row>
          <Col>
            <Tags tags={this.props.section.tags} />
          </Col>
        </Row>
      </Container>
    );
  }
}

Section.propTypes = propTypes;

export default Section;
