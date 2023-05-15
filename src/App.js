import React from 'react';
import axios from "axios";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from "react";
import "./App.css";


function App() {
  const [files, setFiles] = useState([])

 
  return (
    
    <div className="App">
      
      <Router>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/home" element={<Home/>}/>
        </Routes>
      </Router>

      

    </div>
  );
}
export default App;