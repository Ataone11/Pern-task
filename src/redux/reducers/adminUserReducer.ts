import { createSelector } from "reselect";
import {CredentialsInterface} from "../../../pages/login/index"
import { createSlice } from "@reduxjs/toolkit";

export interface StateParams {
  user: CredentialsInterface | null;
}
export interface RootReducerInterface  {
  authReducer: StateParams
}
const INITIAL_STATE:StateParams  = {
 user:null
};

const authReducer = createSlice({
  initialState: INITIAL_STATE,
  name: 'Auth',
  reducers: {
    setAuthentication(state, action) {
      state.user =  action.payload
    }
  }
})
export const getAuthSelector = createSelector(
  (state: RootReducerInterface ) => state.authReducer.user,
  (user?: CredentialsInterface | null) => user
)

export default authReducer.reducer

export const { setAuthentication } = authReducer.actions