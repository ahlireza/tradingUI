import { FC, ReactNode, HTMLAttributes } from "react"

interface Props extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode
}

export const CustomBox: FC<Props> = ({ children, ...rest }) => {
    return (
        <div {...rest} >{children}</div>
    )
}
