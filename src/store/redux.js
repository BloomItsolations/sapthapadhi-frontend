import { configureStore } from '@reduxjs/toolkit';

import authReducer from './authSlice';
import bannerReducer from './bannerSlice';
import userReducer from './userSlice';
import planReducer from './planSlice';
import chatReducer from './chatSlice';
import galleryReducer from './gallerySlice';
const store = configureStore({
  reducer: {
    auth: authReducer,
    banner: bannerReducer,
    user: userReducer,
    plan: planReducer,
    chat: chatReducer,
    gallery:galleryReducer
  },
});
export default store;
