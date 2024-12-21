import { Link } from "react-router-dom";
import "./navbar.css";
import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track login status

  // Check login status on page load
  useEffect(() => {
    const loggedIn = localStorage.getItem('userLoggedIn');
    if (loggedIn) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('userLoggedIn');
    localStorage.removeItem('username');
    setIsLoggedIn(false);  // Update navbar state after logout
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h1 className='h11'>Grand Continental</h1>
      </div>
      <ul className="nav-links">
        <li><a href="http://localhost:3000/" className='lihome1'>Home</a></li>
        <li><a href="/#about" className='lihome2'>About</a></li>
        <li><a href="/#contact" className='lihome3'>Contact</a></li>
        <li><a href="/#reviews" className='lihome3'>Reviews</a></li>
        <li><a href="/#Services" className='lihome2'>Services</a></li>
      </ul>

      <div className="navbar-links">
        {isLoggedIn ? (
          <>
            <button className='login-button b1'>
              <Link to="/profile">Profile</Link>
            </button>
            <button className='login-button b2' onClick={handleLogout}>
              Logout
            </button>
          </>
        ) : (
          <>
            <button className='login-button b1'>
              <Link to="/register">Register</Link>
            </button>
            <button className='login-button b2'>
              <Link to="/login">Login</Link>
            </button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;