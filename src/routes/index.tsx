import Cookies                  from "js-cookie"
import { useEffect }            from "react"
import { Route, Routes }        from "react-router-dom"
import { Navigate, useNavigate} from "react-router-dom"

import { Layout }       from "src/components/layout" 
import { Login }        from "src/pages/login" 

import { Dashboard }  from "src/pages/dashboard"
import { Orders }     from "src/pages/orders"

//------------------------------
//---Implementation Routes
//------------------------------

  export const ImplementationRoutes = () => {
  const navigate = useNavigate() 

  const token = Cookies.get("Tradeing_token")
  
//------------------------------
//---Check User Login Status
//------------------------------
  useEffect(() => {
    if (!token) {
      navigate("/login")
    }
  }, [token])

//------------------------------
  return (
    <>
    {
      token ? (
        <Layout>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/orders" element={<Orders />} />
          </Routes>
        </Layout>
      ): (
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/*" element={<Navigate to="/login" />} />
        </Routes>
      )
    }
    </>
  )
}
