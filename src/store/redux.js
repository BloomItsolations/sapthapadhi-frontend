import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./authSlice";
import bannerReducer from "./bannerSlice";
import userReducer from "./userSlice";
import planReducer from "./planSlice";
const store = configureStore({
  reducer: {
    auth: authReducer,
    banner: bannerReducer,
    user: userReducer,
    planSlice: planReducer,
  },
});
export default store;
