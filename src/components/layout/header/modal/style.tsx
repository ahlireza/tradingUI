import { CustomBox }  from "src/components/core/CustomBox"
import { styled }     from "styled-components"

import { Typography }   from "src/components/core/Typography"

//------------------------------
export const BoxFooter = styled(CustomBox)`
  display: flex;
  align-items: center;
  justify-content: end;
  margin: 2vw 0 0;
`;

export const BoxInput = styled(CustomBox)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const HRBottom = styled.div`
  width: 45vw;
  height: 1px;
  background: #D9D9D9;
`;

export const HRTop = styled.div`
  width: 45vw;
  height: 1px;
  background: #D9D9D9;
`;

export const Label = styled(Typography)`
  color: #404040;
  font-family: Montserrat;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0.5px;
  margin-left: 1vw;
`;