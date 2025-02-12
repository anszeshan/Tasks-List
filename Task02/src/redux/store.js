import { configureStore } from '@reduxjs/toolkit';
import usersReducer from './slices/usersSlice';

export const store = configureStore({
  reducer: {
    users: usersReducer,
  },
  // Optionally add middleware or other store configurations
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware({
      serializableCheck: false  // Allows non-serializable values if needed
    })
});