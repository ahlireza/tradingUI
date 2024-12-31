import { styled } from "styled-components"

import { Typography }   from "src/components/core/Typography"
import { CustomBox }    from "src/components/core/CustomBox"

//------------------------------
export const RowContainer = styled(CustomBox)`
  width: 99vw;
  display: flex;
  justify-content: space-between;
  align-items: left;
`;

export const BoxContainer = styled(CustomBox)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 5px solid #F5F5F5;
`;

export const BoxHeader = styled(CustomBox)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 3px solid #F5F5F5;
`;

export const YellowLine = styled.span`
  position: relative;
  &::after {
    content: "";
    position: absolute;
    bottom: -3px;
    left: 0;
    width: 100%;
    height: 3px;
    background-color: #966432;
  }
`;

export const BoxContent = styled(CustomBox)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

//------------------------------
export const Header = styled(Typography)`
  color: #282828;
  font-family: Montserrat;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0.5px;
`;

export const Title = styled(Typography)`
  color: #646464;
  font-family: Montserrat;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.5px;
  margin-left: 1vw;
`;

export const Content = styled(Typography)`
  color: #282828;
  font-family: Montserrat;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.5px;
`;
