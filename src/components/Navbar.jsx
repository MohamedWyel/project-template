<<<<<<< Updated upstream
=======
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
            <li ><Link to="/" className='lihome1'>Home</Link></li>
            <li><Link to="/about" className='lihome2'>About</Link></li>
            <li><Link to="/contact" className='lihome3'>Contact</Link></li>
            {/* <li><Link to="/services" className='lihome3'>Services</Link></li> */}
            <li><Link to="/rooms" className='lihome3'>Rooms</Link></li>
            <li><Link to="/book" className='lihome3'>Book</Link></li>
            <li><Link to="/" className='lihome3'>Gallery</Link></li>
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
>>>>>>> Stashed changes
