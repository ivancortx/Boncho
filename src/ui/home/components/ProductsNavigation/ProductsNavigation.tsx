import React from 'react'
import { Link } from 'react-router-dom'

import styles from './ProductsNavigation.module.scss'
import { Routes } from 'ui/navigation/const/routes'

export const ProductsNavigation: React.VFC = () => {
  return (
    <div>
      <div className={styles.navButtonsContainer}>
        <div className={styles.button}>
          <div>Новые</div>
        </div>
        <div className={styles.button}>
          <div>Популярные</div>
        </div>
        <div className={styles.button}>
          <div>Скоро заканчиваются</div>
        </div>
        {/*<div className={styles.button}>*/}
        {/*  <Link to={Routes.Home}>Новые</Link>*/}
        {/*</div>*/}
        {/*<div className={styles.button}>*/}
        {/*  <Link to={Routes.Home}>Популярные</Link>*/}
        {/*</div>*/}
        {/*<div className={styles.button}>*/}
        {/*  <Link to={Routes.Home}>Скоро заканчиваются</Link>*/}
        {/*</div>*/}
      </div>
    </div>
  )
}