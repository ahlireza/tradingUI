import { createAction } from "@reduxjs/toolkit" 


//------------------------------
//---Clear All
//------------------------------
export const clearAll = createAction("profile/clearAll") 






//------------------------------
//---Get Captcha
//------------------------------
// export const getCaptcha = createAsyncThunk("profile/getCaptcha", async () => {
//   const { response } = await apiRequest<SetStateAction<string | any>>(
//     "get",
//     "api/v1/captcha"
//   ) 
//   return response 
// }) 

//------------------------------
//---Get Detail
//------------------------------
// export const getDetail = createAsyncThunk(
//   "inR/getDetai",
//   async (data, { dispatch }) => {
//     const { response, error } = await apiRequest<LoginApiResponse>(
//       "get",
//       `/api/v1/`,
//       null,
//       {},
//       data
//     );
//     return response;
//   }
// );

//------------------------------
//---Get User
//------------------------------
// export const getUser = createAsyncThunk("profile/userInfo", async () => {
//   const { response } = await apiRequest<any>("get", "/api/v1/userInfo") 
//   return response 
// }) 

//------------------------------
//---Refresh Token API
//------------------------------
// export const refreshTokenApi = createAsyncThunk(
//   "profile/refreshTokenApi",
//   async (data: any) => {
//     const { response, error } = await apiRequest<LoginApiResponse>(
//       "get",
//       "/api/v1/refresh",
//       null,
//       {},
//       data
//     ) 

//     if (error) {
//       if (error.response.status === 401) {
//         Cookies.remove("Flights_Catering") 
//         Cookies.remove("Flights_Catering") 
//         localStorage.removeItem("Flights_Catering") 
//         window.location.reload() 
//       }
//     }

//     if (response) {
//       Cookies.set("Flights_Catering", response.data.accessToken) 
//     }
    
//     return response 
//   }
// ) 

//------------------------------
//---Signin
//------------------------------
// export const signin = createAsyncThunk(
//   "profile/signin",
//   async (data: any, thunkAPI) => {
//     const { dispatch } = thunkAPI 
//     let result 
//     const { response, error } = await apiRequest<LoginApiResponse>(
//       "POST",
//       "api/v1/login",
//       data.data
//     ) 

//     if (error) {
//       result = error.response.data 
//       dispatch(getCaptcha()) 
//     }
    
//     if (response) {
//       if (data.checked) {
//         localStorage.setItem("Flights_Catering", response.data.accessToken) 
//       }
//       Cookies.set("Flights_Catering", response.data.accessToken) 
//       Cookies.set("Flights_Catering", response.data.refreshToken) 
//       result = response 
//     }
    
//     return { result, statusCode: error?.response?.status } 
//   }
// ) 

