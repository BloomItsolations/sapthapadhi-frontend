import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { io } from 'socket.io-client';
import RestApi from '../api/RestApi';

const socket = io(process.env.REACT_APP_BaseURL);

export const fetchMessages = createAsyncThunk(
  'chat/fetchMessages',
  async (toUser, { rejectWithValue }) => {
    try {
      const response = await RestApi.get(`/app/messages/${toUser}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);

export const myMessages = createAsyncThunk(
  'chat/mychat',
  async (toUser, { rejectWithValue }) => {
    try {
      const response = await RestApi.get(`/app/messages/${toUser}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);


export const sendMessage = createAsyncThunk(
  'chat/sendMessage',
  async ({ toUser, message }, {getState, rejectWithValue }) => {

    const { authInfo } = getState().auth;

    try {
      const response = await RestApi.post('/app/messages', {fromUser:authInfo.userId, toUser, message });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);

const chatSlice = createSlice({
  name: 'chat',
  initialState: {
    messages: [],
    status: 'idle',
    myMessage:[],
    error: null,
  },
  reducers: {
    addMessage: (state, action) => {
      state.messages.push(action.payload);
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchMessages.pending, state => {
        state.status = 'loading';
      })
      .addCase(fetchMessages.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.messages = action.payload;
      })
      .addCase(fetchMessages.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      })

      //my Message
      .addCase(myMessages.pending, state => {
        state.status = 'loading';
      })
      .addCase(myMessages.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.myMessage = action.payload;
      })
      .addCase(myMessages.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      })


      .addCase(sendMessage.fulfilled, (state, action) => {
        state.messages.push(action.payload);
      });
  },
});

export const { addMessage } = chatSlice.actions;
export default chatSlice.reducer;

// Setup Socket.io listeners
export const setupSocketListeners = dispatch => {
  socket.on('message', message => {
    dispatch(addMessage(message));
  });
};
