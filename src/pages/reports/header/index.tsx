import { DirectboxNotif } from "iconsax-react"

import { PageHeader } from "src/components/layout/page-header"

//------------------------------
export const ReportsHeader = () => {
    const links = [
        { to: "/treasury-reports", label: "Treasury" },
        { to: "/deal-reports", label: "Deals" },
        { to: "/payments-reports", label: "Payments" },
        { to: "/aml-reports", label: "AML" },
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
            icon = {DirectboxNotif}
            name = "Reports"
            links = {links}
            showOptions = {false}
            onSearch = {handleSearch}
        />
    )
}