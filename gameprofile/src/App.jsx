import "./App.css";
import React, { useState } from "react";


import Topbar from "./components/Topbar.jsx";
import Sidebar from "./components/Sidebar.jsx";
import Content from "./components/Content.jsx";
import { Players } from "./data/players.js";

function App() {
  // Set the active user code
   const [activeUserCode, setActiveUserCode] = useState(Players[0].code);

  // Find the full user object for Sidebar
  const activeUser =
    Players.find(p => p.code === activeUserCode) || Players[0];

  // Search handler
  const handleSearch = (username) => {
    const found = Players.find(
      (p) => p.username.toLowerCase() === username.toLowerCase()
    );
    if (found) setActiveUserCode(found.code);
  };

  return (
    <div>
      <Topbar onSearch={handleSearch} avatarUrl={activeUser.avatarUrl} />
      <main className="layout">
        {/* Sidebar uses full user info */}
        <Sidebar
          avatarUrl={activeUser.avatarUrl}
          name={activeUser.name}
          username={activeUser.username}
          status={activeUser.status}
          bio={activeUser.bio} 
          friends={Players.filter(p => p.code !== activeUser.code)}
        />

        {/* Content uses only the code */}
        <Content user={activeUserCode} />
      </main>
    </div>
  );
}

export default App;
