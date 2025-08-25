import React, { useState } from 'react';
import PlayerCard from './components/PlayerCard';
import GamesCard from './components/GamesCard';
import MilestonesCard from './components/MilestonesCard';
import FriendsCard from './components/FriendsCard';
import StatisticsCard from './components/StatisticsCard';
import Sidebar from './components/Sidebar';
import { Players } from './data/players';
import './App.css';

const statsData = {
  hoursPlayed: 120,
  totalMilestones: 35,
  totalGames: 12,
  friendsCount: 4
};

const GamingProfileViewer = () => {
  const [selectedPlayer, setSelectedPlayer] = useState(Players[0]);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  // Example friends data
  const friendsData = [
    { name: 'Alice', level: 12 },
    { name: 'Bob', level: 8 },
    { name: 'Charlie', level: 15 },
    { name: 'Diana', level: 10 },
  ];

  return (
    <div className="app-container">
      {/* Header */}
      <header className="app-header">
        <div className="header-content">
          <div className="team-info">
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
  {selectedPlayer ? (
    <>
      {/* Top 3 cards */}
      <div className="cards-grid">
        <PlayerCard player={selectedPlayer} />
        <GamesCard games={selectedPlayer.games} />
        <MilestonesCard milestones={selectedPlayer.milestones} />
      </div>

      {/* Friends card below, matching PlayerCard width */}
      <div className="cards-grid">
        <FriendsCard friends={friendsData} />
        <StatisticsCard stats={statsData} />
      </div>
    </>
  ) : (
    <div className="no-player-selected">
      <div className="no-player-icon">🎮</div>
      <p className="no-player-text">Select a player to view their profile</p>
    </div>
  )}
</main>

    </div>
  );
};

export default GamingProfileViewer;
