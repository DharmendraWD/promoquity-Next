// redux/slices/authSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Thunk for login API call
export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async (credentials, { rejectWithValue }) => {
    try {
      const res = await fetch('http://www.taskperfect.somee.com/api/User/login', {
        method: 'POST',
        body: JSON.stringify(credentials),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const data = await res.json();
    //   console.log(data)

      if (!res.ok) {
        return rejectWithValue(data.message || 'Login failed');
      }

      return data; // should contain user and token
    } catch (err) {
      return rejectWithValue(err.message || 'Network error');
    }
  }
);

export const logoutUser = createAsyncThunk(
  'auth/logoutUser',
  async (_, { fulfillWithValue }) => {
    // Optional: Call logout API or just clear data
    return fulfillWithValue(true);
  }
);

const initialState = {
  userId: null,
  token: null,
  isAuthenticated: false,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Login
    builder.addCase(loginUser.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.loading = false;
      state.userId = action.payload?.data?.userId;
      state.token = action.payload?.data?.token;
      state.isAuthenticated = true;
 //  Store in localStorage
  localStorage.setItem('userId', JSON.stringify(action.payload?.data?.userId));
  localStorage.setItem('token', action.payload?.data?.token);
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload || 'Login failed';
    });

    // Logout
    builder.addCase(logoutUser.fulfilled, (state) => {
      state.userId = null;
      state.token = null;
      state.isAuthenticated = false;
      state.loading = false;
      state.error = null;

      //  Remove from localStorage
  localStorage.removeItem('userId');
  localStorage.removeItem('token');
    });
  },
});

export default authSlice.reducer;
