import React from 'react';
import PropTypes from 'prop-types';
import './GamesCard.css';

const GamesCard = ({ games }) => {
  return (
    <div className="card games-card">
      <h3 className="section-title">
        🎮 Games Playing <span className="count">({games.length})</span>
      </h3>
      <div className="games-list">
        {games.map((game, index) => (
          <div key={index} className="game-item">
            <span className="game-emoji">{game.icon}</span>
            <span className="game-name">{game.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

GamesCard.propTypes = {
  games: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default GamesCard;
