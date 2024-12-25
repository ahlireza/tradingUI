import { MoneyRecive } from "iconsax-react"

import { PageHeader } from "src/components/layout/page-header"

//------------------------------
export const SettlementHeader = () => {
    const links = [
        { to: "/waiting-settlement", label: "Waiting" },
        { to: "/confirmation-settlement", label: "Confirmation" },
    ]

    //------------------------------
    //---Handle Search
    //------------------------------
    const handleSearch = (searchWord) => {
        console.log(searchWord)
    }

    //------------------------------
    return (
        <PageHeader        
            icon={MoneyRecive}
            name="Settlement"
            links={links}
            onSearch={handleSearch}
        />
    )
}