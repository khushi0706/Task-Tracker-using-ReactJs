import React, { useState } from 'react';
import './App.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import TaskCards from './TaskCards';
import NewTaskDialog from './NewTaskDialog';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [tasks, setTasks] = useState([]);
  const [showNewTaskDialog, setShowNewTaskDialog] = useState(false);
  
  const handleChangeStart = (date) => {
    setStartDate(date);
  };

  const handleChangeEnd = (date) => {
    setEndDate(date);
  };
  const handleDelete = (taskId) => {
    // Implement the delete logic here
    const updatedTasks = tasks.filter(task => task.id !== taskId);
    setTasks(updatedTasks);
  };
  
  const handleAddTask = (newTaskData) => {
    const currentDate = new Date(); 
    const newTask = {
      id: uuidv4(),
      startDate: currentDate.toISOString().split('T')[0], 
      ...newTaskData,
      status: 'Pending',
    };
    
    setTasks([...tasks, newTask]);
  };

  const handleUpdateTask = (updatedTask) => {
    const updatedTasks = tasks.map(task => {
      if (task.id === updatedTask.id) {
        return updatedTask;
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  const toggleNewTaskDialog = () => {
    setShowNewTaskDialog(!showNewTaskDialog);
  };
  
  const handleSortBy = (sortBy) => {
  const assigneeName = document.getElementById('assigneeName').value.trim().toLowerCase();
  const priority = document.getElementById('priority').value;

  let sortedTasks = [...tasks];
  sortedTasks.sort((a, b) => {
    if (assigneeName) {
      if (a.assignee.toLowerCase() === assigneeName && b.assignee.toLowerCase() !== assigneeName) return -1;
      if (a.assignee.toLowerCase() !== assigneeName && b.assignee.toLowerCase() === assigneeName) return 1;
    }
    if (priority) {
      if (a.priority === priority && b.priority !== priority) return -1;
      if (a.priority !== priority && b.priority === priority) return 1;
    }
    return a.id.localeCompare(b.id);
  });

  setTasks(sortedTasks);
};
  
  
  return (
    <div className="container">
      <div className="header">
        <h1 className="taskboard">TASK BOARD</h1>
        <div className="profile">
          <img className="profile-logo" src="/images/logo.png" alt="Profile Logo" />
        </div>
      </div>
      <div className="sidebar">
        <div className="filter">
          <div className="filter-item">
            Filter by: 
          </div>
          <div className="filter-item">
            <input type="text" id="assigneeName" placeholder="Assignee name" />
          </div>
          <div className="filter-item">
            <select id ="priority">
              <option value="" disabled selected hidden>Priority</option>
              <option value="P0">P0</option>
              <option value="P1">P1</option>
              <option value="P2">P2</option>
            </select>
          </div>
          <div className="filter-item">
            <DatePicker
              selected={startDate}
              onChange={handleChangeStart}
              selectsStart
              startDate={startDate}
              endDate={endDate}
              placeholderText="Start Date"
              dateFormat="dd-MM-yy"
            />
          </div>
          <div className="filter-item">
            <DatePicker
              selected={endDate}
              onChange={handleChangeEnd}
              selectsEnd
              startDate={startDate}
              endDate={endDate}
              minDate={startDate}
              placeholderText="End Date"
              dateFormat="dd-MM-yy"
            />
          </div>
          <button className="add-task-btn" onClick={toggleNewTaskDialog}>Add New Task</button>
        </div>
        <div className="content">
        <div className="sort-by">
            Sort by:
            <select onChange={(e) => handleSortBy(e.target.value)}>
              <option value="" disabled selected hidden>Priority</option>
              <option value="Priority">Priority</option>
              <option value="StartDate">Start Date</option>
              <option value="EndDate">End Date</option>
            </select>
          </div>
          <div className="task-cards">
            <TaskCards tasks={tasks} setTasks={setTasks} onDeleteTask={handleDelete} onUpdateTask={handleUpdateTask} />

          </div>
        </div>
      </div>
      {showNewTaskDialog && (
        <NewTaskDialog onAddTask={handleAddTask} onClose={toggleNewTaskDialog} />
      )}
    </div>
  );
}

export default App;
