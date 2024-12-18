import React from "react"
import TextField from "@mui/material/TextField"
import Autocomplete from "@mui/material/Autocomplete"
import { Popper } from "@mui/material"

//------------------------------
//---Select Props Types
//------------------------------
interface SelectOption {
    id: number
    title: string
}

//------------------------------
//---Select Props Types for AutocompleteComponent
//------------------------------
interface SelectComponentProps {
    options: any
    label?: string
    placeholder?: string
    onChange: any
    value: SelectOption | null
    renderOption?: (props: React.HTMLProps<HTMLElement>, option: any) => any
    getOptionLabel?: (option: any) => string
}

//------------------------------
//---Select
//------------------------------
export const Select: React.FC<SelectComponentProps> = ({
    options,
    label,
    onChange,
    value,
    renderOption,
    placeholder,
    getOptionLabel = (option) => option.title,
    ...props
}) => {
    return (
        <Autocomplete
            PopperComponent={(props) => (
                <Popper
                    {...props}
                    sx={{
                        "& .MuiAutocomplete-listbox": {
                            fontSize: "12px",
                            backgroundColor: "#fff",
                            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                            maxHeight: "100px"
                        },
                        "& .MuiAutocomplete-option:hover": {
                            fontSize: "12px",
                            backgroundColor: "#F9F9F9 !important",
                        },
                        ".MuiAutocomplete-listbox .MuiAutocomplete-option[aria-selected='true']":
                        {
                            fontSize: "12px",
                            backgroundColor: "#fff !important",
                        },
                        ".MuiAutocomplete-listbox .MuiAutocomplete-option[aria-selected='true']:hover":
                        {
                            fontSize: "12px",
                            backgroundColor: "#F9F9F9 !important",
                        },
                        "& .MuiAutocomplete-listbox .MuiAutocomplete-option[aria-selected='true'].Mui-focused":
                        {
                            fontSize: "12px",
                            backgroundColor: "#fff !important",
                        },
                        "& .MuiAutocomplete-listbox .MuiAutocomplete-option[aria-selected='true'].Mui-focused:hover":
                        {
                            fontSize: "12px",
                            backgroundColor: "#F9F9F9 !important",
                        },
                    }}
                />
            )}
            sx={[
                {
                    direction: "ltr !important",
                    width: "auto",
                    "& .MuiAutocomplete-root": {
                        border: "none !important",
                        borderRadius: "1em !important",
                    },
                    "& .MuiAutocomplete-hasPopupIcon": {
                        border: "none !important",
                        borderRadius: "1em !important",

                    },
                    "& .MuiAutocomplete-input":{
                        fontSize: "12px",
                    },
                    "& .MuiOutlinedInput-root": {
                        "& fieldset": {
                            border: "none",
                            borderRadius: "1em !important",

                        },
                    },
                    "& .MuiTextField-root": {
                        background: "#EDEDED",
                        borderRadius: "1em",
                    },
                    "& > *": {
                        fontSize: "1em !important",
                    },

                    "& .MuiInput-input": {
                        color: "var(--primary)",
                        fontWeight: "500",
                        fontSize: "1em",
                        cursor: "pointer",
                    },
                    "& .MuiInput-input.Mui-disabled": {
                        fontWeight: "600",
                    },
                    "& .MuiInputLabel-root": {
                        color: `${"#000"} !important`,
                        xs: {
                            fontSize: "1em",
                            color: `${"#000"
                                } !important`,
                        },
                        md: {
                            fontSize: "1em",
                            color: `${"#000"
                                } !important`,
                        },
                        xl: {
                            fontSize: "1em",
                        },
                    },
                    "& .MuiInputLabel-root.Mui-focused": {
                        fontSize: "1em",
                        direction: "ltr !important",
                    },
                    "& .MuiInput-root:before": {
                        direction: "ltr !important",
                        borderBottom: `0.0625em solid  "red"
                            } !important`,
                    },
                    "& .MuiInput-root": {
                        direction: "ltr !important",
                        "&:after": {
                            borderBottom: `0.0625em solid  "#4C4C4C"
                                }`,
                        },
                    },
                    "&.MuiPopper-root .MutAutocomplete-popper": {
                        direction: "ltr !important",

                    },
                    "& .MuiAutocomplete-inputRoot": {
                        marginTop: "1.85em !important",
                    },
                    "& .MuiAutocomplete-listbox .MuiAutocomplete-option": {
                        backgroundColor: "red !important",
                    },
                    "&.MuiAutocomplete-listbox": {
                        background: "#fff !important",
                        backgroundColor: "#fff !important",
                    },
                    "&.MuiBox-root": {
                        backgroundColor: "#F9F9F9 !important",

                    },
                    "& .MuiAutocomplete-listbox .MuiAutocomplete-option[aria-selected='true'].Mui-focused":
                    {
                        backgroundColor: "red !important",
                    },
                },
            ]}
            options={options}
            value={value}
            onChange={(event, newValue) => onChange(newValue)}
            getOptionLabel={getOptionLabel}
            renderOption={renderOption}
            renderInput={(params) => (
                <TextField
                    {...params}
                    label={label}
                    placeholder={placeholder}
                    variant="outlined"
                    size="small"
                />
            )}
            {...props}
        />
    )
}

