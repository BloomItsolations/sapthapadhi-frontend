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
        // return rejectWithValue(error.response.data.error);
      }
      // return rejectWithValue(error.message);
    }
  }
);

export const myalldetails = createAsyncThunk(
  "user/Details",
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
      const { data } = await RestApi.get("/app/viewProfile", config);
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
      console.log("REcommended",data)
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


export const sendRequest = createAsyncThunk(
  "user/sendRequest",
  async (toUserId, { getState, rejectWithValue }) => {
    try {
      const { authInfo } = getState().auth;
      
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${authInfo.token}`,
        },
      };
      // Make request to the backend
      const response = await RestApi.post(
        "/app/sendrequest",
        {
          toUserId:toUserId
        },
        config
      );
      const {data}=response;
      return data?.message;

    } catch (error) {
      console.log("Error",error)
      if (error.response && error.response.data) {
        return rejectWithValue(error.response.data.message);
      }
      return rejectWithValue(error.message);
    }
  }
);


export const singleUserDetails = createAsyncThunk(
  "single/userDetails",
  async (userId, { getState, rejectWithValue }) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      // Make request to the backend
      const { data } = await RestApi.get(`/app/viewUserProfile/${userId}`, config);
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


export const reciveRequest = createAsyncThunk(
  "receive/request",
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
      const response = await RestApi.get(
        "/app/receive-requests",
        config
      );
      const {data}=response;
      return data;

    } catch (error) {
      console.log("Error",error)
      if (error.response && error.response.data) {
        return rejectWithValue(error.response.data.message);
      }
      return rejectWithValue(error.message);
    }
  }
);


export const acceptRequest = createAsyncThunk(
  "accept/request",
  async (id, { getState, rejectWithValue }) => {
    try {
      const { authInfo } = getState().auth;
      
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${authInfo.token}`,
        },
      };
      // Make request to the backend
      const response = await RestApi.post(
        "/app/update-request-status",
        {
          fromUserId:id,
          status:'accepted'
        },
        config
      );
      const {data}=response;
      return data.message;

    } catch (error) {
      console.log("Error",error)
      if (error.response && error.response.data) {
        return rejectWithValue(error.response.data.message);
      }
      return rejectWithValue(error.message);
    }
  }
);


export const denayRequest = createAsyncThunk(
  "denay/request",
  async (id, { getState, rejectWithValue }) => {
    try {
      const { authInfo } = getState().auth;
      
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${authInfo.token}`,
        },
      };
      // Make request to the backend
      const response = await RestApi.post(
        "/app/update-request-status",
        {
          fromUserId:id,
          status:'reject'
        },
        config
      );
      const {data}=response;
      return data.message;

    } catch (error) {
      console.log("Error",error)
      if (error.response && error.response.data) {
        return rejectWithValue(error.response.data.message);
      }
      return rejectWithValue(error.message);
    }
  }
);



export const acceptedUser = createAsyncThunk(
  "accepted/request",
  async (id, { getState, rejectWithValue }) => {
    try {
      const { authInfo } = getState().auth;
      
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${authInfo.token}`,
        },
      };
      // Make request to the backend
      const response = await RestApi.get(
        "/app/accepted-requests",
        config
      );
      const {data}=response;
      return data;

    } catch (error) {
      console.log("Error",error)
      if (error.response && error.response.data) {
        return rejectWithValue(error.response.data.message);
      }
      return rejectWithValue(error.message);
    }
  }
);



// Auth slice with initial state
const userSlice = createSlice({
  name: "user",
  initialState: {
    mydetails:null,
    loading: false,
    singleUser:null,
    matchUser: null,
    recUsersList: null,
    accepteReqUserList:null,
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

      //Accepted Request User List
      .addCase(acceptedUser.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(acceptedUser.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.accepteReqUserList = payload;
      })
      .addCase(acceptedUser.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })

      //accept User Request
      .addCase(acceptRequest.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(acceptRequest.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.success = payload;
      })
      .addCase(acceptRequest.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
      //Denay User Request
      .addCase(denayRequest.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(denayRequest.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.success = payload;
      })
      .addCase(denayRequest.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })

      //get All Recive Request User list
      .addCase(reciveRequest.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(reciveRequest.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.recUsersList = payload;
      })
      .addCase(reciveRequest.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })

      //get Single User Data
      .addCase(singleUserDetails.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(singleUserDetails.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.singleUser = payload;
      })
      .addCase(singleUserDetails.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
        
      //send Request
      .addCase(sendRequest.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(sendRequest.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.success = payload;
      })
      .addCase(sendRequest.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })

      //fetch userdetails
      .addCase(myalldetails.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(myalldetails.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.mydetails = payload;
      })
      .addCase(myalldetails.rejected, (state, { payload }) => {
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
