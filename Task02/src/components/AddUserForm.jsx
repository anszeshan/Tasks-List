import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addUser } from '../redux/slices/usersSlice';

function AddUserForm() {
  const dispatch = useDispatch();
  
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    age: '',
    role: ''
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.age || !formData.role) {
      alert('Please fill in all fields');
      return;
    }

    // Dispatch add user action
    dispatch(addUser({
      ...formData,
      age: parseInt(formData.age, 10)
    }));

    // Reset form
    setFormData({
      name: '',
      email: '',
      age: '',
      role: ''
    });
  };

  return (
    <div className="add-user-form-container">
      <h2>Add New User</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter full name"
            required
          />
        </div>
        
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter email address"
            required
          />
        </div>
        
        <div className="form-group">
          <label>Age</label>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            placeholder="Enter age"
            min="18"
            required
          />
        </div>
        
        <div className="form-group">
          <label>Role</label>
          <input
            type="text"
            name="role"
            value={formData.role}
            onChange={handleChange}
            placeholder="Enter job role"
            required
          />
        </div>
        
        <button type="submit">Add User</button>
      </form>
    </div>
  );
}

export default AddUserForm;