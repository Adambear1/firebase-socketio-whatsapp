import React, { useState } from "react";
import Login from "./Login";
import useLocalStorage from "../Hooks/useLocalStorage";
import Dashboard from "./Dashboard";

function App() {
  const [id, setId] = useLocalStorage(`id`);
  return <>{id ? <Dashboard id={id} /> : <Login onIdSubmit={setId} />}</>;
}

export default App;
