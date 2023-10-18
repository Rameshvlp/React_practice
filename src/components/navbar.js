import React from 'react';
import './navigation.css';
const handlePlace=()=>{
  console.log('buttton pressed');
}
const Navbar = () => {
  return (

 
    <div className='navigation'>
      <button onClick={handlePlace}>place</button>
      <button onClick={handlePlace}>details</button>

    </div>
  );
};
 
export default Navbar;
