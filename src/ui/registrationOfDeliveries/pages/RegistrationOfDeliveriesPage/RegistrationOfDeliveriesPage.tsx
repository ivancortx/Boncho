import React, { useState } from 'react'

import styles from './RegistrationOfDeliveriesPage.module.scss'
import emptyCart from '@/assets/images/emptyCart.png'
import { useDispatch } from 'react-redux'
import shortid from 'shortid'
import { WaitingDeliveryItem } from '@/ui/cart/components/WaitingDeliveryItem/WaitingDeliveryItem'
import { useRegistrationOfDeliveriesPage } from '@/ui/registrationOfDeliveries/hooks/useRegistrationOfDeliveriesPage'
import { DeliveryItem } from '@/ui/registrationOfDeliveries/components/DeliveryItem/DeliveryItem'
import { WaitingDeliveryDataType } from '@/ui/registrationOfDeliveries/interfaces/RegistrationOfDeliveriesPageInterfaces'
import { RegDeliveryModal } from '@/ui/registrationOfDeliveries/components/RegDeliveryModal/RegDeliveryModal'

export const RegistrationOfDeliveriesPage: React.VFC = () => {
  const dispatch = useDispatch()
  const { allDeliveries } = useRegistrationOfDeliveriesPage()
  const [showModal, setShowModal] = useState<boolean>(false)
  const [productData, setProductData] = useState<WaitingDeliveryDataType>()
  const closeModal = () => setShowModal(false)
  const openModal = (item: WaitingDeliveryDataType) => {
    setShowModal(true)
    setProductData(item)
  }
  // useEffect(() => {
  //   dispatch(fetchWaitingDeliveries())
  // }, [])

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
      {allDeliveries && allDeliveries.length > 0 &&
      <div>
        {allDeliveries.map(itemData => (
          <WaitingDeliveryItem key={shortid.generate()} itemData={itemData}/>
        ))}
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