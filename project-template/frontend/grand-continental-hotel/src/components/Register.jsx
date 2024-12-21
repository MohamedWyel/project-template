import React, { useState } from "react";
import Navbar from "./Navbar";
import "./register.css";

const Register = () => {
  const [fullname, setFullname] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const validateForm = () => {
    if (!fullname.trim()) return "Full name is required.";
    if (!username.trim()) return "Username is required.";
    if (!/^[a-zA-Z0-9_.-]*$/.test(username))
      return "Username can only contain letters, numbers, dots, dashes, and underscores.";
    if (password.length < 6)
      return "Password must be at least 6 characters long.";
    return "";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    const validationError = validateForm();
    if (validationError) {
      setError(validationError);
      return;
    }

    setLoading(true);
    try {
      const response = await fetch(`http://localhost:3000/register` , {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ fullname, username, password }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Registration failed. Please try again.");
      }

      const data = await response.json();
      setSuccess("Registration successful! You can now log in.");
      console.log("Success:", data);

      setFullname("");
      setUsername("");
      setPassword("");
    } catch (error) {
      setError(error.message || "Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="register-page">
      <Navbar />
      <div className="register-container">
        <h1 className="register-title">Register</h1>
        {error && <div className="error-message">{error}</div>}
        {success && <div className="success-message">{success}</div>}
        <form onSubmit={handleSubmit} className="register-form" autoComplete="off">
          <div className="form-group">
            <label htmlFor="fullname" className="form-label">Full Name</label>
            <input
              type="text"
              id="fullname"
              name="fullname"
              value={fullname}
              onChange={(e) => setFullname(e.target.value)}
              required
              className="form-input"
              placeholder="Full name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="username" className="form-label">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="form-input"
              placeholder="Username"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="form-input"
              placeholder="Password"
            />
          </div>
          <button type="submit" className="form-button" disabled={loading}>
            {loading ? "Registering..." : "Register"}
          </button>
          <div className="register-links">
            <a href="/login" className="login-link">
              Already have an account?
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;