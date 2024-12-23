import React, { HTMLAttributes, ReactNode } from "react";
import Button, { ButtonProps }              from "react-bootstrap/Button";

import { IconViewer } from "../IconViewer";

interface BtnIcon extends ButtonProps {
    lable: string;
    src: string;
    alt: string;
    style?: React.CSSProperties
}
interface BtnComponentProps extends HTMLAttributes<HTMLDivElement> {
    label: string;
    variant: "outline" | "contained" | "text";
    color?: string;
    style?: React.CSSProperties;
    startIcon?: ReactNode;
    endIcon?: ReactNode;
    disabled?: boolean
}

//------------------------------
//---Button Component
//------------------------------
export const BtnComponent: React.FC<BtnComponentProps> = ({ label, style, variant, color, startIcon,
    endIcon, disabled = false, ...rest }) => {
    let btnStyle;
    switch (variant) {
        case "outline":
            btnStyle = { border: `1px solid ${color}`, color: color };
            break;
        case "text":
            btnStyle = { border: "none", color: color };
            break;
        case "contained":
            btnStyle = { border: "none", backgroundColor: color, color: "#FFF" };
            break;
        default:
            break;
    }

    const customStyle: React.CSSProperties = {
        ...(btnStyle as React.CSSProperties),
        height: "56px",
        width: "80%",
        fontSize: "14px",
        padding: "12px",
        borderRadius: "12px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        ...style,
    };

    if (disabled) {
        // Customize the background color when the button is disabled
        if (variant === "outline") {
            customStyle.color = "#A0A0A0";
            customStyle.border = "1px solid #A0A0A0";
        } else if (variant === "text") {
            customStyle.backgroundColor = "transparent";
            customStyle.color = "#A0A0A0";
            customStyle.border = "none"
        } else if (variant === "contained") {
            customStyle.border = "1px solid #CFCFD0";
            customStyle.backgroundColor = "#F6F6F6";
            customStyle.color = "#A0A0A0";
        }
        customStyle.cursor = "not-allowed";
    }
    return (
        <button style={customStyle as React.CSSProperties} disabled={disabled} {...rest as React.ButtonHTMLAttributes<HTMLButtonElement>}>
            {startIcon && <div style={{ marginRight: "8px", width: "16px", height: "16px" }}>{startIcon}</div>}
            {label}
            {endIcon && <div style={{ marginLeft: "8px", width: "16px", height: "16px" }}>{endIcon}</div>}
        </button>
    );
};

//------------------------------
//---Button Icon
//------------------------------
export const BtnIcon = ({ src, alt, style, lable, ...rest }: BtnIcon) => {
    return (
        <Button {...rest}>
            {lable}
            <IconViewer src={src} alt={alt} style={style} />
        </Button>
    );
};

/* 
_ for example : 
    // Assuming the SVG file is in the same directory
    import SendIcon from "@/assets/search.svg";
    <BtnIcon lable="Demo" src={SendIcon} alt="SendIcon" style={{ width: "20px" }} />
_ for example : 
    import { BtnComponent } from "../Button";
    <BtnComponent disabled={true} endIcon={Refresh} label="برای تست" variant="contained" color="#0B233F" onClick={clickHandler} style={{ marginTop: "20px" }} />
*/