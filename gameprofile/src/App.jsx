import "./App.css";
import React from "react";

import Topbar from "./components/Topbar.jsx";
import Sidebar from "./components/Sidebar.jsx";
import Content from "./components/Content.jsx";
import { Players } from "./data/players.js";

function App() {
  // Set the active user code
  const ACTIVE_USER_CODE = "bestfriend"; // "bestfriend", "classmate1", etc.

  // Find the full user object for Sidebar
  const activeUser =
    Players.find(p => p.code === ACTIVE_USER_CODE) || Players[0];

  return (
    <div>
      <Topbar />
      <main className="layout">
        {/* Sidebar uses full user info */}
        <Sidebar
          avatarUrl={activeUser.avatarUrl}
          name={activeUser.name}
          username={activeUser.username}
          status={activeUser.status}
        />

        {/* Content uses only the code */}
        <Content user={ACTIVE_USER_CODE} />
      </main>
    </div>
  );
}

export default App;
