import { User } from "iconsax-react"

import { PageHeader } from "src/components/layout/page-header"

//------------------------------
export const CustomersHeader = () => {
    const links = [
        { to: "/overview-customer", label: "Overview" },
        { to: "/orders-customer", label: "Orders" },
        { to: "/credit", label: "Credit" },
        { to: "/profile", label: "Profile" },
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
            icon = {User}
            name = "Customers"
            links = {links}
            showOptions = {false}
            onSearch = {handleSearch}
        />
    )
}