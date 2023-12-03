import React from 'react';
import Navbar from '../components/navbar';
const place = () =>{
  console.log('hello')
  return (
    
    <div>
      <Navbar />  
      <h1>place page</h1>
     <form>Enter your name: 
      <input type='text'/>
     </form><form>Enter your number: 
      <input type='number'/>
     </form>
     <form> 
     </form>
     <form>hobbies: 
      <input type='checkbox'/>
      <input type='checkbox'/>
     
     </form>

    </div>
  );
}
export default place;
