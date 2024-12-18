import { ReactNode, useEffect, useState } from "react"
import { useLocation }                    from "react-router-dom"
import Collapse                           from "react-bootstrap/Collapse"

import { AirplaneSquare } from "iconsax-react"
import { CalendarEdit }   from "iconsax-react"
import { Profile2User }   from "iconsax-react"
import { Calendar }       from "iconsax-react"
import { Airplane }       from "iconsax-react"
import { Monitor }        from "iconsax-react"
import { Routing }        from "iconsax-react"
import { Truck }          from "iconsax-react"
import { Task }           from "iconsax-react"

import { GridContainer, GridRow } from "src/components/core/Grid"
import { IconViewer }             from "src/components/core/IconViewer"

import { Header } from "./header"

import { Color }  from "src/definition/color"

import logo from "src/assets/logo.png"

import {
  BoxItem,
  BoxLogo,
  Content,
  DashBoardMenu,
  DashBoardMenuContainer,
  ItemText,
  MainChaild,
  MainContainer,
  MenuText,
  SidebarOverlayMobile,
  HrVertical
} from "./style"

//------------------------------
interface Props {
  children: ReactNode
}

//------------------------------
//---Layout
//------------------------------
export const Layout = ({ children }: Props) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  //------------------------------
  //---Toggle Sidebar
  //------------------------------
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const location = useLocation();
  const [isSidebarOpenMobile, setIsSidebarOpenMobile] = useState(true);

  //------------------------------
  //---Active Route
  //------------------------------
  function activeRoute(routeName: string) {
    return location.pathname === routeName
  }

  //------------------------------
  //---Outside Click Handling
  //------------------------------
  const handleOutsideClick = (event: MouseEvent) => {
    const tooltipElement = document.getElementById("side")
    if (tooltipElement && !tooltipElement.contains(event.target as Node)) {
      setIsSidebarOpenMobile(false);
    }
  };

  //------------------------------
  //---Resize Handling
  //------------------------------
  const handleResize = () => {
    const screenWidth = window.innerWidth;
    if (screenWidth >= 992) {
      setIsSidebarOpenMobile(true);
    } else {
      setIsSidebarOpenMobile(false);
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);
    window.addEventListener('resize', handleResize);
    handleResize(); // Initial check on mount
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
      window.removeEventListener('resize', handleResize);
    };
  }, [])

  //------------------------------
  const flightAssignments = activeRoute("/flightAssignments") ? "true" : "false"
  const internationals    = activeRoute("/internationals") ? "true" : "false"
  const manpower          = activeRoute("/manpower") ? "true" : "false"
  const flights           = activeRoute("/flights") ? "true" : "false"
  const trucks            = activeRoute("/trucks") ? "true" : "false"
  const roster            = activeRoute("/roster") ? "true" : "false"
  const users             = activeRoute("/users") ? "true" : "false"
  const dash              = activeRoute("/") ? "true" : "false"
  const plan              = activeRoute("/plan") ? "true" : "false"
  
  //------------------------------
  return (
    <div>
      <Header toggleSidebar={toggleSidebar} />
      <GridContainer fluid={true}>
        <GridRow>
          <SidebarOverlayMobile issidebaropen={isSidebarOpenMobile.toString()}>
            <Collapse in={isSidebarOpenMobile} dimension="width">
              <div>
                <BoxLogo>
                  <IconViewer
                    src={logo}
                    alt={"LogoImage"}
                    style={{ width: "100px", height: "60px" }}
                  />
                </BoxLogo>
                <Content>

                  <DashBoardMenuContainer>
                    <DashBoardMenu>
                      <MenuText>MENU</MenuText>
                      <BoxItem to={"/"} active={dash}>
                        {dash === "true" ? (
                          <Monitor
                            style={{ margin: "0 16px 0 0" }}
                            size={24}
                            color={Color.BLUE_DARK}
                            variant="Bold"
                          />
                        ) : (
                          <Monitor
                            style={{ margin: "0 16px 0 0" }}
                            size={24}
                            color={Color.BLUE_DARK}
                          />
                        )}
                        <ItemText active={dash}>Dashboard</ItemText>
                      </BoxItem>

                      <BoxItem to={"/flightAssignments"} active={flightAssignments}>
                        {flightAssignments === "true" ? (
                          <Task
                            style={{ margin: "0 16px 0 0" }}
                            size={24}
                            color={Color.BLUE_DARK}
                            variant="Bold"
                          />
                        ) : (
                          <Task
                            style={{ margin: "0 16px 0 0" }}
                            size={24}
                            color={Color.BLUE_DARK}
                          />
                        )}
                        <ItemText active={flightAssignments}>Flight Assignments</ItemText>
                      </BoxItem>

                      <BoxItem to={"/flights"} active={flights}>
                        {flights === "true" ? (
                          <Airplane
                            style={{ margin: "0 16px 0 0" }}
                            size={24}
                            color={Color.BLUE_DARK}
                            variant="Bold"
                          />
                        ) : (
                          <Airplane
                            style={{ margin: "0 16px 0 0" }}
                            size={24}
                            color={Color.BLUE_DARK}
                          />
                        )}
                        <ItemText active={flights}>Flights List</ItemText>
                      </BoxItem>

                      <HrVertical/>

                      <BoxItem to={"/plan"} active={plan} onClick={() => toggleSidebar()}>
                        {plan === "true" ? (
                          <Routing
                            style={{ margin: "0 16px 0 0" }}
                            size={24}
                            color={Color.BLUE_DARK}
                            variant="Bold"
                          />
                        ) : (
                          <Routing
                            style={{ margin: "0 16px 0 0" }}
                            size={24}
                            color={Color.BLUE_DARK}
                          />
                        )}
                        <ItemText active={plan}>Plan</ItemText>
                      </BoxItem>

                      <BoxItem to={"/manpower"} active={manpower} onClick={() => toggleSidebar()}>
                        {manpower === "true" ? (
                          <Calendar
                            style={{ margin: "0 16px 0 0" }}
                            size={24}
                            color={Color.BLUE_DARK}
                            variant="Bold"
                          />
                        ) : (
                          <Calendar
                            style={{ margin: "0 16px 0 0" }}
                            size={24}
                            color={Color.BLUE_DARK}
                          />
                        )}
                        <ItemText active={manpower}>Manpower</ItemText>
                      </BoxItem>

                      <BoxItem to={"/roster"} active={roster} onClick={() => toggleSidebar()}>
                        {roster === "true" ? (
                          <CalendarEdit
                            style={{ margin: "0 16px 0 0" }}
                            size={24}
                            color={Color.BLUE_DARK}
                            variant="Bold"
                          />
                        ) : (
                          <CalendarEdit
                            style={{ margin: "0 16px 0 0" }}
                            size={24}
                            color={Color.BLUE_DARK}
                          />
                        )}
                        <ItemText active={roster}>Roster</ItemText>
                      </BoxItem>

                      <HrVertical/>

                      <BoxItem to={"/internationals"} active={internationals} onClick={() => toggleSidebar()}>
                        {internationals === "true" ? (
                          <AirplaneSquare
                            style={{ margin: "0 16px 0 0" }}
                            size={24}
                            color={Color.BLUE_DARK}
                            variant="Bold"
                          />
                        ) : (
                          <AirplaneSquare
                            style={{ margin: "0 16px 0 0" }}
                            size={24}
                            color={Color.BLUE_DARK}
                          />
                        )}
                        <ItemText active={internationals}>Internationals</ItemText>
                      </BoxItem>

                      <BoxItem to={"/users"} active={users}>
                        {users === "true" ? (
                          <Profile2User
                            style={{ margin: "0 16px 0 0" }}
                            size={24}
                            color={Color.BLUE_DARK}
                            variant="Bold"
                          />
                        ) : (
                          <Profile2User
                            style={{ margin: "0 16px 0 0" }}
                            size={24}
                            color={Color.BLUE_DARK}
                          />
                        )}
                        <ItemText active={users}>Users</ItemText>
                      </BoxItem>
                      
                      <BoxItem to={"/trucks"} active={trucks}>
                        {trucks === "true" ? (
                          <Truck
                            style={{ margin: "0 16px 0 0" }}
                            size={24}
                            color={Color.BLUE_DARK}
                            variant="Bold"
                          />
                        ) : (
                          <Truck
                            style={{ margin: "0 16px 0 0" }}
                            size={24}
                            color={Color.BLUE_DARK}
                          />
                        )}
                      <ItemText active={trucks}>Trucks</ItemText>
                      </BoxItem>
                      <hr></hr>
                      <hr></hr>

                    </DashBoardMenu>
                  </DashBoardMenuContainer>
                </Content>
              </div>
            </Collapse>
          </SidebarOverlayMobile>
          <MainContainer>
            <MainChaild>
              {children}
            </MainChaild>
          </MainContainer>
        </GridRow>
      </GridContainer>
    </div >
  )
}
