import { ReactNode }                    from "react"
import ModalBootstrap , {ModalProps}    from "react-bootstrap/Modal";

interface Props extends ModalProps {
    children: ReactNode;
}

export const Modal = ({ children, ...rest }: Props) => {
    return (
        <ModalBootstrap {...rest}>
            {children}
        </ModalBootstrap >
    )
}