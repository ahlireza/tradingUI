import { createGlobalStyle } from "styled-components"

//------------------------------
//---Custom Theme
//------------------------------
export const customTheme = (mode: boolean) => {
  const result = mode
    ? { body: "#181A1B", btn: "#443280", text: "#fff"}
    : { body: "#FAFAFA", btn: "#448032", text: "#000"} 
  return result 
} 

//------------------------------
//---Global Styles
//------------------------------
export const GlobalStyles = createGlobalStyle`
@font-face {
  font-family: "Montserrat-Bold" 
  src: local("Montserrat-Bold"), url("../assets/font/Montserrat-Bold.ttf") format("woff") 
  font-weight: normal 
  font-style: normal 
}
@font-face {
  font-family: "Montserrat-Regular" 
  src: local("Montserrat-Regular"), url("../assets/font/Montserrat-Regular.ttf") format("woff") 
  font-weight: normal 
  font-style: normal 
}

  :root {
    --font-family-main: "Montserrat-Regular", sans-serif  
    --font-family-secondary: "Montserrat-Bold", sans - serif  
  }
  
  body {
    background-color: ${(props) => props.theme.body} 
    color: ${(props) => props.theme.text} 
    transition: background-color 0.3s ease-out, color 0.3s ease-out 
    // direction:${(props) => props.theme.direction} 
  }
` 
