import { createSlice, nanoid } from '@reduxjs/toolkit';

// Initial state with some default users
const initialState = {
  users: [
    { 
      id: nanoid(), 
      name: 'John Doe', 
      email: 'john.doe@example.com', 
      age: 30, 
      role: 'Software Engineer' 
    },
    { 
      id: nanoid(), 
      name: 'Jane Smith', 
      email: 'jane.smith@example.com', 
      age: 28, 
      role: 'Product Manager' 
    }
  ]
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    // Add new user with auto-generated ID
    addUser: {
      reducer: (state, action) => {
        state.users.push(action.payload);
      },
      prepare: (userData) => ({
        payload: {
          id: nanoid(),
          ...userData
        }
      })
    },
    
    // Delete user by ID
    deleteUser: (state, action) => {
      state.users = state.users.filter(user => user.id !== action.payload);
    },
    
    // Update user with granular field updates
    updateUser: (state, action) => {
      const { id, ...updates } = action.payload;
      const userToUpdate = state.users.find(user => user.id === id);
      
      if (userToUpdate) {
        // Merge existing user data with updates
        Object.keys(updates).forEach(key => {
          if (updates[key] !== undefined) {
            userToUpdate[key] = updates[key];
          }
        });
      }
    }
  }
});

// Export actions and reducer
export const { 
  addUser, 
  deleteUser, 
  updateUser 
} = usersSlice.actions;

export default usersSlice.reducer;