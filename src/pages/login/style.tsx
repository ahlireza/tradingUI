import { styled }   from 'styled-components'

import { Typography }   from 'src/components/core/Typography'
import { CustomBox }    from 'src/components/core/CustomBox'

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

export const BoxLogo = styled(CustomBox)`
  display: flex;
  align-items: center;
  width: 100%;
  margin: 0 0 0 30px;
`;

export const LoginText = styled(Typography)`
    margin:0 0 30px 0;
    color:#111827;
    font-size:20px;
    font-weight: 600;
`;

export const StyleContainer = styled(CustomBox)`
    position: relative;
    display: flex;
    width: 450px;
    flex-direction: column;
    align-items: flex-start;
`;

export const StyleMainBox = styled(CustomBox)`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 100vh;
    width: 450px;
    position:relative;
`;

export const StyledMobileView = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;
