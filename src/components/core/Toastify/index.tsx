import React, { useEffect }         from "react";
import { useSelector }              from "react-redux";
import { toast, ToastContainer }    from "react-toastify";

import { RootState }    from "@/definition/interfaces";
import { Typography }   from "../Typography";
import { IconViewer }   from "../IconViewer";

// image
import ErrorClose   from "src/assets/svg/closeE.svg";
import InfoClose    from "src/assets/svg/closeI.svg";
import SuccessClose from "src/assets/svg/closeS.svg";
import WarningClose from "src/assets/svg/closeW.svg";
import Error        from "src/assets/svg/error.svg";
import Info         from "src/assets/svg/info.svg";
import Success      from "src/assets/svg/success.svg";
import Warning      from "src/assets/svg/warning.svg";

type ResolvableProps = {
    text: string;
    type: "info" | "success" | "warning" | "error";
    theme?: "light" | "dark";
    isActive: boolean;
};

 export const Toastify: React.FC<ResolvableProps> = ({ text, type, theme, isActive }) => {
    const { isDarkMode } = useSelector((state: RootState) => state?.root);

    useEffect(() => {
        if (isActive) {
            toast[type](<CustomToastContent title={type} message={text} />, {
                theme: isDarkMode ? "dark" : "light",
                className: `toast-${type}`, // Add a custom class based on the type
                icon: <CustomToastIcon type={type} />, // Use a custom icon based on the type
                closeButton: <CustomCloseButton type={type} />, // Use a custom close button
            });
        }
    }, [isActive, text, type, theme, isDarkMode]);

    const containerStyle: React.CSSProperties = {
        padding: "8px 16px",
        display: "block"
    };

    return (
        <ToastContainer
            position="bottom-right"
            autoClose={1000}
            // hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl
            pauseOnFocusLoss
            draggable
            pauseOnHover
            hideProgressBar
            theme={isDarkMode ? "dark" : "light"}
            style={containerStyle}
        />
    );
};

// Custom component for toast content with title
const CustomToastContent: React.FC<{ title: string; message: string }> = ({ title, message }) => {
    let newTitle;
    if (title === "success") {
        newTitle = "موفق"
    } else if (title === "error") {
        newTitle = "خطا"
    } if (title === "info") {
        newTitle = "اطلاعات"
    } if (title === "warning") {
        newTitle = "هشدار"
    }
    return (
        <div>
            <Typography style={{
                fontSize: "14px",
                marginBottom: "0rem",
                color: "#29292A"
            }}>{newTitle}</Typography>
            <Typography style={{
                fontSize: "14px",
                marginBottom: "0rem",
                color: "#6D7B8C"
            }}>{message}</Typography>
        </div>
    );
}

// Custom component for toast icon
const CustomToastIcon: React.FC<{ type: "info" | "success" | "warning" | "error" }> = ({ type }) => (
    <div>
        {/* Customize the icon based on the type */}
        {type === "info" && <IconViewer src={Info} alt="Info" style={{ width: "24px", height: "24px" }} />}
        {type === "success" && <IconViewer src={Success} alt="Success" style={{ width: "24px", height: "24px" }} />}
        {type === "warning" && <IconViewer src={Warning} alt="Warning" style={{ width: "24px", height: "24px" }} />}
        {type === "error" && <IconViewer src={Error} alt="Error" style={{ width: "24px", height: "24px" }} />}
    </div>
);

// Custom component for close button
const CustomCloseButton: React.FC<{ type: "info" | "success" | "warning" | "error" }> = ({ type }) => (
    <div>
        {/* Customize the icon based on the type */}
        {type === "info" && <IconViewer src={InfoClose} alt="InfoClose" style={{ width: "24px", height: "24px" }} />}
        {type === "success" && <IconViewer src={SuccessClose} alt="SuccessClose" style={{ width: "24px", height: "24px" }} />}
        {type === "warning" && <IconViewer src={WarningClose} alt="WarningClose" style={{ width: "24px", height: "24px" }} />}
        {type === "error" && <IconViewer src={ErrorClose} alt="ErrorClose" style={{ width: "24px", height: "24px" }} />}
    </div>
) // Customize the close button icon


/* 
For Example:
    <Toastify text="Success! Operation completed" type="success" isActive={show} />
*/