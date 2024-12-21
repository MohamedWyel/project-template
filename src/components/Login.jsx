import React, { useState, useEffect } from "react";
import "./login.css";
import Navbar from './Navbar'; 
import { useNavigate, Link } from "react-router-dom"; 

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(""); 
  const navigate = useNavigate(); 

  // Check if user is already logged in
  useEffect(() => {
    const isLoggedIn = localStorage.getItem('userLoggedIn');
    if (isLoggedIn) {
      navigate('/Profile');
    }
  }, [navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Simulate login (replace with actual backend check if needed)
    if (username === "user" && password === "password") {
      localStorage.setItem('userLoggedIn', true);
      localStorage.setItem('username', username); // Save username in localStorage
      navigate('/Profile');
    } else {
      setErrorMessage("Invalid username or password");
    }
  };

  return (
    <div className="login-page">
      <Navbar /> 

      <div className="login-container">
        <h1 className="login-title">Login</h1>

        {errorMessage && <p className="error-message">{errorMessage}</p>}

        <form className="login-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username" className="form-label"></label>
            <input
              type="text"
              id="username"
              name="username"
              className="form-input"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              placeholder="Username"
            />
          </div>

          <div className="form-group">
            <label htmlFor="password" className="form-label"></label>
            <input
              type="password"
              id="password"
              name="password"
              className="form-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Password"
            />
          </div>

          <button type="submit" className="login-button">Login</button>

          <div className="login-links">
            <Link to="/forgot-password" className="forgot-password-link">Forgot Password?</Link>
            <Link to="/register" className="register-link">Don't have an account?</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
