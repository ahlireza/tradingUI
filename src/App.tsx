import { useSelector }    from "react-redux"
import { ThemeProvider }  from "styled-components" 

import { RootState }                  from "./store/interfaces" 
import { GlobalStyles, customTheme }  from "./components/theme" 
import { ImplementationRoutes }       from "./routes" 

function App() {
  const { isDarkMode } = useSelector((state: RootState) => state?.root) 
  const theme = customTheme(isDarkMode)
  
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
        <ImplementationRoutes />
    </ThemeProvider>
  ) 
}

export default App 
