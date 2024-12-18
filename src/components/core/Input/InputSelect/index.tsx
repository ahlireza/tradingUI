import React, { ReactNode, useEffect, useState, useRef } from "react";

import { Typography } from "../../Typography";

import { ReactComponent as Down } from "src/assets/svg/down.svg"

import {
    SelectButton,
    CustomSelect,
    DeleteIcon,
    DropdownList,
    DropdownItem,
    Text,
} from "./style"

import { ReactComponent as Close } from "src/assets/svg/close.svg"

interface InputSelectProps {
    options: { value: string | number; label: ReactNode | number }[];
    onChange?: (value: any) => void;
    value?: string | number; // Allow both string and number as the value
    label: string; // Change "lable" to "label"
    style?: React.CSSProperties;
    changedesign?: boolean;
    clear?: any;
    name?: boolean;
    bgcolor?: boolean;
    error?: boolean;
    helperText?: string;
    main: true | false;
    height?: true | false;
}

//------------------------------
//---Input Select
//------------------------------
export const InputSelect: React.FC<InputSelectProps> = ({ helperText, error = false, height = false, main = false, clear, name = false, bgcolor = false, changedesign = false, options, onChange, value, style, label = "انتخاب کنید", ...rest }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState(value || "");
    const dropdownRef = useRef<HTMLDivElement | null>(null);
    const handleItemClick = (item: any) => {
        setSelectedItem(item.label);
        setIsOpen(false);
        if (onChange) {
            onChange(item);
        }
    };

    const handleDeleteClick = () => {
        setSelectedItem("");
        if (clear !== undefined) {
            clear()
        }
    };

    const handleClickOutside = (event: Event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener("click", handleClickOutside);
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);

    return (
        <>
            <CustomSelect ref={dropdownRef} style={style}>
                <SelectButton
                    onClick={() => setIsOpen(!isOpen)}
                    hasvalue={selectedItem.toString()}
                    bgcolor={bgcolor.toString()}
                    height={height.toString()}
                    changedesign={changedesign.toString()}
                    error={error.toString()}
                    {...rest}
                >
                    <Text style={{ fontWeight: main ? 700 : 500 }}>{name ? (
                        <div style={{ display: "flex" }}><p style={{ margin: "0 5px", color: "#A0AEC0" }}>Show : </p>{selectedItem}</div>
                    ) : selectedItem || label}</Text>
                    {selectedItem === "string" ? (
                        <DeleteIcon onClick={handleDeleteClick}><Close /></DeleteIcon>
                    ) : (
                        <Down style={{ margin: "5px 0 0 5px" }} />
                    )}
                </SelectButton>
                <DropdownList isopen={isOpen.toString()}>
                    {options.map((item, index) => (
                        <DropdownItem
                            key={index}
                            onClick={() => handleItemClick(item)}
                        >
                            <Typography style={{ margin: 0 }}>{item.label}</Typography>
                        </DropdownItem>
                    ))}
                </DropdownList>
            </CustomSelect>
            <Typography style={{
                color: "#A42828",
                padding: "2px 10px 0",
                fontSize: "14px"
            }}>{helperText}</Typography>
        </>
    );
};


/* 
For Example : 
  const [selectedValue, setSelectedValue] = useState("");
  const options = [
    { value: "1", label: "One" },
    { value: "2", label: "Two" },
  ];
  const handleSelectChange = (selectedValue: string) => {
    setSelectedValue(selectedValue)
    // Handle the selected value as needed
  };
    <Select options={options} onChange={handleSelectChange} />
*/