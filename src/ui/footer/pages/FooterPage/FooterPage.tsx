import React from 'react'

import styles from './FooterPage.module.scss'

export const FooterPage: React.VFC = () => {
  return (
      <div className={styles.container}>
        <div className={styles.contactsBlock}>
          <div className={styles.contactsItem}>
            <a href="mailto:test@gmail.com">test@gmail.com</a>
          </div>
        </div>
        <div className={styles.copyright}>
          &copy; Place
        </div>
      </div>
  )
}