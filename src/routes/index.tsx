import Cookies                  from "js-cookie"
import { useEffect }            from "react"
import { Route, Routes }        from "react-router-dom"
import { Navigate, useNavigate} from "react-router-dom"

import { Layout }       from "src/components/layout" 
import { Login }        from "src/pages/login" 

import { Dashboard }  from "src/pages/dashboard"

import { CancelledOrders }  from "src/pages/orders/cancelled"
import { SuspendedOrders }  from "src/pages/orders/suspended"
import { PendingOrders }    from "src/pages/orders/pending"
import { NewOrder }         from "src/pages/orders/new-order"
import { Orders }           from "src/pages/orders/orders"

import { Clearing } from "src/pages/clearing"

import { WaitingSettlement }      from "src/pages/settlement/waiting"
import { ConfirmationSettlement } from "src/pages/settlement/confirmation"

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

            <Route path="/new-order" element={<NewOrder />} />
            <Route path="/pending-orders" element={<PendingOrders />} />
            <Route path="/suspended-orders" element={<SuspendedOrders />} />
            <Route path="/cancelled-orders" element={<CancelledOrders />} />
            <Route path="/orders" element={<Orders />} />            

            <Route path="/clearing" element={<Clearing />} />

            <Route path="/waiting-settlement" element={<WaitingSettlement />} />
            <Route path="/confirmation-settlement" element={<ConfirmationSettlement />} />
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
