import { createSlice } from "@reduxjs/toolkit";
import { StateParams } from "./reducers/adminUserReducer";


export const userSlice = createSlice({
  name:'user',
  initialState:{userid:0},
  reducers:{
    addUser:(state, action)=>{
      state.userid = action.payload
    }
  }
})
export const {addUser} = userSlice.actions
export default userSlice.reducer