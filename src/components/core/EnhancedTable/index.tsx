import React, { useEffect, useMemo, useState } from "react"
import { Spinner } from "react-bootstrap"
import {
  FormControl,
  MenuItem,
  Pagination,
  Select
} from "@mui/material"

import { Color } from "src/definition/color"

import {
  StyledTableWrapper,
  StyledTable,
  TextBody,
  TextTHead,
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

interface EnhancedTableProps {
  headerColor?: string
  tableHead: Column[]
  dataLength: number
  tableData: any[]
  listLoading: boolean
  emptyMessage: string
  background?: string
  fadeInRows?: boolean
  pageSize: number
  pageIndex: number
  rowsPerPageOptions?: number[]
  handlePageChange: (newPage: number) => void
  setPageSize: (pageSize: number) => void
  setPageIndex: (pageIndex: number) => void
  isFullScreen?: boolean
  onRowClick?: (rowData: any) => void
}

//------------------------------
//---Enhanced Table
//------------------------------
export const EnhancedTable: React.FC<EnhancedTableProps> = ({
  tableHead,
  dataLength,
  tableData,
  listLoading,
  emptyMessage,
  // fadeInRows = true,
  onRowClick,
  // background = Color.WHITE,
  pageSize,
  pageIndex,
  rowsPerPageOptions = [5, 10, 25],
  handlePageChange,
  setPageSize,
  setPageIndex,
  isFullScreen = false,
}: EnhancedTableProps) => {

  // const [sortingColumn, setSortingColumn] = useState<string | null>(null)
  // const [sortingOrder, setSortingOrder] = useState<"asc" | "desc">("asc")
  const [tableDataNew, setTableData] = useState<any[]>([])

  //------------------------------
  const tableStyles: any = {
    width: isFullScreen ? "100vw" : "auto",
    height: isFullScreen ? "100vh" : "auto",
    position: isFullScreen ? "fixed" : "relative",
    top: isFullScreen ? "0px" : "auto",
    bottom: isFullScreen ? "0" : "auto",
    left: isFullScreen ? "0" : "auto",
    zIndex: isFullScreen ? "999" : "auto",
    background: Color.WHITE,
    padding: "10px 0 0 0 ",
  }

  //------------------------------
  useEffect(() => {
    setTableData(tableData)
  }, [])
  useEffect(() => {
    setTableData(tableData)
  }, [tableData])

  useEffect(() => {
    handlePageChange(pageIndex)
  }, [pageSize, pageIndex])

  //------------------------------
  //---Handle Page Rows per Page
  //------------------------------
  const handleChangeRowsPerPage = (selectedPageSize: number) => {
    setPageSize(selectedPageSize)
    setPageIndex(1)
  }

  //------------------------------
  //---Pagination Handeling
  //------------------------------

  const paginatedRows = useMemo(() => {
    const startIdx = (pageIndex - 1) * pageSize
    return tableData.slice(startIdx, startIdx + pageSize)
  }, [tableData, pageIndex, pageSize])

  useEffect(() => {
    handlePageChange(pageIndex)
  }, [pageIndex, pageSize])

  const handleChangePage = (event: any, newPage: number) => {
    setPageIndex(newPage)
    handlePageChange(newPage)
  }

  useEffect(() => {
    setTableData(tableData)
  }, [tableData, pageIndex])


  //------------------------------
  return (
    <div style={tableStyles}>
      <div>

        <StyledTableWrapper style={{ overflowX: tableDataNew.length > 10 ? 'auto' : 'visible' }}>
          <StyledTable className={tableDataNew ? 'fade-in' : 'fade-off'}>
            {tableDataNew && tableDataNew.length && !listLoading ? (
              <>
                <thead style={{ minHeight: 20 }}>
                  <tr>
                    <th style={{ minWidth: 20 }}></th>
                    {tableHead?.map((headCell) => (
                      <th
                        style={{ minWidth: headCell.width, textAlign: headCell.align }}
                        key={headCell.id}
                      >
                        <TextTHead>{headCell.label}</TextTHead>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {paginatedRows.map((row, index) => (
                    <tr key={index}>
                      <td style={{ minWidth: 20 }}></td>
                      {tableHead.map((column, key) => (
                        <td
                          key={key}
                          align={column.align}
                          onClick={() => onRowClick && column.id !== 'more' && onRowClick(row)}
                          style={{ textAlign: column.align, borderBottom: '1px solid grey' }}
                        >
                          <TextBody>{column.format ? column.format(row) : null}</TextBody>
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </>
            ) : listLoading ? (
              <Spinner animation="border" variant="primary" />
            ) : (
              <tbody>
                <tr>
                  <td colSpan={tableHead.length}>
                    <h4 style={{ textAlign: 'start', padding: '0 10px' }}>{emptyMessage}</h4>
                  </td>
                </tr>
              </tbody>
            )}
          </StyledTable>
        </StyledTableWrapper>

        {/* Pagination Component */}
        <div style={{ marginTop: "1em", display: "flex", flexDirection: "row-reverse", justifyContent: "space-between", alignItems: "baseline" }}>
          <div>
            <Pagination
              sx={{
                "& .MuiPaginationItem-root.Mui-selected": {
                  backgroundColor: "rgb(231, 247, 239)",
                  color: "#000",
                },
                "& .MuiPaginationItem-root.Mui-selected:hover": {
                  backgroundColor: "rgb(231, 247, 239)",
                  color: "#000"
                }
              }}
              count={Math.ceil(dataLength / pageSize)}
              page={pageIndex}
              onChange={handleChangePage}
              color="primary"
              style={{ marginTop: 20 }}
            />
          </div>
          {/* Rows Per Page Select */}
          <div style={{ display: 'flex', justifyContent: 'flex-start', marginBottom: 10 }}>
            <FormControl variant="outlined" size="small" style={{ marginLeft: 30 }}>
              <Select
                labelId="rows-per-page-label"
                id="rows-per-page-select"
                value={pageSize}
                onChange={(e) => handleChangeRowsPerPage(Number(e.target.value))}
              >
                {rowsPerPageOptions.map((option) => (
                  <MenuItem key={option} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <TextTHead style={{ marginLeft: 10 }}>Rows per Page</TextTHead>
          </div>
        </div>
      </div>
    </div>
  )
}
