import React, { useEffect } from 'react'

import styles from './AuctionsPage.module.scss'
import { useDispatch } from 'react-redux'
import { fetchAuctions } from '../../store/action'
import { useAuctionPage } from '../../hooks/useAuctionPage'

export const AuctionsPage: React.VFC = () => {
  const dispatch = useDispatch()
  const { auctionsData } = useAuctionPage()
  useEffect(() => {
    dispatch(fetchAuctions())
  }, [])

  return (
    <div className={styles.container}>
      <div className={styles.itemsContainer}>
        {auctionsData &&
        <>
          {auctionsData.map(auct => (

            <div className={styles.item}>
              <div className={styles.photo}>
                <img src={auct.photoUrlsData[0]}/>
              </div>
              <div className={styles.itemContent}>
                <div className={styles.productName}>{auct.productName}</div>
                <div className={styles.price}>
                  <div className={styles.priceName}>Шаг времени:</div>
                  <div className={styles.priceData}><span>{auct.stepTime}</span></div>
                </div>
                <div className={styles.price}>
                  <div className={styles.priceName}>Текущая цена:</div>
                  <div className={styles.priceData}>${auct.startPrice}</div>
                </div>
                <div className={styles.price}>
                  <div className={styles.priceName}>Стоимость просмотра цены:</div>
                  <div className={styles.priceData}><span>${auct.seePrice}</span></div>
                </div>
              </div>
              <div className={styles.button}>
                <span>Посмотреть цену</span>
              </div>
            </div>

          ))}
        </>

        }
      </div>

    </div>
  )
}