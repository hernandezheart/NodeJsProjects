import React from "react";

function Topbar() {
  return (
    <header className="topbar">
      <div className="brand">
        <div className="mark">🎮</div>
        <div className="brand-text">
          <span className="brand-top">GameHub</span>
          <span className="brand-sub">Dashboard</span>
        </div>
      </div>

      <nav className="tabs">
        <button className="tab active">Home</button>
        <button className="tab">Games</button>
        <button className="tab">Friends</button>
        <button className="tab">Settings</button>
      </nav>

      <div className="actions">
        <div className="search">
          <input type="text" placeholder="Search games..." />
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

export default Topbar;
