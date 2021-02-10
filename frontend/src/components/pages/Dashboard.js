import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

function Dashboard({ removeToken }) {
  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col md="auto">
          <h3>Dashboard</h3>
        </Col>
      </Row>
      <Row className="justify-content-md-center">
        <Col md="auto">
          <Button variant="danger" onClick={removeToken}>
            Logout
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default Dashboard;
