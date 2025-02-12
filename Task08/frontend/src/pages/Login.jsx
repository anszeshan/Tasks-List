import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/userSlice";
import { useNavigate } from "react-router-dom";
import './Login.css'; // Import the CSS file

const Login = () => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error } = useSelector((state) => state.user);

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(credentials)).then((res) => {
      if (res.meta.requestStatus === "fulfilled") navigate("/dashboard");
    });
  };

  return (
    <div className="login-container">
      <div className="login-wrapper">
        <h2>Welcome Back</h2>
        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input 
              type="email" 
              id="email"
              name="email" 
              placeholder="Enter your email" 
              onChange={handleChange} 
              required 
              className="form-input"
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input 
              type="password" 
              id="password"
              name="password" 
              placeholder="Enter your password" 
              onChange={handleChange} 
              required 
              className="form-input"
            />
          </div>
          
          {error && <p className="error-message">{error.message}</p>}
          
          <button 
            type="submit" 
            className="login-button" 
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
          
          <div className="login-footer">
            <p>Don't have an account? <a href="/register">Sign Up</a></p>
            <a href="/forgot-password">Forgot Password?</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;