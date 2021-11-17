import React from 'react'

import styles from './CartItem.module.scss'
import { AuctionDataType } from '@/ui/auctions'

export type Props = {
  item: AuctionDataType
}

export const CartItem:React.VFC<Props> = ({item}) => {

  return (
    <div className={styles.container}>
      {item.productName}
    </div>
  )
}