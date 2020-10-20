import React, { useState } from "react";
import { Tab, Nav, Button } from "react-bootstrap";
import Conversations from "./Conversations";
import Contacts from "./Contacts";
function Sidebar({ id }) {
  const [activeKey, setActiveKey] = useState("conversations");
  const conversationsOpen = activeKey === "conversations";
  return (
    <div style={{ width: "250px" }} className="d-flex flex-column">
      <Tab.Container activeKey={activeKey} onSelect={setActiveKey}>
        <Nav variant="tabs" className="justify-content-center">
          <Nav.Item>
            <Nav.Link eventKey="conversations">Conversations</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="contacts">Contacts</Nav.Link>
          </Nav.Item>
          <Tab.Content className="border-right overflow-auto">
            <Tab.Pane eventKey="conversations">
              <Conversations />
            </Tab.Pane>
            <Tab.Pane eventKey="conversations">
              <Contacts />
            </Tab.Pane>
          </Tab.Content>
          <div className="p-2 border-top border-right small">
            {" "}
            Your Id: <span className="text-muted">{id}</span>
          </div>
          <Button>New {conversationsOpn ? "Conversation" : "Contacts"}</Button>
        </Nav>
      </Tab.Container>
    </div>
  );
}

export default Sidebar;
