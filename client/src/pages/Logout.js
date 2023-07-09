import React from 'react';
import { useHistory, Redirect } from 'react-router-dom';
import Auth from '../utils/auth';

const Logout = () => {
  const history = useHistory();

  const handleLogout = async () => {
    // Call the logout method from the Auth utility
    Auth.logout();

    // Redirect the user to the login page
    history.replace('/login');
  };

  // Check if the user is already logged out
  if (!Auth.loggedIn()) {
    return <Redirect to="/login" />;
  }

  return (
    <div>
      <h2>Logout</h2>
      <p>Are you sure you want to log out?</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Logout;
