import { FC, InputHTMLAttributes, useState, ReactNode } from "react"
import { InputGroup, FormControl }                      from "react-bootstrap"
import styled                                           from "styled-components"

import Eye      from "src/assets/svg/visibility.svg"
import EyeSlash from "src/assets/svg/visibility-off.svg"

import { IconViewer }   from "../../IconViewer"
import { Typography }   from "../../Typography"
import { CustomBox }    from "../../CustomBox"

interface TextInputProps {
    label?: string
    type: string
    disabled?: boolean
    error?: string
    helperText?: string
    value?: string
    maxLength?: number
    iconPosition?: "left" | "right"
    icon?: ReactNode
    endIcon?: ReactNode
}

const StyledFormControl = styled(FormControl) <TextInputProps> `
    position: relative;
    padding: 16px;
    border-radius: 12px !important;
    border: none;
    background: #EDEDED;
    color:#111827;
    height:30px;
    width: 80%;
    box-shadow:none !important;
    font-size: 12px;

    &::placeholder {
        color: #A0AEC0 !important;
        font-size: 12px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }

    &:hover {
        border-color: #0E0E0F !important;
        box-shadow: 0px 0px 11px 0px rgba(172, 214, 236, 0.34);
        background: #F6FBFC !important;
    }

    &:focus-within {
        border: 1px solid #00113C !important;
        background: #FFF !important;
    }

    &:focus-within::placeholder {
        color: #00113C !important;
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

const IconContainer = styled.span<{ position: "left" | "right" }>`
    position: absolute;
    top: 50%;
    left: ${(props) => (props.position === "left" ? "16px" : "auto")};
    right: ${(props) => (props.position === "right" ? "15px" : "auto")};
    transform: translateY(-50%);
    cursor: pointer;
    z-index: 200;
`;

const Lable = styled(Typography)`
    color:  #111827;
    font-family: Montserrat;
    font-size: 12px;
    font-style: normal;
    font-weight: 600;
    margin: 0 0 7px;
`;

//------------------------------
//---Input Text
//------------------------------
export const InputText: FC<TextInputProps & InputHTMLAttributes<HTMLInputElement>> = ({
    label, endIcon, icon,
    type, value, disabled,
    error, maxLength, helperText,
    iconPosition = "right", ...rest }
    : TextInputProps)=> {

    const [showPassword, setShowPassword] = useState(false)
    const [, setIsFocused] = useState(false)

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword)
    }

    const handleFocus = () => {
        setIsFocused(true)
    }

    const handleBlur = () => {
        setIsFocused(false)
    }

    //------------------------------
    return (
        <CustomBox style={{
            display: "flex",
            flexDirection: "column",
            marginBottom: "0 !important",
            width: "100%"
            }}>
        
            {label !== "" && <Lable>{label}</Lable>}
            
            <InputGroup>
                <StyledFormControl
                    type={showPassword ? "text" : type}
                    id={label}
                    disabled={disabled}
                    error={error}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    value={value}
                    maxLength={maxLength}
                    {...rest}
                />
                {type === "password" && (
                    <IconContainer position={iconPosition}>
                        <CustomBox onClick={togglePasswordVisibility}>
                            {showPassword ?
                                <IconViewer src={Eye} alt={"Eye"} style={{ width: "20px" }} />
                                : <IconViewer src={EyeSlash} alt={"EyeSlash"} style={{ width: "20px" }} />
                            }
                        </CustomBox>
                    </IconContainer>
                )}
                {icon && (
                        <IconContainer position={iconPosition}>
                            {icon}
                        </IconContainer>
                    )}
                    {endIcon && (
                        <IconContainer position={"right"}>
                            {endIcon}
                        </IconContainer>
                )}
            </InputGroup>

            <Typography style={{
                    color: "#A42828",
                    padding: "2px 10px 0",
                    fontSize: "12px"
                }}>{helperText}
            </Typography>
        </CustomBox>
    )
}
