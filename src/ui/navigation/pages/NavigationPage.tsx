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
import {
  ModalCloseContext,
  ModalShowContext,
  ModalStatusContext,
} from '@/context/SettingsUserModalContext'

import { GetCashModalCloseContext, GetCashModalShowContext } from '@/context/GetCashModalContext'
import { clearUserData, fetchUserCash } from '../store/action'
import { LoginAndRegistrationBlock } from '../components/LoginAndRegistrationBlock/LoginAndRegistrationBlock'
import { MoneyAndNameUserBlock } from '../components/MoneyAndNameUserBlock/MoneyAndNameUserBlock'
import { LogoAndNavButtons } from '../components/LogoAndNavButtons/LogoAndNavButtons'

import styles from './NavidationPage.module.scss'
import { fetchItemsInCart } from '@/ui/cart/store/action'

export const NavigationPage: React.VFC = () => {
  const dispatch = useDispatch(),
    isAuth = useContext(IsAuthContext),
    setIsAuth = useContext(AuthUpdateContext),
    closeModal = useContext<() => void>(ModalCloseContext),
    showModal = useContext<() => void>(ModalShowContext),
    isActiveModal = useContext<boolean>(ModalStatusContext),
    showGetCashModal = useContext(GetCashModalShowContext),
    closeGetCashModal = useContext(GetCashModalCloseContext),
    token = useContext(AuthContext),
    [showRegModal, setShowRegModall] = useState<boolean>(false),
    [showLoginModal, setShowLoginModall] = useState<boolean>(false),
    { userData, userCash } = useNavigationPage(),
    { userProfile } = useProfilePage(),
    openRegModal = () => setShowRegModall(true),
    openLoginModal = () => setShowLoginModall(true),
    closeRegModal = () => setShowRegModall(false),
    closeLoginModal = () => setShowLoginModall(false)
  useEffect(() => {
    if (userData[0] !== undefined) {
      dispatch(fetchProfileData(userData[0].email))
      dispatch(fetchUserCash(userData[0].email, token))
      dispatch(fetchItemsInCart())
    }
  }, [userData])

  useEffect(() => {
    if (userCash !== 0) {
      localStorage.setItem('userCash', `${userCash}`)
    }
  }, [userCash])

  const exit = async () => {
    await firebaseApp.auth().signOut()
    Cookies.remove('token')
    if (setIsAuth) {
      setIsAuth(false)
    }
    dispatch(clearUserData())
  }

  return (
    <div
      onClick={() => {
        closeGetCashModal()
        closeModal()
      }}
      className={styles.navContainer}
    >
      {!isAuth && (
        <LoginAndRegistrationBlock openLoginModal={openLoginModal} openRegModal={openRegModal} />
      )}
      {isAuth && (
        <MoneyAndNameUserBlock
          closeModal={closeModal}
          exit={exit}
          isActiveModal={isActiveModal}
          showGetCashModal={showGetCashModal}
          showModal={showModal}
          userCash={userCash}
          userProfile={userProfile}
        />
      )}
      <LogoAndNavButtons />
      {showRegModal && (
        <div className={styles.portal}>
          <RegModal showModal={showRegModal} closeModal={closeRegModal} />
        </div>
      )}
      {showLoginModal && (
        <div className={styles.portal}>
          <LoginModal showModal={showLoginModal} closeModal={closeLoginModal} />
        </div>
      )}
    </div>
  )
}
