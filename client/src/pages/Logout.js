import React from 'react';
import Auth from '../utils/auth';

const Logout = () => {

  
    const handleLogout = () => {
      Auth.logout();
      window.location.href = '/'; // Redirect the user to the homepage after logout
    };

  return (
    <div>
      <h2>Logout</h2>
      <p>Are you sure you want to log out?</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Logout;
