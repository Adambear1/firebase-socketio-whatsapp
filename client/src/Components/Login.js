import React, { useRef } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { v4 as uuidV4 } from "uuid";

function Login({ onIdSubmit }) {
  const idRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    onIdSubmit(idRef.current.value);
  };
  const createNewId = (e) => {
    onIdSubmit(uuidV4);
  };
  return (
    <Container class="align-items-center d-flex" style={{ height: "100vh" }}>
      <Form className="w-100" onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Enter Your ID</Form.Label>
          <Form.Control type="text" ref={idRef} required="true"></Form.Control>
        </Form.Group>
        <Button type="submit" className="mr-2">
          Login
        </Button>
        <Button variant="secondary" onClick={createNewId}>
          Create New ID
        </Button>
      </Form>
    </Container>
  );
}

export default Login;
