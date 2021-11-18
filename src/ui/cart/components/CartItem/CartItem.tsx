import React from 'react'

import styles from './CartItem.module.scss'
import { AuctionDataType } from '@/ui/auctions'
import CheckOutButton from '@/ui/cart/components/CheckOutButton/CheckOutButton'

export type Props = {
  item: AuctionDataType,
  openModal: (arg: AuctionDataType) => void
}

export const CartItem:React.VFC<Props> = ({item, openModal}) => {
  const orderDelivery = () => {
    openModal(item)
  }

  return (
    <div className={styles.container}>
      <div className={styles.photo}>
        <img src={item.photoUrlsData[0]} alt="photo"/>
      </div>
      <div className={styles.descriptionContainer}>
        <div className={styles.title}>{item.productName}</div>
        <div className={styles.descriptionParagraph}>Описание товара:</div>
        <div className={styles.description}>{item.description}</div>
      </div>
      <div onClick={orderDelivery} className={styles.navigate}>
        <CheckOutButton />
      </div>
    </div>
  )
}