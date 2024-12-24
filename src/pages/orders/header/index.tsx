import { useLocation }  from "react-router-dom"
import { useState }     from "react"
import { I3Square } from "iconsax-react"

import { InputSearch }    from "src/components/core/Input/InputSearch"


import {
    BoxHeader,
    BoxTitle,
    BoxSide,
    BoxMenu,
    BoxSearch,
    Name,
    ItemLink
} from "../../style"

//------------------------------
//---Orders Header
//------------------------------
export const OrdersHeader = () => {
    const location = useLocation()
    //---states
    const [keyword, setKeyword] = useState("")

    return (
        <div>
            <BoxHeader>
                <BoxTitle>
                    <BoxSide></BoxSide>
                    <I3Square
                        size="20"
                        color="#808080"
                    />                  
                    <Name>Orders</Name>
                </BoxTitle>
                <BoxMenu>
                    <ItemLink
                      to={"/new-order"}
                      active={location.pathname === "/new-order"}
                    >
                        New Order
                    </ItemLink>
                    <ItemLink
                      to={"/pending-orders"}
                      active={location.pathname === "/pending-orders"}
                    >
                        Pending
                    </ItemLink>
                    <ItemLink
                      to={"/suspended-orders"}
                      active={location.pathname === "/suspended-orders"}
                    >
                        Suspended
                    </ItemLink>
                    <ItemLink
                      to={"/cancelled-orders"}
                      active={location.pathname === "/cancelled-orders"}
                    >
                        Cancelled
                    </ItemLink>
                    <ItemLink
                      to={"/orders"}
                      active={location.pathname === "/orders"}
                    >
                        All
                    </ItemLink>
                </BoxMenu>

                <BoxSearch>
                    <InputSearch
                        placeholder="Search..."
                        onChange={e => {
                        setKeyword(e.target.value)
                        }}
                        value={keyword}
                        // onKeyUp={(e) => e.key === "Enter" && searchHandler}
                    /> 
                </BoxSearch>
            </BoxHeader>
        </div>
    )
}
