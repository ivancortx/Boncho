import React, { useEffect, useState } from 'react'
import Carousel from 'react-bootstrap/Carousel'

import prev from '@/assets/images/HomePage/ItemsCarousel/prev.png'
import next from '@/assets/images/HomePage/ItemsCarousel/next.png'

import 'bootstrap/dist/css/bootstrap.css'
import styles from './ItemsCarousel5Position.module.scss'
import '@/scss/custom.scss'
import { useDispatch } from 'react-redux'
import { useAuctionPage } from '../../../auctions/hooks/useAuctionPage'
import { Auction, fetchAuctions } from '../../../auctions'

export const ItemsCarousel5Position: React.VFC = () => {
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
    if (auctionsData.length > 4) {
      for (let i = 0; i <= 4; i++) {
        firstBl.push(auctionsData[i])
      }
    }
    if (auctionsData.length > 9) {
      for (let i = 5; i <= 9; i++) {
        secondBl.push(auctionsData[i])
      }
    }
    if (auctionsData.length >= 14) {
      for (let i = 10; i <= 14; i++) {
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
        {secondBl[0] !== undefined && (
          <Carousel.Item>
            <div className={styles.itemsContainer}>
              {secondBl.map((block) => (
                <Auction auct={block} key={block.auctionId} />
              ))}
            </div>
          </Carousel.Item>
        )}
        <Carousel.Item>
          {thirdBl[0] !== undefined && (
            <div className={styles.itemsContainer}>
              {thirdBl.map((block) => (
                <Auction auct={block} key={block.auctionId} />
              ))}
            </div>
          )}
        </Carousel.Item>
        {/* </div>*/}
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
