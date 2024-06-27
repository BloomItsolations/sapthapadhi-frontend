import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import RestApi from "../api/RestApi";

// Async thunk for Upline users
export const ListupLineUsers = createAsyncThunk(
  "user/upLineUsers",
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
      const { data } = await RestApi.get("/app/allUpLineUser", config);
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
export const fetchAllUsers = createAsyncThunk(
  "user/fetchAllUsers",
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
      const { data } = await RestApi.get("/admin/listusers", config);
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
    payouts: null,
    upline: null,
    uplinePayouts: null,
    downline: null,
    fundsList: null,
    incomeHistory: null,
    allUsers: null,
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
      .addCase(ListupLineUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(ListupLineUsers.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.upline = payload;
      })
      .addCase(ListupLineUsers.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
      // fetch all users data
      .addCase(fetchAllUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(fetchAllUsers.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.allUsers = payload;
      })
      .addCase(fetchAllUsers.rejected, (state, { payload }) => {
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
