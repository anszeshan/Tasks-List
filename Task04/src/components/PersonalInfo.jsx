import React from 'react';

function PersonalInfo({ formData, handleChange }) {
  return (
    <div className="form-step personal-info">
      <h2>Personal Information</h2>
      <div className="form-group">
        <label htmlFor="firstName">First Name</label>
        <input 
          type="text" 
          id="firstName"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          placeholder="Enter your first name"
          required
        />
      </div>
      
      <div className="form-group">
        <label htmlFor="lastName">Last Name</label>
        <input 
          type="text" 
          id="lastName"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          placeholder="Enter your last name"
          required
        />
      </div>
      
      <div className="form-group">
        <label htmlFor="age">Age</label>
        <input 
          type="number" 
          id="age"
          name="age"
          value={formData.age}
          onChange={handleChange}
          placeholder="Enter your age"
          min="18"
          required
        />
      </div>
    </div>
  );
}

export default PersonalInfo;