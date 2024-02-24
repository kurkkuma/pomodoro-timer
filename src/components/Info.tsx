import React from "react";
import Timer from "./Timer";
import TasksInfo from "./TasksInfo";

function Info() {
  return (
    <div className="info-container">
      <Timer />
      <TasksInfo />
    </div>
  );
}

export default Info;
