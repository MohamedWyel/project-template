import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      
      <div className="navbar-logo">
        <Link to="/" className="link">
          <h1 className='h11'>Grand Continental</h1>
          
        </Link>
        
      </div>
      <ul className="nav-links">
            <li ><a href="#home" className='lihome1'>Home</a></li>
            <li><a href="#rooms" className='lihome3'>Rooms</a></li>
            <li><a href="#about" className='lihome2'>About</a></li>
            <li><a href="#contact" className='lihome3'>Contact</a></li>
          </ul>
      <div className="navbar-links">
          <button className='login-button b1'><Link to="/register">Register</Link>
          </button>
         <button className='login-button b2'><Link to="/login">Login</Link></button> 
        </div>
        
    </nav>
  );
};

export default Navbar;
