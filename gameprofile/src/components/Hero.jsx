import React from "react";


function Hero() {
  return (
    <div className="hero">
      <div className="hero-left">
        <h2 className="hero-title">Welcome back, Player One!</h2>
        <span className="muted">Your gaming stats today</span>
        <span className="score">1280</span>
        <span className="subtle">XP this week</span>

        <div className="hero-actions">
          <button className="btn primary">Play Now</button>
          <button className="btn">View Profile</button>
        </div>

        <div className="mini-row">
          <span className="pill">🔥 Streak: 5 days</span>
          <span className="pill ghost rating">⭐ 4.8</span>
        </div>
      </div>

      <div className="hero-right">
        <div className="eight"></div>
        <img
          src="https://placehold.co/300x200"
          alt="character"
          className="character"
        />
      </div>
    </div>
  );
}

export default Hero;
