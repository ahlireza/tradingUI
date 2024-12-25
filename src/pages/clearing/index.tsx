import { useState } from "react"
import { Share }    from "iconsax-react"

import { InputSearch }  from "src/components/core/Input/InputSearch"
import { InputSelect }  from "src/components/core/Input/InputSelect"

import {
    BoxHeader,
    BoxTitle,
    BoxSide,
    BoxMenu,
    BoxSearch,
    Name
} from "../style"

//------------------------------
//---Orders Header
//------------------------------
export const Clearing = () => {
    const option = [
        { label: "AUD", value: "AUD" },
        { label: "IRR", value: "IRR" },
        { label: "AED", value: "AED" },
        { label: "CAD", value: "AUD" },
        { label: "EUR", value: "AUD" },
        { label: "TRL", value: "TRL" },
        { label: "USD", value: "USD" },
        { label: "USDT", value: "USDT" },
    ]

    //---states
    const [currency, setCurrency] = useState<{ label: string, value: string } | null>({
        label: "AUD",
        value: "AUD",
      })
      const [searchWord, setSearchWord] = useState("")
    
    //------------------------------
    //---Cussrency filter Handling
    //------------------------------
    const handleCurrency = (filter: any) => {
    }

  //------------------------------
    //---Handle Search
    //------------------------------
    const handleSearch = () => {
        console.log(searchWord)
    }

    //------------------------------
    return (
        <div>
            <BoxHeader>
                <BoxTitle>
                    <BoxSide></BoxSide>
                    <Share
                        size="20"
                        color="#808080"
                    />                  
                    <Name>Clearing</Name>
                </BoxTitle>
                
                <BoxMenu>
                    <InputSelect
                        options={option}
                        label="Currency"
                        style={{ width: "202px" }}
                        name={true}
                        changedesign={true}
                        value={currency?.label}
                        onChange={handleCurrency}          
                    />
                </BoxMenu>
                <BoxSearch>
                    <InputSearch
                        placeholder="Search..."
                        onChange={e => {
                            setSearchWord(e.target.value)
                        }}
                        value={searchWord}
                        onKeyUp={(e) => e.key === "Enter" && handleSearch()}
                    />
                </BoxSearch>
            </BoxHeader>
        </div>
    )
}
