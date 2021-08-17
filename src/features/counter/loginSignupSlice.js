import {  createSlice } from '@reduxjs/toolkit';


const initialState = {
  token:null,
  user: null,
};


export const loginSignupSlice = createSlice({
  name: 'Login',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    
    // Use the PayloadAction type to declare the contents of `action.payload`
    setToken: (state, action) => {
      state.token = action.payload;
    },

    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
  // The `extraReducers` field lets the slice handle actions defined elsewhere,
  // including actions generated by createAsyncThunk or in other slices.
 
});

export const {setToken , setUser} = loginSignupSlice.actions;

//


// We can also write thunks by hand, which may contain both sync and async logic.
// Here's an example of conditionally dispatching actions based on current state.



export default loginSignupSlice.reducer;
