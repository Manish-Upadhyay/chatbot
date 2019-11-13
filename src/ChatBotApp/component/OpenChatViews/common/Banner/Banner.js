import React from "react";
import { Row, Col } from "antd";
import "./Banner.css";
const Banner = ({ childBoxDetails }) => {
  return (
    <Row
      style={
        (childBoxDetails.icon && childBoxDetails.icon.backgroundStyle) || {}
      }
      className="banner"
    >
      <Col sm={24} md={4}>
        <div className="logo">
          {(childBoxDetails.icon && childBoxDetails.icon.img) || ""}
        </div>
      </Col>
      <Col sm={24} md={20}>
        <Row>
          <Col>
            <h2 className="title">{childBoxDetails.title}</h2>
          </Col>
        </Row>
        <Row>
          <Col>
            <h3 className="discription">{childBoxDetails.about} </h3>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default Banner;
