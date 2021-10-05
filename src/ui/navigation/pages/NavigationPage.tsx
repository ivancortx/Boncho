import React, {useState} from 'react'
import {Link} from 'react-router-dom'

import {Routes} from '../const/routes'
import {Button} from '../components/Button/Button'

import styles from './NavidationPage.module.scss'
import {RegModal} from '../components/RegModal/RegModal'
import {LoginModal} from "../components/LoginModal/LoginModal";
import firebaseApp from '../../../firebase/firebase'
import Cookies from 'js-cookie'


export const NavigationPage: React.VFC = () => {

  const [showRegModal, setShowRegModall] = useState<boolean>(false)
  const [showLoginModal, setShowLoginModall] = useState<boolean>(false)
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
  }

  firebaseApp.auth().onAuthStateChanged(user => {
    if (user) {
      console.log('login')
    } else console.log('out')
  })

  return (
      <div className={styles.navContainer}>
        <div className={styles.logoAndNavButtons}>
          <div className={styles.logoContainer}>
            Logo
          </div>
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
              <Link to={Routes.AddProductPage}><Button text={'Добавить_аукц'}/></Link>
            </div>
          </div>
        </div>

        <div className={styles.loginBlock}>
          <div onClick={openLoginModal} className={styles.button}>
            <Button text={'Вход'}/>
          </div>
          <div onClick={openRegModal} className={styles.button}>
            <Button text={'Регистрация'}/>
          </div>
          <div onClick={exit} className={styles.button}>
            <Button text={'Вийти'}/>
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