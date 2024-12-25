import { useLocation }  from "react-router-dom"
import { useState }     from "react"

import { InputSearch }    from "src/components/core/Input/InputSearch"


import {
    BoxHeader,
    BoxTitle,
    BoxSide,
    BoxMenu,
    BoxSearch,
    Name,
    ItemLink
} from "./style"

//------------------------------
//---Page Header
//------------------------------
export const PageHeader = ({icon: Icon, name, links, onSearch, showSearch = true} ) => {
    const location = useLocation()
    //---states
    const [searchWord, setSearchWord] = useState("")

    //------------------------------
    //---Handle Search
    //------------------------------
    const handleSearch = () => {
        onSearch(searchWord)
    }

    //------------------------------
    return (
        <BoxHeader>
            <BoxTitle>
                <BoxSide/>
                {Icon && <Icon size="20" color="#808080" aria-hidden="true" />}                
                <Name>{name}</Name>
            </BoxTitle>
            <BoxMenu>
                {links.map((link, index) => (
                    <ItemLink
                        key={index}
                        to={link.to}
                        active={location.pathname === link.to}
                    >
                        {link.label}
                    </ItemLink>                  
                ))}
            </BoxMenu>

                <BoxSearch>
                    {showSearch && (
                        <InputSearch
                            placeholder="Search..."
                            onChange={e => {
                                setSearchWord(e.target.value)
                            }}
                            value={searchWord}
                            onKeyUp={(e) => e.key === "Enter" && handleSearch()}
                        />
                    )}
                </BoxSearch>
        </BoxHeader>
    )
}
