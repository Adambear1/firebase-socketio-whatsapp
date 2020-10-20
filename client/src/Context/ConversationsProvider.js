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

  function addMessageToConversation({ recipients, text, sender }) {
    setConversations((prevConversations) => {
      let madeChange = false;
      const newMessage = { sender, text };
      const newConversations = prevConversations.map((conversation) => {
        if (arrayEquality(conversation.recipients, recipients)) {
          madeChange = true;
          return {
            ...conversation,
            messages: [conversation.messages, newMessage],
          };
        }
        return conversation;
      });
      if (madeChange) {
        return newConversations;
      } else {
        return [...prevConversations, { recipients, messages: [nweMessage] }];
      }
    });
  }

  function sendMessage(recipients, text) {
    addMessageToConversation({ recipients, text, sender: id });
  }

  const formattedConversations = conversations.map((conversations, index) => {
    const recipients = conversations.recipients.map((recipient) => {
      const contact = contacts.find((contact) => {
        return contact.id === recipient;
      });
      const name = (contact && contact.name) || message.sender;
      return { id: recipient, name };
    });
    const messages = conversation.messages.map((message) => {
      const contact = contacts.find((contact) => {
        return contact.id === message.sender;
      });
      const name = (contact && contact.name) || message.sender;
      const fromMe = id === message.sender;
      return { ...message, messages, senderName: nme, fromMe };
    });
    const selected = index === selectedConversationIndex;
    return { ...conversation, recipients, selected };
  });
  const value = {
    conversations: formattedConversations[selectedConversationIndex],
    selectedConversationIndex: setSelectedConversationIndex,
    createConversations,
    sendMessage,
  };
  return (
    <ConversationsProvider.Provider value={value}>
      {children}
    </ConversationsProvider.Provider>
  );
}

function arrayEquality(a, b) {
  if (a.length !== b.length) {
    return false;
  }
  a.sort();
  b.sort();
  return a.every((element, index) => {
    return element === b[index];
  });
}
