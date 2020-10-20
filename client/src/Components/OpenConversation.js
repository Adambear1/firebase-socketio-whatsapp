import React, { useState } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";
import {
  useConversations,
  selectedConversation,
} from "../Context/ConversationsProvider";
function OpenConversation() {
  const [text, setText] = useState("");
  const { sendMessage } = useConversations();
  const handleSubmit = (e) => {
    e.preventDefault();
    sendMessage(
      selectedConversation.recipients.map(({ id }) => {
        id;
      }),
      text
    );
  };
  return (
    <div className="d-flex flex-column flex-grow-1">
      <div className="flex-grow-1 overflow-auto"></div>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="m-2">
          <InputGroup>
            <Form.Control
              as="textarea"
              required="true"
              value={text}
              onChange={(e) => setText(e.target.value)}
              style={{ height: "75px", resize: "none" }}
            >
              <InputGroup.Append>
                <Button type="submit"></Button>
              </InputGroup.Append>
            </Form.Control>
          </InputGroup>
        </Form.Group>
      </Form>
    </div>
  );
}

export default OpenConversation;
