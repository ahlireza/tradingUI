import { useNavigate, Link, useLocation }  from "react-router-dom"
import { useState } from "react"
import Cookies      from "js-cookie"

import { Notification } from "iconsax-react"
import { ProfileCircle } from "iconsax-react"

import { ProfileModal }     from "./modal/profile"

import { IconViewer } from "src/components/core/IconViewer"

import {UserProps}  from "src/definition/interfaces"
import { Color }    from "src/definition/color"


import logo from "src/assets/logo.png"

import {
  HeaderContainer,
  BoxHeaderStart,
  BoxHeaderEnd,
  BoxLogo,
  ItemLink,
  BoxProfile,
  HR,
  TextProfile,
  BoxHeader
} from "./style"

//------------------------------
//---Header
//------------------------------
export const Header = () => {
    const navigate = useNavigate()
    const location = useLocation()

    const getUserInfo: any = localStorage.getItem("Trading_BackOffice")
    const isUserInfo: UserProps = JSON.parse(getUserInfo)
    const userName = isUserInfo.name   

    //------------------------------
    //---Profile Handling
    //------------------------------
    const [openProfileModal, setOpenProfileModal] = useState(false)

    const handleProfileModal = () => {
        setOpenProfileModal(true)
    }

    const handleCloseProfileModal = () => {
        setOpenProfileModal(false)
    }

    //------------------------------
    //---Logout Handler
    //------------------------------
    const handleLogout = () => {
        localStorage.removeItem("Trading_BackOffice")
        Cookies.remove("Tradeing_token")
        navigate("/login")
    }

    //------------------------------
    return (
        <div>
            <HeaderContainer style={{backgroundColor: Color.BLUE_DARK}}>
              <BoxHeaderStart>
                <div>
                  <BoxLogo>
                    <Link to = "/">
                      <IconViewer
                        src={logo}
                        alt={"LogoImage"}
                        style={{ width: "120px", height: "35px" }}
                      />
                    </Link>
                  </BoxLogo>
                </div>
              </BoxHeaderStart>

              <BoxHeader>
                <ItemLink
                  style={{marginRight: "20px"}}
                  to={"/orders"}
                >
                  Orders
                </ItemLink>
                <ItemLink
                  style={{marginRight: "20px"}}
                  to={"/clearingHouse"}
                >
                  Clearing House
                </ItemLink>
                <ItemLink
                  style={{marginRight: "20px"}}
                  to={"/settlementCentre"}
                >
                  Settlement Centre
                </ItemLink>
              </BoxHeader>
            
              <BoxHeaderEnd>
                <ItemLink
                  style = {{fontSize: "12px"}}
                  to={"/rate"}
                >
                  Rate
                </ItemLink>
                <ItemLink
                  style = {{fontSize: "12px"}}
                  to={"/customers"}
                >
                  Customers
                </ItemLink>
                <ItemLink
                  style = {{fontSize: "12px"}}
                  to={"/reports"}
                >
                  Reports
                </ItemLink>
                <ItemLink
                  style = {{fontSize: "12px"}}
                  to={"/configuration"}
                >
                  Configuration
                </ItemLink>
                          
                <HR />

                <BoxProfile>
                  <Notification size="18" color={Color.WHITE}/>
                </BoxProfile>
                <BoxProfile
                  style={{ cursor: "pointer" }}
                  onClick={handleLogout}
                >
                  <TextProfile> Logout </TextProfile>
                </BoxProfile>

                <HR />

                <BoxProfile
                  style={{ cursor: "pointer" }}
                  onClick={handleProfileModal}
                >
                  <ProfileCircle size="16" color={Color.WHITE}/>
                  <TextProfile> {userName} </TextProfile>
                </BoxProfile>
              </BoxHeaderEnd>
            </HeaderContainer>

            <ProfileModal
              open={openProfileModal}
              handleClose={handleCloseProfileModal}
            />
        </div>
    )
}
