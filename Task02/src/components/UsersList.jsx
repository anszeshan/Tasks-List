import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteUser, updateUser } from '../redux/slices/usersSlice';
import '../styles/UsersList.css';

function UsersList() {
  const users = useSelector((state) => state.users.users);
  const dispatch = useDispatch();

  // State to manage editing
  const [editingUser, setEditingUser] = useState(null);

  // Handle user deletion
  const handleDelete = (userId) => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      dispatch(deleteUser(userId));
    }
  };

  // Start editing a user
  const startEditing = (user) => {
    setEditingUser({...user});
  };

  // Handle input changes during editing
  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditingUser(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Save edited user
  const saveUser = () => {
    if (editingUser) {
      dispatch(updateUser({
        id: editingUser.id,
        ...editingUser
      }));
      setEditingUser(null);
    }
  };

  return (
    <div className="users-list-container">
      <h2>Users List</h2>
      <table className="users-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Age</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              {editingUser && editingUser.id === user.id ? (
                // Editing mode
                <>
                  <td>
                    <input
                      type="text"
                      name="name"
                      value={editingUser.name}
                      onChange={handleEditChange}
                    />
                  </td>
                  <td>
                    <input
                      type="email"
                      name="email"
                      value={editingUser.email}
                      onChange={handleEditChange}
                    />
                  </td>
                  <td>
                    <input
                      type="number"
                      name="age"
                      value={editingUser.age}
                      onChange={handleEditChange}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      name="role"
                      value={editingUser.role}
                      onChange={handleEditChange}
                    />
                  </td>
                  <td>
                    <button onClick={saveUser}>Save</button>
                    <button onClick={() => setEditingUser(null)}>Cancel</button>
                  </td>
                </>
              ) : (
                // View mode
                <>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.age}</td>
                  <td>{user.role}</td>
                  <td>
                    <div className="action-buttons">
                      <button onClick={() => startEditing(user)}>Edit</button>
                      <button 
                        className="delete-btn" 
                        onClick={() => handleDelete(user.id)}
                      >
                        🗑️
                      </button>
                    </div>
                  </td>
                </>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}


export default UsersList;