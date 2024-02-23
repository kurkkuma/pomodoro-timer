import React from "react";

function Timer() {
  return (
    <div className="timer-info">
      <ul className="timer-navbar">
        <li className="active">Pomodoro</li>
        <li>Short Break</li>
        <li>Long Break</li>
      </ul>
      <div className="timer">
        <h1>25:00</h1>
      </div>
      <button className="start">START</button>
    </div>
  );
}

export default Timer;
