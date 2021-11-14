import React from 'react'

import login from '@/assets/images/login.png'
import registration from '@/assets/images/registration.png'

import styles from './LoginAndRegistrationBlock.module.scss'

type Props = {
  openLoginModal: () => void
  openRegModal: () => void
}

export const LoginAndRegistrationBlock: React.VFC<Props> = ({openLoginModal, openRegModal}) => {
  return (
      <div className={styles.loginBlock}>
        <>
          <img onClick={openLoginModal} src={login} className={styles.button} alt={'log'}/>
          <img onClick={openRegModal} src={registration} className={styles.button} alt={'reg'}/>
        </>
      </div>
  )
}
