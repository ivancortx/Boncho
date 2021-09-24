import React from 'react'
import styles from './ProductsNavigation.module.scss'
import { Link } from 'react-router-dom'
import { Routes } from '../../../navigation/const/routes'


export const ProductsNavigation: React.VFC = () => {

  return (
    <div>
      <div className={styles.navButtonsContainer}>
        <div className={styles.button}>
          <Link to={Routes.Home}>Новые</Link>
        </div>
        <div className={styles.button}>
          <Link to={Routes.Home}>Популярные</Link>
        </div>
        <div className={styles.button}>
          <Link to={Routes.Home}>Скоро заканчиваются</Link>
        </div>
      </div>
    </div>
  )
}