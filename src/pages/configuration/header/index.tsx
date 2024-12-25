import { Task } from "iconsax-react"

import { PageHeader } from "src/components/layout/page-header"

//------------------------------
export const ConfigHeader = () => {
    const links = [
        { to: "/currency-config", label: "Currencies" },
        { to: "/countries-config", label: "Countries" },
        { to: "/users-config", label: "Users" },
    ]

    //------------------------------
    //---Handle Search
    //------------------------------
    const handleSearch = (searchWord: any) => {
        console.log(searchWord)
    }

    //------------------------------
    return (
        <PageHeader
            icon = {Task}
            name = "Configuratuion"
            links = {links}
            showOptions = {false}
            onSearch = {handleSearch}
        />
    )
}