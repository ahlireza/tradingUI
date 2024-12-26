import { styled } from "styled-components"
import { Link }   from "react-router-dom"

import { Typography }   from "src/components/core/Typography"
import { CustomBox }    from "src/components/core/CustomBox"

//------------------------------
export const BoxHeader = styled(CustomBox)`
  width: 100vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 3px solid #F5F5F5;
`;

export const BoxTitle = styled(CustomBox)`
  width: 12vw;
  background: #F5F5F5;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const BoxSide = styled(CustomBox)`
  height: 50px;
  border: 3px solid #966432;
  margin-right: 10px;
`;

export const BoxMenu = styled(CustomBox)`
  width: 68vw;
  height: 55px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const BoxOptions = styled(CustomBox)`
  width: 20vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  margin-left: Auto;
`;

export const BoxSearch = styled(CustomBox)`
  width: 20vw;
  background: #FFFFFF;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  margin-left: Auto;
`;

export const Name = styled(Typography)`
  color: #000000;
  font-family: Montserrat;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0.5px;
  margin-left: 1vw;
`;

export const ItemLink = styled(Link) <{ active: boolean }>`
    text-decoration: none;
    color: ${({ active }) => (active ? "#966432" : "#646464")};
    font-size: 14px;
    font-style: normal;
    margin: 0 0 0 20px;
    font-family: Montserrat;
    font-weight:${({ active }) => (active ? "700" : "500")};
`;
