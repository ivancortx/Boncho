import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Cookies from 'js-cookie'
import { useDispatch } from 'react-redux'

import { Routes } from '../const/routes'
import { Button } from '../components/Button/Button'
import { RegModal } from '../components/RegModal/RegModal'
import { LoginModal } from '../components/LoginModal/LoginModal'
import firebaseApp from 'firebase/firebase'
import { AuthUpdateContext, IsAuthContext } from 'context/AuthContext'
import { useNavigationPage } from '../hooks/useNavigationPage/useNavigationPage'
import { useProfilePage } from 'ui/profile/hooks/useProfilePage'
import { fetchProfileData } from 'ui/profile/store/action'
import { DropDownSettingsList } from '../components/DropDownSettingsList/DropDownSettingsList'
import { ModalCloseContext, ModalShowContext, ModalStatusContext } from 'context/SettingsUserModalContext'
import logo from 'assets/images/HomePage/Logo.svg'
import configure from 'assets/images/configure.png'
import cash from 'assets/images/purse.png'

import styles from './NavidationPage.module.scss'
import { GetCashModal } from '../components/GetCashModal/GetCashModal'
import { GetCashModalCloseContext, GetCashModalShowContext } from 'context/GetCashModalContext'

export const NavigationPage: React.VFC = () => {
  const dispatch = useDispatch()
  const isAuth = useContext(IsAuthContext)
  const setIsAuth = useContext(AuthUpdateContext)
  const closeModal = useContext<() => void>(ModalCloseContext)
  const showModal = useContext<() => void>(ModalShowContext)
  const isActiveModal = useContext<boolean>(ModalStatusContext)
  const showGetCashModal = useContext(GetCashModalShowContext)
  const closeGetCashModal = useContext(GetCashModalCloseContext)

  const [showRegModal, setShowRegModall] = useState<boolean>(false)
  const [showLoginModal, setShowLoginModall] = useState<boolean>(false)
  const { userData } = useNavigationPage()
  const { userProfile } = useProfilePage()

  useEffect(() => {
    if (userData[0] !== undefined) {
      dispatch(fetchProfileData(userData[0].email))
    }
  }, [userData])

  const openRegModal = () => {
    setShowRegModall(true)
  }
  const openLoginModal = () => {
    setShowLoginModall(true)
  }

  const closeRegModal = () => {
    setShowRegModall(false)
  }
  const closeLoginModal = () => {
    setShowLoginModall(false)
  }

  const exit = () => {
    firebaseApp.auth().signOut()
    Cookies.remove('token')
    if (setIsAuth) setIsAuth(false)
  }

  firebaseApp.auth().onAuthStateChanged(user => {
    if (user) {
    } else console.log('out')
  })

  return (
    <div onClick={() => {
      closeGetCashModal()
      closeModal()
    }} className={styles.navContainer}>
      {!isAuth &&
      <div className={styles.loginBlock}>
        <>
          <div onClick={openLoginModal} className={styles.enterButton}>
            Вход
          </div>
          <div onClick={openRegModal} className={styles.enterButton}>
            Регистрация
          </div>
        </>
      </div>
      }

      {isAuth &&
      <div className={styles.exitBlock}>
        <div onClick={(e) => e.stopPropagation()} className={styles.moneyBlock}>
          <div onClick={showGetCashModal} className={styles.money}>
            <img src={cash} alt="$"/>
            1000 $
          </div>
          <div  className={styles.cashContainer}>
            <GetCashModal/>
          </div>
        </div>
        <div>
          <div className={styles.exitButtonContainer}>
            {userProfile[0] ? <div className={styles.userNameBlock}>

                {userProfile[0].login && <div className={styles.configureIconContainer}>
                  <span className={styles.userName}>{`${userProfile[0].login}`}</span>
                  <div onClick={(e) => {
                    e.stopPropagation()
                  }}>
                    <img onClick={showModal} className={styles.configureIcon} src={configure} alt="c"/>
                    <div className={isActiveModal ? styles.configureList : styles.hide}>
                      <DropDownSettingsList exit={exit}
                                            hideSettingsList={closeModal}/>
                    </div>
                  </div>
                </div>}
              </div>
              : <div></div>}
          </div>
        </div>
      </div>
      }

      <div className={styles.logoAndNavButtons}>
        <img className={styles.logo} src={logo} alt={'logo'}/>
        <div className={styles.navButtonsContainer}>
          <div className={styles.button}>
            <Link to={Routes.Home}><Button text={'Главная'}/></Link>
          </div>
          <div className={styles.button}>
            <Link to={Routes.AuctionsPage}><Button text={'Аукционы'}/></Link>
          </div>
          <div className={styles.button}>
            <Link to={Routes.Products}><Button text={'Категории'}/></Link>
          </div>
          <div className={styles.button}>
            <Link to={Routes.Home}><Button text={'Новости'}/></Link>
          </div>
          <div className={styles.button}>
            <Link to={Routes.AddProductPage}><Button text={'Добавить аукцион'}/></Link>
          </div>
        </div>
      </div>

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