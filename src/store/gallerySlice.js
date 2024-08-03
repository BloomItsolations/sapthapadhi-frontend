import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import RestApi from "../api/RestApi";
// Async Thunk for listing all banners
export const listGallery = createAsyncThunk(
  "gallery/listGallery",
  async (_, { getState, rejectWithValue }) => {
    try {
      const response = await RestApi.get("/admin/getGallery");
      return response.data;
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      }
      return rejectWithValue(error.message);
    }
  }
);

const gallerySlice = createSlice({
  name: "image",
  initialState: {
    galleryList: null,
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
      .addCase(listGallery.pending, (state) => {
        state.status = "loading";
      })
      .addCase(listGallery.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.galleryList = action.payload;
      })
      .addCase(listGallery.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export const { clearSelectedBanner, clearMessages } = gallerySlice.actions;

export default gallerySlice.reducer;
