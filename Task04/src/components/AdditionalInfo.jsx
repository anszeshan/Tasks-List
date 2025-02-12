import React from 'react';

function AdditionalInfo({ formData, handleChange }) {
  return (
    <div className="form-step additional-info">
      <h2>Additional Information</h2>
      <div className="form-group">
        <label htmlFor="occupation">Occupation</label>
        <input 
          type="text" 
          id="occupation"
          name="occupation"
          value={formData.occupation}
          onChange={handleChange}
          placeholder="What is your current occupation?"
          required
        />
      </div>
      
      <div className="form-group">
        <label htmlFor="interests">Interests</label>
        <textarea 
          id="interests"
          name="interests"
          value={formData.interests}
          onChange={handleChange}
          placeholder="Tell us about your interests and hobbies"
          required
        />
      </div>
    </div>
  );
}

export default AdditionalInfo;