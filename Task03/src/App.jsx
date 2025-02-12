import React, { useState } from 'react';
import './App.css';

const UserDashboard = () => {
  // State to demonstrate different conditions
  const [user, setUser] = useState({
    name: 'John Doe',
    isLoggedIn: true,
    role: 'admin',
    notifications: ['New message', 'Update available'],
    preferences: {
      theme: 'light'
    }
  });

  // Toggle login status for demonstration
  const toggleLogin = () => {
    setUser(prevUser => ({
      ...prevUser,
      isLoggedIn: !prevUser.isLoggedIn
    }));
  };

  // Toggle user role for demonstration
  const toggleRole = () => {
    setUser(prevUser => ({
      ...prevUser,
      role: prevUser.role === 'admin' ? 'user' : 'admin'
    }));
  };

  // Method 1: If/else conditional rendering
  if (!user.isLoggedIn) {
    return (
      <div className="login-message">
        <h2>Please log in to access the dashboard</h2>
        <button onClick={toggleLogin}>Log In</button>
      </div>
    );
  }

  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <h1>Welcome to Your Dashboard</h1>
        <div className="user-controls">
          <button onClick={toggleLogin}>Log Out</button>
          <button onClick={toggleRole}>
            Switch to {user.role === 'admin' ? 'User' : 'Admin'}
          </button>
        </div>
      </header>

      {/* Method 2: Logical && operator */}
      {user.notifications.length > 0 && (
        <div className="notifications">
          <h3>Notifications</h3>
          {user.notifications.map((notification, index) => (
            <div key={index} className="notification-item">
              {notification}
            </div>
          ))}
        </div>
      )}

      {/* Method 3: Ternary operator */}
      <div className="role-specific-content">
        {user.role === 'admin' ? (
          <AdminDashboard user={user} />
        ) : (
          <UserContent user={user} />
        )}
      </div>

      {/* Method 4: Object literal */}
      {themeComponents[user.preferences.theme]}
    </div>
  );
};

// Component for admin-specific content
const AdminDashboard = ({ user }) => (
  <div className="admin-dashboard">
    <h2>Admin Controls</h2>
    <div className="admin-tools">
      <button>Manage Users</button>
      <button>System Settings</button>
      <button>View Logs</button>
    </div>
  </div>
);

// Component for regular user content
const UserContent = ({ user }) => (
  <div className="user-content">
    <h2>User Dashboard</h2>
    <div className="user-tools">
      <button>View Profile</button>
      <button>Edit Settings</button>
    </div>
  </div>
);

// Method 4: Object literal for theme components
const themeComponents = {
  light: <div className="theme-indicator">Light Theme Active</div>,
  dark: <div className="theme-indicator">Dark Theme Active</div>
};

export default UserDashboard;