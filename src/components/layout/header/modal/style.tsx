import { CustomBox }  from "src/components/core/CustomBox"
import { styled }     from "styled-components"


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
