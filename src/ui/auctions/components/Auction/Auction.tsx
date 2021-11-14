import React from 'react'
import { NavLink } from 'react-router-dom'

import emptyImage from '@/assets/images/empty_image.png'
import timer from '@/assets/images/timer.png'
import sold_out from '@/assets/images/sold_out.png'
import { AuctionDataType } from '../../interfaces/AddProductPage/addProductPageInterfaces'

import styles from "./Auction.module.scss"

type Props = {
  auct: AuctionDataType
}

export const Auction: React.VFC<Props> = ({ auct }) => {
  return <div className={styles.item} key={auct.auctionId}>
    <NavLink className={styles.photo} to={`/auctions-page/${auct.auctionId}`}>
      <div className={styles.photo}>
        {!auct.isInStock && <img src={sold_out} className={styles.isInStock} alt={'sold out'}/>}
        {auct.photoUrlsData[0] ?
          <img className={!auct.isInStock ? `${styles.image} ${styles.soldOut}` : styles.image}
               src={auct.photoUrlsData[0]} alt={'img'}/>
          :
          <img className={!auct.isInStock ? `${styles.image} ${styles.soldOut}` : styles.image}
               src={emptyImage} alt={'img'}/>
        }
      </div>
    </NavLink>
    <div className={styles.itemContent}>
      <div className={styles.productName}>{auct.productName}</div>
      <div className={styles.price}>
        <div className={styles.priceName}>Шаг времени:</div>
        <div className={styles.priceData}>
          <img className={styles.timer} src={timer} alt={'timer'}/><span>{auct.stepTime} с</span>
        </div>
      </div>
      <div className={styles.price}>
        <div className={styles.priceName}>Текущая цена:</div>
        <div className={styles.priceData}>{auct.startPrice} $</div>
      </div>
      <div className={styles.price}>
        <div className={styles.priceName}>Стоимость просм. цены:</div>
        <div className={styles.priceData}><span>{auct.seePrice} $</span></div>
      </div>
    </div>
    <NavLink className={styles.link} to={`/auctions-page/${auct.auctionId}`}>
      <div className={styles.button}>
        <span>Посмотреть товар</span>
      </div>
    </NavLink>
  </div>
}