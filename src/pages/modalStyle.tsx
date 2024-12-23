import { styled }       from "styled-components"

import {Typography }    from "src/components/core/Typography"
import { CustomBox }    from "src/components/core/CustomBox"



export const BoxHeader = styled(CustomBox)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin:5px 20px;
`;

export const Name = styled(Typography)`
  color: #000;
  font-family: Montserrat;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.3px;
`;

export const BoxFooter = styled(CustomBox)`
  display: flex;
  align-items: center;
  justify-content: end;
  margin: 30px 0 0;
`;

export const BoxInput = styled(CustomBox)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const EditBox = styled.div`
  @media (max-width: 990px) {
  
    margin-top: 0px !important;
    width: 99% !important;
    margin-left: 10px !important;
    input{
      margin-left: 0px !important;
      width: 94% !important;
    }
   
  }
  @media (max-width: 540px) {
    width: 106% !important;
    input{
    width: 89% !important;
    display: flex !important;
    justify-content: center !important;
    height: 70% !important;
    }
     
  }
`;

export const HRBottom = styled.div`
  width: 100%;
  height: 1px;
  background: #D9D9D9;
`;

export const HRTop = styled.div`
  width: 100%;
  height: 1px;
  background: #D9D9D9;
`;

export const Lable = styled(Typography)`
  color: #111827;
  font-family: Montserrat;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  margin: 0 0 7px;
`;
