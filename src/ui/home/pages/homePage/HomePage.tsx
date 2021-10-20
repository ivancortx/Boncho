import React from 'react'

import { Slider } from "../../components/Slider/Slider";
import { ItemsCarousel } from '../../components/ItemsCarousel/ItemsCarousel'
import { ProductsNavigation } from '../../components/ProductsNavigation/ProductsNavigation'

import styles from './HomePage.module.scss'

export const HomePage: React.VFC = () => (
  <div className={styles.container}>
    <Slider/>
    <div className={styles.productNavigation}>
      <ProductsNavigation/>
    </div>

      <ItemsCarousel/>

  </div>
)
