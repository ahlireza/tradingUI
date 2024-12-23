import { styled }       from "styled-components"

import {Typography }    from "src/components/core/Typography"
import { CustomBox }    from "src/components/core/CustomBox"


export const BoxInput = styled(CustomBox)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Lable = styled(Typography)`
  color: #111827;
  font-family: Montserrat;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  margin: 0 0 7px;
`;
