import React from "react";
import PropTypes from "prop-types";

function Topbar({ onSearch, avatarUrl }) {
  return (
    <header className="topbar">
      <div className="brand">
        <div className="mark">🔥</div>
        <div className="brand-text">
          <span className="brand-top">EmmanPire</span>
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
        {/* Use avatarUrl from props */}
        <img
          src={avatarUrl || "https://placehold.co/36x36"}
          alt="avatar"
          className="avatar"
        />
      </div>
    </header>
  );
}

Topbar.propTypes = {
  onSearch: PropTypes.func.isRequired,
  avatarUrl: PropTypes.string, // new prop
};

export default Topbar;
