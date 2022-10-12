import React, { useState, useEffect } from 'react';
import './App.css';
import Header from "./MyComponents/Header";
import { Footer } from "./MyComponents/Footer";
import { About } from "./MyComponents/About";
import Home from './MyComponents/Home';
import {
  Routes,
  Route
} from "react-router-dom";

function App() {
  return ( 
    <> 
      <Header title="My Todos List" searchBar={false} /> 
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/about" element={<About />}/>
        </Routes> 
      <Footer />
    </>
  );
}

export default App;
