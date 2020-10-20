import React from "react";
import { ListGroup } from "react-bootstrap";
import { useContacts } from "../context/ContactsProvider";

function Contacts() {
  const { contacts } = useContacts();
  return (
    <ListGroup variant="flush">
      {contacts.map(({ id, name }) => {
        return <ListGroup.Item key={id}>{name}</ListGroup.Item>;
      })}
    </ListGroup>
  );
}

export default Contacts;
