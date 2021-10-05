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
              <div className={styles.itemContent}>
                <span>{auct.category}</span>
              </div>
              <div className={styles.itemContent}>
                <span>{auct.auctionId}</span>
              </div>
              <div className={styles.itemContent}>
                <span>{auct.description}</span>
              </div>
              <div className={styles.button}>
                <span>Посмотреть</span>
              </div>
            </div>

          ))}
        </>

        }
      </div>

    </div>
  )
}