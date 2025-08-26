import React, { useState } from "react";
import PropTypes from "prop-types";

function MyGames({ games, playerName }) {
  const [isExpanded, setIsExpanded] = useState(false);

  if (!games || games.length === 0) {
    return (
      <div className="section">
        <h3>{playerName}’s Games</h3>
        <p>No games found.</p>
      </div>
    );
  }

  return (
    <div className="section">
      <div className="section-head">
        <h3>{playerName}’s Games</h3>
        {/* Only show the button if there are more than 5 games */}
        {games.length > 5 && (
          <button className="btn small" onClick={() => setIsExpanded(!isExpanded)}>
            {isExpanded ? "View Less" : "View All"}
          </button>
        )}
      </div>

      {/* A new wrapper is added here to handle the horizontal scroll */}
      <div className={`game-list-wrapper ${isExpanded ? "expanded" : ""}`}>
        <div className="game-grid">
          {games.map((game, i) => (
            <div className="game-card" key={i}>
              <div
                className="game-cover"
                style={{ backgroundImage: `url(${game.cover || "https://placehold.co/300x200"})` }}
              >
                {typeof game.hours === "number" && game.hours > 300 && (
                  <span className="badge">Grinder 🔥</span>
                )}
              </div>

              <div className="game-meta">
                <div className="title-row">
                  <h4 className="game-title">{game.name}</h4>
                  {typeof game.hours === "number" && (
                    <span className="pill">{game.hours} hrs</span>
                  )}
                </div>
                <div className="sub-row">
                  <span className="np-sub">
                    {typeof game.hours === "number" && game.hours >= 100
                      ? "Veteran Player"
                      : "Casual Player"}
                  </span>
                  <button className="btn small">Play</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

MyGames.propTypes = {
  games: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      cover: PropTypes.string,
      hours: PropTypes.number,
    })
  ).isRequired,
  playerName: PropTypes.string.isRequired,
};

export default MyGames;