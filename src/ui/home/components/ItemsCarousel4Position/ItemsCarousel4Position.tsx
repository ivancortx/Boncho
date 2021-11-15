import React, { useEffect, useState } from 'react'
import Carousel from 'react-bootstrap/Carousel'

import prev from '@/assets/images/HomePage/ItemsCarousel/prev.png'
import next from '@/assets/images/HomePage/ItemsCarousel/next.png'

import styles from './ItemsCarousel4Position.module.scss'
import '@/scss/custom.scss'
import { useDispatch } from 'react-redux'
import { useAuctionPage } from '../../../auctions/hooks/useAuctionPage'
import { Auction, fetchAuctions } from '../../../auctions'

export const ItemsCarousel4Position: React.VFC = () => {
  const dispatch = useDispatch(),
    { auctionsData } = useAuctionPage()
  useEffect(() => {
    dispatch(fetchAuctions())
  }, [])
  const [index, setIndex] = useState(0),
    handleSelect = (selectedIndex: number) => {
      setIndex(selectedIndex)
    },
    prevSlide = () => {
      if (index > 0 || index <= 2) {
        setIndex(index - 1)
      }
      if (index === 0) {
        setIndex(2)
      }
    },
    nextSlide = () => {
      if (index >= 0 || index < 2) {
        setIndex(index + 1)
      }
      if (index === 2) {
        setIndex(0)
      }
    },
    firstBl = [],
    secondBl = [],
    thirdBl = []
  if (auctionsData.length > 0) {
    if (auctionsData.length > 3) {
      for (let i = 0; i <= 3; i++) {
        firstBl.push(auctionsData[i])
      }
    }
    if (auctionsData.length > 7) {
      for (let i = 4; i <= 7; i++) {
        secondBl.push(auctionsData[i])
      }
    }
    if (auctionsData.length >= 14) {
      for (let i = 8; i <= 11; i++) {
        thirdBl.push(auctionsData[i])
      }
    }
  }

  return (
    <div className={styles.container}>
      <Carousel
        activeIndex={index}
        onSelect={handleSelect}
        prevLabel=""
        nextLabel=""
        interval={null}
        indicators={false}
        controls={false}
      >
        <Carousel.Item>
          <div className={styles.itemsContainer}>
            {firstBl.map((block) => (
              <Auction auct={block} key={block.auctionId} />
            ))}
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className={styles.itemsContainer}>
            {secondBl.map((block) => (
              <Auction auct={block} key={block.auctionId} />
            ))}
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className={styles.itemsContainer}>
            {thirdBl.map((block) => (
              <Auction auct={block} key={block.auctionId} />
            ))}
          </div>
        </Carousel.Item>
      </Carousel>
      <div className={styles.prevButton} onClick={prevSlide}>
        <img src={prev} alt="prev" />
      </div>
      <div className={styles.nextButton} onClick={nextSlide}>
        <img src={next} alt="next" />
      </div>
    </div>
  )
}
