import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { fetchAuctions } from '../../store/action'
import { useAuctionPage } from '../../hooks/useAuctionPage'
import { Auction } from '../../components/Auction/Auction'

import styles from './AuctionsPage.module.scss'
import shortid from 'shortid'

export const AuctionsPage: React.VFC = () => {
  const dispatch = useDispatch(),
    { auctionsData } = useAuctionPage()
  useEffect(() => {
    dispatch(fetchAuctions())
  }, [])
  return (
    <div className={styles.container}>
      <div className={styles.itemsContainer}>
        {auctionsData && (
          <>
            {auctionsData.map((auct) => (
              <div key={shortid.generate()}>
                <Auction auct={auct} />
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  )
}
