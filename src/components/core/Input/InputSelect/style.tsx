import { styled }       from "styled-components";
import { Typography }   from "../../Typography";

const SelectButton = styled.button<{ height: string, hasvalue: string, changedesign: string, bgcolor: string, error: string }>`
  border-radius: 12px;
  border: ${(props) => (props.changedesign === "true" ? "none" : "1px solid #EEEFF2")};
  background: ${(props) => (props.bgcolor === "true" ? "#FAFAFA" : "#FFF")};
  // background: #FFF;
  height:  ${(props) => (props.height === "true" ? "56px" : "48px")};
  width: 100%;
  text-align: right;
  padding:12px 12px ;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  color: ${(props) => (props.hasvalue === "true" ? "#101112" : "#888989")};
  &:focus{
    border: 1px solid #0B233F
  }

  ${(props) => props.error === "true" && `
    border-color: #A42828 !important;
    background: #FBEFEF !important;
    &::placeholder {
        color: #A42828 !important;
    }
`}
`;

const CustomSelect = styled.div`
  position: relative;
  /* width: 100%; */
  @media (max-width: 768px) {
    width: 100% !important;
  }
`;

const DeleteIcon = styled.span`
  margin-top: -2px;
  cursor: pointer;
`;

const DropdownList = styled.ul<{ isopen: string }>`
  list-style: none;
  padding: 0;
  margin: 0;
  position: absolute;
  top: 50px;
  left: 0;
  width: 100%;
  border-radius: 8px;
  max-height: 300px;
  overflow-x: auto;
  border: 1px solid #E8E8E8;
  background: #FFF;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  display: ${(props) => (props.isopen === "true" ? "block" : "none")};
  z-index: 2;
`;

const DropdownItem = styled.li`
  padding: 12px;
  font-family: Vazir;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  color: #888989;
  cursor: pointer;

  &:hover {
    background: #F7FBFE;
    color: #101112;

    &:first-child{
        border-radius: 24px 24px 0 0;
    }
    &:last-child{
        border-radius: 0 0 24px 24px;
    }
  }
`;
const Text = styled(Typography)`
  color: #111827;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  margin: 0;
`;

export {
  SelectButton,
  CustomSelect,
  DeleteIcon,
  DropdownList,
  DropdownItem,
  Text
}
