import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      
      <div className="navbar-logo">
          <h1 className='h11'>Grand Continental</h1>
          
        
      </div>
      <ul className="nav-links">
        
            <li><a href="/#Home" className='lihome2'>Home</a></li>
            <li><a href="/#about" className='lihome2'>About</a></li>
            <li><a href="/#contact" className='lihome3'>Contact</a></li>
            <li><a href="/#reviews" className='lihome3'>Reviews</a></li>
            <li><a href="/#Services" className='lihome2'>Services</a></li>
            <li><a href="/rooms#Rooms" className='lihome3'>Rooms</a></li>


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
