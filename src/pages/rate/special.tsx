import React, { useState } from "react"
import { Popconfirm } from "antd";

import { EditableTable }    from "src/components/core/Table/EditableTable"

interface DataType {
    key: React.Key
    amount: number
    over: number
    rate: number
}

//------------------------------
//---Special Rate
//------------------------------
export const SpecialRate: React.FC = () => {
    const [dataSource, setDataSource] = useState<DataType[]>([{
        key: "defaultRow",
        amount: 2000,
        over: 0,
        rate: 0,
    }])

    //------------------------------
    const handleAdd = () => {
        const newRow = {
            key: Date.now(),
            amount: 1000,
            over: 0,
            rate: 0,
        }
        setDataSource([...dataSource, newRow])
    }

    //------------------------------
    const handleUpdate = (row: DataType) => {
        setDataSource((prev) =>
            prev.map((item) => (item.key === row.key ? { ...item, ...row } : item))
        )
    }

    //------------------------------
    const handleDelete = (key: React.Key) => {
        if (key === "defaultRow") return
        setDataSource((prev) => prev.filter((item) => item.key !== key))
    }

    //------------------------------
    const columns = [
    {
      title: "Amount",
      dataIndex: "amount",
      editable: true,
      width: "9vw",
      align: "center"
    },
    {
      title: "Over",
      dataIndex: "over",
      editable: true,
      width: "7w",
      align: "center"
    },
    {
      title: "Rate",
      dataIndex: "rate",
      editable: false,
      width: "12vw",
      align: "center"
    },
    {
      title: "",
      dataIndex: "action",
      render: (_: any, record: DataType) => (
        <a onClick={() => handleDelete(record.key)}>-</a>
      ),
    },
    {
        title: "",
        dataIndex: "action",
        render: (_: any, record: DataType) => (
          <a onClick={() => handleAdd()}>+</a>
        ),
      }
    ]

    //------------------------------
    return (
        <EditableTable<DataType>
            columns={columns}
            dataSource={dataSource}
            lable="New Special Rate"
            onRowUpdate={handleUpdate}
            onRowDelete={handleDelete}
            onAddRow={handleAdd}
        />
    )
}
