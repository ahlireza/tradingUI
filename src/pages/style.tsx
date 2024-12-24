import { styled } from "styled-components"
import { Link }   from "react-router-dom"


import { Typography }   from "src/components/core/Typography"
import { CustomBox }    from "src/components/core/CustomBox"

//------------------------------
export const MainContainer = styled.main`
  margin-top: 70px;
  display: flex;
  justify-content: left;
`;

export const BoxHeader = styled(CustomBox)`
  width: 100%;
  display: flex;
  justify-content: space-between;
  position: relative;
  align-items: center;
  position: relative;
`;

export const BoxTitle = styled(CustomBox)`
  width: 200px;
  background: #F5F5F5;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: relative;
`;

export const BoxSide = styled(CustomBox)`
  height: 50px;
  border: 3px solid #966432;
  margin-right: 10px;
`;

export const BoxMenu = styled(CustomBox)`
  width: calc(100% - 200px);
  height: 55px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100vw;
    height: 3px;
    background-color: #F5F5F5;  
  }
`;

export const BoxSearch = styled(CustomBox)`
  width: 300px;
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
  font-size: 16px;
  font-weight: 800;
  letter-spacing: 0.5px;
  margin-left: 10px;
`;

export const ItemLink = styled(Link) <{ active: boolean }>`
    text-decoration: none;
    color: ${({ active }) => (active ? "#FF9664" : "#646464")};
    font-size: 14px;
    font-style: normal;
    margin: 0 0 0 20px;
    font-family: Montserrat;
    font-weight:${({ active }) => (active ? "700" : "500")};
`;
