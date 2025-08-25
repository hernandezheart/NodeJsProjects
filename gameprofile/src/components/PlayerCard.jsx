import React from 'react';
import PropTypes from 'prop-types';
import './PlayerCard.css';

const PlayerCard = ({ player }) => {
  return (
    <div className="card player-card">
      <div className="player-header-centered">
        <div className="profile-pic-wrapper floating-avatar">
          <img
            src={player.profilePic}
            alt={player.name}
            className="profile-pic"
          />
          <div className="status-indicator"></div>
        </div>
        <h1 className="playercard-name">{player.name}</h1>
        <p className="playercard-ign">@{player.ign}</p>
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
    games: PropTypes.array.isRequired,
    milestones: PropTypes.array.isRequired,
    cardClass: PropTypes.string.isRequired,
  }).isRequired,
};

export default PlayerCard;
