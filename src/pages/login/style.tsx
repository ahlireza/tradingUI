import { styled }   from 'styled-components'

import { Typography }   from 'src/components/core/Typography'
import { CustomBox }    from 'src/components/core/CustomBox'


export const BoxLogo = styled(CustomBox)`
    display: flex;
    align-items: center;
`;

export const BoxLogoContaner = styled(CustomBox)`
    position:absolute;
    top:28px;
    left:0px;

    @media (max-width: 990px) {
        left:40px;
    }
    @media (max-width: 768px) {
        left:25px;
    }
    @media (max-width: 540px) {
        left:auto;
    }
`;

export const LoginText = styled(Typography)`
    margin:0 0 30px 0;
    color:#111827;
    font-size:20px;
    font-weight: 600;

    @media (max-width: 990px) {
        font-size:24px;
    }
    @media (max-width: 540px) {
        font-size:16px;
    }
`;

export const Remember = styled(Typography)`
    margin: 3px 12px 0;
    color: #111827;
    font-size: 12px;
    font-weight: 500;

    @media (max-width: 990px) {
        font-size:10px;
    }
    @media (max-width: 540px) {
        font-size:8px;
    }
`;

export const StyleBoxForget = styled(CustomBox)`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin:5px 0 0; 
    @media (max-width: 990px) {
        flex-direction: column;
        align-items: start;
    }
`;

export const StyleContainer = styled(CustomBox)`
    position: relative;
    display: flex;
    width: 449px;
    flex-direction: column;
    align-items: flex-start;
    @media (max-width: 990px) {
        width: 370px;
    }
    @media (max-width: 768px) {
        width: 388px;
    }
    @media (max-width: 540px) {
        width: 308px;
    }
`;

export const StyleMainBox = styled(CustomBox)`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 100vh;
    width: 449px;
    position:relative;
`;

export const StyledMobileView = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;






// export const StyledGridCol = styled(GridCol)`
//     padding: 0;
//     display: block;
//     @media (max-width: 768px) {
//         display: none;
//     }
// `;

// export const StyleIconViewer = styled(IconViewer)`
//     width: 78px;
//     height: 79px;
//     flex-shrink: 0;
//     @media (max-width: 768px) {
//         width: 65.164px;
//         height: 66px;
//         flex-shrink: 0;
//     }
// `; 

// export const StyleTitle = styled(Typography)`
//     font-size: 24px;
//     line-height: 24px;
//       font-weight: 400;
//     letter-spacing: 0.1px;
//     font-style: normal;
//     color:  #101112;
//     @media (max-width: 868px) {
//         font-size: 20px;
//     }
//     @media (max-width: 768px) {
//         font-size: 16px;
//     }
// `;

// export const StyleSubTitle = styled(Typography)`
//     font-size: 14px;
//     line-height: 24px;
//     font-weight: 400;
//     letter-spacing: 0.1px;
//     font-style: normal;
//     color:  #A0A0A0;
//     @media (max-width: 768px) {
//         font-size: 12px;
//     }
// `;

// export const StyleInputCaptcha = styled(InputText)`
//     width: 202px; 
//     margin-left: 22px;
//     @media (max-width: 768px) {
//         width: 122px;
//     }
// `;

// export const StyleImg = styled.img`
//     width: 102px; 
//     @media (max-width: 768px) {
//         width: 82px;
//     }
// `;

// export const StyleTitleBox = styled(Box)`
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     flex-direction: column;
//     @media (max-width: 850px) {
//     padding:0 20px;
//     }
// `;

// export const StyleBoxCaptcha = styled(Box)`
//     width: 156px;
//     display: flex;
//     align-items: center;
//     justify-content: space-between;
//     border-radius: 24px;
//     border: 1px solid #A0A0A0;
//     background: #F6FBFC;
//     height: 48px;
//     margin-top: 10px;
//     @media (max-width: 768px) {
//     width: 200px;
//     }
// `;

// export const StyleForgetTypography = styled(Typography)`
//     color: #007E60;
//     font-size: 16px;
//     font-style: normal;
//     font-weight: 500;
//     margin:3px 0 0;
//         @media (max-width: 484px) {
//         margin-top:10px
//     }
// `;


// export const BoxImage = styled(Box)`
//     height: 100vh;
//     background: #0B233F;
//     width: 100%;
//     text-align: center;
// `;

// export const BoxLogoText = styled(Typography)`
//     color: #000;
//     font-size: 16px;
//     font-style: normal;
//     font-weight: 700;
//     margin:10px;
// `;
