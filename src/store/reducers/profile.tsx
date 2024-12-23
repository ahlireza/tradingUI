import { createReducer }  from "@reduxjs/toolkit"

import * as actions       from "../actions/profile" 
 
//------------------------------
//---Initial State
//------------------------------
const initialState = {
  loading: false,
  // signin: null as LoginApiResponse | null,
  // captcha: "",
  statusCode: null as number | null,
  refreshToken: null as any | null,
  user: null as any | null,
} 

//------------------------------
//---Create Reducer
//------------------------------
export default createReducer(initialState, (builder) => {
  builder
    .addCase(actions.clearAll.type, (state) => {
      state.loading = false 
      // state.captcha = "" 
      state.user = "" 
      state.statusCode = null 
    })
})
