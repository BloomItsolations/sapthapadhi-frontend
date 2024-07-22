import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { io } from 'socket.io-client';

const socket = io('http://localhost:8800');

export const fetchMessages = createAsyncThunk(
  'chat/fetchMessages',
  async (toUser, { rejectWithValue }) => {
    try {
      const response = await axios.get(`/fetchMessages/${toUser}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);

export const sendMessage = createAsyncThunk(
  'chat/sendMessage',
  async ({ toUser, message }, { rejectWithValue }) => {
    try {
      const response = await axios.post('/sendMessages', { toUser, message });
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
