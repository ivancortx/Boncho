import React from 'react'

import emptyImage from 'assets/images/empty_image.png'
import timer from 'assets/images/timer.png'

import styles from "./Auction.module.scss"
import { NavLink } from 'react-router-dom'
import { AuctionDataType } from '../../interfaces/AddProductPage/addProductPageInterfaces'

type Props = {
  auct: AuctionDataType
}

export const Auction: React.VFC<Props> = ({auct}) => {

  return <div className={styles.item} key={auct.auctionId}>
    <NavLink className={styles.link} to={`/auctions-page/${auct.auctionId}`}>
      <div className={styles.photo}>
        {auct.photoUrlsData[0] ?
          <img src={auct.photoUrlsData[0]} alt={'img'}/>
          :
          <img src={emptyImage} alt={'img'}/>
        }
      </div>
    </NavLink>
    <div className={styles.itemContent}>
      <div className={styles.productName}>{auct.productName}</div>
      <div className={styles.price}>
        <div className={styles.priceName}>Шаг времени:</div>
        <div className={styles.priceData}>
          <img className={styles.timer} src={timer} alt={'timer'}/><span>{auct.stepTime}</span>
        </div>
      </div>
      <div className={styles.price}>
        <div className={styles.priceName}>Текущая цена:</div>
        <div className={styles.priceData}>{auct.startPrice} $</div>
      </div>
      <div className={styles.price}>
        <div className={styles.priceName}>Стоимость просмотра цены:</div>
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