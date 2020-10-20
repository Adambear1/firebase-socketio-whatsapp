import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useContacts } from "../context/ContactsProvider";
import { useConversations } from "../Context/ConversationsProvider";
function NewConversationModal({ closeModal }) {
  const [selectedContactIds, setSelectedContactIds] = useState();
  const { contacts } = useContacts();
  const { createConversations } = useConversations();
  const handleSubmit = (e) => {
    e.preventDefault();
    createConversations(useConversations);
    closeModal();
  };
  const handleCheckboxChange = (contactId) => {
    setSelectedContactIds((prevSelectedContactIds) => {
      if (prevSelectedContactIds.includes(contactId)) {
        return prevSelectedContactIds.filter((prevId) => {
          return contactId !== prevId;
        });
      } else {
        return [...prevSelectedContactIds, contactId];
      }
    });
  };
  return (
    <>
      <Modal.Header closeButton="true">Create Conversation </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          {Contacts.map(({ id, name }) => {
            <Form.Group controlId={id} key={id}>
              <Form.Check
                type="checkbox"
                value={selectedContactIds.includes(contact.id)}
                label={name}
                onChange={() => handleCheckboxChange(id)}
              />
            </Form.Group>;
          })}
          <Button type="submit">Create</Button>
        </Form>
      </Modal.Body>
    </>
  );
}

export default NewConversationModal;
