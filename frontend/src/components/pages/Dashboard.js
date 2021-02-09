import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Dashboard() {
  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col md="auto">
          <h3>Dashboard</h3>
        </Col>
      </Row>
    </Container>
  );
}

export default Dashboard;
