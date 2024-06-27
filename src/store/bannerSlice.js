import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import RestApi from "../api/RestApi";
// Async Thunk for listing all banners
export const listBanners = createAsyncThunk(
  "banner/listBanners",
  async (_, { getState, rejectWithValue }) => {
    try {
      const response = await RestApi.get("/app/list-banners");
      return response.data;
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      }
      return rejectWithValue(error.message);
    }
  }
);

const bannerSlice = createSlice({
  name: "banner",
  initialState: {
    bannersList: null,
    selectedBanner: null,
    status: "idle",
    error: null,
    success: null,
  },
  reducers: {
    clearSelectedBanner: (state) => {
      state.selectedBanner = null;
    },
    clearMessages: (state) => {
      state.success = null;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // List all banners
      .addCase(listBanners.pending, (state) => {
        state.status = "loading";
      })
      .addCase(listBanners.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.bannersList = action.payload;
      })
      .addCase(listBanners.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export const { clearSelectedBanner, clearMessages } = bannerSlice.actions;

export default bannerSlice.reducer;
