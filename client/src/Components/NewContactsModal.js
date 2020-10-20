import React, { useRef } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useContacts } from "../context/ContactsProvider";

function NewContactsModal({ closeModal }) {
  const idRef = useRef();
  const nameRef = useRef();
  const { createContact } = useContacts();
  const handleSubmit = (e) => {
    e.preventDefault();
    createContact(idRef.current.value, nameRef.current.value);
    closeModal();
  };
  return (
    <>
      <Modal.Header closeButton="true">Create Contact </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label>ID</Form.Label>
            <Form.Control type="text" ref={idRef} required="true" />
          </Form.Group>
          <Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" ref={idRef} required="true" />
          </Form.Group>
          <Button type="submit">Create</Button>
        </Form>
      </Modal.Body>
    </>
  );
}

export default NewContactsModal;
