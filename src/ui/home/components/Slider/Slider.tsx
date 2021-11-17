import React, { useState } from 'react'
import Carousel from 'react-bootstrap/Carousel'

import slide1 from '@/assets/images/HomePage/Slider/slide1.jpg'
import slide2 from '@/assets/images/HomePage/Slider/slide2.jpg'
import slide3 from '@/assets/images/HomePage/Slider/slide3.jpg'

import styles from './Slider.module.scss'
import '@/scss/custom.scss'
import 'bootstrap/dist/css/bootstrap.css'

export const Slider: React.VFC = () => {
  const [index, setIndex] = useState(0),
    handleSelect = (selectedIndex: number) => {
      setIndex(selectedIndex)
    }

  return (
    <div className={styles.container}>
      <Carousel activeIndex={index} onSelect={handleSelect} prevLabel="" nextLabel="">
        <Carousel.Item interval={2500}>
          <img className="d-block w-100" src={slide1} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item interval={2500}>
          <img className="d-block w-100" src={slide2} alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item interval={2500}>
          <img className="d-block w-100" src={slide3} alt="Third slide" />
        </Carousel.Item>
      </Carousel>
    </div>
  )
}
