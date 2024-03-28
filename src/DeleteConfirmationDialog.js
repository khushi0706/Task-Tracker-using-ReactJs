import React from 'react';
import './DeleteConfirmationDialog.css';

const DeleteConfirmationDialog = ({ task, confirmDelete, cancelDelete, onDeleteTask }) => {
  const handleConfirmDelete = () => {
  onDeleteTask(task.id);
  
  confirmDelete();
};


  const handleCancelDelete = () => {
    cancelDelete();
  };

  return (
    <div className="delete-confirmation-dialog">
      <p>Are you sure you want to delete the task "{task.title}"?</p>
      <button onClick={handleConfirmDelete}>Yes</button>
      <button onClick={handleCancelDelete}>No</button>
    </div>
  );
};

export default DeleteConfirmationDialog;
