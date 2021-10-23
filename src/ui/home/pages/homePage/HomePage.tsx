import React from 'react'

import { Slider } from "../../components/Slider/Slider";
import { ItemsCarousel5Position } from '../../components/ItemsCarousel5Position/ItemsCarousel5Position'
import { ProductsNavigation } from '../../components/ProductsNavigation/ProductsNavigation'
import { ItemsCarousel4Position } from '../../components/ItemsCarousel4Position/ItemsCarousel4Position'
import { ItemsCarousel3Position } from '../../components/ItemsCarousel3Position/ItemsCarousel3Position'

import styles from './HomePage.module.scss'

export const HomePage: React.VFC = () => (
  <div className={styles.container}>
    <Slider/>
    <div className={styles.productNavigation}>
      <ProductsNavigation/>
    </div>

    <div className={styles.itemCarousel5Position}>
      <ItemsCarousel5Position/>
    </div>
    <div className={styles.itemCarousel4Position}>
      <ItemsCarousel4Position/>
    </div>
    <div className={styles.itemCarousel3Position}>
      <ItemsCarousel3Position/>
    </div>
  </div>
)
