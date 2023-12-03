import React from 'react';
import './navigation.css';
import { Link } from 'react-router-dom';

// const handlePlace=()=>{
//   alert('explore the places');
// }
const Navbar = () => {
  return (
  <div className='navigation'>
 <Link to="/place">
        <button >Place</button>
      </Link>
      <Link to="/details">
        <button>Details</button>
      </Link>
    </div>
  );
};
 
export default Navbar;
