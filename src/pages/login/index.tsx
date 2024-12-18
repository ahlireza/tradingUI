import { useEffect, useState }  from "react"
import { useNavigate }          from "react-router-dom"
// import { toast }                from "react-toastify"
import Cookies                  from "js-cookie"
// import axios                    from "axios"

import { GridCol, GridContainer, GridRow }  from "src/components/core/Grid"
import { BtnComponent }                     from "src/components/core/Button"
import { IconViewer }                       from "src/components/core/IconViewer"
import { CustomBox }                         from "src/components/core/CustomBox"
import { InputText }                        from "src/components/core/Input/InputText"
import { CheckBox }                         from "src/components/core/Input/CheckBox"
import { Color }                            from "src/definition/color"

// import { LoginService } from "src/services/accountServices/LoginServices"

import logo from "src/assets/logo.png"

import {
  BoxLogo,
  BoxLogoContaner,
  LoginText,
  Remember,
  StyleBoxForget,
  StyleContainer,
  StyleMainBox,
  StyledMobileView
} from "./style"

//------------------------------
//---Login
//------------------------------
export const Login = () => {
  const navigate = useNavigate()

  //---states
  const [username, setUsername] = useState("")
  const [pass, setPass] = useState("")
  const [usernameError, setUsernameError] = useState(false)
  const [passError, setPassError] = useState(false)
  const [usernameHelper, setUsernameHelper] = useState("")
  const [passHelper, setPassHelper] = useState("")
  const [checkedRadio, setChecked] = useState(false)

  useEffect(() => {
    return () => {
      setUsername("")
      setPass("")
    }
  }, []);

  //------------------------------
  //---Func Error Handling
  //------------------------------
  const errorHandler = () => {
    let error = false
    if (!username) {
      setUsernameError(true)
      setUsernameHelper("Enter the username...")
      error = true
    }
    if (!pass) {
      setPassError(true)
      setPassHelper("Enter the password...")
      error = true
    }

    // if (error === false) {
    //   loginHandler(username, pass)
    // }

    loginHandler(username, pass)
  
    // LoginService(username, pass)
    // navigate("/dashboard")
  }

  //------------------------------
  //---Call Login Api
  //------------------------------
  // Users Data Format{
  //   name,
  //   role,
  //   email,
  //   access,
  //   token
  // }
  //------------------------------
  const loginHandler = async (username: string, password: string) => {
    // await axios.post(`${ BaseUrlApi.baseUrl }/login`, {
    //   username: username,
    //   password: password
    // })
    // .then(function (response) {
    //   if (response.status === 200) {
    //     if (response.data.code === "200") {
    //       //---Convert Data to JSON
    //       const convertDataToString = JSON.stringify(response.data.data)
    //       localStorage.setItem("Flights_Catering", convertDataToString)

    //       //---Save Token
    //       localStorage.setItem("Flights_token", response.data.data?.token)
    //       Cookies.set("Flights_token", response.data.data?.token)

    //       navigate("/dashboard")
    //     }
    //     else
    //       toast.error(response.data.message)
    //   }
    // })
    // .catch(function (error) {
    //   console.log(error)
    // })

    const loginInfo = {
      name: "Admin",
      role: "Admin",
      email: "admin@localhost",
      access: "Manager",
      token: "12345"
    }
    localStorage.setItem("Trading_BackOffice", JSON.stringify(loginInfo))
    localStorage.setItem("Tradeing_token", loginInfo.token)
    Cookies.set("Tradeing_token", loginInfo.token)

    navigate("/")
  }
  //------------------------------
  return (
    <GridContainer fluid={true} style={{ background: Color.WHITE }}>
      <GridRow>
        <GridCol xs={12} md={6}>
          <StyledMobileView>
            <StyleMainBox>
              <BoxLogoContaner>
                <BoxLogo>
                  <IconViewer src={logo} alt={"LoginImage"} style={{ width: "160px" }} />
                </BoxLogo>
              </BoxLogoContaner>

              <StyleContainer>
                <LoginText variant="bold">
                  Welcome Back...!
                </LoginText>

                <InputText
                  placeholder="Email or Mobile"
                  type="text"
                  onChange={e => {
                    setUsername(e.target.value)
                    setUsernameError(false)
                    setUsernameHelper("")
                  }}
                  error={usernameError.toString()}
                  helperText={usernameHelper}
                  value={username}
                  onKeyUp={(e) => e.key === "Enter" && errorHandler}
                />

                <InputText
                  placeholder="Password"
                  type="password"
                  onChange={event => {
                    setPass(event.target.value);
                    setPassError(false)
                    setPassHelper("")
                  }}
                  error={passError.toString()}
                  helperText={passHelper}
                  value={pass}
                  onKeyUp={(e) => e.key === "Enter" && errorHandler}
                />
              <StyleBoxForget>
                  <CustomBox style={{
                    display: "flex",
                    alignItems: "center",
                  }}
                    onClick={() => setChecked(!checkedRadio)}
                  >
                    {/* //@ts-ignore */}
                    <CheckBox
                      type="radio"
                      label={""}
                      value={""}
                      checked={checkedRadio}
                      onChange={() => { }}
                      radioGroup="" />
                    <Remember>Remember me</Remember>
                  </CustomBox>
                </StyleBoxForget>
                <BtnComponent
                  onClick={errorHandler}
                  label="Sign in"
                  variant="contained"
                  style={{
                    marginTop: "32px",
                    backgroundColor: Color.BLUE_DARK,
                    cursor: "pointer",
                  }}
                />
              </StyleContainer>

            </StyleMainBox>
          </StyledMobileView>
        </GridCol>
      </GridRow>
    </GridContainer >
  )
}

