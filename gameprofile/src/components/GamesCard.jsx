import React from "react";
import PropTypes from "prop-types";
import "./GamesCard.css";

const GamesCard = ({ games }) => {
  return (
    <div className="card games-card">
      <h2 className="card-title">
        🎮 Games Played <span className="count">({games.length})</span>
      </h2>

      <div className="games-list">
        {games.map((game, index) => (
          <div key={index} className="game-item">
            {game.cover ? (
              <img
                src={
                  game.cover.startsWith("http")
                    ? game.cover
                    : process.env.PUBLIC_URL + "/images/" + game.cover
                }
                alt={game.name}
                className="game-cover"
              />
            ) : (
              <span className="game-emoji">{game.icon}</span>
            )}
            <div className="game-info">
              <span className="game-name">{game.name}</span>
              {game.hours !== undefined && (
                <span className="game-activity">
                  {game.hours} hour{game.hours !== 1 ? "s" : ""} played recently
                </span>
              )}
            </div>
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
      icon: PropTypes.string,
      cover: PropTypes.string,
      hours: PropTypes.number,
    })
  ).isRequired,
};

export default GamesCard;
