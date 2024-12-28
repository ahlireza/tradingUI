import { styled }   from "styled-components"
import { Link }     from "react-router-dom"

import { Typography }   from "src/components/core/Typography"
import { CustomBox }    from "src/components/core/CustomBox"

//------------------------------
export const HeaderContainer = styled.header`
    width: 99vw;
    height: 5vw;
    border-radius: 0;
    position: fixed;
    top: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 1vw;
    z-index:10;
`;

export const BoxHeaderStart = styled(CustomBox)`
    margin:0 0;
`;

export const BoxHeader = styled(CustomBox)`
    width: 60vw;
    margin:0 2vw;
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
  margin: 0 0 0 2vw;
`;

export const ItemLink = styled(Link) <{ active: boolean }>`
    text-decoration: none;
    color: ${({ active }) => (active ? "#FFFF00" : "#FFFFFF")};
    font-size: 14px;
    font-style: normal;
    margin: 0 0 0 1vw;
    font-family: Montserrat;
    font-weight:${({ active }) => (active ? "700" : "500")};
`;

export const BoxProfile = styled(CustomBox)`
    margin: 0 0 0 1vw;
    display: flex;
    align-items: center;
`;

export const HR = styled.div`
    width: 1px;
    height: 20px;
    background: #FFFFFF;
    margin:0 0 0 1vw;
`;

export const TextProfile = styled(Typography)`
    color: #FFFFFF;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    font-family: Montserrat;
    padding: 1vw;
`;


