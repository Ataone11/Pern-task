import { configureStore } from "@reduxjs/toolkit"
import { userSlice } from "./slice"
import authReducer from "./reducers/adminUserReducer"
import userReducer from "./slice"


export const store = configureStore({
  reducer: {
    user:userReducer
  },
})
