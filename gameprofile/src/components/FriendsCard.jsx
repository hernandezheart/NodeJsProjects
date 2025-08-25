import React from 'react';
import './FriendsCard.css';

const FriendsCard = ({ friends }) => {
  return (
    <div className="card friends-card">
      <h2>Friends</h2>
      <div className="friends-list">
        {friends.map((friend, index) => (
          <div key={index} className="friend-item">
            <span className="friend-name">{friend.name}</span>
            <span className="friend-level">Level {friend.level}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FriendsCard;
