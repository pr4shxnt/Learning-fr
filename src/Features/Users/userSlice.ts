import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../Services/api';

interface User {
  id: string;
  name: string;
  DOB: string | null;
  gender: string;
  email: string;
  address: string;
  image?: string;
  isVerified?: boolean;
}

interface AuthState {
  user: User | null;
  token: string | null;
  loading: boolean;
  error: string | null;
  isUserAuthenticated: boolean;
}

const initialState: AuthState = {
  user: null,
  token: null,
  loading: false,
  error: null,
  isUserAuthenticated: false,
};

export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async ({ email, password }: { email: string; password: string }, thunkAPI) => {
    try {
      const response = await api.post<{ user: User; token: string }>('/auth/login', {
        email,
        password,
      });
      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response?.data?.message || 'Login failed');
    }
  }
);

export const registerUser = createAsyncThunk(
  'auth/register',
  async (
    { name, email, password, DOB, gender, address, image }: { name: string; email: string; password: string, DOB: string; gender: string; address: string, image: string;  },
    thunkAPI
  ) => {
    try {
      const response = await api.post<{ user: User; token: string }>('/auth/register', {
        name,
        email,
        password,DOB, gender, address, image
      });
      return response.data;
    } catch (error: any) {
      console.error(error)
      return thunkAPI.rejectWithValue(error.response?.data?.message || 'Registration failed');
    }
  }
);

const userSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout(state) {
      state.user = null;
      state.token = null;
      state.isUserAuthenticated = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isUserAuthenticated = true;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
        state.isUserAuthenticated = false;
      })
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isUserAuthenticated = true;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
        state.isUserAuthenticated = false;
      });
  },
});

export const { logout } = userSlice.actions;
export default userSlice.reducer;
