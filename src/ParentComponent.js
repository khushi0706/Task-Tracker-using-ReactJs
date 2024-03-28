import React, { useState } from 'react';
import TaskCards from './TaskCards';
import DeleteConfirmationDialog from './DeleteConfirmationDialog';

const ParentComponent = () => {
  const [tasks, setTasks] = useState([
    // Sample initial tasks data
    { id: 1, title: 'Task 1', status: 'Pending' },
    { id: 2, title: 'Task 2', status: 'InProgress' },
    { id: 3, title: 'Task 3', status: 'Completed' }
  ]);
  const [selectedTask, setSelectedTask] = useState(null);
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);

  const handleDeleteTask = () => {
    // Filter out the task with the selectedTask's id
    const updatedTasks = tasks.filter(task => task.id !== selectedTask.id);
    // Update the tasks state with the filtered tasks
    setTasks(updatedTasks);
    // Close the delete confirmation dialog
    setShowDeleteConfirmation(false);
  };

  const cancelDelete = () => {
    // Close the delete confirmation dialog without deleting the task
    setShowDeleteConfirmation(false);
  };

  const handleTaskDelete = (taskId) => {
    // Find the task with the taskId
    const taskToDelete = tasks.find(task => task.id === taskId);
    // Set the selectedTask state to the task to be deleted
    setSelectedTask(taskToDelete);
    // Show the delete confirmation dialog
    setShowDeleteConfirmation(true);
  };

  return (
    <div>
      <TaskCards tasks={tasks} onDeleteTask={handleTaskDelete} />
      {showDeleteConfirmation && (
        <DeleteConfirmationDialog
          task={selectedTask}
          confirmDelete={handleDeleteTask}
          cancelDelete={cancelDelete}
        />
      )}
    </div>
  );
};

export default ParentComponent;
