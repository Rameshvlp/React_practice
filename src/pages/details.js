import React, { useState } from 'react';
import Navbar from '../components/navbar';

const Details = () => {
  const [names, setName] = useState("");
  const [displayedName, setDisplayedName] = useState(""); 

  const handleClick = () => {
    setDisplayedName(names); 
  };

  return (
    <div>
      <Navbar />
      <h1>Details page</h1>
      <div>
        <form>
          Name
          <input type='text' value={names} onChange={(e) => setName(e.target.value)} />
        </form>
        <button onClick={handleClick}>Click</button>
        {/* Display the name */}
        {displayedName && <h1>{displayedName}</h1>}
      </div>
    </div>
  );
}

export default Details;
