import React from 'react';
import { Row, Col } from 'react-bootstrap';
import "./Politics-post.scss";
import Politics_First_Post from './politics_headline/Politics_First_Post';
import Politics_option from './politics_option/Politics_option';


function Politicspost() {
  return (
    <Row className="politics-post-section">
      <div className="section-title-wrap">
        <div className="section-title">
          <h2 className="title">Politics</h2>
          <div className="section-title-line"></div>
        </div>
      </div>
      <Col md={8}>
       <Politics_First_Post/>
      </Col>
      <Col md={4}>
        <div className="politics-post-wrap-two">
        <Politics_option/>
        </div>
      </Col>
    </Row>
  );
}

export default Politicspost;
