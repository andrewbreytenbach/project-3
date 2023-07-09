// Navbar.js is a component that displays a navigation bar with links to the homepage, favorites page, login page, signup page, and logout page.
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
          <Link to="/about">About</Link>
        </li>
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
