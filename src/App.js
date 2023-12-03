import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Details from './pages/details';
import Place from './pages/place';
import Home from './pages/Home';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/place" element={<Place/>} />
        <Route path="/details" element={<Details/> } />
      </Routes>
    </div>
  );
};
  

export default App;
