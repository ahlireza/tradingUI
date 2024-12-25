import { MoneyRecive } from "iconsax-react"

import { PageHeader } from "src/components/layout/page-header"

//------------------------------
export const RateHeader = () => {
    const links = []

    //------------------------------
    return (
        <PageHeader
            icon = {MoneyRecive}
            name = "Rate"
            links = {links}
            showOptions = {false}
            showSearch = {false}
        />
    )
}