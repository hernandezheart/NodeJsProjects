import React from "react";
import PropTypes from "prop-types";

function Sidebar({ avatarUrl, name, username, status, bio, friends }) {
  const links = [
    { label: "Dashboard", icon: "🏠", active: true }
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
        {/* Bio below status */}
        {bio && <p className="profile-bio">{bio}</p>}
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

        {/* Friends list below dashboard */}
        {friends && friends.length > 0 && (
          <div className="friends-list">
            <h4>Friends</h4>
            {friends.map((friend, idx) => (
              <div key={idx} className="friend-item">
                <img
                  src={friend.avatarUrl || "https://placehold.co/36x36"}
                  alt={friend.name}
                  className="avatar sm"
                />
                <span>{friend.name}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </aside>
  );
}

Sidebar.propTypes = {
  avatarUrl: PropTypes.string,
  name: PropTypes.string,
  username: PropTypes.string,
  status: PropTypes.oneOf(["Online", "Offline"]),
  bio: PropTypes.string,
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      avatarUrl: PropTypes.string,
    })
  ),
};

Sidebar.defaultProps = {
  avatarUrl: "https://placehold.co/90x90",
  name: "Player One",
  username: "gamer123",
  status: "Online",
  bio: "",
  friends: [],
};

export default Sidebar;
