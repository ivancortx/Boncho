import React from 'react'
import { Link } from 'react-router-dom'

import { Routes } from '../../const/routes'
import userIcon from 'assets/images/userIcon.png'
import salesIcon from 'assets/images/salesIcon.png'
import outIcon from 'assets/images/outIcon.png'

import styles from './DropDownSettingsList.module.scss'

type Props = {
  exit: () => void
  hideSettingsList: () => void
}

export const DropDownSettingsList: React.VFC<Props> = ({ exit, hideSettingsList }) => {
  const clearLocalStorage = () => {
    localStorage.clear()
  }
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.icon}>
          <img src={userIcon} alt="u"/>
        </div>
        <div onClick={hideSettingsList} className={styles.link}>
          <Link to={Routes.ProfilePage}>Мой профиль</Link>
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.icon}>
          <img src={salesIcon} alt="u"/>
        </div>
        <div className={styles.link}>
          Покупки
        </div>
      </div>
      <div onClick={() => {
        exit();
        hideSettingsList();
      }} className={styles.item}>
        <div className={styles.icon}>
          <img src={outIcon} alt="u"/>
        </div>
        <div onClick={clearLocalStorage} className={styles.link}>
          Выйти
        </div>
      </div>
    </div>
  )
}