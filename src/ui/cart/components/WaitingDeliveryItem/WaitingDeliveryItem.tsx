import React from 'react'

import { WaitingDeliveryDataType } from '@/ui/cart/interfaces/CartPageInterfaces'

import styles from './WaitingDeliveryItem.module.scss'

export type Props = {
  itemData: WaitingDeliveryDataType,
}

export const WaitingDeliveryItem: React.VFC<Props> = ({ itemData }) => {

  return (
    <div className={styles.container}>
      <div className={styles.photo}>
        <img src={itemData.productImages[0]} alt="photo"/>
      </div>
      <div className={styles.descriptionContainer}>
        <div className={styles.title}>{itemData.productName}</div>
        <div className={styles.descriptionParagraph}>Описание товара:</div>
        <div className={styles.description}>{itemData.productDescription}</div>
        {itemData.deliveryStatusDescription && itemData.deliveryStatus &&
        <div className={styles.deliveryStatusContainer}>
          <div className={styles.deliveryStatus}>
            Статус заказа: {itemData.deliveryStatus}
          </div>
          <div className={styles.deliveryStatus}>
            Сообщение к заказу: {itemData.deliveryStatusDescription}
          </div>
        </div>}
      </div>
      <div className={styles.deliveryStatus}>
        Ожидайте доставки
      </div>
    </div>
  )
}