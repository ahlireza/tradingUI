import React, { ReactNode, CSSProperties } from "react"

interface TypographyProps {
    variant?: "regular" | "bold"
    style?: CSSProperties
    fontFamily?: string
    children: ReactNode
    onClick?:() => void
}

export const Typography: React.FC<TypographyProps> = ({
    variant = "regular",
    style,
    fontFamily,
    children,
    onClick,
    ...rest
}: TypographyProps) => {
    const getFontFamily = () => {
        switch (variant) {
            case "bold":
                return fontFamily || "Montserrat-Bold, sans-serif";
            default:
                return fontFamily || "Montserrat-Regular, sans-serif";
        }
    };

    const textStyle: CSSProperties = {
        fontFamily: getFontFamily(),
        marginBottom: "0 !important",
        ...style,
    };

    return <p style={textStyle} onClick={onClick} {...rest}>{children}</p>;
};
