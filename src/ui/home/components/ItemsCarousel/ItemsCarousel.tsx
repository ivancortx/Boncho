import React, {useState} from 'react'
import Carousel from 'react-bootstrap/Carousel'

import prev from 'assets/images/HomePage/ItemsCarousel/prev.png'
import next from 'assets/images/HomePage/ItemsCarousel/next.png'

import styles from './ItemsCarousel.module.scss'
import 'scss/custom.scss'

export const ItemsCarousel: React.VFC = () => {
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

  const firstBl = [1, 2, 3, 4, 5]
  const secondBl = [6, 7, 8, 9, 10]
  const thirdBl = [11, 12, 13, 14, 15]

  return (
      <div className={styles.container}>
        <Carousel activeIndex={index} onSelect={handleSelect} prevLabel='' nextLabel=''
                  interval={null} indicators={false} controls={false}>
          <Carousel.Item>
            <div className={styles.itemsContainer}>
              {firstBl.map(block => (
                  <div className={styles.item}>
                    <div className={styles.itemContent}>
                      <span>{block}</span>
                    </div>
                    <div className={styles.button}>
                      <span>Посмотреть</span>
                    </div>
                  </div>
              ))
              }
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className={styles.itemsContainer}>
              {secondBl.map(block => (
                  <div className={styles.item}>
                    <div className={styles.itemContent}>
                      <span>{block}</span>
                    </div>
                    <div className={styles.button}>
                      <span>Посмотреть</span>
                    </div>
                  </div>
              ))
              }
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className={styles.itemsContainer}>
              {thirdBl.map(block => (
                  <div className={styles.item}>
                    <div className={styles.itemContent}>
                      <span>{block}</span>
                    </div>
                    <div className={styles.button}>
                      <span>Посмотреть</span>
                    </div>
                  </div>
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