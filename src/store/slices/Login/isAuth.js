import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  token: "",
  userId: "",
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuth: (state, action) => {
      const { token, userId } = action.payload;
      state.token = token;
      state.userId = userId;
    },
    remAuth: (state) => {
      state.token = "";
      state.userId = "";
    },
  },
});

export const { setAuth, remAuth } = authSlice.actions;

export default authSlice.reducer;

// red 
// const token = useSelector((state) => state.auth.token);
// const userId = useSelector((state) => state.auth.userId);
// dispatch(setAuth({ token: 'your_token_here', userId: 'your_user_id_here' }));