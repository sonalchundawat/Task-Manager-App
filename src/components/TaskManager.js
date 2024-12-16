import React, { useState } from 'react';
import AddTaskForm from './AddTaskForm'; // ✅ Correct import
import TaskList from './TaskList';
import './TaskManager.css';

function TaskManager() {
  const [tasks, setTasks] = useState([]);

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  return (
    <div className="task-manager">
      <h2>Task Manager</h2>
      <AddTaskForm onAddTask={addTask} /> {/* ✅ Correct Component Usage */}
      <TaskList tasks={tasks} />
    </div>
  );
}

export default TaskManager;
