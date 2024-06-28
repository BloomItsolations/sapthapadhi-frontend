import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import RestApi from "../api/RestApi";
// Async Thunk for listing all plans
export const listAllPlans = createAsyncThunk(
  "plans/listAll",
  async (_, { getState, rejectWithValue }) => {
    try {
      const response = await RestApi.get("/app/listplan");
      return response.data;
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      }
      return rejectWithValue(error.message);
    }
  }
);

// Async Thunk for fetching a plan by its ID
export const fetchPlanById = createAsyncThunk(
  "plans/fetchById",
  async (planId, { getState, rejectWithValue }) => {
    try {
      const response = await RestApi.get(`/plans/${planId}`);
      return response.data;
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      }
      return rejectWithValue(error.message);
    }
  }
);

const planSlice = createSlice({
  name: "plans",
  initialState: {
    planList: null,
    selectedPlan: null,
    status: "idle",
    error: null,
    success: null,
  },
  reducers: {
    clearSelectedPlan: (state) => {
      state.selectedPlan = null;
    },
    clearMessages: (state) => {
      state.success = null;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // List all plans
      .addCase(listAllPlans.pending, (state) => {
        state.status = "loading";
      })
      .addCase(listAllPlans.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.planList = action.payload;
      })
      .addCase(listAllPlans.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })

      // Fetch plan by ID
      .addCase(fetchPlanById.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchPlanById.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.selectedPlan = action.payload;
      })
      .addCase(fetchPlanById.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export const { clearSelectedPlan, clearMessages } = planSlice.actions;

export default planSlice.reducer;
