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

//------------------------------
//---Set Table Status
//------------------------------
export const setTableStatus = createAction("setTableStatus", (data: any) => {
  return { payload: data }
})







// //------------------------------
// //---Toggle Theme
// //------------------------------
// export const toggleTheme = createAction("toggleTheme")

// //------------------------------
// //---Clear All
// //------------------------------
// export const clearAll = createAction("clearAll")

// //------------------------------
// //---Toggle Direction
// //------------------------------

// export const toggleDirection = createAction("toggleDirection")

// //------------------------------
// //---Add Selected Checkbox
// //------------------------------
// export const addSelectedCheckbox = createAction(
//   "addSelectedCheckbox",
//   (item: any) => {
//     return { payload: item }
//   }
// )

// //------------------------------
// //---Remove Selected Checkbox
// //------------------------------
// export const removeSelectedCheckbox = createAction(
//   "removeSelectedCheckbox",
//   (itemId) => {
//     return { payload: itemId }
//   }
// )

// //------------------------------
// //---Show Toast
// //------------------------------
// export const showToast = createAction("showToast", (data: Toast) => {
//   return { payload: data }
// })

// //------------------------------
// //---Fetch Data
// //------------------------------
// const fetchData = async ({ url, params }: FetchDataProps) => {
//   const cookie = Cookies.get("Flights_Catering")
//   const local = localStorage.getItem("Flights_Catering")
//   const token = cookie || local
//   const header = `Bearer ${token}`
//   const response = await axios.get(url, {
//     params,
//     headers: { Authorization: header },
//   })
//   return response.data
// }

// //------------------------------
// //---Use Data Fetching
// //------------------------------
// export const useDataFetching = (url: string, params?: Record<string, any>) => {
//   const { data, error, mutate } = useSWR([url, params], () =>
//     fetchData({ url, params })
//   )
//   return {
//     data,
//     isLoading: !data && !error,
//     isError: error,
//     mutate: mutate,
//   }
// }
