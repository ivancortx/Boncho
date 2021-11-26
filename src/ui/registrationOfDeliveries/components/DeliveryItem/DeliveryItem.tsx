import React from 'react'

import { WaitingDeliveryDataType } from '@/ui/registrationOfDeliveries/interfaces/RegistrationOfDeliveriesPageInterfaces'
import { CheckOutButton } from '@/ui/cart'

import styles from './DeliveryItem.module.scss'

export type Props = {
  item: WaitingDeliveryDataType,
  openModal: (arg: WaitingDeliveryDataType) => void
}

export const DeliveryItem:React.VFC<Props> = ({item, openModal}) => {
  const orderDelivery = () => {
    openModal(item)
  }

  return (
    <div className={styles.container}>
      <div className={styles.photo}>
        <img src={item.productImages[0]} alt="photo"/>
      </div>
      <div className={styles.descriptionContainer}>
        <div className={styles.title}>{item.productName}</div>
        <div className={styles.descriptionParagraph}>Описание товара:</div>
        <div className={styles.description}>{item.productDescription}</div>
        <div className={styles.customerData}>
          <div className={styles.descriptionParagraph}>Данные заказчика:</div>
          <div className={styles.description}>
            <span>Имя: </span>
            {item.userName}
          </div>
          <div className={styles.description}>
            <span>Фамилия: </span>
            {item.surName}
          </div>
          <div className={styles.description}>
            <span>Email: </span>
            {item.email}
          </div>
          <div className={styles.description}>
            <span>Телефон: </span>
            {item.tel}
          </div>
          <div className={styles.description}>
            <span>Область: </span>
            {item.region}
          </div>
          <div className={styles.description}>
            <span>н.п.: </span>
            {item.city}
          </div>
        </div>
      </div>
      <div className={styles.navigate}>
        <CheckOutButton orderDelivery={orderDelivery}/>
      </div>
    </div>
  )
}