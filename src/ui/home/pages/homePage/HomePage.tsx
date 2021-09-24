import React from 'react'

import styles from './HomePage.module.scss'
import { Slider } from "../../components/Slider/Slider";
import { ItemsCarousel } from '../../components/ItemsCarousel/ItemsCarousel'
import { ProductsNavigation } from '../../components/ProductsNavigation/ProductsNavigation'

export const HomePage: React.VFC = () => (
  <div className={styles.container}>
    <Slider/>
    <ProductsNavigation/>
    <ItemsCarousel/>
  </div>
)
