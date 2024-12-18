import { useState } from "react"
import { useDispatch } from "react-redux"
// import { toast }        from "react-toastify"
// import axios            from "axios"
import Modal from "@mui/material/Modal"
import Box from "@mui/material/Box"

import { clearIsRefresh } from "src/store/actions/root"
import { BtnComponent } from "src/components/core/Button"
import { Typography } from "src/components/core/Typography"
import { IconViewer } from "src/components/core/IconViewer"
import { InputText } from "src/components/core/Input/InputText"
import { Color } from "src/definition/color"

// import { BaseUrlApi }     from "src/definition"

import InfoClose from "src/assets/svg/close.svg"

import{
  BoxFooter,
  BoxInput,
  HRBottom,
  HRTop
} from "./style"

type ModalProps = {
  open: boolean
  handleClose: () => void
}

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
//---Profile Modal
//------------------------------
export const ProfileModal: React.FC<ModalProps> = ({
  open,
  handleClose
}) => {
  
  const getUserInfo: any = localStorage.getItem("Flights_Catering")
  const isUserInfo: UserProps = JSON.parse(getUserInfo)
  const nickName = isUserInfo.nickName
  const name = isUserInfo.firstName + " " + isUserInfo.lastName
  const phone = isUserInfo.phone
  const email = isUserInfo.email
  

  const dispatch = useDispatch()
  //--- State
  const [newPhone, setNewPhone] = useState("")
  const [newEmail, setNewEmail] = useState("")
  const [oldPassword, setOldPassword] = useState("")
  const [newPassword, setNewPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")

  const [oldPasswordError, setOldPasswordError] = useState(false)
  const [passwordError, setPasswordError] = useState(false)
  
  const [oldPasswordHelper, setOldPasswordHelper] = useState("")
  const [passwordHelper, setPasswordHelper] = useState("")
  
  //------------------------------
  //---Close Modal and Reset States
  //------------------------------
  const closeModalResetStates = () => {
    handleClose()
    dispatch(clearIsRefresh())

    setNewPhone("")
    setNewEmail("")
    setOldPassword("")
    setNewPassword("")
    setConfirmPassword("")
    
    setOldPasswordError(false)
    setPasswordError(false)
    setOldPasswordHelper("")
    setPasswordHelper("")
  }

  //------------------------------
  //---Error Handler
  //------------------------------
  const errorHandler = () => {
    let error = false
    let maxChanges = 3

    //---Check Password
    if (!oldPassword) {
      maxChanges -= 1
      if (newPassword) {
        setOldPasswordError(true)
        setOldPasswordHelper("Enter the old password")
        error = true
      }
      else if (confirmPassword) {
        setOldPasswordError(true)
        setOldPasswordHelper("Enter the old password")
        error = true
      }
     }
    else 
    {
      if (!newPassword) {
        setPasswordError(true)
        setPasswordHelper("Enter the new Password ")
        error = true
      }
      else if (newPassword !== confirmPassword) {
        setPasswordError(true)
        setPasswordHelper("Password does not match")
        error = true
      }
    } 
    //---Check Changes
    if (!newPhone) {
      maxChanges -= 1
    }
    if (!newEmail) {
      maxChanges -= 1
    }

    if (maxChanges != 0) {
      if (error === false) {
        editUserHandler(nickName, newPhone, newEmail,oldPassword, newPassword)
      }
    }
    else {
      closeModalResetStates()
    }
  }

  //------------------------------
  //---Call Edit User Api
  //------------------------------
  // Users Data Format{
  //    nickName,
  //    phone,
  //    email,
  //    oldPassword
  //    newPassword
  // }
  //------------------------------
  const editUserHandler = async (
    nickName: string,
    phone: string,
    email: string,
    oldPassword: string,
    newPassword: string
  ) => {
    // await axios.post(`${ BaseUrlApi.baseUrl }/edit_profile`, {
    //   nickName: nickName,
    //   phone: phone,
    //   email: email,
    //   oldPassword: oldPassword,
    //   newPassword: newPassword
    // })
    // .then((res) =>
    //     closeModalResetStates()
    // )
    // .catch(function (error) {
    //   toast.error("Error: " + error)
    //   console.log(error)
    // })
    console.log("Update: ",nickName, phone, email,oldPassword, newPassword)
    closeModalResetStates()
  }

  //------------------------------
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "auto",
      }}>
      <Box
        sx={{
          width: 680,
          bgcolor: "background.paper",
          padding: 4,
          borderRadius: "16px",
        }}>
        <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
          <Typography style={{ fontWeight: "700" }}>Profile</Typography>
          <Box sx={{ cursor: "pointer" }} onClick={handleClose}>
            <IconViewer src={InfoClose} alt="Close" />
          </Box>
        </Box>
        <HRTop />

        <BoxInput style={{ marginTop: "1em" }}>
          <Box style={{ width: "100%" }}>
            <Typography
              style={{
                color: Color.RED,
                fontStyle: "italic",
                fontWeight: "bold",
                fontSize: "18px"
              }}>
              {nickName}
            </Typography>
          </Box>
          <Box style={{ width: "100%" }}>
            <Typography
              style={{
                color: Color.BLUE,
                fontStyle: "italic",
                fontWeight: "bold",
              }}>
              {name}
            </Typography>
          </Box>
        </BoxInput>

        <BoxInput style={{ marginTop: "1em" }}>
          <Box style={{ width: "100%" }}>
            <InputText
              style={{ height: "24px", width: "85%" }}
              label="Phone Number"
              placeholder={phone}
              type="text"
              onChange={(e) => {
                setNewPhone(e.target.value.trim())
              }}
              value={newPhone}
            />
          </Box>
          <Box style={{ width: "100%" }}>
            <InputText
              style={{ height: "24px", width: "85%", marginLeft: "7px" }}
              label="Email"
              placeholder={email}
              type="text"
              onChange={(e) => {
                setNewEmail(e.target.value.trim())
              }}
              value={newEmail}
            />
          </Box>
        </BoxInput>

        <HRBottom />

        <BoxInput style={{ marginTop: "1em" }}>
         <Box style={{ width: "100%" }}>
            <InputText
              style={{ height: "24px", width: "85%" }}
              label="Old Password"
              placeholder=""
              type="password"
              onChange={(e) => {
                setOldPassword(e.target.value.trim())
                setOldPasswordError(false)
                setOldPasswordHelper("")
                setPasswordError(false)
                setPasswordHelper("")

              }}
              error={oldPasswordError.toString()}
              helperText={oldPasswordHelper}
              value={oldPassword}
            />
          </Box>
          <Box style={{ width: "100%" }}></Box>
        </BoxInput>

        <BoxInput style={{ marginTop: "1em" }}>
        <Box style={{ width: "100%" }}>
            <InputText
              style={{ height: "24px", width: "85%" }}
              label="New Password"
              placeholder=""
              type="password"
              onChange={(e) => {
                setNewPassword(e.target.value.trim())
                setPasswordError(false)
                setPasswordHelper("")
              }}
              error={passwordError.toString()}
              helperText={passwordHelper}
            />
          </Box>
          <Box style={{ width: "100%" }}>
            <InputText
              style={{ height: "24px", width: "85%", marginLeft: "7px" }}
              label="Confirm Password"
              placeholder=""
              type="password"
              onChange={(e) => {
                setConfirmPassword(e.target.value.trim())
                setPasswordError(false)
                setPasswordHelper("")
              }}
              error={passwordError.toString()}
              helperText={passwordHelper}
              value={confirmPassword}
            />
          </Box>
        </BoxInput>

        <HRBottom />

        <BoxFooter>
          <BtnComponent
            label="Cancel"
            variant="outline"
            style={{
              color: Color.BLUE_DARK,
              width: "121px",
              background: "transparent",
              marginRight: "16px",
              fontSize: "14px",
              fontWeight: "700",
              cursor: "pointer",
            }}
            onClick={() => closeModalResetStates()}
          />
          <BtnComponent
            label="Confirm"
            variant="contained"
            style={{
              background: Color.BLUE_DARK,
              width: "131px",
              fontSize: "14px",
              cursor: "pointer",
            }}
            onClick={() => errorHandler()}
          />
        </BoxFooter>
      </Box>
    </Modal>
  )
}
