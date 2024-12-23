import { createAction } from "@reduxjs/toolkit"

//------------------------------
//---Set Modal
//------------------------------
interface Modal {
  name: string
  mode: string
}

export const setModal = createAction("setModal", (data: Modal) => {
  return { payload: data }
})

//------------------------------
//---Close Modal
//------------------------------
export const closeModal = createAction("closeModal")

//------------------------------
//---Clear IsRefresh
//------------------------------
export const clearIsRefresh = createAction("clearIsRefresh")

//------------------------------
//---Set IsRefresh
//------------------------------
export const setIsRefresh = createAction("setIsRefresh", (data: boolean) => {
  return { payload: data }
})

