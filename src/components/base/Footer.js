import React from "react";

import { Link } from 'react-router-dom'
import { Container, Row, Col } from "reactstrap";

const Footer = () => {
  return (
    <Container fluid className="bg-light border-top border-info mt-5">
      <Container
        className="mt-5 mb-3"      
      >
        <Row style={{color:"black"}}className="font-small indigo " >
          <Col sm="12" md="3" className="mb-3">
            <h6  className="text-uppercase font-weight-bold text-center">
              <Link to="/citylist">Housing</Link>
            </h6>
          </Col>
          <Col sm="12" md="3" className="mb-3">
            <h6 className="text-uppercase font-weight-bold text-center">
              <Link to="/about">About us</Link>
            </h6>
          </Col>
          
          <Col sm="12" md="3" className="mb-3">
            <h6 className="text-uppercase font-weight-bold text-center text-info">
              <Link to="/contact">contact</Link>
            </h6>
          </Col>
          <Col sm="12" md="3" className="mb-3">
            <h6 className="text-uppercase font-weight-bold text-center text-info">
              <Link to="/register">sign up</Link>
            </h6>
          </Col>
        </Row>
        <hr className="rgba-white-light" />
        <Row>
          <Col
            md="12"
            className="my-3 d-flex text-center justify-content-center mb-md-0 mb-4"
          >
             
          </Col>
        </Row>
        <hr
          className="clearfix d-md-none rgba-white-light"
          style={{ margin: "10% 15% 5%" }}
        />
      </Container>
      <Row className="text-center">
          <Col md="12">©Copyright 2021 | Group 5 TH Lund</Col>
      </Row>
    </Container>
  );
};

export default Footer;
