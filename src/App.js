import React from 'react';
// import logo from './valparai.jpeg';
import { Routes, Route } from 'react-router-dom';
import Details from './pages/details';
import Place from './pages/place';

const App = () => {
  return (
    <div>
      <Routes>
        {/* <Route path="/" element={Home} /> */}
        <Route path="/place" element={<Place/>} />
        <Route path="/details" element={<Details/> } />
      </Routes>
    </div>
  );
};
  // <div className="App">
  //   <h1>WELCOME TO VALPARAI</h1>
  //   <img src={logo} alt="Valparai" className="image" />
  // </div>

export default App;
