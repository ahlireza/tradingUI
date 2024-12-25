import { useLocation }  from "react-router-dom"
import { useState }     from "react"

import { InputSearch }  from "src/components/core/Input/InputSearch"
import { InputSelect }  from "src/components/core/Input/InputSelect"


import {
    BoxHeader,
    BoxTitle,
    BoxSide,
    BoxMenu,
    BoxOptions,
    BoxSearch,
    Name,
    ItemLink
} from "./style"

//------------------------------
type Link = {
    to: string,
    label: string
}

type FilterOption = {
    label: string
    value: string
}

type PageHeaderProps = {
    icon?: React.ComponentType<{ size: string, color: string, "aria-hidden": boolean }>
    name: string
    links: Link[]
    options?: FilterOption[]
    optionsLabel: string
    onOptionsChange?: (selectedFilter: string) => void
    showOptions?: boolean
    onSearch: (searchTerm: string) => void
    showSearch?: boolean
}

//------------------------------
//---Page Header
//------------------------------
export const PageHeader = ({
    icon: Icon,
    name,
    links = [],
    options = [],
    optionsLabel = "Filter",
    onOptionsChange = () => {},
    showOptions = false,    
    onSearch = () => {}, 
    showSearch = true
}: PageHeaderProps ) => {

    const location = useLocation()
    //---states
    const [searchWord, setSearchWord] = useState("")
    const [selectedFilter, setSelectedFilter] = useState(options[0]?.value || "")

    //------------------------------
    //---Handle Filtering
    //------------------------------
    const handleFilterChange = (value: string) => {
        setSelectedFilter(value)
        onOptionsChange(value)
    }

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
                {showOptions && options.length > 0 && (
                    <BoxOptions>
                        <InputSelect
                            options={options}
                            label={optionsLabel}
                            name={true}
                            changedesign={true}
                            value={selectedFilter}
                            onChange={(e) => handleFilterChange(e.target.value)}
                        />
                    </BoxOptions>
                )}
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
