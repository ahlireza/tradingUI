import React from "react"

interface Props {
    src: string | any
    alt: string
    style?: React.CSSProperties
    isDisabled?: boolean // New prop to indicate button state
}

export const IconViewer: React.FC<Props> = ({ src, alt, style, isDisabled, ...rest }) => {
    const iconColor = isDisabled ? "#443088" : "#d9e713";

    return (
        <>
            <img src={src} alt={alt} style={{ ...style, fill: iconColor }} {...rest} />
        </>
    );
};
