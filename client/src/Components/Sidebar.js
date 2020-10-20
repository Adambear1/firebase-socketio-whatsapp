import React, { useState } from "react";
import { Tab, Nav, Button, Modal } from "react-bootstrap";
import Conversations from "./Conversations";
import Contacts from "./Contacts";
import NewConversationModal from "./NewConversationModal";
import NewContactsModal from "./NewContactsModal";
function Sidebar({ id }) {
  const [activeKey, setActiveKey] = useState("conversations");
  const [modalOpen, setModalOpen] = useState(false);
  const [modalClose, setModalClose] = useState(true);
  const conversationsOpen = activeKey === "conversations";
  const closeModal = () => {
    setModalOpen(false);
  };
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
          <Button
            className="rounded-0"
            onClick={() => {
              setModalOpen(true);
            }}
          >
            New {conversationsOpen ? "Conversation" : "Contacts"}
          </Button>
        </Nav>
      </Tab.Container>
      <Modal show={modalOpen} onHide={closeModal}>
        {conversationsOpen ? (
          <NewConversationModal closeModal={closeModal} />
        ) : (
          <NewContactsModal closeModal={closeModal} />
        )}
      </Modal>
    </div>
  );
}

export default Sidebar;
