import React from 'react'
import { AddProductForm } from '../../form/AddProductForm/AddProductForm'

import styles from './AddProductPage.module.scss'

export const AddProductPage:React.VFC = () => {
  return (
    <div className={styles.container}>
      <AddProductForm/>
    </div>
  )
}