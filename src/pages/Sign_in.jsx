import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // ✅ import this
import 'bootstrap/dist/css/bootstrap.min.css';

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate(); // ✅ initialize navigate

  // Default credentials (you can change them here)
  const DEFAULT_USERNAME = "admin";
  const DEFAULT_PASSWORD = "12345";

  const handleSubmit = (e) => {
    e.preventDefault();

    if (username === DEFAULT_USERNAME && password === DEFAULT_PASSWORD) {
      // ✅ Successful login
      alert("✅ Login successful!");
      navigate("/dashboard"); // ✅ Redirect to dashboard route inside your React app
    } else {
      // ❌ Invalid login
      setError("Invalid username or password!");
    }
  };

  return (
    <div className="d-flex align-items-center justify-content-center vh-100 bg-light">
      <div className="card shadow p-4" style={{ width: "400px", borderRadius: "15px" }}>
        <h3 className="text-center mb-4">Flood Detector Login</h3>

        {error && <div className="alert alert-danger">{error}</div>}

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">Username</label>
            <input
              type="text"
              id="username"
              className="form-control"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              type="password"
              id="password"
              className="form-control"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="btn btn-primary w-100">Login</button>
        </form>

        <p className="text-center mt-3 text-muted" style={{ fontSize: "0.9rem" }}>
          &copy; 2025 Flood Detector System
        </p>
      </div>
    </div>
  );
};

export default Login;
