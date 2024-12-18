import styled           from "styled-components"

import { Typography }   from "src/components/core/Typography"
import { CustomBox }    from "src/components/core/CustomBox"

export const BoxHeader = styled(CustomBox)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin:5px 20px;
  
  @media (max-width: 990px) {
    flex-direction: column;
  }
`;

export const BoxHeaderItem = styled(CustomBox)`
  display: flex;
  align-items: center;
  
  @media (max-width: 990px) {
    width:100%;
    justify-content: space-between;
  }
    @media (max-width: 540px) {
    flex-direction: column;
  }
`;

export const Name = styled(Typography)`
  color: #000000;
  font-family: Montserrat;
  font-size: 18px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  letter-spacing: 0.3px;

  @media (max-width: 990px) {
    font-size: 24px;
  }
  @media (max-width: 540px) {
    font-size: 20px;
  }
`;

