import React from "react";

function NowPlaying() {
  return (
    <div className="section">
      <div className="section-head">
        <h3>Now Playing</h3>
      </div>
      <div className="now-playing">
        <div className="np-card">
          <img src="https://placehold.co/64x48" alt="np" />
          <div>
            <div className="np-title">Game X</div>
            <div className="np-sub">2 hrs played</div>
          </div>
        </div>
        <div className="np-card">
          <img src="https://placehold.co/64x48" alt="np" />
          <div>
            <div className="np-title">Game Y</div>
            <div className="np-sub">45 min played</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NowPlaying;
