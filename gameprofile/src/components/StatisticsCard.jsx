import React from 'react';
import './StatisticsCard.css';

const StatisticsCard = ({ stats }) => {
  return (
    <div className="statistics-card">
      <h2 className="statistics-title">Statistics</h2>
      <div className="statistics-list">
        <div className="stat-item">
          <span className="stat-name">Hours Played</span>
          <span className="stat-value">{stats.hoursPlayed}</span>
        </div>
        <div className="stat-item">
          <span className="stat-name">Total Milestones</span>
          <span className="stat-value">{stats.totalMilestones}</span>
        </div>
        <div className="stat-item">
          <span className="stat-name">Total Games Played</span>
          <span className="stat-value">{stats.totalGames}</span>
        </div>
        <div className="stat-item">
          <span className="stat-name">Friends Count</span>
          <span className="stat-value">{stats.friendsCount}</span>
        </div>
      </div>
    </div>
  );
};

export default StatisticsCard;
