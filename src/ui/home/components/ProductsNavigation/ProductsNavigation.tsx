import React from 'react'

import styles from './ProductsNavigation.module.scss'

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
        {/* <div className={styles.button}>*/}
        {/*  <Link to={Routes.Home}>Новые</Link>*/}
        {/* </div>*/}
        {/* <div className={styles.button}>*/}
        {/*  <Link to={Routes.Home}>Популярные</Link>*/}
        {/* </div>*/}
        {/* <div className={styles.button}>*/}
        {/*  <Link to={Routes.Home}>Скоро заканчиваются</Link>*/}
        {/* </div>*/}
      </div>
    </div>
  )
}
