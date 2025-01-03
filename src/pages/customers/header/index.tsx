import { UserSquare } from "iconsax-react"

import { PageHeader } from "src/components/layout/page-header"

//------------------------------
export const CustomersHeader = () => {
    const links = []

    //------------------------------
    //---Handle Search
    //------------------------------
    const handleSearch = (searchWord: any) => {
        console.log(searchWord)
    }

    //------------------------------
    return (
        <PageHeader
            icon = {UserSquare}
            name = "Customers"
            links = {links}
            showOptions = {false}
            onSearch = {handleSearch}
        />
    )
}