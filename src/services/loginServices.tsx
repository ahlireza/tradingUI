import { toast }    from "react-toastify"
import Cookies      from 'js-cookie'
import axios        from 'axios'

import { BaseUrlApi } from "src/definition/domain"

//------------------------------
//---login Service
//------------------------------
// export const LoginService = async (url: string, username: string, password: string) => {\   
    // const response = postApi(url, data)

export const LoginService = async (username: string, password: string) => {
    await axios.post(`${ BaseUrlApi.baseUrl }/login`, {
        username: username,
        password: password
    })
    .then(function (response) {
        if (response.status === 200) {
            if (response.data.code === "200") {
                //---Convert Data to JSON
                const convertDataToString = JSON.stringify(response.data.data)
                localStorage.setItem("Flights_Catering", convertDataToString)
    
                //---Save Token
                localStorage.setItem("Flights_token", response.data.data?.token)
                Cookies.set("Flights_token", response.data.data?.token)
            }
            else
                toast.error(response.data.message)
        }
    })
    .catch(function (error) {
        console.log(error)
    })
}
    
