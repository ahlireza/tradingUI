import React, { useEffect, useState } from "react"
import { Spinner }                    from "react-bootstrap"

import { IconViewer } from "src/components/core/IconViewer"
import { CustomBox }  from "src/components/core/CustomBox"
import { Color }      from "src/definition/color"

import { ReactComponent as Full } from "src/assets/svg/full.svg"
import Down                       from "src/assets/svg/down.svg"

import {
  StyledTable,
  StyledTableWrapper,
  TextTHead,
  TextBody,
} from "./style"

//------------------------------
interface Column {
  id: string
  label: string | React.ReactNode
  width: string | number
  align: "left" | "right" | "center"
  sorting?: boolean
  format?: (value: any) => React.ReactNode
}

interface FlightTableProps {
  headerColor?: string
  tableHead: Column[]
  dataLength: number
  tableData: any[]
  listLoading: boolean
  emptyMessage: string
  background?: string
  fadeInRows?: boolean
  isFullScreen?: boolean
  onRowClick?: (rowData: any) => void
}

//------------------------------
//---Flight Table
//------------------------------
export const FlightTable: React.FC<FlightTableProps> = ({
  tableHead,
  dataLength,
  tableData,
  listLoading,
  emptyMessage,
  fadeInRows = true,
  onRowClick,
  isFullScreen = false,
}: FlightTableProps) => {

  const [sortingColumn, setSortingColumn] = useState<string | null>(null)
  const [sortingOrder, setSortingOrder] = useState<"asc" | "desc">("asc")
  const [tableDataNew, setTableData] = useState<any[]>([])
  const [fullscreen, setFullscreen] = useState(false)

  //------------------------------
  const tableStyles: any = {
    width: fullscreen ? "100vw" : "auto",
    height: fullscreen ? "100%" : "auto",
    position: fullscreen ? "fixed" : "relative",
    top: fullscreen ? "0px" : "auto",
    bottom: fullscreen ? "0px" : "auto",
    left: fullscreen ? "0" : "auto",
    zIndex: fullscreen ? "999" : "auto",
    background: Color.WHITE,
    padding: "0 !important",
    overflow: "auto",
  }
  
  //------------------------------
  //---Toggle Fullscreen
  //------------------------------
  const toggleFullscreen = () => {
    setFullscreen(!fullscreen)
  }

  useEffect(() => {
    setTableData(tableData)
  }, [tableData])

  //------------------------------
  //---Handle Sort
  //------------------------------
  const handleSort = (column: Column) => {
    if (column.sorting) {
      const isAsc = column.id === sortingColumn && sortingOrder === "asc"
      const sortedData = [...tableData].sort((a, b) => {
        let aValue = a[column.id]
        let bValue = b[column.id]

        //---Convert string representations to numbers for numeric comparison
        aValue = isNaN(aValue) ? aValue : parseFloat(aValue)
        bValue = isNaN(bValue) ? bValue : parseFloat(bValue)

        //---Custom comparison function for both string and numeric values
        const compareValues = (value1: any, value2: any): number => {
          if (typeof value1 === "string" && typeof value2 === "string") {
            return isAsc
              ? value1.localeCompare(value2)
              : value2.localeCompare(value1)
          }
          return isAsc
                  ? value1 - value2
                  : value2 - value1
        }
        return compareValues(aValue, bValue)
      })

      setTableData(sortedData)
      setSortingColumn(column.id)
      setSortingOrder(isAsc ? "desc" : "asc")
    }
  }

  //------------------------------
  return (
    <div style={tableStyles}>
      <div>
        <StyledTableWrapper
          style={{
            overflowX: tableData?.length > 10 ? "auto" : "visible",
             maxHeight: fullscreen ? "100%" : "620px"
          }}
        >
          <StyledTable
            className={tableData && fadeInRows ? "fade-in" : "fade-off"}
          >
            {tableData && dataLength && !listLoading ? (
              <>
                <thead style={{minHeight:20}}>
                  <tr>
                    <th style={{ minWidth: 20 }}></th>
                    {tableHead?.map((headCell: Column) => (
                      <th
                        style={{
                          minWidth: headCell.width,
                          textAlign: headCell.align,
                        }}
                        key={headCell.id}
                        align={headCell.align}
                        onClick={() => handleSort(headCell)}
                      >
                        <TextTHead>
                          {headCell.label}
                        </TextTHead>
                        {headCell.sorting && (
                          <IconViewer
                            src={Down}
                            alt={`${Down}`}
                            style={{
                              width: "20px",
                              height: "20px",
                              margin: "0 7px"
                            }}
                          />
                        )}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {tableDataNew?.map((row: any, index: number) => (
                    <tr key={index} style={{height:"0px"}}>
                      <td style={{
                            minWidth: 20,
                            background: row.typeBkg
                          }}
                      >
                      </td>
                      {tableHead?.map((column: Column, key: number) => {
                        return (
                          <td
                            key={key}
                            align={column.align}
                            onClick={() =>
                              onRowClick &&
                              column.id !== "more" &&
                              onRowClick(row)
                            }
                            style={{
                              padding:"0px",
                              textAlign: column.align,
                              borderBottom: "3px solid",
                              borderColor: row.typeBkg
                            }}
                          >
                            <TextBody>
                              {column.format ? column.format(row) : null}
                            </TextBody>
                          </td>
                        )
                      })}
                    </tr>
                  ))}
                    <tr>
                      <td colSpan={tableHead.length + 1} />
                    </tr>
                </tbody>
              </>
            ) : listLoading ? (
              <Spinner animation="border" variant="primary" />
            ) : (
                <tbody style={{ border: "none" }}>
                  <tr>
                    <td colSpan={tableHead.length}>
                      <h4 style={{ textAlign: "start", padding: "0 10px" }}>
                        {emptyMessage}
                      </h4>
                    </td>
                  </tr>
                </tbody>
              )
            }
          </StyledTable>
        </StyledTableWrapper>
      </div>
      <CustomBox
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          background: Color.WHITE,
          width: "90%",
          padding: "25px 24px 36px",
          borderRadius: " 0 0 16px 16px",
        }}
      >
        <CustomBox 
          style={{
            display: "flex",
            alignItems: "center"
          }}
        >
          {isFullScreen && (
            <CustomBox onClick={toggleFullscreen}>
              <Full />
            </CustomBox>
          )}
        </CustomBox>
      </CustomBox>
    </div>
  )
}
