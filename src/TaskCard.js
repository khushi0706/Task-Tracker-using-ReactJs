// TaskCard.js
import React from 'react';
import './TaskCard.css'; // Import the CSS for TaskCard

function TaskCard({ status }) {
  return (
    <div className={`card ${status.toLowerCase()}`}>
      <div className={`upper-half-bg ${status.toLowerCase()}-bg`}></div>
      <h2>{status}</h2>
      <div className="task-details">
        {/* Task details */}
      </div>
    </div>
  );
}

export default TaskCard;
