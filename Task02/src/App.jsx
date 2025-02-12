import React from 'react';
import UsersList from './components/UsersList';
import AddUserForm from './components/AddUserForm';
import './styles/App.css'
function App() {
  return (
    <div className="app-container">
      <h1>User Management System</h1>
      <div className="user-management-wrapper">
        <AddUserForm />
        <UsersList />
      </div>
    </div>
  );
}

export default App;