import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../redux/userSlice";
import { useNavigate } from "react-router-dom";
import './Register.css'; // Import the CSS file

const Register = () => {
  const [userData, setUserData] = useState({ 
    name: "", 
    email: "", 
    password: "",
    confirmPassword: "" 
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error } = useSelector((state) => state.user);

  // State to manage password visibility
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Basic validation
    if (userData.password !== userData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    // Remove confirmPassword before dispatching
    const { confirmPassword, ...registrationData } = userData;
    
    dispatch(register(registrationData)).then((res) => {
      if (res.meta.requestStatus === "fulfilled") navigate("/dashboard");
    });
  };

  // Toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="register-container">
      <div className="register-wrapper">
        <h2>Create an Account</h2>
        <form onSubmit={handleSubmit} className="register-form">
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input 
              type="text" 
              id="name"
              name="name" 
              placeholder="Enter your full name" 
              onChange={handleChange} 
              required 
              className="form-input"
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
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
          
          <div className="form-group password-group">
            <label htmlFor="password">Password</label>
            <div className="password-input-wrapper">
              <input 
                type={showPassword ? "text" : "password"}
                id="password"
                name="password" 
                placeholder="Create a strong password" 
                onChange={handleChange} 
                required 
                className="form-input"
                minLength="8"
              />
              <button 
                type="button" 
                className="password-toggle"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? "👁️" : "👁️‍🗨️"}
              </button>
            </div>
            <p className="password-requirements">
              Password must be at least 8 characters long
            </p>
          </div>
          
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input 
              type={showPassword ? "text" : "password"}
              id="confirmPassword"
              name="confirmPassword" 
              placeholder="Confirm your password" 
              onChange={handleChange} 
              required 
              className="form-input"
            />
          </div>
          
          {error && <p className="error-message">{error.message}</p>}
          
          <button 
            type="submit" 
            className="register-button" 
            disabled={loading}
          >
            {loading ? "Creating Account..." : "Register"}
          </button>
          
          <div className="register-footer">
            <p>Already have an account? <a href="/login">Log In</a></p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;