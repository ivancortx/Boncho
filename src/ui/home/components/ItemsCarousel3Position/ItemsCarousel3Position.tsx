import React, { useEffect, useState } from 'react'
import Carousel from 'react-bootstrap/Carousel'

import prev from 'assets/images/HomePage/ItemsCarousel/prev.png'
import next from 'assets/images/HomePage/ItemsCarousel/next.png'

import styles from "./ItemsCarousel3Position.module.scss"
import 'scss/custom.scss'
import { useDispatch } from 'react-redux'
import { useAuctionPage } from '../../../auctions/hooks/useAuctionPage'
import { Auction, fetchAuctions } from '../../../auctions'

export const ItemsCarousel3Position: React.VFC = () => {
  const dispatch = useDispatch()
  const { auctionsData } = useAuctionPage()
  useEffect(() => {
    dispatch(fetchAuctions())
  }, [])
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex: number) => {
    setIndex(selectedIndex);
  }

  const prevSlide = () => {
    if (index > 0 || index <= 2) setIndex(index - 1)
    if (index === 0) setIndex(2)
  }

  const nextSlide = () => {
    if (index >= 0 || index < 2) setIndex(index + 1)
    if (index === 2) setIndex(0)
  }

  const firstBl = []
  const secondBl = []
  const thirdBl = []
  if (auctionsData.length > 0) {
    if(auctionsData.length > 2) {
      for(let i = 0; i <= 2; i++) {
        firstBl.push(auctionsData[i])
      }
    }
    if (auctionsData.length > 4) {
      for(let i = 3; i <= 5; i++) {
        secondBl.push(auctionsData[i])
      }
    }
    if(auctionsData.length >= 8) {
      for(let i = 6; i <= 8; i++) {
        thirdBl.push(auctionsData[i])
      }
    }
  }

  return (
    <div className={styles.container}>
      <Carousel activeIndex={index} onSelect={handleSelect} prevLabel='' nextLabel=''
                interval={null} indicators={false} controls={false}>
          <Carousel.Item>
            <div className={styles.itemsContainer}>
              {firstBl.map(block => (
                <Auction auct={block}/>
              ))
              }
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className={styles.itemsContainer}>
              {secondBl.map(block => (
                <Auction auct={block}/>
              ))
              }
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className={styles.itemsContainer}>
              {thirdBl.map(block => (
                <Auction auct={block}/>
              ))
              }
            </div>
          </Carousel.Item>
      </Carousel>
      <div className={styles.prevButton} onClick={prevSlide}>
        <img src={prev} alt="prev"/>
      </div>
      <div className={styles.nextButton} onClick={nextSlide}>
        <img src={next} alt="next"/>
      </div>
    </div>
  )
}