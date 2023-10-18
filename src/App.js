import React from 'react';
import logo from './valparai.jpeg';
import { Route, Routes } from 'react-router-dom';
import details from './pages/details';
import place from './pages/place';

const App = () => {
  return (
    <div>
      <Routes>
        {/* <Route path="/" element={Home} /> */}
        <Route path="/place" element={place} />
        <Route path="/details" element={details } />
      </Routes>
    </div>
  );
};
  // <div className="App">
  //   <h1>WELCOME TO VALPARAI</h1>
  //   <img src={logo} alt="Valparai" className="image" />
  // </div>

export default App;
