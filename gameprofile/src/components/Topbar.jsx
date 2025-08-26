import React from "react";
import PropTypes from "prop-types";

function Topbar({ onSearch }) {
  return (
    <header className="topbar">
      <div className="brand">
        <div className="mark">🎮</div>
        <div className="brand-text">
          <span className="brand-top">GameHub</span>
          <span className="brand-sub">Dashboard</span>
        </div>
      </div>

      <nav className="tabs"></nav>

      <div className="actions">
        <div className="search">
          <input
            type="text"
            placeholder="Type an account..."
            onChange={(e) => onSearch(e.target.value)}
          />
        </div>
        <button className="icon-btn">🔔</button>
        <img
          src="https://placehold.co/36x36"
          alt="avatar"
          className="avatar"
        />
      </div>
    </header>
  );
}

Topbar.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default Topbar;
