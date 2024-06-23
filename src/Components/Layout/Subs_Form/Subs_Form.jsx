import React from 'react';
import './Subs_Form.scss';
import { Button, Container, Row, Col } from 'react-bootstrap';

function Subs_Form() {
  return (
    <div className="subscriber_container">
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} md={8} lg={6} className="text-center">
            <div className="subscriber_title">
              <h2>Get Subscribe To Our Latest News & Update</h2>
            </div>
            <div className="subscriber_form">
              <input type="text" placeholder="Name" className="form-control" />
              <input type="email" placeholder="E-mail" className="form-control" />
              <Button className="submit_button">Submit Now</Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Subs_Form;
