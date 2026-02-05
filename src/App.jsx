import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import Homepage from './pages/Homepage'
import Navbar from './Layout/Navbar';
import Footer from './Layout/Footer';


function App() {
  return (
  
    <Router>
 
       <Navbar/>
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
