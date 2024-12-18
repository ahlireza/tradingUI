import styled   from "styled-components"
import Form     from "react-bootstrap/Form"

const Label = styled.label`
    display: flex;
    align-items: center;
    font-size: 12px;
    font-weight: 600;
    font-family: sans-serif;
    &:nth-child(2){
        margin: 1em 0!important;
      }
`;

const Input = styled.input`
    margin-right: 8px;
    width: 10px;
    height: 10px; 
    transform: scale(1.5);

    &:checked {
        accent-color: #111827; /* for checked input */
    }
`;

const StyledCheckbox = styled(Form.Check) `
    font-size: 12px;
    font-weight: 600;    
    font-family: sans-serif !important;

    input {
        position: relative;
        border: 1px solid #A0A0A0;
        color: #F00 !important;
        background-color: ${(props) => (props.checked ? "#0B233F" : "transparent")} !important;
        padding: 20px;
        margin-right: 10px;
        width: ${(props) => (props.type === "radio" ? "16px" : "20px")};
        height: ${(props) => (props.type === "radio" ? "16px" : "20px")};
        border-radius: 5px;
        box-shadow: none !important;
        font-weight: 700;
        &:hover {
            border-color: #0B233F;
            box-shadow: 0px 0px 8px 0px rgba(172, 214, 236, 0.45);
        }
        &:focus-within {
            border-color: #0B233F;
            background-color: ${(props) => (props.checked ? "#0B233F" : "#E8E8E8")};
        }
        ${(props) =>
            props.disabled && `
                border-color: #E8E8E8;
                color: #E8E8E8;
                pointer-events: none;
            `}
    }
    label{
        margin: 2em 0 73em 0
    }
`;

//------------------------------
//---Check Box
//------------------------------
export const CheckBox = ({ type = "checkbox", label, value, checked, onChange, radioGroup }) => {
    const handleCheckboxChange = (event) => {
        if (type === "checkbox") {
            onChange(event.target.checked);
        } else if (type === "radio") {
            onChange(event.target.value);
        }
    };

    return (
        <>
        {type !== "checkbox" ? (
            <Label checked={checked}>
                <Input
                    type={type}
                    checked={checked}
                    value={value}
                    onChange={handleCheckboxChange}
                    name={radioGroup}
                />
                {label}
            </Label>
        ):(
            <StyledCheckbox
                type={type}
                label={label}
                checked={checked}
                onChange={handleCheckboxChange}
                name={radioGroup}
            />
        )}
      </>
    );
};
