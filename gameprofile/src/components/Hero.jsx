import React from "react";
import PropTypes from "prop-types";

function Hero({ playerName, score, streak, rating, heroImage }) {
  return (
    <div className="hero">
      <div className="hero-left">
        <h2 className="hero-title">Welcome back, {playerName}!</h2>
        <span className="muted">Your gaming stats today</span>
        <span className="score">{score}</span>
        <span className="subtle">XP this week</span>

        <div className="hero-actions">
          <button className="btn primary">Play Now</button>
          <button className="btn">View Profile</button>
        </div>

        <div className="mini-row">
          <span className="pill">
            🔥 Streak: {streak} {streak === 1 ? "day" : "days"}
          </span>
          <span className="pill ghost rating">⭐ {rating}</span>
        </div>
      </div>

      <div className="hero-right">
        <div className="eight"></div>
        <img
          src={heroImage}
          alt="character"
          className="character"
        />
      </div>
    </div>
  );
}

Hero.propTypes = {
  playerName: PropTypes.string,
  score: PropTypes.number,
  streak: PropTypes.number,
  rating: PropTypes.number,
  heroImage: PropTypes.string, // <-- added prop type
};

Hero.defaultProps = {
  playerName: "Player One",
  score: 1280,
  streak: 5,
  rating: 4.8,
  heroImage: "https://placehold.co/300x200", // <-- default image
};

export default Hero;
