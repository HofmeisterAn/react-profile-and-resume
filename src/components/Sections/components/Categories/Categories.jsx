import React, { Component } from "react";
import PropTypes from "prop-types";
import { Container, Row, Col } from "reactstrap";
import { isNull } from "../../../../services/api/Common/index.js";

import "./Categories.scss";

const propTypes = {
  categories: PropTypes.array.isRequired
};

class Categories extends React.Component {
  render() {
    function Category({ category }) {
      return (
        <div styleName="category">
          <h6>{category.label}</h6>
          <ul>{category.items.map((item, index) => <li key={index}>{item}</li>)}</ul>
        </div>
      );
    }

    if (isNull(this.props.categories)) {
      return null;
    } else {
      return (
        <Row styleName="categories">
          {this.props.categories.map((category, index) => (
            <Col key={index}>
              <Category category={category} />
            </Col>
          ))}
        </Row>
      );
    }
  }
}

Categories.propTypes = propTypes;

export default Categories;
