import React from "react";

function Navbar() {
  return (
    <div className="navbar-container">
      <div className="music">
        <h3>Music</h3>
        <img src="images/music-icon.png" alt="music icon note" />
      </div>

      <h3 className="site-title">Pomodoro Timer</h3>

      <div className="settings">
        <h3>Settings</h3>
        <img src="images/settings-icon.png" alt="setting icon gear" />
      </div>
    </div>
  );
}

export default Navbar;
