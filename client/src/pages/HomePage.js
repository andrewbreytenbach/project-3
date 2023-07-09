// HomePage.js is a page that displays the homepage.
import React from 'react';
import { Link } from 'react-router-dom';


const HomePage = ({ userName }) => {
  return (
    <div>
      <h2>Welcome, {userName}!</h2>
      <h3>Your Music Diary</h3>
      <div>
        <h4>List Actions:</h4>
        <Link to="/CreateList">
          <button>Create List</button>
        </Link>
        <Link to="/UpdateList">
          <button>Update List</button>
        </Link>
        <Link to="/DeleteList">
          <button>Delete List</button>
        </Link>
      </div>
      <div>
        <h4>Entry Actions:</h4>
        <Link to="/CreateEntry">
          <button>Create Entry</button>
        </Link>
        <Link to="/UpdateEntry">
          <button>Update Entry</button>
        </Link>
        <Link to="/DeleteEntry">
          <button>Delete Entry</button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
