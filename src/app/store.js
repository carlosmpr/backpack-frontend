import { configureStore } from '@reduxjs/toolkit';
import loginReducer from '../features/counter/loginSignupSlice';
import locationReducer from '../features/counter/locationsSlice'
export const store = configureStore({
  reducer: {
    login: loginReducer,
    location: locationReducer
  },
});
