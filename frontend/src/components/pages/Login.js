import React, { useState } from "react";
import PropTypes from "prop-types";
import Axios from "axios";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

async function loginUser(credentials) {
  const options = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    data: JSON.stringify(credentials),
    url: "http://localhost:9000/login",
  };
  return await Axios(options);
}

function Login({ setToken }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  console.log("Email: " + email);
  console.log("Password: " + password);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let credentials = { email, password };
    console.log("Submit: " + credentials.email);
    let token = await loginUser(credentials);
    console.log("Token: " + JSON.stringify(token.data));
    setToken(token.data);
  };

  return (
    <Container onSubmit={handleSubmit}>
      <Row className="justify-content-md-center">
        <Form>
          <h3>Login</h3>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              // type="email"
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Row>
    </Container>
  );
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired,
};

export default Login;
