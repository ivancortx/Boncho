import React from 'react'

import styles from './WaitingDeliveryItem.module.scss'
import { WaitingDeliveryDataType } from '@/ui/cart/interfaces/CartPageInterfaces'

export type Props = {
  itemData: WaitingDeliveryDataType,
}

export const WaitingDeliveryItem:React.VFC<Props> = ({itemData}) => {

  return (
    <div className={styles.container}>
      <div className={styles.photo}>
        <img src={itemData.productImages[0]} alt="photo"/>
      </div>
      <div className={styles.descriptionContainer}>
        <div className={styles.title}>{itemData.productName}</div>
        <div className={styles.descriptionParagraph}>Описание товара:</div>
        <div className={styles.description}>{itemData.productDescription}</div>
      </div>
      <div className={styles.deliveryStatus}>
        Ожидайте доставки
      </div>
    </div>
  )
}