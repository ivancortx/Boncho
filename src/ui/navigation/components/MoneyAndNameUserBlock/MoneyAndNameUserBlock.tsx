import React from 'react'

import cash from '@/assets/images/purse.png'
import { GetCashModal } from '../GetCashModal/GetCashModal'
import configure from '@/assets/images/configure.png'
import deliveryIcon from '@/assets/images/deliveryIcon.png'
import { DropDownSettingsList } from '../DropDownSettingsList/DropDownSettingsList'
import { ProfileDataType } from '@/ui/profile/interfaces/PrfilePageInterfaces'

import styles from './MoneyAndNameUserBlock.module.scss'
import { CartButton } from '@/ui/navigation/components/CartButton/CartButton'
import { Link } from 'react-router-dom'
import { Routes } from '@/ui/navigation/const/routes'

type Props = {
  showGetCashModal: () => void;
  userCash: number;
  userProfile: ProfileDataType[];
  showModal: () => void;
  closeModal: () => void;
  isActiveModal: boolean;
  exit: () => void;
}

export const MoneyAndNameUserBlock: React.VFC<Props> = ({ ...props }) => {
  const { showGetCashModal, userCash, userProfile, showModal, isActiveModal, closeModal, exit } =
    props
  return (
    <div className={styles.exitBlock}>
      <div className={styles.deliveryIcon}>
        <Link to={Routes.RegistrationOfDeliveriesPage}>
          <img src={deliveryIcon} alt={'delivery'}/>
        </Link>
      </div>
      <CartButton/>
      <div onClick={(e) => e.stopPropagation()} className={styles.moneyBlock}>
        <div onClick={showGetCashModal} className={styles.money}>
          <img src={cash} alt="$"/>
          {userCash === 0 ? <>{localStorage.getItem('userCash')} $</> : <>{userCash} $</>}
        </div>
        <div>
          <GetCashModal/>
        </div>
      </div>
      <div>
        <div className={styles.exitButtonContainer}>
          {userProfile[0] !== undefined ? (
            <div>
              {userProfile[0].login && (
                <div className={styles.configureIconContainer}>
                  <span className={styles.userName}>{`${userProfile[0].login}`}</span>
                  <div
                    onClick={(e) => {
                      e.stopPropagation()
                    }}
                  >
                    <img
                      onClick={showModal}
                      className={styles.configureIcon}
                      src={configure}
                      alt="c"
                    />
                    <div className={isActiveModal ? styles.configureList : styles.hide}>
                      <DropDownSettingsList exit={exit} hideSettingsList={closeModal}/>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className={styles.hiddenExit} onClick={exit}>
              x
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
