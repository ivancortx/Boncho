import React, {useContext} from 'react'
import {Link} from 'react-router-dom'

import {Routes} from '../const/routes'
import {Button} from '../components/Button/Button'

import styles from './NavidationPage.module.scss'

export const NavigationPage: React.VFC = () => {

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
              <Link to={Routes.Home}><Button text={'Аукционы'}/></Link>
            </div>
            <div className={styles.button}>
              <Link to={Routes.Home}><Button text={'Категории'}/></Link>
            </div>
            <div className={styles.button}>
              <Link to={Routes.Home}><Button text={'Новости'}/></Link>
            </div>
          </div>
        </div>
        <div className={styles.loginBlock}>
          <div className={styles.button}>
            <Link to={Routes.Home}><Button text={'Войти'}/></Link>
          </div>
          <div className={styles.button}>
            <Link to={Routes.Home}><Button text={'Регистрация'}/></Link>
          </div>
        </div>
      </div>
  )
}