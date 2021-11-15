import React, { useContext, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigationPage } from '@/ui/navigation'
import { ProfilePageForm } from '../../forms/ProfilePageForm'
import { useProfilePage } from '../../hooks/useProfilePage'
import { fetchProfileData } from '../../store/action'
import { GetCashModalCloseContext } from '@/context/GetCashModalContext'

export const ProfilePage: React.VFC = () => {
  const dispatch = useDispatch(),
    [isUploaded, setIsUploaded] = useState<boolean>(true),
    [filePath, setFilePath] = useState<string>(''),
    { userData } = useNavigationPage(),
    { userProfile } = useProfilePage(),
    closeGetCashModal = useContext(GetCashModalCloseContext)

  useEffect(() => {
    if (userData[0] !== undefined) {
      dispatch(fetchProfileData(userData[0].email))
    }
  }, [userData])

  return (
    <div onClick={closeGetCashModal}>
      <ProfilePageForm
        setIsUploaded={setIsUploaded}
        setFilePath={setFilePath}
        isUploaded={isUploaded}
        filePath={filePath}
        userData={userData}
        userProfile={userProfile}
      />
    </div>
  )
}
