import { styled }   from "styled-components"
import { Link }     from "react-router-dom"

import { Typography }   from "src/components//core/Typography"
import { CustomBox }    from "src/components/core/CustomBox"

//---Icon
import { ReactComponent as Notification }   from "src/assets/svg/notification.svg"
import { ProfileCircle }                    from "iconsax-react"


export const ItemLink = styled(Link) <{ active: string }>`
    text-decoration: none;
    color: ${({ active }) => (active === "true" ? "#00113C" : "#718096")};
    font-size: 16px;
    font-style: normal;
    margin: 0px 0 -3px ;
    font-weight:${({ active }) => (active === "true" ? "900" : "500")};
    font-family:${({ active }) => (active === "true" ? "Montserrat-Bold" : "Montserrat-Regular")};

    @media (max-width:990px){
        font-size: 12px;
    }

`;

export const BoxHeaderEnd = styled(CustomBox)`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const BoxHeaderStart = styled(CustomBox)`
    margin:0px 0;
`;
export const Menu = styled.div`
    margin:0px 0;
    display:block;
`;
export const BoxProfile = styled(CustomBox)`
    display: flex;
    align-items: center;
`;

export const ProfileStyle = styled(ProfileCircle)`
    margin: 0 16px 0 0;
    @media (max-width:990px){
        display:none;
    }
`;

export const HR = styled.div`
    width: 1px;
    height: 40px;
    background: #EEEFF2;
    margin:0 22px 0 16px;
`;

export const HeaderContainer = styled.header`
    background-color: #FFF;
    height: 96px;
    border-radius: 0;
    position: fixed;
    top: 0;
    right: 0;
    width: calc(100% - 256px);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 30px !important;
    z-index:10;
    
    @media (max-width: 990px) {
        width: 100% !important;
    }
`;

export const NotificationStyle = styled(Notification)`
    margin: 0 24px 0 0;
`;

export const TextProfile = styled(Typography)`
    color: #111827;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    margin:0;

    @media (max-width:990px){
        font-size: 14px;
    }
    @media (max-width:540px){
        font-size: 12px;
    }
`;

export const TextProfileDesc = styled(Typography)`
    color: #718096;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    margin:0;

    @media (max-width:990px){
        font-size: 12px;
    }
    @media (max-width:540px){
        font-size: 10px;
    }
`;

export const TextWellcome = styled(Typography)`
    color: #111827;
    font-size: 20px;
    font-style: normal;
    font-weight: 900;
    margin:0 0 4px 0;

    @media (max-width:990px){
        font-size: 16px;
        font-weight: 700;
        margin:0 0 4px 150px;
    }

    @media (max-width:540px){
        display:none;
    }
`;
