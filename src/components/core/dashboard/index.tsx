import React    from "react"

import {
    BoxInput,
    Lable
} from "./style"

//------------------------------
interface Column {
    id: string
    label: string | React.ReactNode
    width: string | number
    align: "left" | "right" | "center"
    format?: (value: any) => React.ReactNode
  }
  
  interface TripDashboardProc {
  truck: string
  driver: string
  offsider: string
  tableHead: Column[]
  dataLength: number
  tableData: any[]
  emptyMessage: string
}

//------------------------------
//---Trip dashboard Table
//------------------------------
export const TripDashboard: React.FC<TripDashboardProc> = ({
    truck,
    driver,
    offsider
}: TripDashboardProc) => { 
      
    //------------------------------
    return (
        <div>
            <BoxInput>
                <Lable
                    style={{
                        fontWeight: "800",
                        padding: "10px 20px",
                    }}
                >
                    Truck {truck}
                </Lable>
                <Lable style={{ padding: "10px 20px" }}>
                    {driver} / {offsider}
                </Lable>
            </BoxInput>
        </div>
    )
}
