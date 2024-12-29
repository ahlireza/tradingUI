import { useEffect, useState }  from "react"
import { useNavigate }          from "react-router-dom"
import { Input, Button }        from 'antd'
import Box                      from "@mui/material/Box"

import { GridCol, GridContainer, GridRow }  from "src/components/core/Grid"
import { IconViewer }                       from "src/components/core/IconViewer"

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
  const [usernameHelper, setUsernameHelper] = useState("Your email...")
  const [passHelper, setPassHelper] = useState("Password...")

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

                  <Box style={{ width: "50vw", marginBottom: "2vw"}}>
                    <Input
                      placeholder={usernameHelper}
                      size="large"
                      style={{
                        width: "25vw",
                        boxShadow: usernameError ? "0 0 0 1px #780A28" : undefined
                      }}
                      onChange={e => {
                        setUsername(e.target.value)
                        setUsernameError(false)
                        setUsernameHelper("Your email...")
                      }}
                      value={username}
                    />
                  </Box>

                  <Box style={{ width: "50vw", marginBottom: "1vw"}}>
                    <Input.Password
                      placeholder={passHelper}
                      size="large"
                      style={{
                        width: "25vw",
                        boxShadow: passError ? "0 0 0 1px #780A28" : undefined
                      }}
                      onChange={event => {
                        setPass(event.target.value);
                        setPassError(false)
                        setPassHelper("Passwoed...")
                      }}
                      value={pass}
                    />
                  </Box>

                  <Button
                    color={Color.WHITE}
                    variant="solid"
                    size="large"
                    style={{
                      width: "25vw",
                      fontFamily: "Montserrat",
                      fontSize: "14px",
                      fontWeight: "700",
                      backgroundColor: Color.BLUE_DARK,
                      marginTop: "2vw",
                      cursor: "pointer",
                    }}
                    onClick={errorHandler}
                  >
                    Sign in
                  </Button>

                </StyleContainer>

              </StyleMainBox>
            </StyledMobileView>
          </GridCol>
        </GridRow>
      </GridContainer>
  )
}

