// authSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import RestApi from "../api/RestApi";

// Async thunk for user create
export const userRegister = createAsyncThunk(
  "auth/userRegister",
  async (formData, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      // Make request to the backend
      const response = await RestApi.post("auth/user/create", formData, config);
      const { data } = response;
      console.log("response", response);
      return data;
    } catch (error) {
      // Return custom error message from the API if any
     console.log(error);
      if (error.response && error.response.data) {   //error.response.data.error. there are no error message in this, i was getting html in data.
        // var extractErrorMessage;
        //Extract the error message from html.
        // const preTagRegex = /<pre>(.*?)<\/pre>/;
        // const preTagMatch = error.response.data.match(preTagRegex);
        // if (preTagMatch && preTagMatch[1]) {
        //   const preTagContent = preTagMatch[1].replace(/<br>/g, '').trim();
        //   const errorMessageRegex = /Error:\s*(.*)/;
        //   const errorMessageMatch = preTagContent.match(errorMessageRegex);
        //   if (errorMessageMatch && errorMessageMatch[1]) {
        //     const specificErrorMessage = errorMessageMatch[1].split('&nbsp;')[0].trim();
        //     extractErrorMessage = specificErrorMessage;
        //   } else {
        //     extractErrorMessage = "Specific error message not found";
        //   }
        // } else {
        //   extractErrorMessage = "Error message not found";
        // }
        return rejectWithValue(error.response.data.message);
      }
      return rejectWithValue(error.message);
    }
  }
);

// Async thunk for user login
export const userLogin = createAsyncThunk(
  "auth/userLogin",
  async (formData, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      // Make request to the backend
      const { data } = await RestApi.post("/auth/userLogin", formData, config);

      // Store user's token in local storage
      sessionStorage.setItem("authInfo", JSON.stringify(data?.userDetails));
      return data?.userDetails;
    } catch (error) {
     console.log("Error",error);
     if(error.response && error.response.data.message){
      return rejectWithValue(error.response.data.message);
     }
      else if (error.response && error.response.data) {
        var extractErrorMessage;

        //Extract the error message from html.
        const preTagRegex = /<pre>(.*?)<\/pre>/;
        const preTagMatch = error.response.data.match(preTagRegex);
        if (preTagMatch && preTagMatch[1]) {
          const preTagContent = preTagMatch[1].replace(/<br>/g, '').trim();
          const errorMessageRegex = /Error:\s*(.*)/;
          const errorMessageMatch = preTagContent.match(errorMessageRegex);
          if (errorMessageMatch && errorMessageMatch[1]) {
            const specificErrorMessage = errorMessageMatch[1].split('&nbsp;')[0].trim();
            extractErrorMessage = specificErrorMessage;
          } else {
            extractErrorMessage = "Specific error message not found";
          }
        } else {
          extractErrorMessage = "Error message not found";
        }
        return rejectWithValue(extractErrorMessage);
      }

    
    return rejectWithValue(error.message);
  }
  }
  
);

// Async thunk for user login
export const updateUserDetails = createAsyncThunk(
  "auth/updateUserDetails",
  async (formData, { getState, rejectWithValue }) => {
    try {
      const { authInfo } = getState().auth;
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${authInfo.token}`,
        },
      };
      // Make request to the backend
      const  response  = await RestApi.post(
        "app/updateUserProfile",
        formData,
        config
      );
      // console.log("Response",response);
      const {data}=response;
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

// Async thunk for user login
export const updateKycDetails = createAsyncThunk(
  "auth/updateKycDetails",
  async (formData, { getState, rejectWithValue }) => {
    console.log(formData);
    try {
      const { authInfo } = getState().auth;
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${authInfo.token}`,
        },
      };
      // Make request to the backend
      const { data } = await RestApi.post(
        "/app/userKycVerifications",
        formData,
        config
      );

      return data.message;
    } catch (error) {
      // Return custom error message from the API if any
      if (error.response && error.response.data.error) {
        return rejectWithValue(error.response.data.error);
      }
      return rejectWithValue(error.message);
    }
  }
);

export const userDetailsById = createAsyncThunk(
  "auth/userDetailsById",
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
      const { data } = await RestApi.get("/app/userDetailsById", config);
      console.log("UserDetails",data);
      sessionStorage.setItem("authInfo", JSON.stringify(data?.userDetails));
      return data?.userDetails;
    } catch (error) {
      // Return custom error message from the API if any
      if (error.response && error.response.data.error) {
        return rejectWithValue(error.response.data.error);
      }
      return rejectWithValue(error.message);
    }
  }
);

// to Update the password
export const updatePassword = createAsyncThunk(
  "auth/updatePassword",
  async ({ phone, newPassword }, { getState, rejectWithValue }) => {
    try {
      // Make request to the backend
      const { data } = await RestApi.patch(
        `/auth/user/updatePassword/${phone}`,
        { newPassword: newPassword }
      );

      return data?.message;
    } catch (error) {
      // Return custom error message from the API if any
      if (error.response && error.response.data.error) {
        return rejectWithValue(error.response.data.error);
      }
      return rejectWithValue(error.message);
    }
  }
);

export const sponserDetails = createAsyncThunk(
  "auth/sponserDetails",
  async ({ phone }, { getState, rejectWithValue }) => {
    try {
      // Make request to the backend
      const { data } = await RestApi.get(`/app/userDetailsByphone/${phone}`);
      console.log(data);
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
const authSlice = createSlice({
  name: "auth",
  initialState: {
    loading: false,
    authInfo: sessionStorage.getItem("authInfo")
      ? JSON.parse(sessionStorage.getItem("authInfo"))
      : null,
    sponserDetali: null,
    error: null,
    success: null,
  },
  reducers: {
    clearError: (state) => {
      state.success = null;
      state.error = null;
    },
    logout: (state) => {
      sessionStorage.removeItem("authInfo"); // Deletes token from storage
      state.loading = false;
      state.authInfo = null;
      state.error = null;
      state.success = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(userLogin.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(userLogin.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.authInfo = payload;
        state.success = true;
      })
      .addCase(userLogin.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
      .addCase(userDetailsById.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(userDetailsById.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.authInfo = payload;
        state.success = true;
      })
      .addCase(userDetailsById.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
      .addCase(userRegister.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(userRegister.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.success = payload?.message;
      })
      .addCase(userRegister.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })

      .addCase(updateUserDetails.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(updateUserDetails.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.success = payload?.message;
      })
      .addCase(updateUserDetails.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
      // Sponser Details
      .addCase(sponserDetails.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(sponserDetails.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.sponserDetali = payload;
        state.success = "success";
      })
      .addCase(sponserDetails.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
      // update Kyc
      .addCase(updateKycDetails.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(updateKycDetails.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.success = payload;
      })
      .addCase(updateKycDetails.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })

      // update password
      .addCase(updatePassword.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(updatePassword.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.success = payload?.message;
      })
      .addCase(updatePassword.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      });
  },
});

// Export actions
export const { clearError, logout } = authSlice.actions;
export default authSlice.reducer;
