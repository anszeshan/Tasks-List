import React, { useState } from 'react';
import PersonalInfo from './components/PersonalInfo';
import ContactInfo from './components/ContactInfo';
import AdditionalInfo from './components/AdditionalInfo';
import './App.css';

function App() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    age: '',
    occupation: '',
    interests: ''
  });

  const validatePersonalInfo = () => {
    const { firstName, lastName, age } = formData;
    const errors = {};

    if (!firstName.trim()) errors.firstName = 'First name is required';
    if (!lastName.trim()) errors.lastName = 'Last name is required';
    if (!age || isNaN(age) || parseInt(age) < 18) errors.age = 'Valid age (18+) is required';

    return Object.keys(errors).length === 0 ? null : errors;
  };

  const validateContactInfo = () => {
    const { email, phone } = formData;
    const errors = {};

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9]{10}$/;

    if (!email.trim() || !emailRegex.test(email)) errors.email = 'Valid email is required';
    if (!phone.trim() || !phoneRegex.test(phone)) errors.phone = 'Valid 10-digit phone number is required';

    return Object.keys(errors).length === 0 ? null : errors;
  };

  const validateAdditionalInfo = () => {
    const { occupation, interests } = formData;
    const errors = {};

    if (!occupation.trim()) errors.occupation = 'Occupation is required';
    if (!interests.trim()) errors.interests = 'Interests are required';

    return Object.keys(errors).length === 0 ? null : errors;
  };

  // Handle form data updates
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  // Navigation methods
  const nextStep = () => {
    let errors = null;
    switch(currentStep) {
      case 1:
        errors = validatePersonalInfo();
        break;
      case 2:
        errors = validateContactInfo();
        break;
      case 3:
        errors = validateAdditionalInfo();
        break;
      default:
        break;
    }

    if (!errors) {
      setCurrentStep(prevStep => Math.min(prevStep + 1, 4));
    } else {
      console.log('Validation Errors:', errors);
    }
  };

  const prevStep = () => {
    setCurrentStep(prevStep => Math.max(prevStep - 1, 1));
  };

  const submitForm = () => {
    const errors = [
      validatePersonalInfo(),
      validateContactInfo(),
      validateAdditionalInfo()
    ];

    if (errors.every(error => error === null)) {
      console.log('Form Submitted:', formData);
      alert('Form Submitted Successfully!');
    }
  };

  // Render different steps
  const renderStep = () => {
    switch(currentStep) {
      case 1:
        return (
          <PersonalInfo 
            formData={formData} 
            handleChange={handleChange}
          />
        );
      case 2:
        return (
          <ContactInfo 
            formData={formData} 
            handleChange={handleChange}
          />
        );
      case 3:
        return (
          <AdditionalInfo 
            formData={formData} 
            handleChange={handleChange}
          />
        );
      case 4:
        return (
          <div className="summary-step">
            <h2>Form Summary</h2>
            <p>First Name: {formData.firstName}</p>
            <p>Last Name: {formData.lastName}</p>
            <p>Email: {formData.email}</p>
            <p>Phone: {formData.phone}</p>
            <p>Age: {formData.age}</p>
            <p>Occupation: {formData.occupation}</p>
            <p>Interests: {formData.interests}</p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="multi-step-form-container">
      <div className="progress-bar">
        {[1, 2, 3, 4].map(step => (
          <div 
            key={step} 
            className={`progress-step ${currentStep >= step ? 'active' : ''}`}
          />
        ))}
      </div>
      
      <form className="form-wrapper">
        {renderStep()}
        
        <div className="form-navigation">
          {currentStep > 1 && currentStep < 4 && (
            <button 
              type="button" 
              onClick={prevStep} 
              className="btn btn-prev"
            >
              Previous
            </button>
          )}
          
          {currentStep < 3 && (
            <button 
              type="button" 
              onClick={nextStep} 
              className="btn btn-next"
            >
              Next
            </button>
          )}
          
          {currentStep === 3 && (
            <button 
              type="button" 
              onClick={nextStep} 
              className="btn btn-next"
            >
              Review
            </button>
          )}
          
          {currentStep === 4 && (
            <button 
              type="button" 
              onClick={submitForm} 
              className="btn btn-submit"
            >
              Submit
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

export default App;