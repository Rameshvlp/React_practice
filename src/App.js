import React from 'react';
import logo from './valparai.jpeg';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar';
import Place from './components/place';
import Details from './components/details';

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={Home } />
        <Route path="/place" element={Place} />
        <Route path="/details" element={Details } />
      </Routes>
    </div>
  );
};

const Home = () => (
  <div className="App">
    <h1>WELCOME TO VALPARAI</h1>
    <img src={logo} alt="Valparai" className="image" />
  </div>
);

export default App;
