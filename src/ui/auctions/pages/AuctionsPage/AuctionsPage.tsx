import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { fetchAuctions } from '../../store/action'
import { useAuctionPage } from '../../hooks/useAuctionPage'
import { Auction } from '../../components/Auction/Auction'

import styles from './AuctionsPage.module.scss'

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
              <Auction auct={auct} key={auct.auctionId}/>
            </div>
          ))}
        </>
        }
      </div>
    </div>
  )
}