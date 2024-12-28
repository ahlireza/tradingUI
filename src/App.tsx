import { ThemeProvider }  from "styled-components" 
import { useSelector }    from "react-redux"

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
