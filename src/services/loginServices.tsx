import { toast }    from "react-toastify"
import Cookies      from 'js-cookie'
import axios        from 'axios'

import { BaseUrlApi } from "src/definition/domain"

//------------------------------
//---login Service
//------------------------------
export const LoginService = async (username: string, password: string): Promise<void> => {
  try {
      const response = await axios.post(`${BaseUrlApi.baseUrl}/login`, {
          username,
          password,
      }, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      const data = response.data

      if (response.status === 200 && data.code === 200) {
        //--- Save User Data
        localStorage.setItem("Trading_BackOffice", JSON.stringify(data))
        //--- Save Token
          if (data?.token) {
            Cookies.set("Tradeing_token", data?.token, { expires: 1, path: '/' })
            toast("Login successfully...")
          } else {
            toast.warn("Token not found in response...")
          }
      } else {
          toast.error(response.data?.message || "Unexpected error occurred...")
      }
  } catch (error) {
      console.error("Error Respond: ", error.response || error.message)
      toast.error("Login failed. Please try again later...")
  }

  // const data = {
  //   code: 200,
  //   message: "Success",
  //   user_code: "C-100",
  //   name: "Admin",
  //   email: "alireza@example.com",
  //   access: "Manager",
  //   token: "1234567890"
  // }
  // console.log("Fix: ", data)

  // if (data.code === 200) {
  //   localStorage.setItem("Trading_BackOffice", JSON.stringify(data))
  //   Cookies.set("Tradeing_token", data.token)
  // }
}

//------------------------------
//---Password Change
//------------------------------
export const ChangePassword = async (userCode: string, oldPassword: string, newPassword: string): Promise<void> => {
    // const response = await axios.post(`${BaseUrlApi.baseUrl}/test`, {
    //     userCode,
    //     oldPassword,
    //     newPassword
    // })
    // ???????
    // ???????
    // ???????
}

