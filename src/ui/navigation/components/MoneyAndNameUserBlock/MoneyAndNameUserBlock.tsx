import React from 'react'

import cash from 'assets/images/purse.png'
import { GetCashModal } from '../GetCashModal/GetCashModal'
import configure from 'assets/images/configure.png'
import { DropDownSettingsList } from '../DropDownSettingsList/DropDownSettingsList'
import { ProfileDataType } from 'ui/profile/interfaces/PrfilePageInterfaces'

import styles from './MoneyAndNameUserBlock.module.scss'
import { log } from 'util'

type Props = {
  showGetCashModal: () => void
  userCash: number
  userProfile: ProfileDataType[]
  showModal: () => void
  closeModal: () => void
  isActiveModal: boolean
  exit: () => void
}

export const MoneyAndNameUserBlock: React.VFC<Props> = ({ ...props }) => {
  const { showGetCashModal, userCash, userProfile, showModal, isActiveModal, closeModal, exit } = props
  return (
    <div className={styles.exitBlock}>
      <div onClick={(e) => e.stopPropagation()} className={styles.moneyBlock}>
        <div onClick={showGetCashModal} className={styles.money}>
          <img src={cash} alt="$"/>
          {userCash === 0 ?
            <>
              {localStorage.getItem('userCash')} $
            </>
            :
            <>
              {userCash} $
            </>
          }
        </div>
        <div className={styles.cashContainer}>
          <GetCashModal />
        </div>
      </div>
      <div>
        <div className={styles.exitButtonContainer}>
          {userProfile[0] !== undefined ? <div className={styles.userNameBlock}>

              {userProfile[0].login && <div className={styles.configureIconContainer}>
                <span className={styles.userName}>{`${userProfile[0].login}`}</span>
                <div onClick={(e) => {
                  e.stopPropagation()
                }}>
                  <img onClick={showModal} className={styles.configureIcon} src={configure} alt="c"/>
                  <div className={isActiveModal ? styles.configureList : styles.hide}>
                    <DropDownSettingsList exit={exit}
                                          hideSettingsList={closeModal}/>
                  </div>
                </div>
              </div>}
            </div>
            : <div className='mt-4' onClick={exit}>Выход</div>}
        </div>
      </div>
    </div>
  )
}
