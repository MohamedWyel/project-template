import React, { useState } from "react";
import "./register.css";
import Navbar from './Navbar'; 
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [fullname, setFullname] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");


  //do not remove them again ya wyel
  const [loading, setLoading] = useState(false); // To track loading state
  const [success, setSuccess] = useState(""); // To store success messages
  const [error, setError] = useState(""); // To store error messages
  const navigate = useNavigate();

  const validateForm = () => {
    if (!fullname.trim()) return "Full name is required";
    if (!username.trim()) return "Username is required";
    if (password.length < 6)
      return "Password must be at least 6 characters long";
    return "";
  };

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    
   
     // after succesfull login 
     navigate('/login'); 
     
    const validationError = validateForm();
    if (validationError) {
      setError(validationError); // Display validation error
      return;
    }

    // to handle backend


    setLoading(true); // Start loading
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ fullname, username, password }),
      });

      if (!response.ok) {
        throw new Error("Registration failed, please try again.");
      }

      const data = await response.json();
      setSuccess("Registration successful! You can now log in.");
      console.log("Success:", data);

      setFullname("");
      setUsername("");
      setPassword("");

      // Redirect to login page after successful registration
      setTimeout(() => {
        navigate("/login");
      }, 2000); // Redirect after 2 seconds to allow user to see the success message

    } catch (error) {
      setError(error.message || "Something went wrong!");
    } finally {
      setLoading(false);  // Stop loading
    }
  };

  return (
    <body className="login-page">
      <div>
        <Navbar /> 
      </div>
      <div className="register-container">
        <h1 className="register-title">Register</h1>
        <form onSubmit={handleSubmit} className="register-form" autoComplete="off">
          <div className="form-group">
            <label htmlFor="fullname" className="form-label"></label>
            <input
              type="text"
              id="fullname"
              name="fullname"
              value={fullname}
              onChange={(e) => setFullname(e.target.value)}
              required
              className="form-input"
              autoComplete="off"
              placeholder="Full name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="username" className="form-label"></label>
            <input
              type="text"
              id="username"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              placeholder="Username"
              className="form-input"
              autoComplete="off"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password" className="form-label"></label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="form-input"
              autoComplete="off"
              placeholder="Password"
            />
          </div>
          <button type="submit" className="form-button">
            Register
          </button>
          <div className="register-links">
            <a href="/login" className="login-link">
              Already have an account?
            </a>
          </div>
        </form>
      </div>
    </body>
  );
};

export default Register;
