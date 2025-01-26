// Header.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import logo from '../assets/logo.png'

const Header = () => (
  <header>
    <Container fluid>
      <Row className="d-flex align-items-center"> 
        <Col  xs={12} sm={8} lg={8}>
          <h1>e-Commerce GAPSI</h1>
        </Col >
        <Col xs={12} sm={4} lg={4} className="text-center text-sm-right">
          <img src={logo} alt="Header" style={{ maxHeight: '60px' }} />
        </Col>
      </Row>
    </Container>
  </header>
);

export default Header;
