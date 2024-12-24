import { styled }   from "styled-components"
import { Link }     from "react-router-dom"

import { Typography }   from "src/components/core/Typography"
import { CustomBox }    from "src/components/core/CustomBox"

//------------------------------
export const HeaderContainer = styled.header`
    height: 70px;
    border-radius: 0;
    position: fixed;
    top: 0;
    right: 0;
    width: calc(100% - 20px);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 30px;
    z-index:10;
`;

export const BoxHeaderStart = styled(CustomBox)`
    margin:0px 0;
`;

export const BoxHeader = styled(CustomBox)`
    width: 100%;
    margin:0 50px;
`;

export const BoxHeaderEnd = styled(CustomBox)`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const BoxLogo = styled(CustomBox)`
  display: flex;
  align-items: center;
  width: 100%;
  margin: 0 0 0 30px;
`;

export const ItemLink = styled(Link) <{ active: boolean }>`
    text-decoration: none;
    color: ${({ active }) => (active ? "#FFFF00" : "#FFFFFF")};
    font-size: 14px;
    font-style: normal;
    margin: 0 0 0 10px;
    font-family: Montserrat;
    font-weight:${({ active }) => (active ? "700" : "500")};
`;

export const BoxProfile = styled(CustomBox)`
    margin: 0 0 0 10px;
    display: flex;
    align-items: center;
`;

export const HR = styled.div`
    width: 1px;
    height: 20px;
    background: #FFFFFF;
    margin:0 1px 0 10px;
`;

export const TextProfile = styled(Typography)`
    color: #FFFFFF;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    font-family: Montserrat;
    margin: 0 5px 0 0;
    padding: 10px;
`;


