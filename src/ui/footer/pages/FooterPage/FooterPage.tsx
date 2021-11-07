import React, {useContext} from 'react'

import styles from './FooterPage.module.scss'
import {GetCashModalCloseContext} from "context/GetCashModalContext";

export const FooterPage: React.VFC = () => {
  const closeModal = useContext(GetCashModalCloseContext)

  return (
      <div onClick={closeModal} className={styles.container}>
        <div className={styles.copyright}>
          &copy; Boncho
        </div>
      </div>
  )
}