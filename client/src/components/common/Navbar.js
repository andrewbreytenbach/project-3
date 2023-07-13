import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={{margin:"10px"}}>
      <ul>
        <li>
          <Link to="/" style={{color: "white"}}>Home</Link>
        </li>
        <li>
          <Link to="/signup" style={{color: "white"}}>Signup</Link>
        </li>
        <li>
          <Link to="/login" style={{color: "white"}}>Login</Link>
        </li>
        <li>
          <Link to="/favorites" style={{color: "white"}}>Faves</Link>
        </li>
        <li>
          <Link to="/createentry" style={{color: "white"}}>Add New</Link>
        </li>
        <li>
          <Link to="/logout" style={{color: "white"}}>Logout</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
