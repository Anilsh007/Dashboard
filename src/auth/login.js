// src/auth/login.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import loginBaner from "../assets/login.svg";

function Login({ setIsLoggedIn }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Fake credentials check
    if (username === "admin" && password === "1234") {
      setIsLoggedIn(true);  // Set login state to true
      navigate("/");  // Redirect to the home page after login
    } else {
      alert("❌ Invalid credentials! Use admin / 1234");
    }
  };

  return (
    <div className="login-container">
      <div>
        <img src={loginBaner} alt={loginBaner} className="img-fluid" />
      </div>
      <div>
        <form onSubmit={handleLogin}>
          <h3>Login</h3>
          <div className="mb-3">
            <label>Username</label>
            <input type="text" className="form-control" value={username}
              onChange={(e) => setUsername(e.target.value)} required />
          </div>
          <div className="mb-3">
            <label>Password</label>
            <input type="password" className="form-control" value={password}
              onChange={(e) => setPassword(e.target.value)} required />
          </div>
          <button type="submit" className="btn btn-outline-primary w-100">Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
