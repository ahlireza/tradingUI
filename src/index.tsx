import { BrowserRouter }  from "react-router-dom"
import { PersistGate }    from "redux-persist/integration/react"
import { createRoot }     from "react-dom/client"
import { StrictMode}      from "react"
import { Provider }       from "react-redux" 

import { store, persistor } from "./store"
import App from "./App"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </StrictMode>
) 
