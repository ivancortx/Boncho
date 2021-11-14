import React, { useContext, useEffect, useState } from 'react'
import Cookies from 'js-cookie'
import { useDispatch } from 'react-redux'
import { RegModal } from '../components/RegModal/RegModal'
import { LoginModal } from '../components/LoginModal/LoginModal'
import firebaseApp from '@/firebase/firebase'
import { AuthContext, AuthUpdateContext, IsAuthContext } from '@/context/AuthContext'
import { useNavigationPage } from '../hooks/useNavigationPage/useNavigationPage'
import { useProfilePage } from '@/ui/profile/hooks/useProfilePage'
import { fetchProfileData } from '@/ui/profile/store/action'
import { ModalCloseContext, ModalShowContext, ModalStatusContext } from '@/context/SettingsUserModalContext'

import { GetCashModalCloseContext, GetCashModalShowContext } from '@/context/GetCashModalContext'
import { clearUserData, fetchUserCash } from '../store/action'
import { LoginAndRegistrationBlock } from '../components/LoginAndRegistrationBlock/LoginAndRegistrationBlock'
import { MoneyAndNameUserBlock } from '../components/MoneyAndNameUserBlock/MoneyAndNameUserBlock'
import { LogoAndNavButtons } from '../components/LogoAndNavButtons/LogoAndNavButtons'

import styles from './NavidationPage.module.scss'

export const NavigationPage: React.VFC = () => {
  const dispatch = useDispatch()
  const isAuth = useContext(IsAuthContext)
  const setIsAuth = useContext(AuthUpdateContext)
  const closeModal = useContext<() => void>(ModalCloseContext)
  const showModal = useContext<() => void>(ModalShowContext)
  const isActiveModal = useContext<boolean>(ModalStatusContext)
  const showGetCashModal = useContext(GetCashModalShowContext)
  const closeGetCashModal = useContext(GetCashModalCloseContext)
  const token = useContext(AuthContext)

  const [showRegModal, setShowRegModall] = useState<boolean>(false)
  const [showLoginModal, setShowLoginModall] = useState<boolean>(false)
  const { userData, userCash } = useNavigationPage()
  const { userProfile } = useProfilePage()

  const openRegModal = () => setShowRegModall(true)
  const openLoginModal = () => setShowLoginModall(true)
  const closeRegModal = () => setShowRegModall(false)
  const closeLoginModal = () => setShowLoginModall(false)
  useEffect(() => {

    if (userData[0] !== undefined) {
      dispatch(fetchProfileData(userData[0].email))
      dispatch(fetchUserCash(userData[0].email, token))
    }
  }, [userData])

  useEffect(() => {
    if (userCash !== 0) {
      localStorage.setItem('userCash', `${userCash}`);
    }
  }, [userCash])

  const exit = () => {
    firebaseApp.auth().signOut()
    Cookies.remove('token')
    if (setIsAuth) setIsAuth(false)
    dispatch(clearUserData())
  }

  return (
    <div onClick={() => {
      closeGetCashModal()
      closeModal()
    }} className={styles.navContainer}>
      {!isAuth && <LoginAndRegistrationBlock openLoginModal={openLoginModal} openRegModal={openRegModal}/>}
      {isAuth &&
      <MoneyAndNameUserBlock closeModal={closeModal} exit={exit} isActiveModal={isActiveModal}
                             showGetCashModal={showGetCashModal} showModal={showModal} userCash={userCash}
                             userProfile={userProfile}/>}
      <LogoAndNavButtons/>
      {showRegModal && <div className={styles.portal}>
        <RegModal showModal={showRegModal}
                  closeModal={closeRegModal}/>
      </div>}
      {showLoginModal && <div className={styles.portal}>
        <LoginModal showModal={showLoginModal}
                    closeModal={closeLoginModal}/>
      </div>}
    </div>
  )
}