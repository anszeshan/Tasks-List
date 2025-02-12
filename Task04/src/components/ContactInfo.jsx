import React from 'react';

function ContactInfo({ formData, handleChange }) {
  return (
    <div className="form-step contact-info">
      <h2>Contact Information</h2>
      <div className="form-group">
        <label htmlFor="email">Email Address</label>
        <input 
          type="email" 
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email"
          required
        />
      </div>
      
      <div className="form-group">
        <label htmlFor="phone">Phone Number</label>
        <input 
          type="tel" 
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Enter your 10-digit phone number"
          pattern="[0-9]{10}"
          required
        />
      </div>
    </div>
  );
}

export default ContactInfo;