import { useSelector } from 'react-redux'
import { AppStateType } from 'store'

export const useNavigationPage = () => {
  const userData = useSelector((state: AppStateType) => state.loginData.userData)
  const userCash = useSelector((state: AppStateType) => state.loginData.currentCash)
  return ({userData, userCash})
}