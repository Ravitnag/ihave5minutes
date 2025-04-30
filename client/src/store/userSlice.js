import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: '',
  time: null,
  goal: '',
  isLoggedIn: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action) {
      return { ...state, ...action.payload, isLoggedIn: true };
    },
    logout(state) {
      return initialState;
    },
  },
});

export const { setUser, logout } = userSlice.actions;
export default userSlice.reducer;