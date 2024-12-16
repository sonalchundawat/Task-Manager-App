import React from 'react';
import './App.css';
import TaskManager from './components/TaskManager';
import UserDetailsForm from './components/UserDetailsForm';

function App() {
  return (
    <div className="App">
      <h1>Task Manager App</h1>
      <UserDetailsForm />
      <TaskManager />
    </div>
  );
}

export default App;
