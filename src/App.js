<<<<<<< Updated upstream
import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import About from './components/About.js';
import Book from './components/Book.js';
import Home from './components/Home.js';
import Register from './components/Register.js';
=======
import './App.css';
import Login from './components/Login';
import Register from './components/Register';
import Main from './components/Main';
import Navbar from './components/Navbar';  // استيراد الـ Navbar
import Book from './components/Book';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
>>>>>>> Stashed changes

function App() {
  return (
    <Router>
<<<<<<< Updated upstream
      <div className="App">
        <h1>Welcome to the Hotel Website</h1>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/about" element={<About />} />
          <Route path="/book" element={<Book />} />
        </Routes>
      </div>
=======
    <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/book" element={<Book />} />
        <Route path="/" element={<Main />} />
        <Route path="*" element={<div>Page Not Found</div>} />
      </Routes>
>>>>>>> Stashed changes
    </Router>
  );
}

export default App;

