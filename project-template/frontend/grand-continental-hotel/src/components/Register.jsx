import React, { useState } from "react";
import "./register.css";
import Navbar from './Navbar'; // إضافة الـ Navbar هنا


const Register = () => {
  const [fullname, setFullname] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const validateForm = () => {
    if (!fullname.trim()) return "Full name is required";
    if (!username.trim()) return "Username is required";
    if (password.length < 6)
      return "Password must be at least 6 characters long";
    return "";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationError = validateForm();
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
      console.log("Success:", data);

      setFullname("");
      setUsername("");
      setPassword("");
    } catch (error) {
      error.message && alert(error.message);
    }
  };

  return (
    <body class="login-page">
      <div>
      <Navbar /> 
    </div>
    <div className="register-container">
      <h1 className="register-title">Register</h1>
      <form onSubmit={handleSubmit} className="register-form" autoComplete="off">
        <div className="form-group">
          <label htmlFor="fullname" className="form-label">
            
          </label>
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
          <label htmlFor="username" className="form-label">
            
          </label>
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
          <label htmlFor="password" className="form-label">
            
          </label>
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
