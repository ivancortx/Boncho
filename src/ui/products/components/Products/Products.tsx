import React from 'react'
import {useCategoriesPage} from '../../hooks/useCategoriesPage'

import timer from 'assets/images/timer.png'
import {NavLink} from 'react-router-dom'
import sold_out from 'assets/images/sold_out.png'

import styles from './Products.module.scss'

export const Products: React.VFC = () => {
  const { productsData } = useCategoriesPage()

  return (
    <>
      {productsData.length > 0 ?
        <div className={styles.itemContainer}>
          {productsData.map(product => (
            <NavLink className={styles.link} to={`/auctions-page/${product.auctionId}`}>
              <div className={styles.item}>
                <div className={styles.photo}>
                  {!product.isInStock && <img src={sold_out} className={styles.isInStock} alt={'sold out'}/>}
                  <img className={!product.isInStock ? `${styles.image} ${styles.soldOut}` : styles.image}
                       src={product.photoUrlsData[0]} alt={product.productName}/>
                </div>
                <div className={styles.itemContent}>
                  <div className={styles.productName}>{product.productName}</div>
                  <div className={styles.price}>
                    <div className={styles.priceName}>Шаг времени:</div>
                    <div className={styles.priceData}>
                      <img className={styles.timer} src={timer} alt={'timer'}/><span>{product.stepTime} с</span>
                    </div>
                  </div>
                  <div className={styles.price}>
                    <div className={styles.priceName}>Текущая цена:</div>
                    <div className={styles.priceData}>{product.startPrice} $</div>
                  </div>
                  <div className={styles.price}>
                    <div className={styles.priceName}>Стоимость просм. цены:</div>
                    <div className={styles.priceData}><span>{product.seePrice} $</span></div>
                  </div>
                </div>
              </div>
            </NavLink>

          ))
          }
        </div>
        :
        <div>
        </div>}
    </>
  )
}