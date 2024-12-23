import { createReducer } from "@reduxjs/toolkit"

import * as actions from "../actions/root"

//------------------------------
//---Initial State
//------------------------------
const initialState = {
  // isDarkMode: storedDarkMode !== "null" ? storedDarkMode : false,
  modal: {
    name: "",
    mode: "",
  },
  isRefresh: false as boolean,
  // toast: {
  //   name: "",
  //   mode: "",
  // },
  selectedCheckboxes: [] as any,
  tableStatus: [] as any,
  trucks: {} as any,
}

//------------------------------
//---Create Reducer
//------------------------------
export default createReducer(initialState, (builder) => {
  builder
    .addCase(actions.setModal, (state, action) => {
      state.modal.name = action.payload.name
      state.modal.mode = action.payload.mode
    })

    .addCase(actions.closeModal.type, (state) => {
      state.modal.name = ""
      state.modal.mode = ""
      // state.isRefresh = false
    })

    .addCase(actions.setIsRefresh, (state, action) => {
      state.isRefresh = action.payload
    })

    .addCase(actions.clearIsRefresh.type, (state) => {
      state.isRefresh = false
    })
})
