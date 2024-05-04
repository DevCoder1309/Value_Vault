
import React from 'react';
import './Logout.css';

const Logout = () => {
  const handleLogout = () => {
    window.localStorage.clear();
    window.location.reload(); 
  };

  return (
      <button onClick={handleLogout}>Logout</button>
  );
};

export default Logout;
