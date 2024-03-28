import React, { useState } from 'react';
import './TaskEditDialog.css';

const TaskEditDialog = ({ task, onSave, onClose }) => {
  const [updatedTask, setUpdatedTask] = useState({ ...task });

  const handleStatusChange = (e) => {
    setUpdatedTask({ ...updatedTask, status: e.target.value });
  };

  const handlePriorityChange = (e) => {
    setUpdatedTask({ ...updatedTask, priority: e.target.value });
  };

  const handleSave = () => {
    onSave(updatedTask);
  };

  return (
    <div className="edit-dialog-overlay">
      <div className="edit-dialog">
        <div className="edit-dialog-header">
          <h2>Edit Task</h2>
          <button className="close-btn" onClick={onClose}>X</button>
        </div>
        <div className="edit-dialog-body">
          <div className="input-field">
            <label htmlFor="title">Title:</label>
            <div className="non-editable">{task.title}</div>
          </div>
          <div className="input-field">
            <label htmlFor="description">Description:</label>
            <div className="non-editable">{task.description}</div>
          </div>
          <div className="input-field">
            <label htmlFor="team">Team Name:</label>
            <div className="non-editable">{task.team}</div>
          </div>
          <div className="input-field">
            <label htmlFor="assignee">Assignee:</label>
            <div className="non-editable">{task.assignee}</div>
          </div>
          <div className="input-field">
            <label htmlFor="priority">Priority:</label>
            <select id="priority" name="priority" value={updatedTask.priority} onChange={handlePriorityChange}>
              <option value="P0">P0</option>
              <option value="P1">P1</option>
              <option value="P2">P2</option>
            </select>
          </div>
          <div className="input-field">
            <label>Status:</label>
            <select value={updatedTask.status} onChange={handleStatusChange}>
              <option value="Pending">Pending</option>
              <option value="InProgress">InProgress</option>
              <option value="Completed">Completed</option>
              <option value="Deployed">Deployed</option>
              <option value="Deferred">Deferred</option>
            </select>
          </div>
        </div>
        <div className="edit-dialog-footer">
          <button onClick={handleSave}>Submit</button>
          <button onClick={onClose}>Reset</button>
        </div>
      </div>
    </div>
  );
};

export default TaskEditDialog;
