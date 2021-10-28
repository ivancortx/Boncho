import React from 'react'

import styles from './LoginAndRegistrationBlock.module.scss'

type Props = {
  openLoginModal: () => void
  openRegModal: () => void
}

export const LoginAndRegistrationBlock: React.VFC<Props> = ({openLoginModal, openRegModal}) => {
  return (
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
  )
}
