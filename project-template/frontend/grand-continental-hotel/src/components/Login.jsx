import React, { useState } from "react";
import "./login.css";
import Navbar from './Navbar'; // إضافة الـ Navbar هنا

import { Link } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    fetch("https://example.com/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        // Handle successful login here
      })
      .catch((error) => {
        console.error("Error:", error);
        // Handle login error here
      });
  };
return (<body class="login-page">
    <div>
      <Navbar /> 
    </div>

    <div className="login-container">
        <h1 className="login-title">Login</h1>
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
                <a href="/register" className="register-link">Don't have an account?</a>
            </div>
        </form>
    </div>
    </body>

);
};

export default Login;
