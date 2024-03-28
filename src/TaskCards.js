import React, { useState } from 'react';
import './TaskCards.css';
import TaskEditDialog from './TaskEditDialog';
import DeleteConfirmationDialog from './DeleteConfirmationDialog';

const TaskCards = ({ tasks, setTasks, onDeleteTask, onUpdateTask }) => {
  const [selectedTask, setSelectedTask] = useState(null);
  const [showEditDialog, setShowEditDialog] = useState(false);
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);

  const handleEdit = (task) => {
    setSelectedTask(task);
    setShowEditDialog(true);
  };

  const handleDelete = (taskId) => {
    setSelectedTask(tasks.find(task => task.id === taskId));
    setShowDeleteConfirmation(true);
  };

  const confirmDelete = () => {
    onDeleteTask(selectedTask.id);
    const updatedTasks = tasks.filter(task => task.id !== selectedTask.id);
    setTasks(updatedTasks);
    setShowDeleteConfirmation(false);
    setSelectedTask(null);
  };

  const cancelDelete = () => {
    setShowDeleteConfirmation(false);
    setSelectedTask(null);
  };

  const handleSave = (updatedTask) => {
    setShowEditDialog(false);
    onUpdateTask(updatedTask);
  };

  const handleClose = () => {
    setShowEditDialog(false);
  };

  const handleToggleDropdown = (taskId) => {
    setSelectedTask(tasks.find(task => task.id === taskId));
    setShowDeleteConfirmation(false);
    setShowEditDialog(false);
  };

  return (
    <div className="task-cards">
      {['Pending', 'InProgress', 'Completed', 'Deployed', 'Deferred'].map(status => (
        <div key={status} className={`card ${status.toLowerCase()}`}>
          <div className={`upper-half-bg ${status.toLowerCase()}-bg`}></div>
          <h2>{status}</h2>
          <div className="task-details">
            <div className="task-details-inner">
              {tasks.filter(task => task.status === status).map(task => (
                <div key={task.id} className="task">
                  <h3>{task.title}</h3>
                  <div className="priority">{task.priority}</div>
                  <p>{task.description}</p>
                  <p>Assignee: {task.assignee}</p>
                  <p>Start Date: {task.startDate}</p>
                  <div className="task-actions">
                    <div className="dropdown">
                      <button className="dropdown-btn" onClick={() => handleToggleDropdown(task.id)}>
                        &#8942;
                      </button>
                      {(selectedTask && selectedTask.id === task.id) && (
                        <div className="dropdown-content">
                          <button onClick={() => handleEdit(task)}>Edit</button>
                          <button onClick={() => handleDelete(task.id)}>Delete</button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
      {showEditDialog && <TaskEditDialog task={selectedTask} onSave={handleSave} onClose={handleClose} />}
      {showDeleteConfirmation && (
        <div className="delete-confirmation-overlay">
          <DeleteConfirmationDialog task={selectedTask} confirmDelete={confirmDelete} cancelDelete={cancelDelete} onDeleteTask={onDeleteTask} />
        </div>
      )}
    </div>
  );
};

export default TaskCards;
