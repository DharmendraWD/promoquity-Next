
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Thunk for login API call
export const userDets = createAsyncThunk(
  'userDets',
  async (userID, { rejectWithValue }) => {
    try {
      // console.log(userID)
      const res = await fetch(`http://www.taskperfect.somee.com/api/User/userprofile?userCode=${userID}`, {
      });

      const data = await res.json();
      // console.log(data)

      if (!res.ok) {
        return rejectWithValue(data.message || 'Login failed');
      }

      return data;
    } catch (err) {
      return rejectWithValue(err.message || 'Network error');
    }
  }
);

export const logoutUser = createAsyncThunk(
  'userData',
  async (_, { fulfillWithValue }) => {
    // Optional: Call logout API or just clear data
    return fulfillWithValue(true);
  }
);

const initialState = {
  userData: null,
  loading: false,
  error: null,
};

const useDataSlice = createSlice({
  name: 'userData',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Login
    builder.addCase(userDets.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(userDets.fulfilled, (state, action) => {
      state.loading = false;
      state.userData = action.payload?.data;
    });
    builder.addCase(userDets.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload || 'Login failed';
    });
  },
});

export default useDataSlice.reducer;
