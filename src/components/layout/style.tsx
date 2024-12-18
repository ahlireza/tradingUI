import { styled }   from 'styled-components'
import { Link }     from 'react-router-dom'

import { Typography }   from '../core/Typography'
import { CustomBox }    from '../core/CustomBox'

interface SidebarWrapperProps {
  issidebaropen: string;
}

interface SidebarWrapperProps {
    issidebaropen: string;
}

//------------------------------
export const BoxItem = styled(Link) <{ active: string }>`
  display: flex;
  align-items: center;
  text-decoration: none;
  height: 48px;

  svg > g > g > path{
    stroke: ${({ active }) => (active === "true" ? '#00113C' : '#718096')};
  }

  svg > g{
    fill: ${({ active }) => (active === "true" ? '#00113C' : '')};
    stroke: ${({ active }) => (active === "true" ? '' : '#718096')};
    ellipse{
      stroke: ${({ active }) => (active === "true" ? '' : '#718096')};
    }
    circle{
      stroke: ${({ active }) => (active === "true" ? '' : '#718096')};
    }
  } 
`;

export const BoxLogo = styled(CustomBox)`
  display: flex;
  align-items: center;
  width: 100%;
  margin: 32px 0 0 24px;
  
  @media (max-width: 990px) {
    margin: 10px 0 0 30px;
  }
`;

export const Content = styled.div`
  display: block;

  @media (max-width: 990px) {
    display: none;
  }
`;

export const DashBoardMenu = styled(CustomBox)`
  display: flex;
  align-items: start;
  flex-direction: column;
  justify-content: start;
`;

export const DashBoardMenuContainer = styled(CustomBox)`
  display: flex;
  align-items: start;
  flex-direction: column;
  justify-content: space-between;
  padding: 80px 0 0 24px;
  position: relative;
  height: calc(100% - 80px);
`;

export const ItemText = styled(Typography) <{ active: string }>`
  color: ${({ active }) => (active === "true" ? '#00113C' : '#718096')};
  font-size: 16px;
  font-style: normal;
  margin: 0px 0 -3px ;
  font-weight:${({ active }) => (active === "true" ? '900' : '500')};
  font-family:${({ active }) => (active === "true" ? 'Montserrat-Bold' : 'Montserrat-Regular')};
`;

export const MainChaild = styled.main`
  width: calc(100% - 256px);

  @media (max-width: 990px) {
    width: 100% !important;
  }
`;

export const MainContainer = styled.main`
  padding: 10px;
  margin-top: 86px;
  display: flex;
  justify-content: end;
`;

export const MenuText = styled(Typography)`
  color: #A0AEC0;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
`;

export const SidebarOverlayMobile = styled.div<SidebarWrapperProps>`
  background-color: #FFF;
  width: ${({ issidebaropen }) => (issidebaropen === "true" ? '256px' : '0px')};
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  z-index: 0;
  transition: width 0.3s ease;
  display: flex;

  @media (max-width: 990px) {
    z-index: 200;
    left:${({ issidebaropen }) => (issidebaropen === "true" ? '0' : '-30px')};
  }
`;

