// components/dashboard/EmployeeDashboard.js
import React from 'react';

const EmployeeDashboard = ({ loggedInUser }) => {
  return (
    <div>
      <h2>Employee Dashboard</h2>
      <p>Welcome, {loggedInUser.name}!</p>
    </div>
  );
};

export default EmployeeDashboard;
