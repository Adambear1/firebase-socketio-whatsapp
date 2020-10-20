import React from "react";
import { ListGroup } from "react-bootstrap";
import { useConversations } from "../Context/ConversationsProvider";

function Conversations() {
  const { conversations, selectedConversationIndex } = useConversations();
  return (
    <ListGroup variant="flush">
      {conversations.map(({ index, recipients }) => (
        <ListGroup.Item
          key={index}
          action="true"
          active={conversations.selected}
          onClick={() => selectedConversationIndex(index)}
        >
          {recipients.name.map(({ name }) => {
            name.join(", ");
          })}
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}

export default Conversations;
