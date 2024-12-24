import { FC, InputHTMLAttributes, useState, ReactNode } from "react"
import { InputGroup, FormControl }                      from "react-bootstrap"
import styled                                           from "styled-components"

import { CustomBox }    from "../../CustomBox"

interface TextInputProps {
    label?: string
    type: string
    disabled?: boolean
    value?: string
    maxLength?: number
    iconPosition?: "left" | "right"
    icon?: ReactNode
    endIcon?: ReactNode
}

const StyledFormControl = styled(FormControl) <TextInputProps> `
    position: relative;
    padding: 16px;
    border-radius: 10px !important;
    border: none;
    background: #F5F5F5;
    height:10px;
    width: 80%;
    font-size: 12px;

    &::placeholder {
        color: #646464 !important;
        font-size: 12px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }

    &:hover {
        border-color: #646464 !important;
        box-shadow: 0px 0px 11px 0px rgba(172, 214, 236, 0.34);
        background: #F6FBFC !important;
    }

    &:focus-within {
        border: 1px solid #646464 !important;
        background: #FFF !important;
    }

    &:focus-within::placeholder {
        color: #646464 !important;
    }

    ${(props) => props.disabled && `
        color: #9F9F9F;
        border-color: #9F9F9F !important;
        background: #F3F5F5 !important;
        &::placeholder {
            color: #9F9F9F !important;
        }
    `}

    ${(props) => props.error === "true" && `
        border-color: #A42828 !important;
        background: #FBEFEF !important;
        &::placeholder {
            color: #A42828 !important;
        }
    `}
`;

//------------------------------
//---Input Search
//------------------------------
export const InputSearch: FC<TextInputProps & InputHTMLAttributes<HTMLInputElement>> = ({
    label, endIcon, icon,
    type, value, disabled,
    maxLength,
    iconPosition = "right", ...rest }
    : TextInputProps)=> {

    const [, setIsFocused] = useState(false)

    const handleFocus = () => {
        setIsFocused(true)
    }

    //------------------------------
    return (
        <CustomBox style={{
            display: "flex",
            flexDirection: "column",
            marginBottom: "0 !important",
            width: "100%"
            }}>
            
            <InputGroup>
                <StyledFormControl
                    id={label}
                    disabled={disabled}
                    onFocus={handleFocus}
                    value={value}
                    maxLength={maxLength}
                    {...rest}
                />
            </InputGroup>
        </CustomBox>
    )
}
