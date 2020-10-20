import React, { useContext, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import { useContacts } from "./ContactsProvider";

const ConversationsProvider = React.createContext();

export function useConversations() {
  return useContext(ConversationsProvider);
}

export function ConversationsProvider({ children }) {
  const [conversations, setConversations] = useLocalStorage(
    "conversations",
    []
  );
  const [selectedConversationIndex, setSelectedConversationIndex] = useState(0);
  const { contacts } = useContacts();

  const createConversations = (recipients) => {
    setConversations((prevConversations) => {
      return [...prevConversations, { recipients, messages: [] }];
    });
  };

  const formattedConversations = conversations.map((conversations, index) => {
    const recipients = conversations.recipients.map((recipient) => {
      const contact = contacts.find((contact) => {
        return contact.id === recipient;
      });
      const name = (contact && contact.name) || recipient;
      return { id: recipient, name };
    });
    const selected = index === selectedConversationIndex;
    return { ...conversation, recipients, selected };
  });
  const value = {
    conversations: formattedConversations[selectedConversationIndex],
    selectedConversationIndex: setSelectedConversationIndex,
    createConversations,
  };
  return (
    <ConversationsProvider.Provider value={value}>
      {children}
    </ConversationsProvider.Provider>
  );
}
