import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { useCategoriesPage } from '../../hooks/useCategoriesPage'
import { fetchCategories } from '../../'

import styles from './CategoriesPage.module.scss'

export const CategoriesPage: React.VFC = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchCategories())
  }, [])
  const { categoriesData } = useCategoriesPage()

  return (
    <div className={styles.container}>
      {categoriesData !== [] &&
      <div className={styles.categoryes}>
        {categoriesData.map(category => (
          <div className={styles.item} key={category.id}>
                <span>
                  {category.name}
                </span>
          </div>
        ))}
      </div>}
    </div>
  )
}