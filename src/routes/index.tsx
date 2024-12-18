import Cookies                  from "js-cookie"
import { useEffect }            from "react"
import { Route, Routes }        from "react-router-dom"
import { Navigate, useNavigate} from "react-router-dom"

import { Layout }       from "src/components/layout" 
import { Login }        from "src/pages/login" 

import { Dashboard }          from "src/pages/dashboard"

//------------------------------
//---Implementation Routes
//------------------------------

  export const ImplementationRoutes = () => {
  const navigate = useNavigate() 

  const cookie = Cookies.get("Tradeing_token")
  const local = localStorage.getItem("Trading_BackOffice")

  const token = cookie || local
  
//------------------------------
//---Check User Login Status
//------------------------------
  useEffect(() => {
    if (!cookie) {
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
