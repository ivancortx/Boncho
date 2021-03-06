import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import shortid from 'shortid'

import { useRegistrationOfDeliveriesPage } from '@/ui/registrationOfDeliveries/hooks/useRegistrationOfDeliveriesPage'
import { DeliveryItem } from '@/ui/registrationOfDeliveries/components/DeliveryItem/DeliveryItem'
import { WaitingDeliveryDataType } from '@/ui/registrationOfDeliveries/interfaces/RegistrationOfDeliveriesPageInterfaces'
import { RegDeliveryModal } from '@/ui/registrationOfDeliveries/components/RegDeliveryModal/RegDeliveryModal'
import emptyCart from '@/assets/images/emptyCart.png'

import styles from './RegistrationOfDeliveriesPage.module.scss'

export const RegistrationOfDeliveriesPage: React.VFC = () => {
  const { allDeliveries } = useRegistrationOfDeliveriesPage()
  const [showModal, setShowModal] = useState<boolean>(false)
  const [productData, setProductData] = useState<WaitingDeliveryDataType>()
  const closeModal = () => setShowModal(false)
  const openModal = (item: WaitingDeliveryDataType) => {
    setShowModal(true)
    setProductData(item)
  }

  return (
    <div className={styles.container}>
      <div className={styles.title}>Товары ожидающие оформления</div>
      {allDeliveries ? <div>
          {
            allDeliveries?.map(item => (
              <DeliveryItem key={shortid.generate()} item={item} openModal={openModal}/>
            ))}
        </div>
        :
        <div>
          <div className={styles.emptyCartImage}>
            <img src={emptyCart} alt={'cart'}/>
          </div>
          <div className={styles.emptyCartText}>
            Товаров для оформления нет!
          </div>
        </div>
      }
      {showModal && productData &&
      <div>
        <RegDeliveryModal closeModal={closeModal} showModal={showModal} productData={productData}/>
      </div>
      }
    </div>
  )
}