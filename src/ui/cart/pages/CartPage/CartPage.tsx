import React from 'react'

import styles from './CartPage.module.scss'
import { useCartPage } from '@/ui/cart/hooks/useCartPage'
import { CartItem } from '@/ui/cart/components/CartItem/CartItem'

export const CartPage:React.VFC = () => {
  const { auctionsData } = useCartPage()

  return (
    <div className={styles.container}>
      <div className={styles.title}>Корзина</div>
      <div className={styles.itemsContainer}>
        {auctionsData?.map(item => (
          <CartItem item={item}/>
        ))}
      </div>
    </div>
  )
}