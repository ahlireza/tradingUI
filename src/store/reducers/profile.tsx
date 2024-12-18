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
    
    // .addCase(actions.getCaptcha.fulfilled, (state, action) => {
    //   state.captcha = action.payload 
    // })



    
    // .addCase(actions.getUser.fulfilled, (state, action) => {
    //   state.user = action.payload 
    // })
    
    // .addCase(actions.refreshTokenApi.fulfilled, (state, action) => {
    //   if (action.payload) {
    //     state.refreshToken = action.payload?.data 
    //   }
    // }) 

    // .addCase(actions.signin.pending, (state) => {
    //   state.loading = true 
    // })
    
    // .addCase(actions.signin.fulfilled, (state, action) => {
    //   if (action.payload.result) {
    //     state.signin = action.payload.result 
    //     state.loading = false 
    //   }
    //   state.statusCode = action.payload.statusCode 
    // })    
})
