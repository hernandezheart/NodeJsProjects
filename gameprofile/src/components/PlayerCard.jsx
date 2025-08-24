import React from 'react';
import PropTypes from 'prop-types';
import { Trophy, Star, Zap, Crown } from 'lucide-react';
import './PlayerCard.css';

const PlayerCard = ({ player }) => {
  const getMilestoneIcon = (type) => {
    switch (type) {
      case 'rank': return <Crown className="icon-gold" />;
      case 'badge': return <Star className="icon-purple" />;
      case 'wins': return <Trophy className="icon-green" />;
      case 'level': return <Zap className="icon-blue" />;
      default: return null;
    }
  };

  return (
    <div className="player-card-container">
      <div className={`player-card-inner ${player.cardClass}`}>
        <div className="player-card-content">
          {/* Header */}
          <div className="player-header">
            <div className="profile-pic-wrapper">
              <img
                src={player.profilePic}
                alt={player.name}
                className="profile-pic"
              />
              <div className="status-indicator"></div>
            </div>
            <div className="playercard-details">
              <h1 className="playercard-name">{player.name}</h1>
              <p className="playercard-ign">@{player.ign}</p>
            </div>
          </div>    

          {/* Content Grid */}
          <div className="content-grid">
            {/* Games Section */}
            <div className="games-section">
              <h3 className="section-title">
                <span className="game-icon" role="img" aria-label="game controller">🎮</span>
                Games Playing
                <span className="count">({player.games.length})</span>
              </h3>
              <div className="games-list">
                {player.games.map((game, index) => (
                  <div key={index} className="game-item">
                    <span className="game-emoji" role="img" aria-label={game.name}>{game.icon}</span>
                    <span className="game-name">{game.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Milestones Section */}
            <div className="milestones-section">
              <h3 className="section-title">
                <Trophy className="trophy-icon" />
                Milestones
                <span className="count">({player.milestones.length})</span>
              </h3>
              <div className="milestones-list">
                {player.milestones.map((milestone, index) => (
                  <div key={index} className="milestone-item">
                    <div className="milestone-left">
                      {getMilestoneIcon(milestone.type)}
                      <span className="milestone-game-name">{milestone.game}</span>
                    </div>
                    <span className="milestone-achievement">
                      {milestone.achievement}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

PlayerCard.propTypes = {
  player: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    ign: PropTypes.string.isRequired,
    profilePic: PropTypes.string.isRequired,
    games: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired,
    })).isRequired,
    milestones: PropTypes.arrayOf(PropTypes.shape({
      game: PropTypes.string.isRequired,
      achievement: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
    })).isRequired,
    cardClass: PropTypes.string.isRequired,
  }).isRequired,
};

export default PlayerCard;