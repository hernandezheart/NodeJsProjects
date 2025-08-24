import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Search } from 'lucide-react';
import { Players } from '../data/players';
import './Sidebar.css';

const Sidebar = ({ onPlayerSelect, selectedPlayer, isOpen, onToggle }) => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const filteredPlayers = Players.filter(player =>
    player.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    player.ign.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      {/* Sidebar Toggle Button */}
      {!isOpen && (
        <button
          onClick={onToggle}
          className="sidebar-toggle-button"
        >
          <Search className="sidebar-toggle-icon" />
        </button>
      )}

      {/* Sidebar */}
      <div className={`sidebar ${isOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
        <div className="sidebar-content">
          {/* Header with Close Button */}
          <div className="sidebar-header">
            <h2 className="sidebar-title">
              <Search className="sidebar-title-icon" />
              Profile Viewer
            </h2>
            <button
              onClick={onToggle}
              className="sidebar-close-button"
            >
              &times;
            </button>
          </div>
          
          {/* Search Bar */}
          <div className="search-bar-container">
            <Search className="search-icon" />
            <input
              type="text"
              placeholder="Search players..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
          </div>

          {/* Player List */}
          <div className="player-list">
            {filteredPlayers.length > 0 ? (
              filteredPlayers.map(player => (
                <div
                  key={player.id}
                  onClick={() => {
                    onPlayerSelect(player);
                    onToggle();
                  }}
                  className={`player-item ${selectedPlayer?.id === player.id ? 'player-item-selected' : ''}`}
                >
                  <div className="player-info-container">
                    <img
                      src={player.profilePic}
                      alt={player.name}
                      className="player-profile-pic"
                    />
                    <div className="player-details">
                      <p className="player-name">{player.name}</p>
                      <p className="player-ign-small">@{player.ign}</p>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="no-players-found">
                <p>No players found</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Backdrop */}
      {isOpen && (
        <div
          className="backdrop"
          onClick={onToggle}
        />
      )}
    </>
  );
};

// Validation
Sidebar.propTypes = {
  onPlayerSelect: PropTypes.func.isRequired,
  selectedPlayer: PropTypes.object,
  isOpen: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired,
};

export default Sidebar;