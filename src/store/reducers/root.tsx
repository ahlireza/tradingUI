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
    .addCase(actions.setTableStatus, (state, action) => {
      state.tableStatus = action.payload
    })

    .addCase(actions.clearIsRefresh.type, (state) => {
      state.isRefresh = false
    })
})




    
    //------------------------------
    // .addCase(actions.clearAll.type, (state) => {
    //   state.modal.mode = ""
    //   state.modal.name = ""
    //   state.toast.name = ""
    //   state.toast.mode = ""
    // })

    // .addCase(actions.toggleTheme.type, (state) => {
    //   state.isDarkMode = !state.isDarkMode
    // })

    // .addCase(actions.showToast, (state, action) => {
    //   state.toast.name = action.payload.name
    //   state.toast.mode = action.payload.mode
    // })

    // .addCase(actions.addSelectedCheckbox, (state, action) => {
    //   const newCheckboxes = action.payload
    //   newCheckboxes.forEach((newCheckbox) => {
    //     const existingIndex = state.selectedCheckboxes.findIndex(
    //       (item) => item.id === newCheckbox.id
    //     )

    //     if (existingIndex !== -1) {
    //       // Replace the existing checkbox state
    //       state.selectedCheckboxes[existingIndex] = newCheckbox
    //     } else {
    //       // Push new checkbox state
    //       state.selectedCheckboxes.push(newCheckbox)
    //     }
    //   })
    // })
    // .addCase(actions.removeSelectedCheckbox, (state, action) => {
    //   // Remove checkboxes based on the provided array
    //   state.selectedCheckboxes = state.selectedCheckboxes.filter(
    //     (item: any) => !action.payload.includes(item.id)
    //   )
    // })