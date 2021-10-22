import { useSelector } from 'react-redux'
import { AppStateType } from '../../../store'

export const useProfilePage = () => {
  const userProfile = useSelector((state: AppStateType) => state.profileData.profileData)
  return { userProfile }
}