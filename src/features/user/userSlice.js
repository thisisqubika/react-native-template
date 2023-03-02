import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { UserController } from '@/controllers';
import { STATUS } from '@/constants';

const initialState = {
  status: STATUS.NOT_STARTED,
  user: null,
  error: null,
};

export const login = createAsyncThunk(
  'users/login',
  async ({ username, password }, { rejectWithValue, extra }) => {
    const { demoMode, networkService } = extra;
    const userController = new UserController(networkService);

    try {
      const { data } = await userController.login({
        username: username,
        password: password,
        demoMode,
      });
      return data;
    } catch (error) {
      return rejectWithValue(error.data);
    }
  }
);

export const logout = createAsyncThunk('users/logout', async (_, { rejectWithValue, extra }) => {
  const { demoMode, networkService } = extra;
  const userController = new UserController(networkService);

  try {
    await userController.logout({ demoMode });
    return null;
  } catch (error) {
    return rejectWithValue(error.data);
  }
});

export const userSlice = createSlice({
  name: 'user',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.status = STATUS.LOADING;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.status = STATUS.SUCCESS;
        state.user = action.payload.user;
        state.error = null;
      })
      .addCase(login.rejected, (state, action) => {
        state.status = STATUS.ERROR;
        state.error = action.payload.error;
      })
      .addCase(logout.pending, (state) => {
        state.status = STATUS.LOADING;
      })
      .addCase(logout.fulfilled, (state, action) => {
        state.status = STATUS.SUCCESS;
        state.user = null;
        state.error = null;
      })
      .addCase(logout.rejected, (state, action) => {
        state.status = STATUS.ERROR;
        state.error = action.payload.error;
      });
  },
});

export const getUser = (state) => state.user.user;
export const getUserStatus = (state) => state.user.status;
export const getUserIsLoading = (state) => state.user.status === STATUS.LOADING;
export const getUserError = (state) => state.user.error;

export default userSlice.reducer;
