// NewTaskDialog.js
import React, { useState } from 'react';
import './NewTaskDialog.css';

const NewTaskDialog = ({ onAddTask, onClose }) => {
  const [taskData, setTaskData] = useState({
    title: '',
    description: '',
    priority: 'P0',
    assignee: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTaskData({ ...taskData, [name]: value });
  };

  const handleSubmit = () => {
    
    onAddTask(taskData);

    onClose();
  };

  return (
    <div className="new-task-dialog-overlay">
      <div className="new-task-dialog">
        <div className="new-task-dialog-header">
          <h2>Add New Task</h2>
          <button className="close-btn" onClick={onClose}>X</button>
        </div>
        <div className="new-task-dialog-body">
          <div className="input-field">
            <label htmlFor="title">Title:</label>
            <input type="text" id="title" name="title" value={taskData.title} onChange={handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="description">Description:</label>
            <input type="text" id="description" name="description" value={taskData.description} onChange={handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="team">Team:</label>
            <input type="text" id="team" name="team" value={taskData.team} onChange={handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="priority">Priority:</label>
            <select id="priority" name="priority" value={taskData.priority} onChange={handleChange}>
              <option value="P0">P0</option>
              <option value="P1">P1</option>
              <option value="P2">P2</option>
            </select>
          </div>
          <div className="input-field">
            <label htmlFor="assignee">Assignee:</label>
            <input type="text" id="assignee" name="assignee" value={taskData.assignee} onChange={handleChange} />
          </div>
        </div>
        <div className="new-task-dialog-footer">
          <button onClick={handleSubmit}>Add Task</button>
        </div>
      </div>
    </div>
  );
};

export default NewTaskDialog;
