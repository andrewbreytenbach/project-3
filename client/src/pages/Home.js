import React from 'react';
import { Link, Route , Routes } from 'react-router-dom';


const Home = () => {
    return (

        
      <div>
        
        <h1>Home</h1>
        <Link to="/createlist">
          <button>Create List</button>
        </Link>
        <Link to="/updatelist">
          <button>Update List</button>
        </Link>
        <Link to="/deletelist">
          <button>Delete List</button>
        </Link>
        <Link to="/createentry">
          <button>Create Entry</button>
        </Link>
        <Link to="/updateentry">
          <button>Update Entry</button>
        </Link>
        <Link to="/deleteentry">
          <button>Delete Entry</button>
        </Link>
      </div>
    );
  };
  
  export default Home;