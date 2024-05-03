
import React from 'react';
import './Logout.css';

const Logout = () => {
  const handleLogout = () => {
    window.localStorage.clear();
    window.location.reload(); 
  };

  return (
    <div className="logout-container">
      <button onClick={handleLogout} id='logout-button'>Logout</button>
    </div>
  );
};

export default Logout;
