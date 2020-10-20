import React, { useState } from "react";
import Login from "./Login";
import useLocalStorage from "../Hooks/useLocalStorage";
import Dashboard from "./Dashboard";
import { ContactsProvider } from "../context/ContactsProvider";
import { ConversationsProvider } from "../Context/ConversationsProvider";

function App() {
  const [id, setId] = useLocalStorage(`id`);
  const dashboard = (
    <ContactsProvider>
      <ConversationsProvider>
        <Dashboard id={id} />
      </ConversationsProvider>
    </ContactsProvider>
  );
  return (
    <ContactsProvider>
      {id ? <Dashboard id={id} /> : <Login onIdSubmit={setId} />}
    </ContactsProvider>
  );
}

export default App;
