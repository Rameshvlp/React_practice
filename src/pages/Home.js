import React from 'react'
import logo from './bill.jpg';
import Navbar from '../components/navbar';
import './image.css';


export default function Home() {
  return (
    <div>
        <Navbar/>
    <div >
    <h1 className="head">EXPLORE VALPARAI</h1>
    <img src={logo} alt="Valparai" className="image" />
  </div>
  </div>
  )
}