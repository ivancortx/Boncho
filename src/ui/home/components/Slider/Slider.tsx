import React, { useState } from 'react'
import Carousel from 'react-bootstrap/Carousel'

import html from 'assets/images/HomePage/Slider/html.png'
import css from 'assets/images/HomePage/Slider/css.jpeg'
import react from 'assets/images/HomePage/Slider/react.png'

import styles from './Slider.module.scss'
import 'scss/custom.scss'

export const Slider: React.VFC = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex: number) => {
    setIndex(selectedIndex);
  };

  return (
    <div className={styles.container}>
      <Carousel activeIndex={index} onSelect={handleSelect} prevLabel='' nextLabel=''>
        <Carousel.Item interval={2500}>
          <img
            className="d-block w-100"
            src={html}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={2500}>
          <img
            className="d-block w-100"
            src={css}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={2500}>
          <img
            className="d-block w-100"
            src={react}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  )
}