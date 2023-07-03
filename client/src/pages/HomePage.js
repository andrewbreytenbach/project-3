import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = ({ userName }) => {
  return (
    <div>
      <h2>Welcome, {userName}!</h2>
      <h3>Your Music Diary</h3>
      <div>
        <h4>List Actions:</h4>
        <Link to="/create-list">
          <button>Create List</button>
        </Link>
        <Link to="/update-list">
          <button>Update List</button>
        </Link>
        <Link to="/delete-list">
          <button>Delete List</button>
        </Link>
      </div>
      <div>
        <h4>Entry Actions:</h4>
        <Link to="/create-entry">
          <button>Create Entry</button>
        </Link>
        <Link to="/update-entry">
          <button>Update Entry</button>
        </Link>
        <Link to="/delete-entry">
          <button>Delete Entry</button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
