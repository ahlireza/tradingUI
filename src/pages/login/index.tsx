import { useEffect, useState }  from "react"
import { useNavigate }          from "react-router-dom"

import { GridCol, GridContainer, GridRow }  from "src/components/core/Grid"
import { BtnComponent }                     from "src/components/core/Button"
import { IconViewer }                       from "src/components/core/IconViewer"
import { InputText }                        from "src/components/core/Input/InputText"
import { Color }                            from "src/definition/color"

import { LoginService } from "src/services/loginServices"

import logo from "src/assets/logo.png"

import {
  HeaderContainer,
  BoxLogo,
  LoginText,
  StyleContainer,
  StyleMainBox,
  StyledMobileView
} from "./style"
import { log } from "console"

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
      setUsernameHelper("Enter your email...")
      error = true
    }
    if (!pass) {
      setPassError(true)
      setPassHelper("Enter the password...")
      error = true
    }
  
    if (error === false){
      LoginService(username, pass)
      navigate("/")
    }
  }
 
  //------------------------------
  return (
      <GridContainer fluid={true} style={{ background: Color.WHITE }}>
        <HeaderContainer style={{backgroundColor: Color.BLUE_DARK}}>
          <BoxLogo>
            <IconViewer
              src={logo}
              alt={"LogoImage"}
              style={{ width: "120px", height: "35px" }}
            />
          </BoxLogo>
        </HeaderContainer>
        
        <GridRow>
          <GridCol xs={12} md={6}>
            <StyledMobileView>
              <StyleMainBox>
                <StyleContainer>
                  <LoginText variant="bold">
                    Welcome Back...!
                  </LoginText>

                  <InputText
                    placeholder="Your Email"
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
      </GridContainer>
  )
}

