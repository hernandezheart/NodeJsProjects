
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

  // Show only first 5 games unless expanded
  const visibleGames = isExpanded ? games : games.slice(0, 5);

  return (
    <div className="section">
      <div className="section-head">
        <h3>{playerName}’s Games</h3>
        {games.length > 5 && (
          <button
            className="btn small"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {isExpanded ? "View Less" : "View All"}
          </button>
        )}
      </div>

      <div className="game-list-wrapper">
        <div className="game-grid-horizontal">
          {visibleGames.map((game, i) => (
            <div className="game-card" key={i}>
              <div
                className="game-cover"
                style={{
                  backgroundImage: `url(${game.cover || "https://placehold.co/300x200"})`,
                }}
              >
                {game.hours > 300 && <span className="badge">Grinder 🔥</span>}
              </div>

              <div className="game-meta">
                <div className="title-row">
                  <h4 className="game-title">{game.name}</h4>
                  {game.hours && <span className="pill">{game.hours} hrs</span>}
                </div>
                <div className="sub-row">
                  <span className="np-sub">
                    {game.hours >= 100 ? "Veteran Player" : "Casual Player"}
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
