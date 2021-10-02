import React from 'react'

import styles from './AddProductPage.module.scss'
import { AddProductForm } from '../../form/AddProductForm/AddProductForm'


export const AddProductPage:React.VFC = () => {


  return (
    <div className={styles.container}>
      <AddProductForm/>
    </div>
  )
}