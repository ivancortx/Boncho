import React, {useContext, useEffect, useState} from 'react'
import { useNavigationPage } from 'ui/navigation'
import { ProfilePageForm } from '../../forms/ProfilePageForm'
import { useProfilePage } from '../../hooks/useProfilePage'
import { useDispatch } from 'react-redux'
import { fetchProfileData } from '../../store/action'
import {GetCashModalCloseContext} from "../../../../context/GetCashModalContext";

export const ProfilePage: React.VFC = () => {
  const dispatch = useDispatch()
  const [isUploaded, setIsUploaded] = useState<boolean>(true)
  const [filePath, setFilePath] = useState<string>('')
  const { userData } = useNavigationPage()
  const { userProfile } = useProfilePage()
  const closeGetCashModal = useContext(GetCashModalCloseContext)

  useEffect(() => {
    if (userData[0] !== undefined) {
      dispatch(fetchProfileData(userData[0].email))
    }
  }, [userData])

  return (
    <div onClick={closeGetCashModal}>
      <ProfilePageForm setIsUploaded={setIsUploaded}
                       setFilePath={setFilePath}
                       isUploaded={isUploaded}
                       filePath={filePath}
                       userData={userData}
                       userProfile={userProfile}/>
    </div>
  )
}