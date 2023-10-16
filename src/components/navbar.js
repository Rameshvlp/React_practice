import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/place">Places</Link>
        </li>
        <li>
          <Link to="/details">Details</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
