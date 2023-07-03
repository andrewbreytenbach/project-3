import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul>
        {/* Navigation link for the homepage */}
        <li>
          <Link to="/">Homepage</Link>
        </li>
        {/* Navigation link for the favorites page */}
        <li>
          <Link to="/favorites">Favorites</Link>
        </li>
        {/* Navigation link for the login page */}
        <li>
          <Link to="/login">Login</Link>
        </li>
        {/* Navigation link for the signup page */}
        <li>
          <Link to="/signup">Signup</Link>
        </li>
        {/* Navigation link for the logout page */}
        <li>
          <Link to="/logout">Logout</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
