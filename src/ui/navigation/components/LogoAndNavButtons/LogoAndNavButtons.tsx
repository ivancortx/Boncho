import React from 'react'
import {Link} from 'react-router-dom'

import logo from 'assets/images/HomePage/Logo.svg'
import {Routes} from '../../const/routes'
import {Button} from '../Button/Button'

import styles from './LogoAndNavButtons.module.scss'

export const LogoAndNavButtons: React.VFC = () => (
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
)