import React, { useState } from 'react';
import './UserDetailsForm.css';

function UserDetailsForm() {
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Welcome, ${name}!`);
  };

  return (
    <form onSubmit={handleSubmit} className="user-details-form">
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default UserDetailsForm;
