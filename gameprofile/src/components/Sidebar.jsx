import React from "react";
import PropTypes from "prop-types";

function Sidebar({ avatarUrl, name, username, status }) {
  const links = [
    { label: "Dashboard", icon: "🏠", active: true },
    { label: "My Games", icon: "🎮" },
    { label: "Friends", icon: "👥" },
    { label: "Settings", icon: "⚙" },
  ];

  return (
    <aside className="sidebar">
      <div className="profile-card">
        <img
          src={avatarUrl}
          alt="profile"
          className="avatar xl floating-avatar"
        />
        <span className="profile-name">{name}</span>
        <span className="profile-sub">@{username}</span>

        <div className="toggle-row">
          <span className={`toggle-pill ${status === "Online" ? "active" : ""}`}>
            Online
          </span>
          <span className={`toggle-pill ${status === "Offline" ? "active" : ""}`}>
            Offline
          </span>
        </div>
      </div>

      <div className="side-nav">
        {links.map((link, index) => (
          <button
            key={index}
            className={`side-link ${link.active ? "active" : ""}`}
          >
            {link.icon} {link.label}
          </button>
        ))}
      </div>

      <button className="btn wide">+ Add Game</button>
    </aside>
  );
}

Sidebar.propTypes = {
  avatarUrl: PropTypes.string,
  name: PropTypes.string,
  username: PropTypes.string,
  status: PropTypes.oneOf(["Online", "Offline"]),
};

Sidebar.defaultProps = {
  avatarUrl: "https://placehold.co/90x90",
  name: "Player One",
  username: "gamer123",
  status: "Online",
};

export default Sidebar;
