import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { useCategoriesPage } from '../../hooks/useCategoriesPage'
import { fetchCategories } from '../../'

import styles from './CategoriesPage.module.scss'
import { fetchProductsByCategory } from '../../store/action'
import { Products } from '../../components/Products/Products'

export const CategoriesPage: React.VFC = () => {
  const { categoriesData } = useCategoriesPage()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchCategories())
  }, [])

  const fetchProducts = (category: string) => {
    dispatch(fetchProductsByCategory(category))
  }

  return (
    <div className={styles.container}>
      <div>
        {categoriesData !== [] &&
        <div className={styles.categoryes}>
          <div className={styles.item} onClick={() => fetchProducts('all')}>
                <span>
                 Все
                </span>
          </div>
          {categoriesData.map(category => (
            <div className={styles.item} key={category.id} onClick={() => fetchProducts(category.name)}>
                <span>
                  {category.name}
                </span>
            </div>
          ))}
        </div>}
      </div>
      <div>
        <Products/>
      </div>
    </div>
  )
}