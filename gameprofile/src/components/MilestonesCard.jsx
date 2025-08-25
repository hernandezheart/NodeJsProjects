import React from 'react';
import PropTypes from 'prop-types';
import { Trophy, Star, Zap, Crown } from 'lucide-react';
import './MilestonesCard.css';

const MilestonesCard = ({ milestones }) => {
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
    <div className="card milestones-card">
      <h3 className="section-title">
        <Trophy className="trophy-icon" /> Milestones 
        <span className="count">({milestones.length})</span>
      </h3>
      <div className="milestones-list">
        {milestones.map((milestone, index) => (
          <div key={index} className="milestone-item">
            <div className="milestone-left">
              {getMilestoneIcon(milestone.type)}
              <span className="milestone-game-name">{milestone.game}</span>
            </div>
            <span className="milestone-achievement">{milestone.achievement}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

MilestonesCard.propTypes = {
  milestones: PropTypes.arrayOf(
    PropTypes.shape({
      game: PropTypes.string.isRequired,
      achievement: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default MilestonesCard;
