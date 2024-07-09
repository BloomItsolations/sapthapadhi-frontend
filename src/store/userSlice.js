import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import RestApi from "../api/RestApi";

// Async thunk for Upline users
export const matchesUser = createAsyncThunk(
  "user/matchUser",
  async (_, { getState, rejectWithValue }) => {
    try {
      const { authInfo } = getState().auth;
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${authInfo.token}`,
        },
      };
      // Make request to the backend
      const { data } = await RestApi.get("/app/matches", config);
      return data;
    } catch (error) {
      // Return custom error message from the API if any
      if (error.response && error.response.data.error) {
        return rejectWithValue(error.response.data.error);
      }
      return rejectWithValue(error.message);
    }
  }
);

// Async thunk for fetch all users
export const recUsers = createAsyncThunk(
  "user/recUsers",
  async (_, { getState, rejectWithValue }) => {
    try {
      const { authInfo } = getState().auth;
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${authInfo.token}`,
        },
      };
      // Make request to the backend
      const { data } = await RestApi.get("/app/recommendedProfiles", config);
      return data;
    } catch (error) {
      // Return custom error message from the API if any
      if (error.response && error.response.data.error) {
        return rejectWithValue(error.response.data.error);
      }
      return rejectWithValue(error.message);
    }
  }
);

// Async thunk for downline users
export const ListDownLineUsers = createAsyncThunk(
  "user/ListDownLineUsers",
  async (_, { getState, rejectWithValue }) => {
    try {
      const { authInfo } = getState().auth;
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${authInfo.token}`,
        },
      };
      // Make request to the backend
      const { data } = await RestApi.get("/app/allDownLineUser", config);
      return data;
    } catch (error) {
      // Return custom error message from the API if any
      if (error.response && error.response.data.error) {
        return rejectWithValue(error.response.data.error);
      }
      return rejectWithValue(error.message);
    }
  }
);

export const withdrawFund = createAsyncThunk(
  "user/withdrawFund",
  async (formData, { getState, rejectWithValue }) => {
    try {
      const { authInfo } = getState().auth;
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${authInfo.token}`,
        },
      };
      // Make request to the backend
      const { data } = await RestApi.post(
        "/app/withdrawFunds",
        formData,
        config
      );
      return data;
    } catch (error) {
      // Return custom error message from the API if any
      if (error.response && error.response.data.error) {
        return rejectWithValue(error.response.data.error);
      }
      return rejectWithValue(error.message);
    }
  }
);

// Auth slice with initial state
const userSlice = createSlice({
  name: "user",
  initialState: {
    loading: false,
    matchUser: null,
    recUsersList: null,
    //this is for downline users
    uplinePayouts: null,
    downline: null,
    fundsList: null,
    incomeHistory: null,
    payouts: null,
    allIncome: null,
    user: null,
    error: null,
    success: null,
  },
  reducers: {
    clearError: (state) => {
      state.success = null;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(matchesUser.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(matchesUser.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.matchUser = payload;
      })
      .addCase(matchesUser.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
      // fetch all users data
      .addCase(recUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(recUsers.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.recUsersList = payload;
      })
      .addCase(recUsers.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })

      .addCase(ListDownLineUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(ListDownLineUsers.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.downline = payload;
      })
      .addCase(ListDownLineUsers.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
      .addCase(withdrawFund.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(withdrawFund.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.success = payload;
      })
      .addCase(withdrawFund.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      });
  },
});

// Export actions
export const { clearError } = userSlice.actions;
export default userSlice.reducer;
