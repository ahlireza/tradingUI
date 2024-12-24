import { Scanning } from "iconsax-react"

import {
    BoxHeader,
    BoxTitle,
    BoxSide,
    Name
} from "../style"

//------------------------------
//---Orders Header
//------------------------------
export const Dashboard = () => {
    return (
        <div>
            <BoxHeader>
                <BoxTitle>
                    <BoxSide></BoxSide>
                    <Scanning
                        size="20"
                        color="#808080"
                    />                  
                    <Name>Dashboard</Name>
                </BoxTitle>
            </BoxHeader>
        </div>
    )
}
