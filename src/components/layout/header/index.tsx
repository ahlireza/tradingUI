import { useNavigate }      from "react-router-dom"
import { useState }         from "react"
import Cookies              from "js-cookie"

import { getCurrentDate }   from "src/hook"
import { ProfileModal }     from "./modal/profile"
import { CustomBox }        from "src/components/core/CustomBox"

import {
    ItemLink,
    BoxHeaderEnd,
    BoxHeaderStart,
    BoxProfile,
    ProfileStyle,
    HR,
    HeaderContainer,
    NotificationStyle,
    TextProfile,
    TextProfileDesc,
    TextWellcome
} from "./style"

//------------------------------
interface UserProps {
  nickName: string
  firstName: string
  lastName: string
  role: string
  phone: string
  email: string
  access: string
  token: string
}

//------------------------------
//---Header
//------------------------------
export const Header = () => {
    const navigate = useNavigate()

    const getUserInfo: any = localStorage.getItem("Flights_Catering")
    const isUserInfo: UserProps = JSON.parse(getUserInfo)
      const nickName = isUserInfo.nickName
       const role = isUserInfo.role
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
        localStorage.removeItem("Flights_Catering")
        Cookies.remove("Flights_token")
        navigate("/login")
    }

    //------------------------------
    return (
        <div>
            <HeaderContainer>
            <BoxHeaderStart>
                <TextWellcome>
                    {getCurrentDate()}
                </TextWellcome>
            </BoxHeaderStart>
            
            <BoxHeaderEnd>
                <NotificationStyle />
                <ItemLink onClick={handleLogout}>
                    Logout
                </ItemLink>
                
                <HR />
                
                <BoxProfile
                    style={{ cursor: "pointer" }}
                    onClick={handleProfileModal}
                >
                    <ProfileStyle/>
                      <CustomBox>
                        <TextProfile> {nickName} </TextProfile>
                        <TextProfileDesc> {role} </TextProfileDesc>
                    </CustomBox>
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
