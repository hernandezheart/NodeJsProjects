import React, { useState } from 'react';
import PlayerCard from './components/PlayerCard';
import Sidebar from './components/Sidebar';
import { Players } from './data/players';
import './App.css';

const GamingProfileViewer = () => {
  const [selectedPlayer, setSelectedPlayer] = useState(Players[0]);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="app-container">
      {/* Header */}
      <header className="app-header">
        <div className="header-content">
          <div className="team-info">
            {/* Logo Part if magkaroon*/}
            <div className="team-logo">🔥</div>
            <h1 className="team-name">
              <span className="team-accent">Emman</span>Pire
            </h1>
          </div>
          <div className="team-slogan">
            <p className="team-title">Professional Gaming Team</p>
            <p className="team-subtitle">Emman Empire 2025</p>
          </div>
        </div>
      </header>

      {/* Sidebar */}
      <Sidebar
        onPlayerSelect={setSelectedPlayer}
        selectedPlayer={selectedPlayer}
        isOpen={sidebarOpen}
        onToggle={toggleSidebar}
      />

      {/* Main Content Area */}
      <main className="main-content">
        <div className="card-display-area">
          {selectedPlayer ? (
            <div className="player-card-wrapper">
              <PlayerCard player={selectedPlayer} />
            </div>
          ) : (
            <div className="no-player-selected">
              <div className="no-player-icon">🎮</div>
              <p className="no-player-text">Select a player to view their profile</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default GamingProfileViewer;