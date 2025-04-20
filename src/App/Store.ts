// src/app/store.ts

import { configureStore } from '@reduxjs/toolkit';
import usersReducer from '../Features/Users/userSlice'

export const store = configureStore({
  reducer: {
    users: usersReducer,
  },
});

// ✅ These are needed!
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