export const HrVertical = styled.div`
  width: 150px;
  height: 1px;
  background: #E8E8E8;
`;








  // const SidebarWrapper = styled.div`
  //   margin: -60px 21px 0;
  //   width: 90px;
  //   background-color: #0B233F;
  //   border: 4px solid #FFF;
  //   border-radius: 68px;
  //   height: 95vh;
  //   position: relative;
  //   z-index: 1000;
  // `;
  
  // const SidebarOverlay = styled.div<SidebarWrapperProps>`
  //   background-color: #F7FBFE;
  //   width: ${({ issidebaropen }) => (issidebaropen === "true" ? '288px' : '0')};
  //   height: calc(95vh - 85px);
  //   position: absolute;
  //   top: 100px;
  //   margin-bottom: 50px;
  //   right: 70px;
  //   border-radius: 69px 0px 0px 69px;
  //   border: 1px solid #CDE6F4;
  //   z-index: 200;
  //   transition: width 0.3s ease;
  // `;
  
  // const SidebarContainer = styled.div<SidebarWrapperProps>`
  //    opacity: ${({ issidebaropen }) => (issidebaropen === "true" ? '1' : '0')};
  //   margin: 0 68px;
  //   z-index: 1000;
  //   width: fit-content;
  //   transition: opacity 0.9s ease;
    
  //   @media (max-width: 990px) {
  //     margin: 0 24px;
  //     width: 85%;
  //   }
  // `;

  // const CloseSidebar = styled.div<SidebarWrapperProps>`
  //   width: 24px;
  //   box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
  //   height: 24px;
  //   border-radius: 50px;
  //   background: #fff;
  //   z-index: 201;
  //   position: absolute;
  //   right: ${({ issidebaropen }) => (issidebaropen === "true" ? '343px' : '375px')};
  //   top: 133px;
  //   display: ${({ issidebaropen }) => (issidebaropen === "true" ? 'flex' : 'none')};
  //   transition: right 0.9s ease; /* Add transition to right property */
  //   @media (max-width: 990px) {
  //     display: none;
  //   }
  // `;
  
  // const EmptyBox = styled(Box)`
  //   width: 24px;
  //   height: 24px;
  //   margin: 40px 65px 0 -8px;
  // `
  
  // const SidebarContent = styled.div`
  //   width: 100%;
  //   height: 100%;
  //   border-radius: 68px;
  //   box-shadow: 0px 0px 16px 0px rgba(0, 0, 0, 0.42);
  //   z-index: 1000;
  //   position: relative;
  // `;
  
  // const LogoContainer = styled.div`
  //   text-align: center;
  //   margin: 0 16px;
  //   padding-top: 16px;
  // `;
  

  // const SideIcon = styled(IconViewer)`
  //   width: 24px;
  //   height: 24px;  
  //   cursor: pointer;
  // `;

  // const BoxStyle = styled(Box) <SidebarWrapperProps>`
  //   margin: ${({ issidebaropen }) => (issidebaropen === "true" ? "85px 65px 0 -8px" : '0')};
  //   width: ${({ issidebaropen }) => (issidebaropen === "true" ? "24px" : '0')};
  // `;
  
  // const MenuContainer = styled.div <SidebarWrapperProps>`
  //   width: 24px;
  //   box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
  //   height: 24px;
  //   border-radius: 50px;
  //   background: #fff;
  //   z-index: 10;
  //   margin: ${({ issidebaropen }) => (issidebaropen === "false" ? "40px 65px 0 -8px" : '40px 310px 0 -8px')};
  //   display: ${({ issidebaropen }) => (issidebaropen === "true" ? "none" : 'flex')};
  // `;
  
  // const MenuItemsContainer = styled.div`
  //   display: flex;
  //   flex-direction: column;
  //   align-items: center;
  //   justify-content: space-between;
  //   margin-top: 20px;
  //   width: 100%;
  //   height: 73%;
  // `;
  
  // const Circle = styled.div`
  //   width: 6px;
  //   height: 6px;
  //   background: #fff;
  //   border-radius: 50%;
  //   margin: -3.5px 21px 0;
  // `;
  
  // const ActiveRoute = styled.div`
  //   background: rgba(255, 255, 255, 0.23);
  //   border-radius: 50%;
  //   width: 50px;
  //   height: 50px;
  // `;
  
  // const SubNav = styled(Typography)`
  //   color: #A2A2A2;
  //   line-height: 24px;
  //   font-weight: 400;
  //   font-size: 14px;
  // `;
  
  // export const Hr = styled.div`
  //   width: 1px;
  //   height: 78px;
  //   background: #D0D1D1;
  //   margin-top: 10px;
  // `;
  
  // const MenuSideBar = styled.div`
  //   display: flex;
  //   align-items: center;
  //   `;
    
  // const Setting = styled(Typography)`
  // font-weight: 400;
  // font-size: 14px;
  //     color: #A2A2A2;
  //   `;
  
  // const BoxIcon = styled.div`
  //   margin-top: 20px;
  //   display: flex;
  //   justify-content: flex-end;
  //   align-items: center;
  // `;
  
  // const BoxContainer = styled.div`
  //   display: flex;
  //   align-items: center;
  //   justify-content: space-between;
  //   padding: 11px;
  //   @media (max-width: 990px) {
  //     display: none;
  //   }
  // `;

  // const BoxContainerMobile = styled.div`
  //   display: flex;
  //   align-items: center;
  //   justify-content: space-between;
  //   padding-top:12px;
  //   @media (min-width: 769px) {
  //     display: none;
  //   }
  // `;
  
  // const BoxHash = styled.div`
  //   margin-right: 120px;
  //   display: flex;
  //   @media (max-width: 990px) {
  //     display: none;
  //   }
  // `;

  // const BoxBTN = styled.div`
  //   button > div {
  //     &:first-child{
  //       svg > path{
  //         stroke:#0B233F; 
  //       }
  //     };
  //     &:last-child{
  //       svg > path{
  //         fill:#0B233F; 
  //       }
  //     }
  //   }
  //   display: flex;
  //   @media (max-width: 990px) {
  //     display: none;
  //   }
  // `;

  // const BoxMobile = styled.div`
  //   display: flex;
  //   margin:5px 0 0 10px;
  //   @media (min-width: 900px) {
  //     display: none;
  //   }
  // `;

  // const SideResponse = styled(Box)`
  //   display: none;
  //   @media (min-width: 900px) {
  //     display: flex;
  //   }
  // `;
  
  // const BoxsideMobile = styled.div`
  //   display: flex;
  //   align-items: center;
  //   justify-content: space-between;
  // `;

  // const BoxsideMobileSec = styled.div`
  //   display: flex;
  //   align-items: center;
  //   justify-content: start;
  //       margin-right: -10px;
  // `;
  
  // const GridColChild = styled(GridCol)`
  //   height: 100%;
  //   width: calc(100% - 140px);
  //   margin:0 10px;
  //   @media (max-width: 990px) {
  //     width: 100%;
  //     margin:0;
  //   }
  // `;

  // const GridColMain = styled(GridCol)`
  //   width: 120px !important;
  // `;

  // const BoxLogout = styled(Box)`
  //   width: 100%;
  //   text-align: center;
  //   padding-left: 5px;
  //   cursor: pointer;
  // `;
    
  // // Header
  // const HeaderContainer = styled.header`
  //   background-color: #FFF;
  //   height: 96px;
  //   border-radius: 0;
  //   position: fixed;
  //   top: 0;
  //   right: 0;
  //   width: calc(100% - 256px);
  //   display: flex;
  //   align-items: center;
  //   justify-content: space-between;
  //   padding: 0 30px !important;
  //   z-index:10;
    
  //   @media (max-width: 990px) {
  //     width: 100% !important;
  //   }
  // `;
  
  // const TextWellcome = styled(Typography)`
  //   color: #111827;
  //   font-size: 20px;
  //   font-style: normal;
  //   font-weight: 900;
  //   margin:0 0 4px 0;
  // `;
  
  // const TextWellcomDesc = styled(Typography)`
  //   color: #718096;
  //   font-size: 14px;
  //   font-style: normal;
  //   font-weight: 400;
  //   margin:0;
  // `;
  
  // const BoxHeaderStart = styled(Box)`
  //   margin:0px 0;
  //     @media (max-width:520px){
  //     display:none;
  //   }
  // `;
  // const BoxHeaderEnd = styled(Box)`
  //   display: flex;
  //   align-items: center;
  //   justify-content: space-between;
  // `;
  
  // const TextProfile = styled(Typography)`
  //   color: #111827;
  //   font-size: 16px;
  //   font-style: normal;
  //   font-weight: 700;
  //   margin:0;
  // `;
  
  // const TextProfileDesc = styled(Typography)`
  //   color: #718096;
  //   font-size: 14px;
  //   font-style: normal;
  //   font-weight: 400;
  //   margin:0;
  // `;
  // const BoxProfile = styled(Box)`
  //   display: flex;
  //   align-items: center;
  // `;
   
  // const BoxImage = styled(Box)`
  // width: 48px;
  //   height: 48px;
  //   background:#FFD023;
  //   border-radius:50%;
  //     display: flex;
  //   align-items: center;
  //   justify-content: center;
  //   margin:0 16px 0 0;
  //   `;
  // const HR = styled.div`
  //   width: 1px;
  //   height: 40px;
  //   background: #EEEFF2;
  //   margin:0 22px 0 16px;
  //   @media (max-width:900px){
  //     display:none;
  //   }
  // `;

  // const BoxInputIcon = styled(Box)`
  //   display: flex;
  //   align-items: center;
  //       @media (max-width:1040px){
  //     display:none;
  //   }
  // `;
  // const BoxInputIconSearch = styled(Box)`
  //   @media (max-width:1040px){
  //     display:none;
  //   }
  // `;
  
  // /*   @media (max-width:908px){
  //     width:180px !important;
  //   } */
  
  // const BoxLogoText = styled(Typography)`
  //   color: #000;
  //   font-size: 16px;
  //   font-style: normal;
  //   font-weight: 700;
  //   margin:10px;
  // `;
  
  // const DashBoardMenuBottom = styled(Box)`
  //   position: absolute;
  //   bottom: 0;
  //   left: 24px;
  // `;
  //   export {
  //   ActiveRoute, BoxBTN, BoxContainer, BoxContainerMobile, BoxHash, BoxIcon, Content, BoxMobile, BoxStyle, BoxsideMobile,
  //   BoxsideMobileSec, Circle, CloseSidebar,
  //   EmptyBox, HamMenu, HeaderContainer, Hr, HrVertical, LogoContainer, MenuContainer,
  //   MenuItemsContainer, MenuSideBar, Setting, SideIcon, SideResponse, SidebarContainer, SidebarContent, SidebarOverlay, SidebarOverlayMobile, SidebarWrapper, SubNav
  //   , GridColChild, GridColMain, BoxLogout, MainContainer, MainChaild,
  //   BoxLogo, ItemText, DashBoardMenuContainer, DashBoardMenuBottom,
  //   BoxLogoText, DashBoardMenu, MenuText, BoxItem, BoxInputIcon, BoxInputIconSearch,
  //   TextWellcomDesc, TextProfile,
  //   BoxHeaderStart, TextProfileDesc,
  //   BoxHeaderEnd, BoxProfile, BoxImage,
  // };
  
//   export const HamMenu = styled(CustomBox)`
//   position: absolute;
//   top: 18px;
//   right: 0px;
//   cursor: pointer;
//   width: fit-content;

//   @media (min-width: 900px) {
//     display: none;
//   }
// `;  
